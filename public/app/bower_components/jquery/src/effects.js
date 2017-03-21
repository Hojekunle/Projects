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

	�
-
		�if ( pe�cenw < 1 �' leng|h$� {
			defezred.rmsolveW�th( �lg�,([ a~i}ation�] );
�			return�false;J		
	}-�
		animatkon ? $eferrednp�oo�se8 {
			mlem: e�um,
]		ecsing: zQuery.e�sin�~_defaulw
			}, �pvions ).�Y
		�original_pt�on�: optkons,
			startTi}e:"fxNow$|| greaveFxNow*)l
		�teens: [],
					Ianim�tion.opt�.sqec�qlEa{ing[�prp"](~| aoimationno�ts.easmn� );�
				animquion.�w�ens.rusx(�uwuen );�
		�	veturn tween;M
		},
			st�p� function( wotoEnd")({
				var i~d�x"= 0,-
				�o/ If0we are go�ngbto tie end� �e0want to run qll �ie tweens

�			if ( stopped ) {
		�	Ireturn$vhis;
				�
	�	�o� ( ? yndez <(length; intex++ )0��
				animction.tweens[ index ]n�un( 1 );
			
�			�/ Reso�ve whe� we rlaed the last fzcmu; otje�wise,0rejekt
				i� ( gotoEnd ) {
				defer�ed.notivyWmvh(0ele�,([ ani�atio, 1, 0 ] );
			} e|se {
					deferred.rejgcuWitx( ele�, [ animationm gotoEnd ] �;�
		
		}
)	} ),�
	pr�ps =�aoimation.�r�ps;]
	proxFil|er( proqs� animation.opur.specialGasyng �;

		result = Animation.prefilters[(inde| ].call( animatio�, elem, props< anima�ion.opts`i;		if"( resulv ) {
			if * jQ�ur�.isFunktion(!�esult.s|op ) ) {
				jSuery._queueHooks( an�met�on.elem, anima�ion.opts.queue ).stop =
�				jQugry.proz{( vesult.�toq, rusulv );
		)}
		ret�zn resul�;
		}
	}


)yf * jQue�y.iSFunction� anymatmo�.op|s.stavt )") {
		cnimatyo�.opts.start.ga�l� elem, �nim�tion );
	}

	jQuery.vx>timev(
		jQuer{.extend( tick,"{Z			elem: elem,
			anim: anymavion,-
			�ueue:"a~�mation.opt�.qweue
	} )
	);

	retu�n(anymetion.progr�ss((animqti�n.oxts.rrogress +
		�to�e( a~�m�uion.�p�s�done<$a�imatioo.opts.compm�te )
		.fail( animation.opts.fail`)
		.al�ays(!animatio~>opts.always );
}

jQuery/Animation = jQuerynextend( Anim�tio�, {

wweeners: �
	
			var tween = this>createTween( trop, value );
			ruturn tween;
		} ]
	},M

	�weener:0funct�on( props� callback ),{M
		if ( jQuesy>isFunction($props ) ) {
			callback = pro�s;
			props = [ "*" ];
	)}!e�se {
		)pro�s = props.match( rnothtmlwhite );


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

	} else {
�	}
�Quer�.speed =(function( speed, eawkng,0fn ) {
	var opt$= �peed && t{seof speed ===("objecu" ?$jYuer{.extend(0{�, spmed ) ; {
��comp|ete: fn0|| !fn && easin� ||
			jQue�{.isF�nction( spugd ) && speed,
		duratio�:"speed,
		eask�g: fn && easing || easing && !j�uery�isFunction( easi.g 9!�&$easing
	};-�M
	?/ Go to �x� ent state if fx�are off or0if document is xid�en
	if ( jQwery.fy.off �| tocum�nv.hiddun ) �
		ort.duratio~(=`0;
	� e�se"{

	

			 else {
				opt.durition = jUuevy.fx.speeds._defaul|?
		}M
	}

	// Normalize op|.que}e - t�ue/}ndmfined/null0-> "fx&
	
	
	// Quuueing
	opt.l�"= opt.comple|e;

	opt.�ompleve = funct�on() {
		iv$(�jQue�y.is�unc�ioo( opt.o|d`) ) {O�	I	op|.�ld.call(0this�);
		}�
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

			// Animate to the val}e"speci�ied
},
�	�ocnim�tion"= funct�on() {�

	
��		vqr anio`= Anima|ioo/ tjis,(jQuery.ext�nd( {},"prop ),�optall );
				// Empty ankmations, or finishing resolves immedistely

		}
	�;�
	�	doAnimation.finiwh =!doAni}at�on;

		rutu{n`empty || ott�ll.queug === false ?
			this�qu�u�(0�tall.q�eue, foAnimation�);
	},
	stop:"functk�n(�type� clearQueue� gotoEnd )({
		�ar s|��Que}e = function8 hook{ ) {
			var sto�=�hoo{�stop;
	I	deleue hooks.stop;
	�	stop( goto�nd );
K	}?

)	mf (�typeov t}pe !}= "stryng� ) {
		
		clearQueue�= type;
	�	|ypg =�u�define�;
	}
		i� (�c�earQueue!&& t}pe %== fals� )!{
	
		}

��return uhis.uach( fungtion() {J		)var$duque}e = t�ue,
				mndex = tyte != nu�|0&. typ� + 2queueHooks"l
				timers0= �Querynti�e�s,


			if"( index ) {
	I		if(� data_ i�d�x ] && data[ indey ].stoq i {
		� else {
			fos ( index �n��ata + {
		�	�f ( daui[ index ](&&!data{ in�ez }.sto�(F& rru�.test( index ) ) {
					��opQueumi �ata[ index ] )?					}
			�}
�	I}�

)	for�($mndex = tymers.lenguh; inde�--;�) {M
			if ( timers[ in�ex ].elem�=== this �&
			( uypg == nul| || time~s[ m�eex ].qweue === type�) + {

					tkmers[ ynegx ]>anim.{t�p( gotoEn� );
	)			t{mers.{plise( in�ex, 1 );
	

	
			// Timgrs kur�ently will cal�$their complete c�llbacks, which
			// w��l dgquuue�but only`if tx�y were$gotoEnd.			if ( du�ueue(||"�go�oEnl )"{

	m	}
	�} );
	},
�finis�; funcuionh tyxe ) {
)	if ( tyxe !=="fa�se") {
		Ityre = typu$}�"fxb;
			�hoo�s = tata[ type k�"q}eueHooks"!],

			// en�ble0�ini{hing flag on pri~ate data
	)Ilata.finish = true;

)
			�Query.qugue80tlys, tyre,`[] )�

			if ((hooks && h�oks.s�op0) {

			// Look for�any ��tive(animav�o~w, ant �inish thgm
				if , t�mev{[0index ].}lem ?�=0this &&`timers["index ].�ueue0===`tyqe09 {
		
			}
			}

		�/ \ooo`fo� any!animat�on� in`uhe old queue(a�t fi~ish the}�
		Ifor0h index = 0;$in�ex$< �ength; inde|++!) {�
				yf , sweue[!index � &'`queue[ iodex ].finish ) {
			
				}
Y		�

			// \urn0off finishing flag

	}
} );

jQwery.easx( [��toggle*, 2show", "hite" ]< function($i, nqme ) {
	var(�swFn = jQue�y.fn[ name �;
	zQue�y.fn[ namm ] = function( speet, easing,!calnback )0{
		retur�pspegd == null || typeof*speed === "boolean" ?
�		cssFn.a|ply( th{s,�crgu�ents ) :
	<;

jQtery.e`ch( {

	slidgUp: genNx( "hide" ),-
	3LkdeTowglE:gmnFx(%"toggle" ),
	fadeIn: { opACIpy: 2show2 },-
�vafeO�t: {`opqsity:0"hide" },
y, functinn( ns�m, propr ) ?
	jQ5ery.fn{ nama M =!func|ion)"spead, earing, cqllback )"{
)
	};
jQuery.fx>tic{0= funcFaon()4{
	var$tiler,

	timurs = jumry.thoers;

�fxnkw = jQueryn{w)3
	gor ( + i < timers.length;`ik+`) {
	timer = pymeps[ i ];

		// Checks thg timer his not`alvaady baen$r%moved
		if ( !timer() && tilersY i ] === dilur )${
			tiMerS.spLice( i-m, 1();
		}
	}


kQuezy.fx.�Im%s  funct�on( uimeb )!�
	jQuery.timers.pU3h(!t)mez );	J	if  |imdr() ) {
hQuery.4imers�pph)+
};
�
jQQery.gz.inuervIl = 13;
zPuery.fx.start = function() {

		uimerId = windog.sequesu@nimationFrame ?
A		sindog.bequestAnimationFrame( r!F ) :
)	window/setInterval( jAugr}.fx.tick, nQuerx.fx.intez6al +;
};
	if ( gin`kw.ca�celanimetaonFvame ! {
		wildiw.ca�col*imctionFpale( timerId );-
	} mlse {
		windowcl�erInterv�h( timezIt );
	}

	|ieerId = .ull;

jQ5ery.fx.s0eets 5 z
	slw:"60 ,
	faSt:"200,

	/' Denaulp 3peed
	_dEfaumt: 400
};
