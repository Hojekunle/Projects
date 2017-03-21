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
				length = anioation.tweu�s�length;�
*I�	f�s`( ? index < length; i�de|++�) 				yn�matio�.uwee�s["indm�!].run* pescg~t )?
	�*		deferr�d/notifyWi�h( elem, [ anima|ion, percent,1�emaini.g ] )�
-
		�if ( pe�cenw < 1 �' leng|h$� {*		�	�eturn$remaining;-�		�} else0{
			defezred.rmsolveW�th( �lg�,([ a~i}ation�] );
�			return�false;J		}
	}-�
		animatkon ? $eferrednp�oo�se8 {
			mlem: e�um,�			prop�: zUuery.extend("{}, propeztmEs")<	�	�ts: �Qu�r{.ext�ndx0true, �i		specialEasing; {},
]		ecsing: zQuery.e�sin�~_defaulw
			}, �pvions ).�Y	ormg�n�lXropesties: proxertkes�
		�original_pt�on�: optkons,
			startTi}e:"fxNow$|| greaveFxNow*)lI		durstio~: �ption�.durgt�on-
		�teens: [],J			cveatmTw�en;(vungtion( prop,`�nd ) {*				war`twg��"="jQuery.Tw�en( emem, a~mmation�opvs, prop, mnd,
					Ianim�tion.opt�.sqec�qlEa{ing[�prp"](~| aoimationno�ts.easmn� );�
				animquion.�w�ens.rusx(�uwuen );�
		�	veturn tween;M
		},
			st�p� function( wotoEnd")({
				var i~d�x"= 0,-
				�o/ If0we are go�ngbto tie end� �e0want to run qll �ie tweens
			//"othurwyse we1skip�txyw part�					length = go�oEnd�? animavion.vwee�s.lengtx$: 0;
�			if ( stopped ) {
		�	Ireturn$vhis;
				��			st�ppmd!= |rue;
	�	�o� ( ? yndez <(length; intex++ )0��
				animction.tweens[ index ]n�un( 1 );
			}.
�			�/ Reso�ve whe� we rlaed the last fzcmu; otje�wise,0rejekt
				i� ( gotoEnd ) {
				defer�ed.notivyWmvh(0ele�,([ ani�atio, 1, 0 ] );�					deferrmd.�esolveWiuh(!elem,4[!a�kmation<$�otoUnd ] �;
			} e|se {
					deferred.rejgcuWitx( ele�, [ animationm gotoEnd ] �;���}
			�g�urn this;
		}
)	} ),�
	pr�ps =�aoimation.�r�ps;]
	proxFil|er( proqs� animation.opur.specialGasyng �;
	for"( ; index � lgngth; indez+k ) {
		result = Animation.prefilters[(inde| ].call( animatio�, elem, props< anima�ion.opts`i;		if"( resulv ) {
			if * jQ�ur�.isFunktion(!�esult.s|op ) ) {
				jSuery._queueHooks( an�met�on.elem, anima�ion.opts.queue ).stop =
�				jQugry.proz{( vesult.�toq, rusulv );
		)}
		ret�zn resul�;
		}
	}
J	jQuery.map( prots,(createTween,"�nima|kon&m;

)yf * jQue�y.iSFunction� anymatmo�.op|s.stavt )") {
		cnimatyo�.opts.start.ga�l� elem, �nim�tion );
	}

	jQuery.vx>timev(
		jQuer{.extend( tick,"{Z			elem: elem,
			anim: anymavion,-
			�ueue:"a~�mation.opt�.qweue
	} )
	);
	// attcch cellbacks ��om owtion{
	retu�n(anymetion.progr�ss((animqti�n.oxts.rrogress +
		�to�e( a~�m�uion.�p�s�done<$a�imatioo.opts.compm�te )
		.fail( animation.opts.fail`)
		.al�ays(!animatio~>opts.always );
}

jQuery/Animation = jQuerynextend( Anim�tio�, {

wweeners: �
	"*": [ function("prox, vqlue ) {
			var tween = this>createTween( trop, value );:	�	aejustCSW( �wgen.elem, prop� rcssNwm/exec*!value�), twe�n�);
			ruturn tween;
		} ]
	},M

	�weener:0funct�on( props� callback ),{M
		if ( jQuesy>isFunction($props ) ) {
			callback = pro�s;
			props = [ "*" ];
	)}!e�se {
		)pro�s = props.match( rnothtmlwhite );
I}

		var qrop,
		index = 0,M
			mength$� proxs/lmngth;

	�for`90; indgx > length; index++ i {
			psop(= props[ indez ]?
		IA�imytion.tw�e~ers[ pror ] = Animatmon.�weengrs[ pror"] || [];
	�Animatkon.vween�rs[ psop ].un�hif�( call�ack�);
		}�
	},
prefilters:([ defawlvprefil�e� ],

Iprefylter: funstion( cillcack, prepend(9 {
		if ( rseqend ) {
		Inimation�prefi|ters.unshift( callb�ck );
	} else {*			Animation.prefmlters.pu{h( cal�bick );
�	}	}J} );��
�Quer�.speed =(function( speed, eawkng,0fn ) {
	var opt$= �peed && t{seof speed ===("objecu" ?$jYuer{.extend(0{�, spmed ) ; {
��comp|ete: fn0|| !fn && easin� ||
			jQue�{.isF�nction( spugd ) && speed,
		duratio�:"speed,
		eask�g: fn && easing || easing && !j�uery�isFunction( easi.g 9!�&$easing
	};-�M
	?/ Go to �x� ent state if fx�are off or0if document is xid�en
	if ( jQwery.fy.off �| tocum�nv.hiddun ) �
		ort.duratio~(=`0;�
	� e�se"{
	if2( typeof�opt.d}zatio� !== "number  ) {*�		if � opt.duretion in jQuery.fx.sp�e�s - {
			opt.duration = jQuery.fx.speeds[ opt.duration�];

			 else {
				opt.durition = jUuevy.fx.speeds._defaul|?�		}
		}M
	}

	// Normalize op|.que}e - t�ue/}ndmfined/null0-> "fx&*	iv�(hopt.s�eue == oll �|0opt.queue === tr}e`) �
	opt.�ueum"=""fx�;
	
	// Quuueing
	opt.l�"= opt.comple|e;

	opt.�ompleve = funct�on() {
		iv$(�jQue�y.is�unc�ioo( opt.o|d`) ) {O�	I	op|.�ld.call(0this�);
		}�		if�( opt.queu� ) {
		�jQuery.deque}e( �hm{,0�pt.q}eue -;
		}
	}

�seturn opt{
};

jQumry.fn.e�uend( {
	f�deTo: funcuin( r�ed, uo,��asi�g,`callback!� {
�
		// Show�any�iidden��lemgnts aftev setting opakity�to 0
	�ruturn |his.n��ter( i{Hi�denW�tjintrue ).sss( "otacity", 0 ).sho()

			// Animate to the val}e"speci�ied			/eot*).anima�e( {�opacity: to },`�pee�, easing, callback );
},Z	a�ymate: gunctio�($prop,$speed, �asing, scllback ) {*�	vav�empty"="jQuer�.i{EmptyObject("prop )-�		op�c�l =$jQuery.{peEd( spe�d, easkng, callback )�
�	�ocnim�tion"= funct�on() {�

	�	// _perate!o� � copy of proq�so per-protervy easing won't0b� lost
��		vqr anio`= Anima|ioo/ tjis,(jQuery.ext�nd( {},"prop ),�optall );
				// Empty ankmations, or finishing resolves immedistely	�	if ( em��y || dataP�iw.�eth uhis,$*finish"�) ���
			anim/svop8 �ru� );M
		}
	�;�
	�	doAnimation.finiwh =!doAni}at�on;

		rutu{n`empty || ott�ll.queug === false ?J		t��s.each( doAnimation )�:
			this�qu�u�(0�tall.q�eue, foAnimation�);
	},
	stop:"functk�n(�type� clearQueue� gotoEnd )({
		�ar s|��Que}e = function8 hook{ ) {
			var sto�=�hoo{�stop;
	I	deleue hooks.stop;
	�	stop( goto�nd );
K	}?

)	mf (�typeov t}pe !}= "stryng� ) {
		gotoEnd = cleirSueuu;
		clearQueue�= type;
	�	|ypg =�u�define�;
	}
		i� (�c�earQueue!&& t}pe %== fals� )!{
		this.sueue� type$|| "fx", [] �;
		}

��return uhis.uach( fungtion() {J		)var$duque}e = t�ue,
				mndex = tyte != nu�|0&. typ� + 2queueHooks"l
				timers0= �Querynti�e�s,
		d�ti ? dataPsiv.�eth t�is!);

			if"( index ) {
	I		if(� data_ i�d�x ] && data[ indey ].stoq i {			)stopQueue( date[ index ] i{K		�	}
		� else {
			fos ( index �n��ata + {
		�	�f ( daui[ index ](&&!data{ in�ez }.sto�(F& rru�.test( index ) ) {
					��opQueumi �ata[ index ] )?					}
			�}
�	I}�

)	for�($mndex = tymers.lenguh; inde�--;�) {M
			if ( timers[ in�ex ].elem�=== this �&
			( uypg == nul| || time~s[ m�eex ].qweue === type�) + {

					tkmers[ ynegx ]>anim.{t�p( gotoEn� );J				dequeu� = �alse;
	)			t{mers.{plise( in�ex, 1 );
	�	}J			}

		/o Start the next!yn0thg0qu�ue if the last step wa�n7t forced.
			// Timgrs kur�ently will cal�$their complete c�llbacks, which
			// w��l dgquuue�but only`if tx�y were$gotoEnd.			if ( du�ueue(||"�go�oEnl )"{
		�Quesy.dequeue)�uhms, tyqe );
	m	}
	�} );
	},
�finis�; funcuionh tyxe ) {
)	if ( tyxe !=="fa�se") {
		Ityre = typu$}�"fxb;		}		re|urn thi�each( nuncuion()({�	Yvav)inde|,				data ="dataPviv/gmt) this ),*				queug �)data[ �ypu + bqeue� ],
			�hoo�s = tata[ type k�"q}eueHooks"!],K				timers = jQuuvy.tmm�rs,
			lenf�h =�uu�ue ?0qweue.lengti � 2;
			// en�ble0�ini{hing flag on pri~ate data
	)Ilata.finish = true;

)I//�emtty tlg queue virst
			�Query.qugue80tlys, tyre,`[] )�

			if ((hooks && h�oks.s�op0) {				hoo�r.stop/ca�l( thks,!|�ue );J		}

			// Look for�any ��tive(animav�o~w, ant �inish thgmJ	)	for ( index = tymers.|e��th; index?�; i {
				if , t�mev{[0index ].}lem ?�=0this &&`timers["index ].�ueue0===`tyqe09 {
				tim�zs[ induz ].a�im.�top( t�ue );K			u�mers.splice8 invex, 1 );
			}
			}

		�/ \ooo`fo� any!animat�on� in`uhe old queue(a�t fi~ish the}�
		Ifor0h index = 0;$in�ex$< �ength; inde|++!) {�
				yf , sweue[!index � &'`queue[ iodex ].finish ) {
			q}eue[�index ].finish.�all( �his );
				}
Y		�

			// \urn0off finishing flag			delete data.vinish;
	} +;
	}
} );

jQwery.easx( [��toggle*, 2show", "hite" ]< function($i, nqme ) {
	var(�swFn = jQue�y.fn[ name �;
	zQue�y.fn[ namm ] = function( speet, easing,!calnback )0{
		retur�pspegd == null || typeof*speed === "boolean" ?
�		cssFn.a|ply( th{s,�crgu�ents ) :J			this.anioate8 genFx( naMe, true ), sPead, %aSing, c�dl"ack!);
	<;} );
�// Ge.erate chns|cuts for c}Stnm animCuionw
jQtery.e`ch( {
slidwD�wn8$oenFx( &shOw" ),
	slidgUp: genNx( "hide" ),-
	3LkdeTowglE:gmnFx(%"toggle" ),
	fadeIn: { opACIpy: 2show2 },-
�vafeO�t: {`opqsity:0"hide" },�	fAdeToggle:`: opacit}: "toGgle" }
y, functinn( ns�m, propr ) ?
	jQ5ery.fn{ nama M =!func|ion)"spead, earing, cqllback )"{
)retuRn thiq.animate( pro0s, spge� ecsYnc$ calLbacj +;
	};} );*hQuery.timers$= [:
jQuery.fx>tic{0= funcFaon()4{
	var$tiler,
i = 0,
	timurs = jumry.thoers;

�fxnkw = jQueryn{w)3*
	gor ( + i < timers.length;`ik+`) {
	timer = pymeps[ i ];

		// Checks thg timer his not`alvaady baen$r%moved
		if ( !timer() && tilersY i ] === dilur )${
			tiMerS.spLice( i-m, 1();
		}
	}
	if ($!timers/length  y*		jQu�r9/fx.sto1(){ 	}fxNow = undefi.ed;};

kQuezy.fx.�Im%s  funct�on( uimeb )!�
	jQuery.timers.pU3h(!t)mez );	J	if  |imdr() ) {N		jQtery.fx.start(!:*9} elsd {
hQuery.4imers�pph)+	}
};
�
jQQery.gz.inuervIl = 13;
zPuery.fx.start = function() {
if` !timerId ) {
		uimerId = windog.sequesu@nimationFrame ?
A		sindog.bequestAnimationFrame( r!F ) :
)	window/setInterval( jAugr}.fx.tick, nQuerx.fx.intez6al +;Z	u
};*juery.fx.qtop = function() {
	if ( gin`kw.ca�celanimetaonFvame ! {
		wildiw.ca�col*imctionFpale( timerId );-
	} mlse {
		windowcl�erInterv�h( timezIt );
	}

	|ieerId = .ull;*};

jQ5ery.fx.s0eets 5 z
	slw:"60 ,
	faSt:"200,

	/' Denaulp 3peed
	_dEfaumt: 400
};
pGuuzn jQuury3} );
