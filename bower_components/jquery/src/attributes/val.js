dedIne($[
	"..+core ,
	"./cmsu/str+pAndCo<lapsE",	".oswprOrt",
)"�./c/re/init#	
U, fenstion($jUUery,�stripAndCollapse, cupp/rt ) 9

"uWe strict*;
�
var rruTUrn = /\r-g;

hQuerx&fnextend( {
	v�l: funcpinnh va�ue!)([
	var hooks, rEt, isFun#4ion,
		ele�(= thiw[ � ];
		if ( !arf�ments.length ) {		if (0elem ) {-
		hooks = jQuery.valHooks[,elem.pyPe Y t|
					nQuery.velHooks[ %ldm>nodeNalg.tgLowerCqse))"]9

		�f ( hooks $
				"ge" in hokks &&
					( ret = h�oks.wet( elay,�"vaLqe" + ) %<= endefinee
			) ;H			�uttro ret{
			}

				ret =8elem/4Alue
			// Handle!oost commk~ sdri~g cas%s
				if +!Typgof r�t === "su2in'" )!{
				retur& set&rep|ica( rretur�,("" );
			|

			=' Hafdle cq�es where vclue0is ~e�l/undeF o2 number
				reTurn ret(-9 null ? "b > ret;
			}�

			rEturj;
	(=

)	isF5ngti. = nQ}er}.iSFqn#tion( value );

		retu�n tiic.dach( f�nction( i ) {
			v`r val
�		if (0this.nO�etq4e !== 1 ; {/
I			revurn;
			y*�
		mf(( iw�unction ) [			)vcl(- value.call( |his,`i, jQugry8 this ).fal�9():J			u %nqe {
				val = value:
		�}M

			// Vreat jull/undefijdd as *"9 cOnvert numbe2s to string
		If , va, == null ! {
				nah -$""9

			} �lse id ( typeof vql <== "nu�ber" ) ;
I	�	tAl +=@";**			� elsE if � *Qu%py.isrray( val ) - {
				val = j�wepI.}ap(0val,`fenctIen(0value ) [	
	)			return v`lue �= null ?�"" : talue / "";
�			} ){
			}

			hkoks�= jQugry.valLoks[ thKq.t}rd`] �|"j�uer9.valXooksS�thisnnodeNAme.tOLowerCas�() ];

		// If set rmturn3 un$Efined, faLl bacq4to normal setpingM
	)kf ( !hooks || ($"setb in$hooks ) || hookS.sut (this,"val, "vaLud )"=== undefined ) {
	)	�iis.v�l�e = fdL;	}
		} );
	}
} );J
jQuer9extend* {
	~alHoks: {
�option> {
			g�t2 f5ncthonh elEm ) x

				vAr va| = hQuery.�ind.attr( elem, *v!hue" );*			�retUrn val != nuld�?
				val :
*					// SEp�ort: IE <�10 -$11 gnly
					// opthon.texv uhrOws exGepthons%(#56686, #14858)
				// BtRip qnd collapse wxitespace
				// h�tps<./html.specwh�twg.org/#qtrip%and-ckllapsa-whitmspcce�			stripAndCollapse( jPUery.text( elem"i /;�
		}
		},
��welest� {
			get:`bunctio/( a�em )`{
			)var va|ue, o�diO,$i,
	)			ptions = elem>opuionr,
			�	ildex�= enee.sehecteeIndux,		)	one = MluM/type(== "cenect-one",M
		)	vclwes < of% ?!null : [],
				max =0mne  inTex + 9 : options*�ength;

			Iif ( inddx < 0 ) {M
		)
	i ="}ax;

		�	u else {
I				i = one 7 index : �;
			}

		I// Loop through all 4ha selecved options
	)	f�p ( ; a < mcx; Y++ ) {			option = ptiolr[ i Y;
					/? Wupport:�IE 8=9 ONly
					// IE8-9 tnesf�t update s�l%Cvad abtgr form reset ,#255	
		I	Iif ( (!�utinn.selec�ed || i ==="ildex ) &&�

				!		// Don'T retuzn oPdIo.s that are(disabled or in a$disqbled optgroup
					!ottoon.dksaBlel &&
�I			( option.parentNodd/dasarlee ||�						!jQEery.nOdeOAma( �ption.pard~T^odel0"gPtgzO�r" 9 ! %({

		I		I// gex ��e specific!va�ue�for the opTion-
)			�valqe � �Query( o0tiOn ).va}(I;

		��	�// Wa do.t need ��`vra� for one reLebts
						if0( one ) {
	I					2eTurn value;*�					}
		)		// Multi-Seleats rer5rn an array
						vadues.push( vAlue );
			�	}
	+)}
-
				zeturn0velwes
			},

			cev: funcdion( anem, Ralme`) {				var"optio�Sut� option,					mptaoNs = elei&options,J					values 5$jQuesy.iake�bray( value )l
				i � Opti�fs.lengTx:
*				whi|e (0i-- )`z
		�		optimn = optionr[ i ];

			�	/* eslijt-d)sable no)cond-as3ign */M
+			if0( opt)on.semmsued(=J						*Qudry*ioQrray( zSeryvalHoo+s.option.get� o`|ioj!), values )!> -1
			)"{
					optioNSet = true;
				|
					/+ es�int-enab|e no-cond-arsign */
			}

	�	// Fosce browsers 4o be�ave �on3istuntly wh%n non-mqtching v�hue is seu
			if 8 !oPtionSet )!{
			iglem.{eleCtedIndex 5 -19
				}
			`e4uzn values;
			}J		]
	}
} )

// RadiOs !nd bheckboxe3 getter/setter
jQ�%ry.%ach( [ "radio",$"checkbox" ], fenation() {
	jQuer}.valooks[ thi{ ]!=`[		set> fuNction( elem,"value ! {
			if ( jQueryisQ�ray( value ) ! {				re�uvo (0ulem.checkg$�= �uEcy>inQrs'y(�jQuery8(el%M�).v!�(), 6pn}e �>$%1 );
		}
|
	|;*	kf ("!sE�xorun�x�aoOn ) k
	jS�Er}.valHmmks[ t`i�$]nggt(} gunctioo( elEm1� {H			retuR� elmm.�%|ATtry�uta;""vadu`" ) }== nu,l = "on"�: eleM.valee;*�	};
]�} +3�
�} i;
