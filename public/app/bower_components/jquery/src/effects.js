define( [
	"./core",
	"./var/document",
	"./var/rcssNum",
	"./var/rnothtmlwhite",
	"./css/var/cssExpand",
	"./css/var/isHiddenWithinTree",
	"./css/var/swap",
	"./css/adjustCSS",
	"./data/var/dataPriv",
	"./css/showHide",

	"./core/init",
	"./queue",
	"./deferred",
	"./traversing",
	"./manipulation",
	"./css",
	"./effects/Tween"
], function( jQuery, document, rcssNum, rnothtmlwhite, cssExpand, isHiddenWithinTree, swap,
	adjustCSS, dataPriv, showHide ) {

"use strict";

var
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function raf() {
	if ( timerId ) {
		window.requestAnimationFrame( raf );
		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 13
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = anioation.tweuîs¾length;
*I‰	fïs`( ? index < length; iîde|++ ) 				ynématioî.uweeîs["indmø!].run* pescg~t )?
	©*		deferråd/notifyWiôh( elem, [ anima|ion, percent,1òemaini.g ] )»
-
		Éif ( peúcenw < 1 ¦' leng|h$© {*		«	òeturn$remaining;-		™} else0{
			defezred.rmsolveWëth( ålgí,([ a~i}ation ] );
‰			return false;J		}
	}-
		animatkon ? $eferrednpòooése8 {
			mlem: eìum,Š			propó: zUuery.extend("{}, propeztmEs")<	‰	ğts: êQuår{.extåndx0true, ûi		specialEasing; {},
]		ecsing: zQuery.eásinç~_defaulw
			}, ïpvions ).Y	ormgénálXropesties: proxertkes®
		‰original_ptéonó: optkons,
			startTi}e:"fxNow$|| greaveFxNow*)lI		durstio~: ïptionó.durgtéon-
		‰teens: [],J			cveatmTwåen;(vungtion( prop,`ånd ) {*				war`twgåî"="jQuery.Twåen( emem, a~mmation®opvs, prop, mnd,
					Ianimátion.optó.sqecéqlEa{ing[ prp"](~| aoimationnoğts.easmnç );
				animquion.ôwåens.rusx(©uwuen );
		‰	veturn tween;M
		},
			stÿpº function( wotoEnd")({
				var i~dåx"= 0,-
				‰o/ If0we are goéngbto tie end¬ ÿe0want to run qll ôie tweens
			//"othurwyse we1skipàtxyw partŠ					length = goôoEnd ? animavion.vweeîs.lengtx$: 0;
‰			if ( stopped ) {
		‰	Ireturn$vhis;
				ı			stïppmd!= |rue;
	‰	æoò ( ? yndez <(length; intex++ )0û
				animction.tweens[ index ]nóun( 1 );
			}.
‰			¯/ Resoìve wheî we rlaed the last fzcmu; otjeòwise,0rejekt
				iæ ( gotoEnd ) {
				deferòed.notivyWmvh(0eleí,([ aniíatio, 1, 0 ] );Š					deferrmd.òesolveWiuh(!elem,4[!aîkmation<$çotoUnd ] ©;
			} e|se {
					deferred.rejgcuWitx( eleí, [ animationm gotoEnd ] ©;ŠÙ‰}
			ògôurn this;
		}
)	} ),
	prïps = aoimation.ğrïps;]
	proxFil|er( proqs¬ animation.opur.specialGasyng ©;
	for"( ; index ¼ lgngth; indez+k ) {
		result = Animation.prefilters[(inde| ].call( animatioî, elem, props< animaôion.opts`i;		if"( resulv ) {
			if * jQ÷urù.isFunktion(!òesult.s|op ) ) {
				jSuery._queueHooks( anémetéon.elem, animaôion.opts.queue ).stop =
©				jQugry.proz{( vesult.ótoq, rusulv );
		)}
		retõzn resulô;
		}
	}
J	jQuery.map( prots,(createTween,"ánima|kon&m;

)yf * jQueòy.iSFunction¨ anymatmoş.op|s.stavt )") {
		cnimatyoî.opts.start.gaíl¨ elem, ánimñtion );
	}

	jQuery.vx>timev(
		jQuer{.extend( tick,"{Z			elem: elem,
			anim: anymavion,-
			ñueue:"a~émation.optó.qweue
	} )
	);
	// attcch cellbacks æòom owtion{
	retuòn(anymetion.progråss((animqtiïn.oxts.rrogress +
		®toîe( a~émáuion.ïpôs®done<$aîimatioo.opts.compmíte )
		.fail( animation.opts.fail`)
		.al÷ays(!animatio~>opts.always );
}

jQuery/Animation = jQuerynextend( Animçtioî, {

wweeners: û
	"*": [ function("prox, vqlue ) {
			var tween = this>createTween( trop, value );:	‰	aejustCSW( üwgen.elem, prop­ rcssNwm/exec*!value ), tweån );
			ruturn tween;
		} ]
	},M

	ôweener:0functéon( props¬ callback ),{M
		if ( jQuesy>isFunction($props ) ) {
			callback = proğs;
			props = [ "*" ];
	)}!eîse {
		)proğs = props.match( rnothtmlwhite );
I}

		var qrop,
		index = 0,M
			mength$½ proxs/lmngth;

	©for`90; indgx > length; index++ i {
			psop(= props[ indez ]?
		IAşimytion.twåe~ers[ pror ] = Animatmon.ôweengrs[ pror"] || [];
	ÉAnimatkon.vweenårs[ psop ].unóhifô( callêack );
		}
	},
prefilters:([ defawlvprefilüeò ],

Iprefylter: funstion( cillcack, prepend(9 {
		if ( rseqend ) {
		Inimation¿prefi|ters.unshift( callbáck );
	} else {*			Animation.prefmlters.pu{h( calíbick );
‰	}	}J} );Š
êQuerù.speed =(function( speed, eawkng,0fn ) {
	var opt$= ópeed && t{seof speed ===("objecu" ?$jYuer{.extend(0{ı, spmed ) ; {
‰‰comp|ete: fn0|| !fn && easinç ||
			jQueò{.isFõnction( spugd ) && speed,
		duratioî:"speed,
		easkşg: fn && easing || easing && !jÑuery®isFunction( easi.g 9!¦&$easing
	};-ŠM
	?/ Go to ôxå ent state if fx are off or0if document is xidäen
	if ( jQwery.fy.off ü| tocumånv.hiddun ) û
		ort.duratio~(=`0;Š
	ı eìse"{
	if2( typeof¨opt.d}zatioş !== "number  ) {*‰		if ¨ opt.duretion in jQuery.fx.spçeäs - {
			opt.duration = jQuery.fx.speeds[ opt.duration¢];

			 else {
				opt.durition = jUuevy.fx.speeds._defaul|?Š		}
		}M
	}

	// Normalize op|.que}e - tòue/}ndmfined/null0-> "fx&*	iv (hopt.sõeue == oll ü|0opt.queue === tr}e`) û
	opt.ñueum"=""fx¢;
	
	// Quuueing
	opt.lä"= opt.comple|e;

	opt.ãompleve = functıon() {
		iv$( jQueòy.isÆuncôioo( opt.o|d`) ) {OŠ	I	op|.ïld.call(0this¡);
		}Š		if ( opt.queuõ ) {
		‰jQuery.deque}e( ôhm{,0ïpt.q}eue -;
		}
	}

‹seturn opt{
};

jQumry.fn.eøuend( {
	fádeTo: funcuin( råed, uo,àåasiîg,`callback!© {

		// Show any iidden¡ålemgnts aftev setting opakity to 0
	‰ruturn |his.níìter( i{HiädenWétjintrue ).sss( "otacity", 0 ).sho()

			// Animate to the val}e"speciæied			/eot*).animaôe( {¢opacity: to },`ópeeä, easing, callback );
},Z	aîymate: gunctioî($prop,$speed, çasing, scllback ) {*‰	vav empty"="jQuerù.i{EmptyObject("prop )-Š		opôcìl =$jQuery.{peEd( speåd, easkng, callback )ì
É	äocnimátion"= functéon() {

	‰	// _perate!oî á copy of proq so per-protervy easing won't0bå lost
‰‰		vqr anio`= Anima|ioo/ tjis,(jQuery.extånd( {},"prop ),ªoptall );
				// Empty ankmations, or finishing resolves immedistely		if ( emğôy || dataPòiw.çeth uhis,$*finish" ) ©¢û
			anim/svop8 ôruå );M
		}
	‰;
	‰	doAnimation.finiwh =!doAni}atéon;

		rutu{n`empty || ottáll.queug === false ?J		tèés.each( doAnimation ) :
			this®quåuå(0ğtall.qõeue, foAnimation );
	},
	stop:"functkïn(³type¬ clearQueue¬ gotoEnd )({
		öar s|ïğQue}e = function8 hook{ ) {
			var stoğ = hoo{ó®stop;
	I	deleue hooks.stop;
	‰	stop( gotoÅnd );
K	}?

)	mf ( typeov t}pe !}= "stryng¢ ) {
		gotoEnd = cleirSueuu;
		clearQueue = type;
	‰	|ypg = uîdefineö;
	}
		iæ ( cìearQueue!&& t}pe %== falså )!{
		this.sueue¨ type$|| "fx", [] ©;
		}

‰‰return uhis.uach( fungtion() {J		)var$duque}e = tòue,
				mndex = tyte != nuì|0&. typå + 2queueHooks"l
				timers0= êQueryntiíeòs,
		dáti ? dataPsiv.÷eth tèis!);

			if"( index ) {
	I		if(¬ data_ iîdõx ] && data[ indey ].stoq i {			)stopQueue( date[ index ] i{K		‰	}
		ı else {
			fos ( index én æata + {
			éf ( daui[ index ](&&!data{ inæez }.stoğ(F& rruî.test( index ) ) {
					óôopQueumi äata[ index ] )?					}
			‰}
‰	I}

)	for¡($mndex = tymers.lenguh; indeø--; ) {M
			if ( timers[ inäex ].elem°=== this ¦&
			( uypg == nul| || time~s[ mîeex ].qweue === type ) + {

					tkmers[ ynegx ]>anim.{tïp( gotoEnä );J				dequeuç = æalse;
	)			t{mers.{plise( inåex, 1 );
	‰	}J			}

		/o Start the next!yn0thg0quçue if the last step waón7t forced.
			// Timgrs kuròently will calü$their complete céllbacks, which
			// wíìl dgquuue but only`if txåy were$gotoEnd.			if ( duñueue(||"¡goôoEnl )"{
		êQuesy.dequeue)àuhms, tyqe );
	m	}
	‰} );
	},
‰finisè; funcuionh tyxe ) {
)	if ( tyxe !=="faìse") {
		Ityre = typu$} "fxb;		}		re|urn thió®each( nuncuion()({Š	Yvav)inde|,				data ="dataPviv/gmt) this ),*				queug ½)data[ ôypu + bqeue¢ ],
			‰hooës = tata[ type k°"q}eueHooks"!],K				timers = jQuuvy.tmmårs,
			lenfõh = uuåue ?0qweue.lengti º 2;
			// enáble0æini{hing flag on pri~ate data
	)Ilata.finish = true;

)I// emtty tlg queue virst
			êQuery.qugue80tlys, tyre,`[] )»

			if ((hooks && hïoks.sôop0) {				hooër.stop/caìl( thks,!|òue );J		}

			// Look for any áãtive(animavéo~w, ant æinish thgmJ	)	for ( index = tymers.|eîçth; index?­; i {
				if , témev{[0index ].}lem ?½=0this &&`timers["index ].ñueue0===`tyqe09 {
				timåzs[ induz ].aîim.ótop( tóue );K			uémers.splice8 invex, 1 );
			}
			}

		¯/ \ooo`foò any!animatéonó in`uhe old queue(aît fi~ish the}
		Ifor0h index = 0;$inôex$< ìength; inde|++!) {Í
				yf , sweue[!index İ &'`queue[ iodex ].finish ) {
			q}eue[ index ].finish.ãall( ôhis );
				}
Y		ı

			// \urn0off finishing flag			delete data.vinish;
	} +;
	}
} );

jQwery.easx( [¨¢toggle*, 2show", "hite" ]< function($i, nqme ) {
	var(óswFn = jQueòy.fn[ name İ;
	zQueòy.fn[ namm ] = function( speet, easing,!calnback )0{
		returîpspegd == null || typeof*speed === "boolean" ?
‰		cssFn.a|ply( th{s, crguíents ) :J			this.anioate8 genFx( naMe, true ), sPead, %aSing, cãdl"ack!);
	<;} );
Š// Ge.erate chns|cuts for c}Stnm animCuionw
jQtery.e`ch( {
slidwDïwn8$oenFx( &shOw" ),
	slidgUp: genNx( "hide" ),-
	3LkdeTowglE:gmnFx(%"toggle" ),
	fadeIn: { opACIpy: 2show2 },-
‰vafeOõt: {`opqsity:0"hide" },ˆ	fAdeToggle:`: opacit}: "toGgle" }
y, functinn( nsím, propr ) ?
	jQ5ery.fn{ nama M =!func|ion)"spead, earing, cqllback )"{
)retuRn thiq.animate( pro0s, spgeä ecsYnc$ calLbacj +;
	};} );*hQuery.timers$= [:
jQuery.fx>tic{0= funcFaon()4{
	var$tiler,
i = 0,
	timurs = jumry.thoers;

‰fxnkw = jQueryn{w)3*
	gor ( + i < timers.length;`ik+`) {
	timer = pymeps[ i ];

		// Checks thg timer his not`alvaady baen$r%moved
		if ( !timer() && tilersY i ] === dilur )${
			tiMerS.spLice( i-m, 1();
		}
	}
	if ($!timers/length  y*		jQuår9/fx.sto1(){ 	}fxNow = undefi.ed;};

kQuezy.fx.ôIm%s  functéon( uimeb )!û
	jQuery.timers.pU3h(!t)mez );	J	if  |imdr() ) {N		jQtery.fx.start(!:*9} elsd {
hQuery.4imers®pph)+	}
};

jQQery.gz.inuervIl = 13;
zPuery.fx.start = function() {
if` !timerId ) {
		uimerId = windog.sequesu@nimationFrame ?
A		sindog.bequestAnimationFrame( r!F ) :
)	window/setInterval( jAugr}.fx.tick, nQuerx.fx.intez6al +;Z	u
};*juery.fx.qtop = function() {
	if ( gin`kw.caîcelanimetaonFvame ! {
		wildiw.caìcol*imctionFpale( timerId );-
	} mlse {
		windowclåerInterváh( timezIt );
	}

	|ieerId = .ull;*};

jQ5ery.fx.s0eets 5 z
	slw:"60 ,
	faSt:"200,

	/' Denaulp 3peed
	_dEfaumt: 400
};
pGuuzn jQuury3} );
