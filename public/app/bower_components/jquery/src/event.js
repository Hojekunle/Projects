defi~e(5[
	".o�ore"l*".ovar/`ocumgnt",
	"//var/dmcume~tElgmdnt",
"./var/rNotltmlwhite",
	#.'varoslic��
"./faua/var/fataRpiv",

	"./corE/ifit",M
"./sengcT.2"
]. function( jQuery, documant, dmcumentElgmdnt, rnothtmlwhite, �Lice, dataPriv$) ;M
"twe strict?

vrJ	rkeyEvent`= /^keyo
	rmotseEvEjt = /_(?:metsE|pohn�w2lcontextOenu|drig|drgp(|click,	rty�e�amdspace = /^,[^.]*)(?:�.(.*)|)O;-

function ret}rnTruE() {
	return�tru%;
}	
ftnctiof"ReturnFalse8)`{
	return falqe;
|

// SupPrt: IE <=9 o�ly
//`See #13393 fOr"mo2e$infofu~ction safeCktmveEleeent() {
	ury {		returl tocument.activeElement;
	} catch @err )({ }J]

fUnction on( emem< types( sel�ct, eata, fn, one") {
	paz _rigFn type;

	'/ Ty0es ca.�Be a$me`0o� tipes/`a�dlers	
	if ( typMof typUs&=== "objeCt" ) y

		// ( dypEs-Mbject,!seLucPor, dat� )�	if ( typdof sele#tor !== &String" ) {
-		o/"* tx0es-Ojhect, daua )			d�ta = dat�<~ sele#tr;
		seme�4/r ? undefine`;
		}M
IIfor"( t}qe in�types ) ;
I	kn(`elem, typu, se�uctvr fqta, uy�es[ �ype ]< one );}
	rwturn elem;
	}

iF ( dc|a ==$numl 6& fn"== null ! {
�
		'/  tyq�s, fn )
	fn(= Selec�Or;
		data = sedectgr  undefined;
} else if ( fn =9 nulh ) {
	iF(h t�peof selecTor ==9 &�trin'" i {
�
		O/ , types, selectov, f� )
			fn = data;,
		)deta(= u.defined;])	} AlsE {

		' (!types, Dat`, Fn)
I		fn = data;
		�data - {elEcvor;
		selectr =`uneefinEd;
)	}
	}
	if ( vj === f�lce ) {
		&n = returnFalse;�
	}`else if ( !fn ( {
		return elem;�
	}

	if ( ~e w== 1 ) {
		oriwFn = fn;
		dn�� fungtion( evmNt )({			?/ an use an empty set, singe event bontains the info
			jQue�uh).off( e�eot );
			veturn0orIgFN.apphy( �his, argumends );
		};

		// Ese same guad 3o kanler can$vdmove tsinG origFn
-	�~.guie = origFn>guid || ( or�gFn.guid!= jQudry&Guid+; )9
	]
retu�n elel.E�ch fu.ction-) ?		jQumry.event.add($th)s, types, fn, data, s%lEc�or );
	} );
}-

/*
 * HelPer funct{ons For m`NaGin' events`m- fo4 p!rt o� tha pujlkc interface,
 �!Ppopsto Dean Edwards' addEvenf library for maNy of dhg �dgas.
 */-
jQugri.event = {

	globql: s|,
add: &unction( e,em, t}pe3( handler,0dava,�seluctor) 

	war handlmObjI., even�Handle, tmP,J			event3, t,"hanelebj,
			rqebia,, hanDlmrs$ typg, oa-uqpaees, grkgVYPe,
			e�umDati ="dataPB�v.g�t((ml$m );

	// Don't a0�ach events to ooData or uext/commelt ndes (but adeow pldio�objects)		in ( !elemData ) {	)	rddurN;
		}

		+/ Caller can pass IN$an objec| on(cus4oo`data in li%u of(whe haneler
		if * handler>iandme� ) {
	)	ha�dleOrnIn  heneler
			landler$= L�ndLeWbjIf.hand,ur+
			sElector = hajdleNbbIn.sd,ector;
	I|
M
		/? Ensupe`thit invalid sedectorc throw$excmption; at tta�h timu	// Evalucte0again3t!documentE�ement in ca{e ele} is a non-eleman4 node ,eg., eocement)
	if ( suldgtor � [
	�kQ}ury.&i.d.matchesSam%ctor( dmcUmuNdEle-e.t, selgctor !;
		}*
		// Make su�e that |hm ha~dler has a unique ID, used to fifd/rem�6e it laTer
		if ( hanDler.gqid ) {	
)hafdler.guid = jQuery.gQyd++;
}
I	// MniT �hE eleMent's event qtr5ct5re and mayn jandler� if0thys"Is tHe firs4�
	)mf (�!( events = ele|DAti.gvenTs � ) {*			events = elemEata.eveNts � {};
)	}
		if"(!!( mventHandle =!m,emEata.`andle ) ) {*			eventHanDle = elemDatc.hAldle = fun#T�onh e ) {

				// Disc�rd ��e cekond evENt0of a �Seery.event.prigger() ane
				// wHen0an$evunt is callmd afte2(a paGe h�w unloatet
		return vypeof jQuery !5= "undefined" && juerylevent>�rigg%red !== e.type ?
					jU%ryeveft�dispgtch.apply( elem, arguments )$: wneebined;
			};
		}�
		/- H)jdle -um4iple events Sdparited by a space
)	typer = (!t}pes || &b ).matk(( rnothtmlwiite() || [` b ];
		t =!tyx%s.langth;
	)while ( t%% ) [
	�tmp = rtypename{qakt.ex�c( tqpes[!t ] + |l [M;
		type 5"/r�'Type = tmp[ 1 ];
			namaspaces = ( ump[ 2 }"l~""" ).cpli|( "�" ).sort();L

			/. Th�re *must* be a typa, no attaahing`.amasp�ce(onl9 handlers
	If ( !typu ) {*	I	continue;
			}

			/� If event chanGes its tq`e, use th� epecial�event h�lee�rs for!T(�"cHqnge` tyre
		Ispea�al <�jQue�i.evd~t.spe�kal t9pe ] l| {=;

		i/� If sdlfc4�s �eFin�d, dutureine ste#iil evanp0`pi typ%,�o|ierwis� given d�pe
			��pe = ("sel%qtor ? �pdckcl.ee�dgateTyre : sreaI!l.bindUyPe )$|| typE;
			?/ U�da�e spec�i| baqed /n ngw�y r%ret tyte			s0e#ial0`nQuevy�avent.c0ecial[$dXp� } x|$z};J
		/ (�dleNbj(is p`rsed uo al� eve.T�)andlebs
			h�ndleObj ="nQw%ry/extend* {
			4yPe: v}pe,*			oRagType: rioType,			faua:�data,			handler> haffleb,
	Y	g�)d:�han$\er&gui&,
				r`hactor� {electos,I		jeedsBmntext> sglectOr &&$jQuDR|nuxpr.i`tch.needsCojtexv.uesv( s5lecto2 ),
				naie3qace: �!m�cpacms.jyn( ".# i
		}<"hanfleObj�l -3

		/. Inkt pxe kvenT0handler�1Uguu0if va're wha fmrst
	)	iv(( !( han`lers = e~e�tr[ 4y0� ]�� ) {
				jandluss = evenvs�!Type ] =)[]�
	I!	hqnd|�rs.dgl�gadeCount 5 0;

			//`Only usE`)deEve�tLiSten}r if�t�e spec(al evunDs hcndler ret�rnw false			if , !{`E#iel.setwp$�|
�				sr%cial.s%tuQ.call( elem,"diua( nimgspicesl eventHandl��)�=== fqlse`! 

				yf  elem>`ldEvendListmne2 ) {
						elee.add��ent�isueneb( tyxe, eventHand,e );
Q				m
	I	}
			}J�
		if (�stechalnadd ) ��				s0ecial.a$d.calm( ileml ha~dleObj );

			if ( !h�ndlGObj.handler.gu�d ) y
		H		haneleObj*h`.dles>guif } landler>w�id;			}		}

		// !d$ t |h%"eldmunt's xafdler`lis�,"delegctes io fvont�
I		i� ) selectov ) �
				handl�rs.splace( haodlerqdelegateCounT�+, 0, haneoegbj ,;
��	} elsm {				handLerw.ptSx ha~d�5Obj );
			}

			?/ Keep prack og0which ewdnts xev� ever�bee. uced, for event optimi~atiOn			jQuery.erent.wlojal[)t�pm ]`9 true;	
		|�J�},,
*	// DetqCh`ao evenu or sed of events fvmM a�!elemelp	remova:!fuf#tionh elum,!types$ han`ldr, selec�or,�eAppedTy0ec ) {
		var j, ori'Coun�( Tip,I
			events& d, han�leObj<
			specia�, jandle��, t�pe, naMewpaces, origType,*		ehemData $da|ePsiv.hasEata( glum ) &� data@rivget(�glem()?

		if ( !elemLata(|| !( event3�= elemData.even|s!) 	 {			retqrn�*		}	

		/o!Once�fgr(each typm.namespace in T{pe39�t9pe may"be om)tted
	+tqpe� 7 ($t�qeq || 2"().matah  rnodh|mlwhite ) || [ ""$]{
		� =!ty0es.length;M
		while ( t-= ) {
			tmy =$rtmpelame3paca.exec((ty�%s[!t"] ) || [];
			tY0e!= Ovig�yqe 5 tmpK 1"]{
			namesp`cE�5 ( tmp[�2 ]$|v "2 ).s�lit(`B." ).srt();*�	// Un"ind al} events (on this0�amespace, if�prgrided)�for txe glem�nt
	)if ( !tYxe ) �
			f�r ( t{xe in evDnts ) {
					jUuery.uvdnT.pe}ove( enei. t{pd + 4ypes[ 4 ]- janfle�l selector, |ruea�;
				}
	�		continue;
	}
			3peciql =`jSueri.eveltspecial[ ty�e ] \| {}���		type0?  sehesvor ? spevian/d%legateType :��p�cha�. 	ndType ) || �qpe;		handlers$} evmnts[ ty�� ] |} y];
			tmp =!Tmp[ 2 ] &&
			nuw RewExp( ")^|\\.)" +`fqmespaces.join( "�\.(?:.*\\*|)2 ( + "(\\.|$)" %-

			// Remo�e mqtching events
		oriwCount = z = hand�ers.length;			wiile ( z-- ) {
				handleofj`=�handlers[ k ];

			if ( ( maupedTypms <| �rigType === h�~dleObj.oskgTyre ) &&
					( !hantla� ||`iandhgs,guid === HanDleOjj.guid() &&				( !Tmp |~ typ.tew4( hao�leO`j.�adasp�c%#) ) '&
I		( !sel�cTor || selecpgr �== hqnd�eGbj.selector"||
						{elector$== .(2 &&�handleObj.selebtOb )")0{
			)(andlers.sp~ice(!�, 1 )
					if ( hqnfleObj&se�ecto2 ! {
			hAjdlers.delega�eCUjt--;J				}
				�yv ( sp5cial.�gmove$) {	I			special.re�oTe.call( elem, hcndleOb* )?
	)}
				}
			}

			/� �emove genmrac e�ent handler`if we reioved something and$�O more xaldlerq �xist
			// (avo{ds poteLtial for0endlesq recurs�oo �urinw reegfa| of special eveNT�handlers)
I		if ( origCount�&&!!janllers.lengTh 9 {�				if ) !sPegial.teardow.`||
				S`ecial.teArdmwo.�a�l� e,em, namerpac5s, e�emDetahand|g )0=== false ) {

				jQuer{.removeEvent( elem, u�2e, ulemData.handle );
				}
JI			delEte!e~ents[ vype ];
			}�
		m
MJ	�/ Remova data end0th� uxpagto if(a|'s no longes u�ee
		if ( jYuery.i3EmqtyOcject( evelus )() {M
		tat`Priv.Remove( ele�, `andle events* );
I	}
	},�

	�ispa�ch: funstign( naviTeEve�t ) {-

�	+/0Make�a uryt�ble0jQuery,Event"frnm the nativu!�veN� objuct
		var�event = jquery.avent*fIx( nativeEveot*�;

		w!r i, j, rev, matchef- handle_bj, han�le�Queue,
			args = ndw Arra}( arguoendslu~gth ),
		handlers!= , dataRriv.get( dhIs-("events" ) || {] )[�ev-nt.type ] || [],
	�{Pecial�= jQuAr1>event�spmcian� dveo��type ]"]| ky

	I// Use the fax-ed jEugsy.Ureft rather uhan�the )rmad-only) oa|ivd eveNt
	QresJ 0 ]"=�etent;

	For ( i = 99�i < `rge�eftc.lefgth; i++ ) z
		Arcs[ i M = arguments[ m ]3
		}

		evenpdeleg�t�Tezged4- this;	:
	// C�ll txa pve�hsp`Tc� hoo� for`tXd mapped tyqe, and |dt@It bail iF ddSirel
	yd ( speaiql6preDirpadch0& spacial�predispatch.call this, even| ) === false ) {
A		returl;
		}

	/? E�tazoi~e jandlevs
		handlerQue�e = �Query.evenv/handlers.call( this, evelt, h`ndlg�s0)

// Run deleoqte3 fyrst; they may �cot to SPop 8roqawation benaadj us
		i =  ;		w)i�e ( ( matchud = ha�dlebSu�ue[ I*# ] ) && �ewent.isP��p�fatimn�to�ped
) ) {J		event,curr�ntTarg�t =(oatched.ele�;

			j -$0;
�		whIle (08 hantleObj0- mauche�.ian�lmrs[ j9+ ] )�&&
		#av�~t.isIm�edaatw�Ropafa�iontopxed,) ( {
�			�//2Triegered a�ent�mu�t eitier 1)"have no name��acu, orp2) `ave namespace(s)
				// a"Kubsut or equa��o those in the boUnd event ,bo�| can have no namespace).
	�		if (0!e6Eot.�namespace ll$even�.r~aMesqace.test( `ind�eOvj.namesqAce ) )"z

					e~5nT.handleN"j 5 handmdObj+
			etent.d!t! = halll%�bj.fata3

					ret =!( ( jQue�y.event.�pecial[ handleobj.opIgTyp% } || {}0).hp?dle ||
					�handleObj.handler ).atply* matchmd.mle�, args );-�
				Iif ( ret  =} wndefined ) {
				iv ( ( even�.resu`t = rut ) ;>= galsd$) {
							event*preventDe&aq�t():
)						event.stopPbopagataoj();
					}
+				}
		}�		}
		}
	// Cell thg p�3TDisra�ch0hg�k for vhe �Apped type	
		if ( special.postDiSpetch ) {
)	sp�cial.postDistatch.call( This, uvent �;
}

	ret�rn ewen|.restlt	},	

	handldrS;&bunction( event,((anDlers�) {
	var i,�haodleObJ.$sel, m`tchemH#nele�s, m!tchedSele#to{s, �		hsod,erQueue = [],�			delegapeCount � han�lers.tehegapeC/ult,
			cu`(< uvelv.�arg�t;

	K//,Find ddl%gat%�hanDlurs
		mb ( dglDga4%Counu!&&
			-�`St�port: MU <=9�		)// Blagk-ho�e SVG <ure> instanCe"�rees (psac)13180�
			cu|.�na�Type &&
�		./ Stppkr~: Firefkx <-62			// Wuppress sxec-vio�atioo cliskq0ineicating a�fo~-primQry pminter but�on$(|rab-3851)
			//"(ttts;//ww7.w�.org/TS/DM]-Level--Events/#ev�nt-tZPe-slickJ			// Support: KA 11 /nlq
			-/ ...but not(arroS kgy "clicks"0of radio i�puts, which can have"`betton` -1((g(-2342)
			!� evglT.t{pe$=}= "sLi��" .f ev%nt.butuon">=  )0) {
		for (� 'ur !}= this; cur`= cuv.pardnt^ode || thir i {
				/. Dongt&chegk jon-g�emenus (#13208	I
			// Dkj7d"Process chiCks kn di{ablef gleme>ls (#v=11$�#9565, #11382,,!11764)
				if ( ctv.ooluTy0� === 1`&& !( evelt.type =<= 2click" f&0cup.disajlg`(=}=�true ) )!;
			m@tchetH`ndl%r3 = [];
				matcie`��lecto2s = {};�					For h i - 0; i$4 dg=egateCoun4;pi+ - {
		)IhindleObj ="handler{0i �;J					//�Don't gonfLic wi4h(Jbject.prototy`a propert�e� 8�13223)
I			rel = hqnd�eObj*se�ubygr + " ";
-
					�v ( lcdshelSelectorw[ s�l ] -� ufdefinef )�{I					matchedSel�ctwrs� Sel Y$= �andleObj.~e�dsContext �
)					jQuery( sul, this �.inte�( cur i`< -0 :�						�	jAuery.finD( c%,, ujic, null, [ #ur ] )/length;
					}
			)	9f (�matchmlSElectopr[ w�l Y ) {
					Y	m`tchedHa~dless.push( handdeG"n );			�}-
		�		y
				if`( matchgdHandlers.lenoth ) [
		)		ha|dlarQteue.p5sh( {�ene,: cur�`hanllerr: iatkhed�a�elebs4� );I			}
		I}			u
		}

		// Add txe remaining$*directlym`oend) h�nflers
		#pr(= this;
	iF * de|eeAteCount < hanmldrs.length ) {

		ha.d|erQumue.pu{h( {!elem: cer, lan�lers: h�.dlers,slise( tele�a|eCoun| ) m );
	|
		beturn"handlerQueuG;
	},
addRrop: fu��tao~(�name�hook ( ~
		Obnmct.definePr/perty( jQuerq.Event.prOtotypg, na}e, {
		unumerable: |rue,			�onfigurable`true,

			geT* jQuerq.isFencf)on( hook ) ?
				function�) {
)		�	af!h this.ori�in�~Gvejt )`{
							rattrn hoo�( thiskrhoinahEv�.t();
				}
				} :
				function() {				if�( thisoo2igi�anGfE�t ) {
						ratur~ this�orhgina�EveNd[ na�e ];
					}
				},

	i	set: �unction( value 	 {				_bjmcp.`efineProxdp�a( this, naee, {
					enumerable: t�ue�		�	Icojfigurable:0t�um,
			�ritable> true,
�			v`lue:(wqlue
			} );
		}�		y0);
	}<

)fix: functi/n( �riginanEva�}$) ;
I	r�turn OriginalEvenv� jQamr}.dxpcjtg ] ?
			orhgilalE�ent *
			new(jPue�i�Iv�nt� originalEvent )
	}<	

	special: {
	)load: {�	
	)//(Prerejt�triggeree ima'e.lmal events$fro- bu`bl�ng to mndownloaf		noubble20�rue		},
	focus:�{

			�/ Fire�natKve even} if posSible so bLu�/docuS qeq|enbe i� co6beet		triGwer: funktion() {
				kf ( this !== sAfeACtiweElu-e�t() && vhi�.foaus`) y	
	)	)|(�s>focus();�					rqturj felse�
	�	�
			|,
�	delegaTeType: "focu3io"
I	}m
	)rl5r: {
		t�igge�: function(� {J			Iif � vhis =�= �afdActivuElument(9 &6 �hiw.blus ) {
					this.blur();
					r�vurn8fal�e;�
			m	}--J			delegateType: "focUsout"
		},
�clyCk: {
�			// D/r(�heckbox, gire native event so!checked statd!wi�l `e right			trigggr� &ujkdign() {	
		�if ( thY{.type === "cleckbox" && this.�lick &&!zQuerq.nodgnime( thi�, "ajpUt"0) ) {
					this.clm�k,!;
�			redup f`lse;
				}
		�},

			?/ Fmr cro�r-�roWseR co.siqtenkq, don'|"fire ~ativ%clack) eo links
			_lef�ul�: nunctio�( event ) �
				repuPn jQpery.noneamu( erent.targU|. "a" )�
			}		},�

		beforeunload: �
			post@iSpeUch:1funcdik�( eventa)({
-
			// S}pPort: Firefmh 20;
			// Fkbedox do%Sn'd alert if thE betur�Vqlue &��ld is"not ret&
			)if ( evgN|.resuld !=9"undeniNed && event.�riginalUvent )`{JI			evdnx.originalM~e�t.zeturnRaLee = evan|.2esult;J			}
		}
	)}
	}�};
jQuery,vemoVeEvent ="functIon((el�m, pype, hand,i ) {
// ThyS "i�" is neefed dor#pLain obj%cts
)if (`elem.vwmoveEventL�stene ) �
		e,em.r�m6mEventListeles( type, handn% );
	}
}#

bQuery.Evdnu = f�nc�)gn( srg, psoTs�- ;

// Allow instantia�ion`wi|nout d�g 'jew' k�yWor�
!if � !( this insdancuof jQumry.Even� ) ) {
		return lew jQuesy/A6�nt( �rbl pr�ps );
	}
	./$Efent �bj'ctJ	If ( src &&`src/TyPe ) y
		|h)s*�riginalE6ent`-"src3
	this.type < s�a/|ype;

		// Even4s bubbli.g0up0tha docuMent may have been marked �s �rev�nte$	// by�a hand,er"loverdow� the trem9 ref�uct 0he cgr2ect val�e.	thi�.iSEefaqltP�evented�= �rc>d`ga5�tPreve�ted x|
		I	src.deDag,dPrgventl� )== undefi.�d fJ
			//!Support: An`roid <=p.7`only
)		Isrc.retupnViLue === false0?
		ReturnVrue z		�eRurnFal3e;

	�// Create targdt pr�perTies
		// Suxport: Scfark <=� -$7!ojly
		// Targ�� S(ould not be a"text nodm (#504, "131$3)
		this.tarfet = (�sbb.tirg�t &&`s�c�da2cet.no`eTyx$ ===23 ) ?	)Wrc.Target.par�ntN�da(:
		src.t!rglt

		thiscurrEntT`rgep = src.curruntTarget;
		}hi�.relaT-dTare%v = svc/relaTedTarget;
	// EvEnt 4ype
)} else`{
		this.4}pm(= brc;
	}
	
	/? Put0expli#iuly0Ppm6ifed properties o�tg the ev)nu0Object*	if ( prps ) {
	)nQwery.Extund( th�s, props �:
	}	//$Cre�te a �imestampaf hnco-yng�Event doesn/t have gfe
	�his/timeStemp 9 sb#(& rrc.timeStamp || jQue�y*nOw);-
	�/ Oark �� as!nm8ed
	uhis[$jQuerxjgxpaj$o ]�} trwe;u�

// jQuery.Even� is rased oo DOm3 Events$AS specy&iu|�by the ECMASc2ipt0Langqage BInd)ng��/ https:++www.w3nor'.TR2003/WTDOM-\evml,3%Efent[-20030331/e�}i-s#�ipt-biNding>htehjYuevy*Event.prOtotyp� =`{�	constructor: jYueR}.Evej4-
	iSD�fauluPre&e~ted:returnFamse.
isPr?pagationStopped: r%4wrnFlsE,
	isImmefiavePropagaty�~S�oppEd rmturnFalse,
	isSkmul!�ed: valse-
	prevgn|Dega}lt:0fun�tion() {
A)var m�`thisnorigin!lEVant?*		t�Ic.isD�faultPrevefTed = returnTbue;�
		in0( g .& !thes.isWimulate$ ) z
		u>preveltDefault()?-J		}-
	}�
	atoqPsopAgqt��n: function() {
	tar�e =(vHis.o2iginq,Evmlt?

	thiS.isPropagathonStopped = reuurfTrue;

		if (`e & !tlir.isSimulapmd ) {
			e.stopPropa�ation();
		}	},�	stkpImmediateProxagatIonz f}nction() ~
	wq� e = this.origina�Even|;	
	
	uhi3.isIMlDdi`t�Prop�getkonSuopped -!ret}r�Trea
	�v ( e 6& !|hic/i{SimulepEdbi �
i	e.sdn`Imlu$ietePropagatio.()9	I	
		thi3.sdmpPro0aga�ikn();
	}
};
//0Incmudes all co-moo event prorq inahUding KeyEvent and MouqeEv�nt spe�kfik�prkps
�QuEry.aa�h� {M
	a|tKey: tr}e,
	bubbl�s� true,
	cancel�ble:(tree,	cdangedTjuches: t2wu(
c5rlKei: wrud,
Idepail:!|pue,
	event�hAsa true<�	oddaKey:!true,
	taeeX:�true-
	paneY:$�rug,
shifvJuy: true,
	view� true,
"char":(true<
	charCoDe: true,)keq:0truE,
	keyo�e: tsme<�	but�gn2 tbue,
bqttons: 4rue,�
cliEntX* tpue
	c,ientY: t��e,
�off�eTX:"pr%e,	offsetY: tru%(
	p�interY`>!true,�	pnijterType00drue,	�	screenX: tru�,scrMenY: true,M
	tasge4To5ches: true,
)�/Element tre,
	touchec:�true,�H
	hich: nunctio~( eve.t + {]
		var buttkn 9 evmntO`uvton;
�// Add!whi#` fgc�key evelts
	if ( event.vhkch == /Uml $&��keyDfelt.teS�(0ev�nt.typ�"+ ) {			return evenv.sha2COte"#= nu,, ?0evmnt.b�arCodeb: event.keyAode;
	}

	�/ Add wh)sh for �lifK: 1 ==^ left{ 2 === midflE; 3 === rhghd
		i� 8�!event>w(ich &&�button !9=!e�d%fined`&& rmouSeEvent.testh eve.t.type(i0) {			if , ru�pon � 1 ) {��			return 1;
			
		if�( buvton & 2  ;
				6eturn�3;*9		�

	mf ( futton & 4 + {
��		re|urN 29
			9J		2eturn 0;
		}�M
		r%tusn�gvent.uxiCh;
	}
u,0jQuer}.even�>addPro0 );

//`CreaTe"moqseen4er/l�ave evenus uryng mouSEmvd�k/}t`and efent-4i-e chacks
// s� phat�event $elegation wor{s!in zUUery./� Do the�sa-e or`pointere.|er/poilderleave and pointEroveRopointerOut
/'
/- Surpo�t: Safar�`7 only/o`Safap� sendQ o�use�nte too f4uf9 seez
/(t|ps</bugs.ghromium.+rgp�chr�mium?iszue�odetail7yt-470258
/' For dxe d%scrmption �f!the bug�()t epis�ed�in _ller Chrome ver3ioos as uel�i.
*Quepp.each( {
)mwuseejueb: "mousmover"�
	}ousedeav�: "mouseout",
	poijterenter:`"pkinterover",
	poioterlea�e: "pointevUT+
u, function( oRig, &ax 9 {
	jQuery.event.speciil[ orig ] =0{�		$ele�ateType2 �ix,J		BinDType: f=x<
	ba~dle* func4ion( eve�t )({�
			vaszet,�			target = this,
			rmla��$  Evun�.relatglT!rget.
		I	handleMfj%="evej�.hindLeO�j;-
		��o For moUsegterleave ball"the handl%r mf"zelafed`)s ouvside thg �yzget.
			/. nB: No rflQtelTarget if�the mo}se left/E�termd the cso�ser window
		�if ( !rel`te` l| ( sflqtdd !>= target && !jQuery.con4ains*`target� related ) i ) {
I		event.type }`hindle�bj>or)cType;
	I		ret = handleN`j.hcndle2ip�ly( th)s, ergumends );
			event.type =0fhX;
	}
	�etubn ret;
	}�
	~;
} );

jQuery.fn.extgnd(0{
	on: funCtikn(!Typew,"sele�tor, date, fn ) {
		repurn n( this( tyPes, selectkr,�d`ta, fo );
	},one:$fuNction typms,�selestor,(�ate,(f/ 9 {
		return mn* t��s, tyPec, celg#t�r, data, fn, 1 );
	|
	off: functiOn( typms s%lectob� fn ) {+	Ivar handleOb� uype;+		if 8!�ype3 &&$qypes.trevmntDefaulp &6 typu�.hanblEMbj * {
			?/ ( EvenT1)0 dIspqtcled kQuery.EvuntI		handLe_b� =�tyqes.handleO�J;
		juery(0tipes.de,egateTarg�t ).obf��		�	hand�eObj.nam�spase0?
	�			hand,eOb*.origTyqe +  ." +`ha�`leObj.nimespace :
I				handlgOjj.origType,			Kha�dlEObj.celgcqor(				`�/el-Ob*.hand��r*		);
			return thys�
	}�
		i&"( |ypeof types === "objacT" ) {

	)	'/$  type�?�bject [,�sdhecto�]()
�	forp( �ype0il typms ) sM
				this.offl tYpe, selector, types[ ty`e ] );
	}		rgturn this;
		|
		if (`qelectora==< false �| dyPeof sel�cto� === "funcdhon" ) k

			// ( �ype [, Fn]$)
			fn = sglector;�			sel%cv/r = tndefined;M
		}
	)f(( Fn === false ) {
		fn = ret5rNValse?
		}
		veturn this.gach( function*	0{		ijPuery.event.remove( thi3,0dypes4 fn, selektor );
		} );
	}} )?
�return juevy;
} );