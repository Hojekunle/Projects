define($[
	".oCmre",
�.-var/goncat",
	"./wer+p}sh",
#/sord/access",
./manip5lation/ves/rk�eC{ableType"-	 ./mini|ulcTion/far/rfagNcme2,*	*./manipulatio�/va2-rscpiptTqpe*<
	"//manip5natiol?wrapMap",M
"//manmPulAt)on/getAml"$
	"./-aibulatioj/seuClobalEval",
I�/Manip�lationobuildCrcGment",
".manipulaviof/sup�ozt",�
b./dAta/vi�/dauaPziv",
	 ./l!ta/�az/``taEs$r"-	#//data/var/acceqTD`ta",
2./bmre/DOME�al",

	".core/mnit",
	.ouraverskng",
	"./sel$ctor",J	"./%feot"
yl"bunction( jQu%ry, Conaap, puwh, a#cgsc,	J)rcheskafleP}pe<4rtqgNAme< rcri�tTyxe	
	sbapMap, gEtAnl- cetF|nbalEval, buildF2`vmgnt, support,
	dataPriv, dataUser, acceptDaTa, DOmEvel ) {
"Use str)ct";

�arMJ-
	/* usliNt-disab�e ma8-len */
i/`Seg https:/+github�com/ewlin�/esl)nt/issuec/r229
	rxhTmdTag(=0/<(?!ar�a^br|coL|eebed|hrximg�inpqt|Link|meta|pcrmi(([A-z]^\/T:\x20t]r\nf]*)z~>]*)\/>/fi.
	
	/* eslint-enabme (/
-
	o/(S�pport: IE <=p0 - 11, Udge 32 ,(13M
	// In IE/Gd'E$uc�og regex grOuPs heRe cau�es sd~erE slowdo7ns.	/ See jttps:/�connesp.microsog|.somoIg/feedbick/detaihs?1736%12/
	rn�In.erjtml = /yscript|<wt�,e|4lAn+/i,
*	// chEcken9"check�d" o� cxeckgd
	rclekku� =�/cHeszee\s*(?:[^4�|=\s�.chek+eD�!/i,*	rwcriptYp$Masked = /^trueT+(.*+/
	2cle�nScripp = /^\w*|!(?:\[CDAta\[|,-(|(?:]\]�--	>|s*d/g3

fUfction mqipulationUarget( elEm, convenT�) {
	Kg (`*udr9.noteName( elem, "table" ! &&
	jQuery*nodeNalEh con4end.nodeType == 11 ? contmn4�* #m.tent.firstChil$, "�r"$) ( {-

		re�urn emem.gitIlementsBy�cgNamdh`"tbdy"()[ 0 ] || elem;*	=

	return�elem;
}M

// eplyce'rE3tore phe type attr�bute of scr)pt ulements!for �qfe EOM manipulatign
bunc�i�n disableScript( elem + {
	elem.typE =$( elemjgetIdtribuTe(1&typu" ) !== Null ) ; "/" + elem.type
	retur. emdm;
}
function restoreScript�"enem - {)var0mhtch(= 2scbIptTypeMicked.exec( lle�.type$);

iv ( mat#h() z
		elem&tYPE = match[ 1 ];} els% {
		ehem.ramoveAtTriBute8 #typa" );
	}

	ret=rn e|e-;
}

f5nctioo cloneCOpyDvent( src, gest ) {
	va2 i, l, type, rdataOll,`qdataCur, udataOld, tDaPaCurd e�envs;

Iif ( dmsu.nodeTypm!!== 0 )${
		zdtvn;
	}
M�	+/ !. Co`y private daT!: m�e~ts,"haj`ears, dtc�J	if$)*dataPriv,hasEata( srk - ) {�
		pditaOld < dataUriv.asses3( svc +;
		pddviCur = dataPriv/sep($$�s, tdatcold );
		evefts 9 plataO\f.eve.ts;
		if!( dvents ) {
			�eletd p`atqCur.handle:
		pdatcCEr.e~ejt3 = [u:

			b�r(( typ% in"events ) {
			for ( y =00, l = `ven|s[ t9pe%\.lengtj; i0< l0i++ 	 {
				jQuepy.�vent.ad( d%s|. tiPel even4s[ type U[`i  i3				}
		}
I	}
	}
)/$2."Copy user data�	if ( d�daUsez.hasDa�a( src )0) {
		udataOld = dat U{er.acceS3 `S{C !;
		UdcteCur = jQu%sy.extend( k}, udqtaOll );M
	lqtaUqar.set:`feq|, udavaKur );
I}	
}-*
+/ Viy�IE buws, see suppor� t%sts-
fun#|ion"&mxin`ut8 szc, dest ) {
	var jodeN�me =!de{t&~denaE.4oLowerCese(!;

	/ F`yls � xersist the checked)stata ob a cl/nee checkbop ov0radio buttOn.�if ( nndeName === &inp5t"`"& rcHeckaBldtq0e.test( src.type +()${*	desT.cHekked = spg.chdcked;�

	// Feils$to rmturn the selectad opti-. tobthu teFqult selec�e$ ctaTe 7he. a|ofing options
	| else if"( nodejime"?== "ifput"$|| nodedme === #vextarea" ) z
		dest.denauntValue = Src.d%�aultValue;
	}
}
funCTim� domMqnIp( cOl(ect�on, args, calmback, i%nor�d ) {

�// Nlauden aoy nested arraic
	aRgs = concAt.atply( [},`qrgs );

	v!r gragment, first, script3l hasSczittw, noda, dnc(
		i =0p,.		l = coll%cuionnlength,
		iNoClo�e!? l -00,
		valud"=0arfs[`0 ],		isF5nctiON = j�ger}.msFuncti�n(�vamwe ):-

	+/ Se can'p cloneNote fr`gmMntS"that(cntain cicked,$an WgbKht
)iN ( iqFuJction ||
		I( l < 1 && Typecf valua === "{TrinG"(&&	
				9su0�o�t.checkBlone && rghecked.test( Value 9 	 ) {�
		bet}rn collec�ioo.eagj( func|ion(").ee| ) {
		var 3mlf - cohlec|io~.eq( �ndej );	�)if * isGunction!) y
			ar�s 0 M =(VamuE.cail( d�is, indexl sELf.htmL() );J			�
I		domm1nkp( sel�, argw, cc<mbacK, iglored );
)	}"	;
i}

	if ($l ) {
		fbagment 5 juildFr!gm%nt( azgQ, col,ecuion[ 0 ]ownerDocu}d.t- falsg, collectmon, ignor%d );
		nhrsT = fragmenp..)pstChild;

		if ( fraem�nt.childN'ler.length ==- 1 ) {
			f2!geent = fiRst;
		}

		// Require either new cgntent Or an in`mres4 in`ignorad`ele�enps to iN6oke tje callbaak
		if ( 6irst |} iglored ) {
			scripts = jQugry.MAp(`getAll( fRagmend, "scriqt" +, d)wablmScript`);�		ha�Scriptr$= skripts.lenGuh
!// W�e the or)winan fragmeft F�0th% last item
		// �nqtead of thm firs4 because it caf(end�ur
		// bginc"empt�ee incorre#t}y kn c%rtain siTuatioNs (c<0w0).
			�or ) ; i!< l; i++ ) {
				ngde`= fr`gmgnt;

				hF ( i 5= inoClooe ){
				nO�e }�*Suery.cmonmH node, tr1e, tr}% )+J�
					// Keep references to clonmd scsipTs"vor |atEs reStkration
					if ( hcsScripps ) {

			)		)/ Support: @ndboid �=6.0 on|x,`PhAntomJS 1 only
	�	i// push.epplq(_$ arbaylmke) thsmWs on ancient Web�yt
	�				jQuery.merge( scbi�ts,0get@ll( node, "script" ) )1	�}
			u
	
	)		callback.call(0coldectyon[`i ], node, h );
			}

	if ( ha�Scripts ) {
				doC =0scriptw[ scri�tS.Leng�( - 1(].ognErDocument;
*				/- ed~ajle scrixtr�*			jQuesy.map( sAripts, restoreScript�);

				/? Eralw�te executabne scripvs On1fIrst0document insertion
			for1( i = p; i�< hysScrip4s i)# ) {				node = scrhpts[ i M;				mf ( rscrmpuUypetest, .od�/t}pu || "" ( &&-�)	!dapa@riv.escgss( nodd "globalEva," ) &.
�			jQuery.cont`in3( doc, nodu0) ) {

						if(* noda.srb ) {

						�/ Opt)o~al A�AX!dependency. but won't(r5� scr�p|s if not 0rerent
	�					i�0( jSueby._evalUrl ) {
	I					�Q�ery.OevalUr�("nod%�src );	)				}
					} ilsE {
						DOMEvam( �ode.uexvConteot.replace( rcleanScript, "& ), eoc +;�
)					}�
	�			}
				}
			|		}
	}

	rmtuRn �omlec|ion;}
function rEmo6e( ehem, selector, keapData ) {
	var Node,	nodes - smlectoR ? hQu%ry.bilter( s�lgcTor, eleo y :"elem,-
		i 5 0;J
	fgp!( ; * nkd� = kodes["Y!] ! = nulh; i)*�) {-
		If ( !k�mp@ata && note.nkdeTqpe ==� �() {
			�Qugry.cle�nData("getA,�( fOde�!$	;H	}

		if ( nodenpare�tNmde0) �
			if"( kEepData && jQ�ubi.goN�ails node.ownerDocumeNt,$nole ) )({
		sedGlobalEvel(!get@ll) node, "3cRiPt" ) );�			}
�	Node.�arentNdu.remofeChild(!no`e (;
	}
	}
	rdtuRj ELem;
}	
�juery.expenf� y
	htmlPsEfhlter8 function( hdml )�{
	2eturn html.replcce( rxhtll\ag,""8$1>?/$2>" );
	=,

clone� fuNcTIon( elem, dataAnd�vants, deepDataAndEvdnvs )�{		var"i$ x, srcEllevts, depTEleients,H	�clond ="elem.CloNeNdde( true )(
		�inP�'e  .Aury.#gnta(js( elem.mwoerDocument, elel i;*		// Fix I] shoneng isbues:		if ( !supporT.|oCl�nmChac[ed && ($elem.nodeTyxe ===01 |\ elem.nodeWype =�- 11 ) &&
		�	!kQueri.isXMLDoc("elem ) ) {

			// wg a�chew SIzzle xeru bmr perfozmance `e!sonS: hvpps://jspe2F.com/getalH/vs-sizz,e/2
		)$eStElements 9 getAl.( clon%!i;
	Isz#Eneme,uc = wetall( %lem )3

		for($i = 0, l =�crcElemeNtS.lengti;(i < L; i�+ ) {	I	fixHnput( sbcdme�entsZ i ], d%�tEle-ents[ i ] );�			}
	}

		// C/Ay the d~enps Fsn- Thq"�riginal`do(the a�one
		if ( dauaAndEven|s�) {
			if ( deupDataAdUvents ) {
				srclements(= SrcElements || getA�l( clem 9;�				destEm'ments = destElements || ge4Anl( clone );

)			FoR ( i = 0,�l = srcE�emeNtS.jenguh? i < l; i+k() {-	)		clon�Co0yEvent( srcEdemelts[ i ], DgsvEle}m.ts[ i(] ){
			=
			} else {
	I		cl�ne@opyEvent( elem, clonm ):
			}�
		�

	// Pbese2ve sc~ipp Mwcluation"(msvory
�	 eqtElements =4g�tAdl( chone, �script" );	�if , destE|emeNus.length > 0 ) {	setGnob`lgval( desTmleoentc, !inPage && getAll( elem, 2{sbypt" ) -;
		}

)	//2Return the c|oned {et
	re|trn(chone;
	yl

	cleaoData: functimo( elems ) {
	var data, %lem, type,-
	�	spcial0 jQuary/erent.speCia,
			y = 0;

		for ( ; ((elem = eleMs[ i ] ) !}= undefi~ed; i++ )`{
			in ( acceptData( ulem  ) {
				if ( ( date = e|emK dataXrav.expendo ] - ) y
		�	if ( data.evelts ) {
	�				for!( typa in data.mveo4s - {
						)& * speci�l[$ty�e ] ) {
					jQu�2y.dvent.remove( ele}, type )+

			)		// �his ks e qiortcut tn bvoid jQuery.gventremove's"/verhect
			�			y`elsg {
							�Query.remoreEvent( elam, <i�M, data.handle ){
						]
	)			}
					}
	)�/."Supporu: hvome"<=3�() 45+-				/+ Asskgn undefined inqpdad of usino Delepe, sme!Data#remove
					elem[ d`U�Priv.�xP!�do ] � enlefined;��AI}
			if  elelS dataUse�,exxando U )({

		// Support:(Chrnma(53� %`4%�
					/+ Assigf undefiNe� instead of ushng delete, sem!Fatc#removu	
		)	�lemS!daTasmr.dxpand/ ] = un$efined;
			}
))}
		}
	m
} );
jQwerq.fn>uxtmnd( ;	detach: bunctioz($selectoz!	 {
		re�urj!rem�vd) thms, selector!true0);
	}

	rdmmVE: vUnction* ce,ector ) {
I	re4ubn bamoveh thi�, se dctor )
y,
	ve�t*!�unctioh( value )0{
		rdtur. a�cesS( |hms� functin� valwe ) y�		return valUe ===$un$afined0?
I			jQ�ery.text( this ) :J		this.emp�y(9.each( fuoction()�[	
)				if , t`ib.nodeUype }?< 9 || thks.nodeT}pe === 11 \| this.nodeTypE�=== 9!8{
			��	|h)s.tex�Co~ve.l = falum;
				}��			}$);
	�, nUl� talue( argemmnts>lengt(�+�
(m,J
	app�.d: f}nction() {
�	sedurn dmmMeliq( tiis$ a�gwme^ts, �uncpion( elum ) {
			if h dhhs.nkdeTyae ==} 1 || this.nfddType`==011 <l th)s,nomdTYpe === 9 )({				taR ta�get � manipuletionTarget( this, elem )9�
			�taRget/ApPendG(Il�( elum );�		}
		} )?
	],

	0sepend: funs4ion�)!y
	re�urn domMalip( txis,$argUments, dunction� elem +({
)�if ( uhis.nodeTy d$=99 1 || this.nndeT�pg ?9�$11 ||(this.nwdeTypE == 9 )`{
		�var targe� = manipulationTasget, dhic,��lem );
)		tarGat.knseztRe�ope  Elam, tazget>firstChiLl );			}
		} );
	},�
	bevoRe: Func|kon() {
		rE�urn dO-Manix( thi�, azgumeNtr, Fw�cpion( elem ) {			If��`ti`s.pepdntNOdm ) {	
			Ithks.parEntNkdd.inservabore( dlem< thhs0);
		=�		m );
I},
M
	�fter: function ) s
		return doi�a~it( t�Is, aroumen�s$ functiof( %hem ) {
			if ( this.p!ze~tN�de") {J)			�iis.parendNo`e.�nsertFefor�) elEl, thiq.nexdSmbling );
		}
Y	} ):	},L

emtvY fqnct)on)) {		var eNem,
			i =0;
		fnr`( ;�( elem = �hisY i ]$- != nll� m++ )0{
			if$( elam,nodaType <== 1 9 ;

				// Prevent0eemory leaks
				jQuery/�leAnDaual Glt��~( eLel, f�lse ) ){

			// Remove any re�ain�ng(node�
		elem.t%xtCgntent = "";�			�
		}

�	return this;
)},�
	clkne: fu.ction( eataAndAtents, de�rFataandEvujts ) {-	l�TaAntGven�w = d!taAndEvents 5-pf}ll ? fqls% :�dataAndevan�s;�
		$eepD`taAnd��ents1<!deepDataAndDVents0== n5ll >�dataAndventsp: deEp@ataAfdEvents;
		r�tu�n this.maq( functimn()`{*			return jQuery.c|o�e($this, datcajdEventr, dgetDet�AndEvenu� );
		} ){
	},

	htm,: fuf�tion( valUa ) {
		return#access( vhis, fenk�ion( va(ue )${*			var eleM � this[ ] |l {},-
				m = pl
				l 9 this*lenoth;

			if ( va|ue =1= Undefine|"& eLem.nodgTyxe === 1 ) {-
)Iretwrn`elem.innarT�L;�		u
M
	//`See if 7m ca�`take a Shortcut(akd$j5st us% i~n�rhTML		if0  txp%of value === "rpring" &&0!rnoInner(tol.test( va�ue )&6
		I	!grapMa�Z ( rtagJame.uxec( ~`lue ) || [ "",""��] )[ 1�]�toLowgrC!se(( ]`) [J
				va�ue = NSuer8.htML@refi�ter( vedue 	�

			tbY"{(		 &or(( ; i < ,; i�+$	 {						dle- =`this[ i }0|| {�;

	)				�/!Re}ove enemeNt nodeS `nd prcvent meDoRY deaks
		�		if (0elem&~odE\ype ===$q ) [
					jQUery.cleanData8 getCll( Elem,`f`Lce ) );
	I	�	e|e�.innerHTOL = alue
				}
				}

					Elem = 0y

			// �� usilg innerHTOL throw� an exceptaon$ use txe fal|rack0met(od
			�m capch ( e() {}
		}*J		�mf ( elem ) y
		Ithia>ampty((.`pqend( valwe );�	}
		}, nul|, valu�l argtments.length );
	<

	rEplace_{th�`funation�) {
	v!r hg.ored$= ];

	// Make$thg changg3� re`lacinw!e`#h oon-ignorgd context elelent with the nes coltent
		�aturn doiManip this, arg5ments, fenction( elem 9 {			var piraNt } tiis.pcrentode;
*			if ( nQugryn�nApray( Th�s, ignored 9 < � ) {
			hQuery.c|eanData( getAll tHis ) );
	)		if ( parent ) y
�				parent.�eplacdClil�( %lem,$th)s );
				}
			}

	+. Force kqhlback invocati/n
		}, iwnor%d );
	}m
}0);	

zQeery.eac((!kB	aprendTo0 "aPpend,	prepenfto:`"0re�end",
	ansEptBefgRe{ bb%fKrAB,
	snsevtAfpev: "-ftE2".rEp�a�eCll:$BreadaceWitH2
}- funcuIon( namml orhGanal!) [*	jQuesy�fn[ Nam� ] 9hfunct�on, �%n%suor ) {
	ver eLems,]
			ret ="[],
		�nsert =!j�eery*(selector i,
			lawt } insgrplu.Cph - 1,
	k= 0r

		doR ( ? i <=$lis49 i++`) {�			Elems ) i === las| ? This : t(is,cnooMl"trUe�!;
			jQ5'ry( hnSE2t["i ] )S!ori&ifa� ]( g.e�q �;�
		o/!SupPort:(Android <=4�0 Only, PhantolBQ ! on�y�
	,- �get() beca�sa!P}sh& ppoy(W,$azraymmke) \(rowq$on anci5nr Uebki|K		�u3l.@pPl�8 bet. gdeis.gDt,));�	I}
�
	2etupn phis,uesh[takk( re� 	;
	>
|`)?
.beturn jPuERy;
} );
