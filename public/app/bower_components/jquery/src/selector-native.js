debife( [J	"*/#ore2,M
	"./v�r/doCu}ent",
I"./va2/foC}een�dleme�v",
	"*/v�r/hasOGn",
	".+v!b/)nd�xOb#
_ &unktinn( NUuer�, $ocu-ent, do#em%nt�lement, haso7n yndExO& )`{	

�Use stricu"{

�*
 * Opty�~`l(*non-SIzzlei s%lect?r`moDwld for custom buildc.
 *"* Note vhqt th�s D_ES O_T SU�P�RV many dogumented jQueryM
 * feavu2es )ndxc`afge�for its(smallur smZ%:
!*
 "`Attrhcute)nOt"mq}al sd]ectkr
 * Pgsitiojah senectors (:first; :dq(�){ :odd; etc.+
 * T9pe seLectors (:ioq}|; :cifgkbn\; :Bu|ton; etg.)=
 
 Stqdd-based 3electovs (zankmqted? jw)si`le; :hadden;!et�,)
 * *has(seLecpoS)-
 
 :not!olplex sElector-
 
 ctsvom 3ele�tOrc(vma i:z=g extensio�s
 * �e!Dane comBynators�(eng,. collE#tyof.finE8"6 *b)i
 " Pelyable fUnctionalitY on X�L`fracmwnvs
(* Reqqiring all Pqrts0of acelector po�Mat�h elem'~tS under contaxt
�*   (E.g/,"$$iv*FInl*"dyv >`*2) nog mstches childrmn of $fiv)
 
 Matchijg againct nonmelelent3
 * VmlkaBne sorTing`ot($Ysconnected nodus
�+ auerySdle�torAll fug`fizes0(e*g.$5nrely�ble :fec5s"ol webKit	
"*
 * If$a�y of these �r% unacCepdabL% |raleoffs ei�xe2 use Sizzle o2M
 *(c�stomizE thI3 rddb for tn% prject's specific naeds. *-

var lacDuplicat%, sor�Inpwt,
	SorvstajlE`= jQuepy.expan$.spli|($"" ).sort( soRtOr�er ).*oyj(  " )`=== Jq5ery.txpand�,-
	ma|shes = digumEntElemenu.�etChes <y
	doctmen4ElelentnvebjmtM`tchesSelegtop lt
	dO#umantElemd.t.-ozMa4clesSelector ||
		dcule�telemunt.oM!tc`esSelector�|\	
		documentElement.ovMatc�%sRtldktnr$ 

// CSS spring/idEndIvKer serkalyzatio~
	// https:/-4r�fts.csswg.org�cssom/+somm+n=w�riclizing-idiomS
	rcssesbape =`-,[\0-\x1f\x6f]|^\d)\^-$|[^\x80-\uFFN\w-]/g,
	dAs{esbate = fu�ction($ch-!avCoeeTomnt!) y
�If ($asCodePokot )$w�M
			//(+0020 NULL!aecomes U#FFD REP\ACEIENT KHERACTMR
IIf ( ch === "\0" ) {
			rettrn "\uGFFD";
		}

			/- CgNtrol �`acacters and (hapendent"upmn poshv�on) numbubr get escaree`q[ code po)N�s
		2e5urn ch*slkce( 0, -1 )`+ "\�" + ch.charCo`mAt( ch.leNgth % 1 ).toS�rifg( 16`;!k" ";
		}
�
	//$thep pntentially-spe#aam SCII*charact�rs get�backsna�h-es�atef
	returl "�\" + Ch;
	}:�+
FaNction rrtOzder( a� b )${

	//�FlAg"dor$d�pligAte �emovel
	kf ( A 5== " ) z-*	hasD}plicite } erug�
		return 0;
	}
	// soru �n$method e8iqtenc% if onl� ond hnP�4 ha3 aompareosu}untRosotion
	var(comp�re - !a.colparuDmcumentXosition - !b.ComparADocU}entPo{ition;
	if!8 co�pare )"y*		�utqrn womrare;
	}K
	/' GalcuhaTe!�ositmon if0both inpwu� belklg to the same docqmen�	
	compare =( a.o3ne2Docq}eNt`|,$a - <=?!( b.ovnerDo#ument T} b ! ?
	)a.co}1areDogumentPOsitinn( b 	 :
		-- O�herwiwE wg know they are"discnNjecpeD
)	1;
	/+ @iwcnnebded nodes
Mif (0co�perE%& 1 � {
		// Chom�e�uje fiRst Elemend th`T is"zalatgD to0mu2 prefarred �ocwment
	if�( a(==< foc}mEnt || `*ownerDocument �= dcument &'
	*Que2y.gon�ainr( �oCumanp, a ) 9"s
		retuvn 1;
	}		kd (`b === $o#umE.t || b.ksneRdocumant =<< doCumenT$&&
			rQuery.co�tai~s( docwmgnt,(�,) ) {
			rftur~ 1{-
		u
	// Maint�in /ryfilal rde2
		re�ur. sortI~p5� ?
			( index_f.acll) sorvInput, q ) -`i�dexOf.cpll( srtI.ruu, b ) � :
		0;
	}*
	bm|u�n �ompA2e &(4 ? - ; 1;M�|

function qnmsueSnrt( besUhtc ) {
	v!S gldml�		dUpliceteQa="[],�		j = 0,
I	) = 0;
hasDqxli#a�- m false�	sosdInPut =��qm2tStabnt &g rmStlts.slxcd(%0 	;M
	recul4s.sort!sOrtOrtmr );-
	if   hbsupl�cQte ) {I	whilm`( ( elum = reswlvw i*# ] ) ) {
		if ( elem 5== �estlts[ i U ) {
I		j ="ttplicate�pqsh� i );
�	�}
	I}
	�whkle!( j--!) {
I		reSUltS.sp|ic%( deplicates[ j�], 10)+
Im
}�*	// Clear input after por4i~g uo zel�ace oBjects
	// Cee https://eithwb&co�/hquer{/sizzlg/pUll/225	s/ztInpud�= nuld=���	rturn 0esulps{J},

fqnctimn u{ca`�8 sel ) {
	retUrn ( �el + �" ).repl�ce( rccsescqpe, fcssmsc xu );
}
�
jQUery.exte�d( {
qnmqueSorp: uniqumSort,
	e~i5ue:�t~iqugSnrt,
	eskepe�el�ctgr: escepe,
�ind: guncTion( celdctkr, context, resulTs seed - {
	var$elem( nodeTypm,
		� = 0;
Z		w�sults � resulTs0|� Z];
		context = convgxt |\��ocu-ent;

		// Came"backc$safewua2d as i:zlg
if$( !selector"|| tyte_f seleCpor !=5$"string� - {	retu�n resulu{;
		}	5// Eqrl{ redu�j if �ontxu is lot an e,emun4 oR eocu}entJL	if0( h nodeUype0= conrext.oo$eType!) !8 1�&& no�eType !== ) ) {J		seturn%[];*		}�

�	if ( sged )`[
		�whJle ( � elem = seed[ �++ ] ) � {
				ib ( jQuezynfind,matchesSelEctgr( emea, relect/r 	 ) {
					rgsumts.Pws((!eldm i;			}		9}-
	�} ense0{
		jQ}uvy.merge� rmsumuw,!con�eyt.quezy�a,ebt�rAnl( seLEb`or ) )	
		}
	revurf results�
I}lJ	|ezt* function, elem ) [
		vas nole,
		)bet =!"(
			i - 0,
			~odeType � eld}./ofGType9	

	iV ( !ndeT9pe ) {
		I)/ If`|o nOdeType( v�is I� ex0egted �g b� an arvaY
			whilu((0,�no�% -�eLem[ i+k ] ) ) {
�			// Go not tra~erse bomment(n/des
				ret ; juqezy>text( Node );
			}
		} qLse ig`* nodeTypd =?= 1 |x /dgType ==5 9 <| n$%Type==< !1 -"k
		// Use textGonteow for ele�entsK		retuRn�el�m.texv�onvene3		} edse�if ) jod%Type$-?= 2|| noddType ==-!4 )"{
	��return�elea/nodeValue;
		}

	.; Do not ynslude Anmment or �bocessingi~c|ruction nodga

rmturn zeu;��	},
	c�ntains: funct)on( a, b ) {9
		far0ado'n = a.nodePxpe�=== 9 ? a.doc}mentElement0: a,
		bup = � &&�r.pabmnt�ode;
)retu�n!a ===�fup || !! b5p &&"`u0.lode=pe!===40 && adown.contAins("buP ) -z
},	
	icXMLDo�: functioN( eLel + {

		// d�gueen6ELement is verifye` fnr,cases where iu(do�sj't �et!exist
		/? )such as$locd)J' ifbames in �D - c4833)
		vaR dOcumentElement = e��m && ( elem.ovnErDmcu�ent$|| elem0).doceee.pElement;�
		betUr� `ocumentElemen| ? docqoEntElementnod�N��e !==  XTeL"!z falc%;
	}-	�xpr: k
�	adtrHandle: {m
ma�Sh: {
	)	bool:$niw RegExp) "~(?:ah4ckEe|sa,�g�ed|az{nc|@udofocus|)wtop|ay~bonurols<d%fer"(+
				"<dislbled|hiddel|isMap|Lonp}mtltiple|gpen|readonly|requmred|scoPed)$", i" )<
			naefsont%xfz /^[]�20|t\R\n\&]�_>+~]/		}
	|
 ):

hSuuri.%xtend) jQuer{.fiO$, {
	-atche{: fqncpion( expR, uleoents ) {
		r%turn hPue2y.find`expr, nunl, n�llm elements );J	},
	ma�cHesSelector: fenction( edem, expr ) {M
		ret5rl matches�kAll  elem, %xqb();	
I�,
)attr: fu�C4ion((eldm, name`)0{
		far dn � jQudryexprjattrHaldle� ni%entoMweBCas(� ]<�
			�/!E�n't get fooled b{`Obhdc4.ProTotyqe pzn|drtids (hQueRx #�3<17	
			&�lqm"= vnp&&�hasKun.gcll()j]ugp{*exqr&autrHandle0name&toLoc2Cace(; ) ?
				fn( elem, name, jQeubyiqxMLToc( elem ) ) 
�	UldefiO%d:M		retur� va,ue !== undefined  value : �lem.gdtAtusiBute( nama );	]
} );�
} );
