/**
 * Bible namespace, Bible chapter/verse statistics, Book names and abbreviations
 *
 * @license MIT/GLPv2
 * @author John Dyer (http://j.hn/)
 */

if (typeof window.bible == 'undefined')
	window.bible = {};

/**
 * @description ID with chapter/verse statistics and English names
 */
bible.BOOK_DATA = {
"FR":{"name":"Front matter","sortOrder":0,"shortCode":"FR","usfm":"FRT","osis":"Preface",
    "chapters":[null],
    "names":{"eng":["Front matter"]}},
"IN":{"name":"Introduction","sortOrder":1,"shortCode":"IN","usfm":"INT","osis":"Intro",
    "chapters":[null],
    "names":{"eng":["Introduction"]}},
"GN":{"name":"Genesis","sortOrder":2,"shortCode":"GN","usfm":"GEN","osis":"Gen",
    "chapters":[31,25,24,26,32,22,24,22,29,32,32,20,18,24,21,16,27,33,38,18,34,24,20,67,34,35,46,22,35,43,55,32,20,31,29,43,36,30,23,23,57,38,34,34,28,34,31,22,33,26],
    "names":{"eng":["Genesis","Ge","Gen"]}},
"EX":{"name":"Exodus","sortOrder":3,"shortCode":"EX","usfm":"EXO","osis":"Exod",
    "chapters":[22,25,22,31,23,30,25,32,35,29,10,51,22,31,27,36,16,27,25,26,36,31,33,18,40,37,21,43,46,38,18,35,23,35,35,38,29,31,43,38],
    "names":{"eng":["Exodus","Ex","Exo"]}},
"LV":{"name":"Leviticus","sortOrder":4,"shortCode":"LV","usfm":"LEV","osis":"Lev",
    "chapters":[17,16,17,35,19,30,38,36,24,20,47,8,59,57,33,34,16,30,37,27,24,33,44,23,55,46,34],
    "names":{"eng":["Leviticus","Le","Lev"]}},
"NU":{"name":"Numbers","sortOrder":5,"shortCode":"NU","usfm":"NUM","osis":"Num",
    "chapters":[54,34,51,49,31,27,89,26,23,36,35,16,33,45,41,50,13,32,22,29,35,41,30,25,18,65,23,31,40,16,54,42,56,29,34,13],
    "names":{"eng":["Numbers","Nu","Num"]}},
"DT":{"name":"Deuteronomy","sortOrder":6,"shortCode":"DT","usfm":"DEU","osis":"Deut",
    "chapters":[46,37,29,49,33,25,26,20,29,22,32,32,18,29,23,22,20,22,21,20,23,30,25,22,19,19,26,68,29,20,30,52,29,12],
    "names":{"eng":["Deuteronomy","Dt","Deut","Deu","De"]}},
"JS":{"name":"Joshua","sortOrder":7,"shortCode":"JS","usfm":"JOS","osis":"Josh",
    "chapters":[18,24,17,24,15,27,26,35,27,43,23,24,33,15,63,10,18,28,51,9,45,34,16,33],
    "names":{"eng":["Joshua","Js","Jos","Jos","Josh"]}},
"JG":{"name":"Judges","sortOrder":8,"shortCode":"JG","usfm":"JDG","osis":"Judg",
    "chapters":[36,23,31,24,31,40,25,35,57,18,40,15,25,20,20,31,13,31,30,48,25],
    "names":{"eng":["Judges","Jg","Jdg","Jdgs"]}},
"RT":{"name":"Ruth","sortOrder":9,"shortCode":"RT","usfm":"RUT","osis":"Ruth",
    "chapters":[22,23,18,22],
    "names":{"eng":["Ruth","Ru","Rut"]}},
"S1":{"name":"The First Book of Samuel","sortOrder":10,"shortCode":"S1","usfm":"1SA","osis":"1Sam",
    "chapters":[28,36,21,22,12,21,17,22,27,27,15,25,23,52,35,23,58,30,24,42,15,23,29,22,44,25,12,25,11,31,13],
    "names":{"eng":["1 Samuel","1S","1 Sam","1Sam","1 Sa","1Sa","I Samuel","I Sam","I Sa"]}},
"S2":{"name":"The Second Book of Samuel","sortOrder":11,"shortCode":"S2","usfm":"2SA","osis":"2Sam",
    "chapters":[27,32,39,12,25,23,29,18,13,19,27,31,39,33,37,23,29,33,43,26,22,51,39,25],
    "names":{"eng":["2 Samuel","2S","2 Sam","2Sam","2 Sa","2Sa","II Samuel","II Sam","II Sa","IIS"]}},
"K1":{"name":"The First Book of Kings","sortOrder":12,"shortCode":"K1","usfm":"1KI","osis":"1Kgs",
    "chapters":[53,46,28,34,18,38,51,66,28,29,43,33,34,31,34,34,24,46,21,43,29,53],
    "names":{"eng":["1 Kings","1K","1 Kin","1Kin","1 Ki","IK","1Ki","I Kings","I Kin","I Ki"]}},
"K2":{"name":"The Second Book of Kings","sortOrder":13,"shortCode":"K2","usfm":"2KI","osis":"2Kgs",
    "chapters":[18,25,27,44,27,33,20,29,37,36,21,21,25,29,38,20,41,37,37,21,26,20,37,20,30],
    "names":{"eng":["2 Kings","2K","2 Kin","2Kin","2 Ki","IIK","2Ki","II Kings","II Kin","II Ki"]}},
"R1":{"name":"The First Book of Chronicles","sortOrder":14,"shortCode":"R1","usfm":"1CH","osis":"1Chr",
    "chapters":[54,55,24,43,26,81,40,40,44,14,47,40,14,17,29,43,27,17,19,8,30,19,32,31,31,32,34,21,30],
    "names":{"eng":["1 Chronicles","1Ch","1 Chr","1Chr","1 Ch","ICh","I Chronicles","I Chr","I Ch"]}},
"R2":{"name":"The Second Book of Chronicles","sortOrder":15,"shortCode":"R2","usfm":"2CH","osis":"2Chr",
    "chapters":[17,18,17,22,14,42,22,18,31,19,23,16,22,15,19,14,19,34,11,37,20,12,21,27,28,23,9,27,36,27,21,33,25,33,27,23],
    "names":{"eng":["2 Chronicles","2Ch","2 Chr","2 Chr","2Chr","2 Ch","IICh","II Chronicles","II Chr","II Ch"]}},
"ER":{"name":"Ezra","sortOrder":16,"shortCode":"ER","usfm":"EZR","osis":"Ezra",
    "chapters":[11,70,13,24,17,22,28,36,15,44],
    "names":{"eng":["Ezra","Ezr"]}},
"NH":{"name":"Nehemiah","sortOrder":17,"shortCode":"NH","usfm":"NEH","osis":"Neh",
    "chapters":[11,20,32,23,19,19,73,18,38,39,36,47,31],
    "names":{"eng":["Nehemiah","Ne","Neh","Neh","Ne"]}},
"ET":{"name":"Esther","sortOrder":18,"shortCode":"ET","usfm":"EST","osis":"Esth",
    "chapters":[22,23,15,17,14,14,10,17,32,3],
    "names":{"eng":["Esther","Es","Est","Esth"]}},
"JB":{"name":"Job","sortOrder":19,"shortCode":"JB","usfm":"JOB","osis":"Job",
    "chapters":[22,13,26,21,27,30,21,22,35,22,20,25,28,22,35,22,16,21,29,29,34,30,17,25,6,14,23,28,25,31,40,22,33,37,16,33,24,41,30,24,34,17],
    "names":{"eng":["Job","Jb","Job"]}},
"PS":{"name":"Psalms","sortOrder":20,"shortCode":"PS","usfm":"PSA","osis":"Ps",
    "chapters":[6,12,8,8,12,10,17,9,20,18,7,8,6,7,5,11,15,50,14,9,13,31,6,10,22,12,14,9,11,12,24,11,22,22,28,12,40,22,13,17,13,11,5,26,17,11,9,14,20,23,19,9,6,7,23,13,11,11,17,12,8,12,11,10,13,20,7,35,36,5,24,20,28,23,10,12,20,72,13,19,16,8,18,12,13,17,7,18,52,17,16,15,5,23,11,13,12,9,9,5,8,28,22,35,45,48,43,13,31,7,10,10,9,8,18,19,2,29,176,7,8,9,4,8,5,6,5,6,8,8,3,18,3,3,21,26,9,8,24,13,10,7,12,15,21,10,20,14,9,6],
    "names":{"eng":["Psalm","Ps","Psa"]}},
"PR":{"name":"Proverbs","sortOrder":21,"shortCode":"PR","usfm":"PRO","osis":"Prov",
    "chapters":[33,22,35,27,23,35,27,36,18,32,31,28,25,35,33,33,28,24,29,30,31,29,35,34,28,28,27,28,27,33,31],
    "names":{"eng":["Proverbs","Pr","Prov","Pro"]}},
"EC":{"name":"Ecclesiastes","sortOrder":22,"shortCode":"EC","usfm":"ECC","osis":"Eccl",
    "chapters":[18,26,22,16,20,12,29,17,18,20,10,14],
    "names":{"eng":["Ecclesiastes","Ec","Ecc","Qohelet"]}},
"SS":{"name":"Song of Solomon","sortOrder":23,"shortCode":"SS","usfm":"SNG","osis":"Song",
    "chapters":[17,17,11,16,16,13,13,14],
    "names":{"eng":["Song of Songs","So","Sos","Song of Solomon","SOS","SongOfSongs","SongofSolomon","Canticle of Canticles"]}},
"IS":{"name":"Isaiah","sortOrder":24,"shortCode":"IS","usfm":"ISA","osis":"Isa",
    "chapters":[31,22,26,6,30,13,25,22,21,34,16,6,22,32,9,14,14,7,25,6,17,25,18,23,12,21,13,29,24,33,9,20,24,17,10,22,38,22,8,31,29,25,28,28,25,13,15,22,26,11,23,15,12,17,13,12,21,14,21,22,11,12,19,12,25,24],
    "names":{"eng":["Isaiah","Is","Isa"]}},
"JR":{"name":"Jeremiah","sortOrder":25,"shortCode":"JR","usfm":"JER","osis":"Jer",
    "chapters":[19,37,25,31,31,30,34,22,26,25,23,17,27,22,21,21,27,23,15,18,14,30,40,10,38,24,22,17,32,24,40,44,26,22,19,32,21,28,18,16,18,22,13,30,5,28,7,47,39,46,64,34],
    "names":{"eng":["Jeremiah","Je","Jer"]}},
"LM":{"name":"Lamentations","sortOrder":26,"shortCode":"LM","usfm":"LAM","osis":"Lam",
    "chapters":[22,22,66,22,22],
    "names":{"eng":["Lamentations","La","Lam","Lament"]}},
"EK":{"name":"Ezekiel","sortOrder":27,"shortCode":"EK","usfm":"EZK","osis":"Ezek",
    "chapters":[28,10,27,17,17,14,27,18,11,22,25,28,23,23,8,63,24,32,14,49,32,31,49,27,17,21,36,26,21,26,18,32,33,31,15,38,28,23,29,49,26,20,27,31,25,24,23,35],
    "names":{"eng":["Ezekiel","Ek","Ezek","Eze"]}},
"DN":{"name":"Daniel","sortOrder":28,"shortCode":"DN","usfm":"DAN","osis":"Dan",
    "chapters":[21,49,30,37,31,28,28,27,27,21,45,13],
    "names":{"eng":["Daniel","Da","Dan","Dl","Dnl"]}},
"HS":{"name":"Hosea","sortOrder":29,"shortCode":"HS","usfm":"HOS","osis":"Hos",
    "chapters":[11,23,5,19,15,11,16,14,17,15,12,14,16,9],
    "names":{"eng":["Hosea","Ho","Hos"]}},
"JL":{"name":"Joel","sortOrder":30,"shortCode":"JL","usfm":"JOL","osis":"Joel",
    "chapters":[20,32,21],
    "names":{"eng":["Joel","Jl","Joel","Joe"]}},
"AM":{"name":"Amos","sortOrder":31,"shortCode":"AM","usfm":"AMO","osis":"Amos",
    "chapters":[15,16,15,13,27,14,17,14,15],
    "names":{"eng":["Amos","Am","Amos","Amo"]}},
"OB":{"name":"Obadiah","sortOrder":32,"shortCode":"OB","usfm":"OBA","osis":"Obad",
    "chapters":[21],
    "names":{"eng":["Obadiah","Ob","Oba","Obd","Odbh"]}},
"JH":{"name":"Jonah","sortOrder":33,"shortCode":"JH","usfm":"JON","osis":"Jonah",
    "chapters":[17,10,10,11],
    "names":{"eng":["Jonah","Jh","Jon","Jnh"]}},
"MC":{"name":"Micah","sortOrder":34,"shortCode":"MC","usfm":"MIC","osis":"Mic",
    "chapters":[16,13,12,13,15,16,20],
    "names":{"eng":["Micah","Mi","Mic"]}},
"NM":{"name":"Nahum","sortOrder":35,"shortCode":"NM","usfm":"NAM","osis":"Nah",
    "chapters":[15,13,19],
    "names":{"eng":["Nahum","Na","Nah","Nah","Na"]}},
"HK":{"name":"Habakkuk","sortOrder":36,"shortCode":"HK","usfm":"HAB","osis":"Hab",
    "chapters":[17,20,19],
    "names":{"eng":["Habakkuk","Hb","Hab","Hk","Habk"]}},
"ZP":{"name":"Zephaniah","sortOrder":37,"shortCode":"ZP","usfm":"ZEP","osis":"Zeph",
    "chapters":[18,15,20],
    "names":{"eng":["Zephaniah","Zp","Zep","Zeph"]}},
"HG":{"name":"Haggai","sortOrder":38,"shortCode":"HG","usfm":"HAG","osis":"Hag",
    "chapters":[15,23],
    "names":{"eng":["Haggai","Ha","Hag","Hagg"]}},
"ZC":{"name":"Zechariah","sortOrder":39,"shortCode":"ZC","usfm":"ZEC","osis":"Zech",
    "chapters":[21,13,10,14,11,15,14,23,17,12,17,14,9,21],
    "names":{"eng":["Zechariah","Zc","Zech","Zec"]}},
"ML":{"name":"Malachi","sortOrder":40,"shortCode":"ML","usfm":"MAL","osis":"Mal",
    "chapters":[14,17,18,6],
    "names":{"eng":["Malachi","Ml","Mal","Mlc"]}},
"TB":{"name":"Tobit","sortOrder":41,"shortCode":"TB","usfm":"TOB","osis":"Tob",
    "chapters":[22,14,17,21,22,17,18],
    "names":{"eng":["Tobit"]}},
"JT":{"name":"Judith","sortOrder":42,"shortCode":"JT","usfm":"JDT","osis":"Jdt",
    "chapters":[],
    "names":{"eng":["Judith"]}},
"EG":{"name":"Esther (Greek)","sortOrder":43,"shortCode":"EG","usfm":"ESG","osis":"EsthGr",
    "chapters":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    "names":{"eng":["Esther (Greek)"]}},
"AE":{"name":"Additions to Esther","sortOrder":44,"shortCode":"AE","usfm":"ADE","osis":"AddEsth",
    "chapters":[],
    "names":{"eng":["Additions to Esther"]}},
"WS":{"name":"Wisdom of Solomon","sortOrder":45,"shortCode":"WS","usfm":"WIS","osis":"Wis",
    "chapters":[],
    "names":{"eng":["Wisdom","Wisdom of Solomon"]}},
"SR":{"name":"Sirach","sortOrder":46,"shortCode":"SR","usfm":"SIR","osis":"Sir",
    "chapters":[],
    "names":{"eng":["Sirach","Ecclesiasticus"]}},
"BR":{"name":"Baruch","sortOrder":47,"shortCode":"BR","usfm":"BAR","osis":"Bar",
    "chapters":[],
    "names":{"eng":["Baruch"]}},
"LJ":{"name":"Letter of Jeremiah","sortOrder":48,"shortCode":"LJ","usfm":"LJE","osis":"EpJer",
    "chapters":[],
    "names":{"eng":["Letter of Jeremiah"]}},
"PA":{"name":"Song of the Three Children","sortOrder":49,"shortCode":"PA","usfm":"S3Y","osis":"PrAzar",
    "chapters":[],
    "names":{"eng":["Prayer of Azariah"]}},
"SN":{"name":"Susanna","sortOrder":50,"shortCode":"SN","usfm":"SUS","osis":"Sus",
    "chapters":[],
    "names":{"eng":["Susanna"]}},
"BL":{"name":"Bel and the Dragon","sortOrder":51,"shortCode":"BL","usfm":"BEL","osis":"Bel",
    "chapters":[],
    "names":{"eng":["Bel and the Dragon"]}},
"M1":{"name":"1 Maccabees","sortOrder":52,"shortCode":"M1","usfm":"1MA","osis":"1Macc",
    "chapters":[],
    "names":{"eng":["1 Maccabees"]}},
"M2":{"name":"2 Maccabees","sortOrder":53,"shortCode":"M2","usfm":"2MA","osis":"2Macc",
    "chapters":[],
    "names":{"eng":["2 Maccabees"]}},
"E1":{"name":"1 Esdras","sortOrder":54,"shortCode":"E1","usfm":"1ES","osis":"1Esd",
    "chapters":[],
    "names":{"eng":["1 Esdras"]}},
"PM":{"name":"Paul's Letter to Philemon","sortOrder":87,"shortCode":"PM","usfm":"PHM","osis":"Phlm",
    "chapters":[25],
    "names":{"eng":["Philemon","Pm","Phile","Phile","Philm","Pm"]}},
"PX":{"name":"Psalm 151","sortOrder":56,"shortCode":"PX","usfm":"PS2","osis":"AddPs",
    "chapters":[null],
    "names":{"eng":["Psalm 151"]}},
"M3":{"name":"3 Maccabees","sortOrder":57,"shortCode":"M3","usfm":"3MA","osis":"3Macc",
    "chapters":[],
    "names":{"eng":["3 Maccabees"]}},
"E2":{"name":"2 Esdras","sortOrder":58,"shortCode":"E2","usfm":"2ES","osis":"2Esd",
    "chapters":[],
    "names":{"eng":["2 Esdras","5 Ezra"]}},
"M4":{"name":"4 Maccabees","sortOrder":59,"shortCode":"M4","usfm":"4MA","osis":"4Macc",
    "chapters":[],
    "names":{"eng":["4 Maccabees"]}},
"OS":{"name":"Odes of Solomon","sortOrder":60,"shortCode":"OS","usfm":"ODS","osis":"OdesSol",
    "chapters":[],
    "names":{"eng":["Odes of Solomon"]}},
"SP":{"name":"Psalms of Solomon","sortOrder":61,"shortCode":"SP","usfm":"PSS","osis":"PssSol",
    "chapters":[],
    "names":{"eng":["Psalms of Solomon"]}},
"LL":{"name":"Epistle to the Laodiceans","sortOrder":62,"shortCode":"LL","usfm":"EPL","osis":"EpLao",
    "chapters":[],
    "names":{"eng":["Epistle to the Laodiceans"]}},
"N1":{"name":"Ethiopic Apocalypse of Enoch","sortOrder":63,"shortCode":"N1","usfm":"1EN","osis":"1En",
    "chapters":[],
    "names":{"eng":["Ethiopic Apocalypse of Enoch"]}},
"JE":{"name":"Jubilees","sortOrder":64,"shortCode":"JE","usfm":"JUB","osis":"Jub",
    "chapters":[],
    "names":{"eng":["Jubilees"]}},
"AD":{"name":"Additions to Daniel","sortOrder":65,"shortCode":"AD","usfm":"DNT","osis":"AddDan",
    "chapters":[null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    "names":{"eng":["Additions to Daniel"]}},
"DG":{"name":"Daniel (Greek)","sortOrder":66,"shortCode":"DG","usfm":"DAG","osis":"DanGr",
    "chapters":[null,null,null,null,null,null,null,null,null,null,null,null],
    "names":{"eng":["Daniel (Greek)"]}},
"MT":{"name":"The Gospel According to Matthew","sortOrder":70,"shortCode":"MT","usfm":"MAT","osis":"Matt",
    "chapters":[25,23,17,25,48,34,29,34,38,42,30,50,58,36,39,28,27,35,30,34,46,46,39,51,46,75,66,20],
    "names":{"eng":["Matthew","Mt","Matt","Mat"]}},
"MK":{"name":"The Gospel According to Mark","sortOrder":71,"shortCode":"MK","usfm":"MRK","osis":"Mark",
    "chapters":[45,28,35,41,43,56,37,38,50,52,33,44,37,72,47,20],
    "names":{"eng":["Mark","Mk","Mar","Mrk"]}},
"LK":{"name":"The Gospel According to Luke","sortOrder":72,"shortCode":"LK","usfm":"LUK","osis":"Luke",
    "chapters":[80,52,38,44,39,49,50,56,62,42,54,59,35,35,32,31,37,43,48,47,38,71,56,53],
    "names":{"eng":["Luke","Lk","Luk","Lu"]}},
"JN":{"name":"The Gospel According to John","sortOrder":73,"shortCode":"JN","usfm":"JHN","osis":"John",
    "chapters":[51,25,36,54,47,71,53,59,41,42,57,50,38,31,27,33,26,40,42,31,25],
    "names":{"eng":["John","Jn","Joh","Jo"]}},
"AC":{"name":"The Acts of the Apostles","sortOrder":74,"shortCode":"AC","usfm":"ACT","osis":"Acts",
    "chapters":[26,47,26,37,42,15,60,40,43,48,30,25,52,28,41,40,34,28,41,38,40,30,35,27,27,32,44,31],
    "names":{"eng":["Acts","Ac","Act"]}},
"RM":{"name":"Paul's Letter to the Romans","sortOrder":75,"shortCode":"RM","usfm":"ROM","osis":"Rom",
    "chapters":[32,29,31,25,21,23,25,39,33,21,36,21,14,23,33,27],
    "names":{"eng":["Romans","Ro","Rom","Rmn","Rmns"]}},
"C1":{"name":"Paul's First Letter to the Corinthians","sortOrder":76,"shortCode":"C1","usfm":"1CO","osis":"1Cor",
    "chapters":[31,16,23,21,13,20,40,13,27,33,34,31,13,40,58,24],
    "names":{"eng":["1 Corinthians","1Co","1 Cor","1Cor","ICo","1 Co","1Co","I Corinthians","I Cor","I Co"]}},
"C2":{"name":"Paul's Second Lettor to the Corinthians","sortOrder":77,"shortCode":"C2","usfm":"2CO","osis":"2Cor",
    "chapters":[24,17,18,18,21,18,16,24,15,18,33,21,14],
    "names":{"eng":["2 Corinthians","2Co","2 Cor","2Cor","IICo","2 Co","2Co","II Corinthians","II Cor","II Co"]}},
"GL":{"name":"Paul's Letter to the Galatians","sortOrder":78,"shortCode":"GL","usfm":"GAL","osis":"Gal",
    "chapters":[24,21,29,31,26,18],
    "names":{"eng":["Galatians","Ga","Gal","Gltns"]}},
"EP":{"name":"Paul's Letter to the Ephesians","sortOrder":79,"shortCode":"EP","usfm":"EPH","osis":"Eph",
    "chapters":[23,22,21,32,33,24],
    "names":{"eng":["Ephesians","Ep","Eph","Ephn"]}},
"PP":{"name":"Paul's Letter to the Philippians","sortOrder":80,"shortCode":"PP","usfm":"PHP","osis":"Phil",
    "chapters":[30,30,21,23],
    "names":{"eng":["Philippians","Pp","Phi","Phil","Phi"]}},
"CL":{"name":"Paul's Letter to the Colossians","sortOrder":81,"shortCode":"CL","usfm":"COL","osis":"Col",
    "chapters":[29,23,25,18],
    "names":{"eng":["Colossians","Co","Col","Colo","Cln","Clns"]}},
"H1":{"name":"Paul's First Letter to the Thessalonians","sortOrder":82,"shortCode":"H1","usfm":"1TH","osis":"1Thess",
    "chapters":[10,20,13,18,28],
    "names":{"eng":["1 Thessalonians","1Th","1 Thess","1Thess","ITh","1 Thes","1Thes","1 The","1The","1 Th","1Th","I Thessalonians","I Thess","I The","I Th"]}},
"H2":{"name":"Paul's Second Letter to the Thessalonians","sortOrder":83,"shortCode":"H2","usfm":"2TH","osis":"2Thess",
    "chapters":[12,17,18],
    "names":{"eng":["2 Thessalonians","2Th","2 Thess","2 Thess","2Thess","IITh","2 Thes","2Thes","2 The","2The","2 Th","2Th","II Thessalonians","II Thess","II The","II Th"]}},
"T1":{"name":"Paul's First Letter to Timothy","sortOrder":84,"shortCode":"T1","usfm":"1TI","osis":"1Tim",
    "chapters":[20,15,16,16,25,21],
    "names":{"eng":["1 Timothy","1Ti","1 Tim","1Tim","1 Ti","ITi","1Ti","I Timothy","I Tim","I Ti"]}},
"T2":{"name":"Paul's Second Letter to Timothy","sortOrder":85,"shortCode":"T2","usfm":"2TI","osis":"2Tim",
    "chapters":[18,26,17,22],
    "names":{"eng":["2 Timothy","2Ti","2 Tim","2 Tim","2Tim","2 Ti","IITi","2Ti","II Timothy","II Tim","II Ti"]}},
"TT":{"name":"Paul's Letter to Titus","sortOrder":86,"shortCode":"TT","usfm":"TIT","osis":"Titus",
    "chapters":[16,15,15],
    "names":{"eng":["Titus","Ti","Tit","Tt","Ts"]}},
"HB":{"name":"The Letter to the Hebrews","sortOrder":88,"shortCode":"HB","usfm":"HEB","osis":"Heb",
    "chapters":[14,18,19,16,14,20,28,13,28,39,40,29,25],
    "names":{"eng":["Hebrews","He","Heb","Hw"]}},
"JM":{"name":"The Letter from James","sortOrder":89,"shortCode":"JM","usfm":"JAS","osis":"Jas",
    "chapters":[27,26,18,17,20],
    "names":{"eng":["James","Jm","Jam","Jas","Ja"]}},
"P1":{"name":"The First Letter from Peter","sortOrder":90,"shortCode":"P1","usfm":"1PE","osis":"1Pet",
    "chapters":[25,25,22,19,14],
    "names":{"eng":["1 Peter","1P","1 Pet","1Pet","IPe","1P","I Peter","I Pet","I Pe"]}},
"P2":{"name":"The Second Letter from Peter","sortOrder":91,"shortCode":"P2","usfm":"2PE","osis":"2Pet",
    "chapters":[21,22,18],
    "names":{"eng":["2 Peter","2P","2 Pet","2Pet","2Pe","IIP","II Peter","II Pet","II Pe"]}},
"J1":{"name":"John's First Letter","sortOrder":92,"shortCode":"J1","usfm":"1JN","osis":"1John",
    "chapters":[10,29,24,21,21],
    "names":{"eng":["1 John","1J","1 Jn","1Jn","1 Jo","IJo","I John","I Jo","I Jn"]}},
"J2":{"name":"John's Second Letter","sortOrder":93,"shortCode":"J2","usfm":"2JN","osis":"2John",
    "chapters":[13],
    "names":{"eng":["2 John","2J","2 Jn","2Jn","2 Jo","IIJo","II John","II Jo","II Jn"]}},
"J3":{"name":"John's Third Letter","sortOrder":94,"shortCode":"J3","usfm":"3JN","osis":"3John",
    "chapters":[14],
    "names":{"eng":["3 John","3J","3 Jn","3 Jn","3Jn","3 Jo","IIIJo","III John","III Jo","III Jn"]}},
"JD":{"name":"Jude's Letter","sortOrder":95,"shortCode":"JD","usfm":"JUD","osis":"Jude",
    "chapters":[25],
    "names":{"eng":["Jude","Jude","Jude"]}},
"RV":{"name":"The Revelation to John","sortOrder":96,"shortCode":"RV","usfm":"REV","osis":"Rev",
    "chapters":[20,29,22,11,14,17,17,13,21,11,19,17,18,20,8,21,18,24,21,15,27,20],
    "names":{"eng":["Revelation","Re","Rev","Rvltn"]}},
"BK":{"name":"Back matter","sortOrder":97,"shortCode":"BK","usfm":"BAK","osis":"Back",
    "chapters":[null],
    "names":{"eng":["Back matter"]}},
"OH":{"name":"Other","sortOrder":98,"shortCode":"OH","usfm":"OTH","osis":"Other",
    "chapters":[null],
    "names":{"eng":["Other"]}},
"XA":{"name":"XXA","sortOrder":99,"shortCode":"XA","usfm":"XXA","osis":"XXA",
    "chapters":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    "names":{"eng":["XXA"]}},
"XB":{"name":"XXB","sortOrder":100,"shortCode":"XB","usfm":"XXB","osis":"XXB",
    "chapters":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    "names":{"eng":["XXB"]}},
"XC":{"name":"XXC","sortOrder":101,"shortCode":"XC","usfm":"XXC","osis":"XXC",
    "chapters":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    "names":{"eng":["XXC"]}},
"XD":{"name":"XXD","sortOrder":102,"shortCode":"XD","usfm":"XXD","osis":"XXD",
    "chapters":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    "names":{"eng":["XXD"]}},
"XE":{"name":"XXE","sortOrder":103,"shortCode":"XE","usfm":"XXE","osis":"XXE",
    "chapters":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    "names":{"eng":["XXE"]}},
"XF":{"name":"XXF","sortOrder":104,"shortCode":"XF","usfm":"XXF","osis":"XXF",
    "chapters":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    "names":{"eng":["XXF"]}},
"XG":{"name":"XXG","sortOrder":105,"shortCode":"XG","usfm":"XXG","osis":"XXG",
    "chapters":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    "names":{"eng":["XXG"]}},
"GS":{"name":"Glossary","sortOrder":106,"shortCode":"GS","usfm":"GLO","osis":"Glossary",
    "chapters":[null],
    "names":{"eng":["Glossary"]}},
"CN":{"name":"Concordance","sortOrder":107,"shortCode":"CN","usfm":"CNC","osis":"Conc",
    "chapters":[null],
    "names":{"eng":["Concordance"]}},
"TX":{"name":"Topical Index","sortOrder":108,"shortCode":"TX","usfm":"TDX","osis":"Topic",
    "chapters":[null],
    "names":{"eng":["Topical Index"]}},
"NX":{"name":"Names Index","sortOrder":109,"shortCode":"NX","usfm":"NDX","osis":"Name",
    "chapters":[null],
    "names":{"eng":["Names Index"]}}    
} 
 
/*
bible.BOOK_DATA = {
	"GEN":{
		"num":1,"abbr":"GEN","usfm":"Gen","osis":"Gen",
		"chapters":[31,25,24,26,32,22,24,22,29,32,32,20,18,24,21,16,27,33,38,18,34,24,20,67,34,35,46,22,35,43,55,32,20,31,29,43,36,30,23,23,57,38,34,34,28,34,31,22,33,26],
		"names":{"eng":["Genesis","Ge","Gen"]}},
	"EXO":{
		"num":2,"abbr":"EXO","usfm":"Exo","osis":"Exod",
		"chapters":[22,25,22,31,23,30,25,32,35,29,10,51,22,31,27,36,16,27,25,26,36,31,33,18,40,37,21,43,46,38,18,35,23,35,35,38,29,31,43,38],
		"names":{"eng":["Exodus","Ex","Exo"]}},
	"LEV":{
		"num":3,"abbr":"LEV","usfm":"Lev","osis":"Lev",
		"chapters":[17,16,17,35,19,30,38,36,24,20,47,8,59,57,33,34,16,30,37,27,24,33,44,23,55,46,34],
		"names":{"eng":["Leviticus","Le","Lev"]}},
	"NUM":{
		"num":4,"abbr":"NUM","usfm":"Num","osis":"Num",
		"chapters":[54,34,51,49,31,27,89,26,23,36,35,16,33,45,41,50,13,32,22,29,35,41,30,25,18,65,23,31,40,16,54,42,56,29,34,13],
		"names":{"eng":["Numbers","Nu","Num"]}},
	"DEU":{
		"num":5,"abbr":"DEU","usfm":"Deu","osis":"Deut",
		"chapters":[46,37,29,49,33,25,26,20,29,22,32,32,18,29,23,22,20,22,21,20,23,30,25,22,19,19,26,68,29,20,30,52,29,12],
		"names":{"eng":["Deuteronomy","Dt","Deut","Deu","De"]}},
	"JOS":{
		"num":6,"abbr":"JOS","usfm":"Jos","osis":"Josh",
		"chapters":[18,24,17,24,15,27,26,35,27,43,23,24,33,15,63,10,18,28,51,9,45,34,16,33],
		"names":{"eng":["Joshua","Js","Jos","Jos","Josh"]}},
	"JDG":{
		"num":7,"abbr":"JDG","usfm":"Jdg","osis":"Judg",
		"chapters":[36,23,31,24,31,40,25,35,57,18,40,15,25,20,20,31,13,31,30,48,25],
		"names":{"eng":["Judges","Jg","Jdg","Jdgs"]}},
	"RUT":{
		"num":8,"abbr":"RUT","usfm":"Rut","osis":"Ruth",
		"chapters":[22,23,18,22],
		"names":{"eng":["Ruth","Ru","Rut"]}},
	"SA1":{
		"num":9,"abbr":"SA1","usfm":"1Sa","osis":"1Sam",
		"chapters":[28,36,21,22,12,21,17,22,27,27,15,25,23,52,35,23,58,30,24,42,15,23,29,22,44,25,12,25,11,31,13],
		"names":{"eng":["1 Samuel","1S","1 Sam","1Sam","1 Sa","1Sa","I Samuel","I Sam","I Sa"]}},
	"SA2":{
		"num":10,"abbr":"SA2","usfm":"2Sa","osis":"2Sam",
		"chapters":[27,32,39,12,25,23,29,18,13,19,27,31,39,33,37,23,29,33,43,26,22,51,39,25],
		"names":{"eng":["2 Samuel","2S","2 Sam","2Sam","2 Sa","2Sa","II Samuel","II Sam","II Sa","IIS"]}},
	"KI1":{
		"num":11,"abbr":"KI1","usfm":"1Ki","osis":"1Kgs",
		"chapters":[53,46,28,34,18,38,51,66,28,29,43,33,34,31,34,34,24,46,21,43,29,53],
		"names":{"eng":["1 Kings","1K","1 Kin","1Kin","1 Ki","IK","1Ki","I Kings","I Kin","I Ki"]}},
	"KI2":{
		"num":12,"abbr":"KI2","usfm":"2Ki","osis":"2Kgs",
		"chapters":[18,25,27,44,27,33,20,29,37,36,21,21,25,29,38,20,41,37,37,21,26,20,37,20,30],
		"names":{"eng":["2 Kings","2K","2 Kin","2Kin","2 Ki","IIK","2Ki","II Kings","II Kin","II Ki"]}},
	"CH1":{
		"num":13,"abbr":"CH1","usfm":"1Ch","osis":"1Chr",
		"chapters":[54,55,24,43,26,81,40,40,44,14,47,40,14,17,29,43,27,17,19,8,30,19,32,31,31,32,34,21,30],
		"names":{"eng":["1 Chronicles","1Ch","1 Chr","1Chr","1 Ch","ICh","I Chronicles","I Chr","I Ch"]}},
	"CH2":{
		"num":14,"abbr":"CH2","usfm":"2Ch","osis":"2Chr",
		"chapters":[17,18,17,22,14,42,22,18,31,19,23,16,22,15,19,14,19,34,11,37,20,12,21,27,28,23,9,27,36,27,21,33,25,33,27,23],
		"names":{"eng":["2 Chronicles","2Ch","2 Chr","2 Chr","2Chr","2 Ch","IICh","II Chronicles","II Chr","II Ch"]}},
	"EZR":{
		"num":15,"abbr":"EZR","usfm":"Ezr","osis":"Ezra",
		"chapters":[11,70,13,24,17,22,28,36,15,44],
		"names":{"eng":["Ezra","Ezr"]}},
	"NEH":{
		"num":16,"abbr":"NEH","usfm":"Neh","osis":"Neh",
		"chapters":[11,20,32,23,19,19,73,18,38,39,36,47,31],
		"names":{"eng":["Nehemiah","Ne","Neh","Neh","Ne"]}},
	"EST":{
		"num":17,"abbr":"EST","usfm":"Est","osis":"Esth",
		"chapters":[22,23,15,17,14,14,10,17,32,3],
		"names":{"eng":["Esther","Es","Est","Esth"]}},
	"JOB":{
		"num":18,"abbr":"JOB","usfm":"Job","osis":"Job",
		"chapters":[22,13,26,21,27,30,21,22,35,22,20,25,28,22,35,22,16,21,29,29,34,30,17,25,6,14,23,28,25,31,40,22,33,37,16,33,24,41,30,24,34,17],
		"names":{"eng":["Job","Jb","Job"]}},
	"PSA":{
		"num":19,"abbr":"PSA","usfm":"Psa","osis":"Ps",
		"chapters":[6,12,8,8,12,10,17,9,20,18,7,8,6,7,5,11,15,50,14,9,13,31,6,10,22,12,14,9,11,12,24,11,22,22,28,12,40,22,13,17,13,11,5,26,17,11,9,14,20,23,19,9,6,7,23,13,11,11,17,12,8,12,11,10,13,20,7,35,36,5,24,20,28,23,10,12,20,72,13,19,16,8,18,12,13,17,7,18,52,17,16,15,5,23,11,13,12,9,9,5,8,28,22,35,45,48,43,13,31,7,10,10,9,8,18,19,2,29,176,7,8,9,4,8,5,6,5,6,8,8,3,18,3,3,21,26,9,8,24,13,10,7,12,15,21,10,20,14,9,6],
		"names":{"eng":["Psalm","Ps","Psa"]}},
	"PRO":{
		"num":20,"abbr":"PRO","usfm":"Pro","osis":"Prov",
		"chapters":[33,22,35,27,23,35,27,36,18,32,31,28,25,35,33,33,28,24,29,30,31,29,35,34,28,28,27,28,27,33,31],
		"names":{"eng":["Proverbs","Pr","Prov","Pro"]}},
	"ECC":{
		"num":21,"abbr":"ECC","usfm":"Ecc","osis":"Eccl",
		"chapters":[18,26,22,16,20,12,29,17,18,20,10,14],
		"names":{"eng":["Ecclesiastes","Ec","Ecc","Qohelet"]}},
	"SNG":{
		"num":22,"abbr":"SNG","usfm":"Sng","osis":"Song",
		"chapters":[17,17,11,16,16,13,13,14],
		"names":{"eng":["Song of Songs","So","Sos","Song of Solomon","SOS","SongOfSongs","SongofSolomon","Canticle of Canticles"]}},
	"ISA":{
		"num":23,"abbr":"ISA","usfm":"Isa","osis":"Isa",
		"chapters":[31,22,26,6,30,13,25,22,21,34,16,6,22,32,9,14,14,7,25,6,17,25,18,23,12,21,13,29,24,33,9,20,24,17,10,22,38,22,8,31,29,25,28,28,25,13,15,22,26,11,23,15,12,17,13,12,21,14,21,22,11,12,19,12,25,24],
		"names":{"eng":["Isaiah","Is","Isa"]}},
	"JER":{
		"num":24,"abbr":"JER","usfm":"Jer","osis":"Jer",
		"chapters":[19,37,25,31,31,30,34,22,26,25,23,17,27,22,21,21,27,23,15,18,14,30,40,10,38,24,22,17,32,24,40,44,26,22,19,32,21,28,18,16,18,22,13,30,5,28,7,47,39,46,64,34],
		"names":{"eng":["Jeremiah","Je","Jer"]}},
	"LAM":{
		"num":25,"abbr":"LAM","usfm":"Lam","osis":"Lam",
		"chapters":[22,22,66,22,22],
		"names":{"eng":["Lamentations","La","Lam","Lament"]}},
	"EZK":{
		"num":26,"abbr":"EZK","usfm":"Ezk","osis":"Ezek",
		"chapters":[28,10,27,17,17,14,27,18,11,22,25,28,23,23,8,63,24,32,14,49,32,31,49,27,17,21,36,26,21,26,18,32,33,31,15,38,28,23,29,49,26,20,27,31,25,24,23,35],
		"names":{"eng":["Ezekiel","Ek","Ezek","Eze"]}},
	"DAN":{
		"num":27,"abbr":"DAN","usfm":"Dan","osis":"Dan",
		"chapters":[21,49,30,37,31,28,28,27,27,21,45,13],
		"names":{"eng":["Daniel","Da","Dan","Dl","Dnl"]}},
	"HOS":{
		"num":28,"abbr":"HOS","usfm":"Hos","osis":"Hos",
		"chapters":[11,23,5,19,15,11,16,14,17,15,12,14,16,9],
		"names":{"eng":["Hosea","Ho","Hos"]}},
	"JOL":{
		"num":29,"abbr":"JOL","usfm":"Jol","osis":"Joel",
		"chapters":[20,32,21],
		"names":{"eng":["Joel","Jl","Joel","Joe"]}},
	"AMO":{
		"num":30,"abbr":"AMO","usfm":"Amo","osis":"Amos",
		"chapters":[15,16,15,13,27,14,17,14,15],
		"names":{"eng":["Amos","Am","Amos","Amo"]}},
	"OBA":{
		"num":31,"abbr":"OBA","usfm":"Oba","osis":"Obad",
		"chapters":[21],
		"names":{"eng":["Obadiah","Ob","Oba","Obd","Odbh"]}},
	"JNA":{
		"num":32,"abbr":"JNA","usfm":"Jon","osis":"Jonah",
		"chapters":[17,10,10,11],
		"names":{"eng":["Jonah","Jon","Jnh"]}},
	"MIC":{
		"num":33,"abbr":"MIC","usfm":"Mic","osis":"Mic",
		"chapters":[16,13,12,13,15,16,20],
		"names":{"eng":["Micah","Mi","Mic"]}},
	"NAH":{
		"num":34,"abbr":"NAH","usfm":"Nam","osis":"Nah",
		"chapters":[15,13,19],
		"names":{"eng":["Nahum","Na","Nah","Nah","Na"]}},
	"HAB":{
		"num":35,"abbr":"HAB","usfm":"Hab","osis":"Hab",
		"chapters":[17,20,19],
		"names":{"eng":["Habakkuk","Hb","Hab","Hk","Habk"]}},
	"ZEP":{
		"num":36,"abbr":"ZEP","usfm":"Zep","osis":"Zeph",
		"chapters":[18,15,20],
		"names":{"eng":["Zephaniah","Zp","Zep","Zeph"]}},
	"HAG":{
		"num":37,"abbr":"HAG","usfm":"Hag","osis":"Hag",
		"chapters":[15,23],
		"names":{"eng":["Haggai","Ha","Hag","Hagg"]}},
	"ZEC":{
		"num":38,"abbr":"ZEC","usfm":"Zec","osis":"Zech",
		"chapters":[21,13,10,14,11,15,14,23,17,12,17,14,9,21],
		"names":{"eng":["Zechariah","Zc","Zech","Zec"]}},
	"MAL":{
		"num":39,"abbr":"MAL","usfm":"Mal","osis":"Mal",
		"chapters":[14,17,18,6],
		"names":{"eng":["Malachi","Ml","Mal","Mlc"]}},
	"MAT":{
		"num":40,"abbr":"MAT","usfm":"Mat","osis":"Matt",
		"chapters":[25,23,17,25,48,34,29,34,38,42,30,50,58,36,39,28,27,35,30,34,46,46,39,51,46,75,66,20],
		"names":{"eng":["Matthew","Mt","Matt","Mat"]}},
	"MRK":{
		"num":41,"abbr":"MRK","usfm":"Mrk","osis":"Mark",
		"chapters":[45,28,35,41,43,56,37,38,50,52,33,44,37,72,47,20],
		"names":{"eng":["Mark","Mk","Mar","Mrk"]}},
	"LUK":{
		"num":42,"abbr":"LUK","usfm":"Luk","osis":"Luke",
		"chapters":[80,52,38,44,39,49,50,56,62,42,54,59,35,35,32,31,37,43,48,47,38,71,56,53],
		"names":{"eng":["Luke","Lk","Luk","Lu"]}},
	"JHN":{
		"num":43,"abbr":"JHN","usfm":"Jhn","osis":"John",
		"chapters":[51,25,36,54,47,71,53,59,41,42,57,50,38,31,27,33,26,40,42,31,25],
		"names":{"eng":["John","Jn","Joh","Jo"]}},
	"ACT":{
		"num":44,"abbr":"ACT","usfm":"Act","osis":"Acts",
		"chapters":[26,47,26,37,42,15,60,40,43,48,30,25,52,28,41,40,34,28,41,38,40,30,35,27,27,32,44,31],
		"names":{"eng":["Acts","Ac","Act"]}},
	"ROM":{
		"num":45,"abbr":"ROM","usfm":"Rom","osis":"Rom",
		"chapters":[32,29,31,25,21,23,25,39,33,21,36,21,14,23,33,27],
		"names":{"eng":["Romans","Ro","Rom","Rmn","Rmns"]}},
	"CO1":{
		"num":46,"abbr":"CO1","usfm":"1Co","osis":"1Cor",
		"chapters":[31,16,23,21,13,20,40,13,27,33,34,31,13,40,58,24],
		"names":{"eng":["1 Corinthians","1Co","1 Cor","1Cor","ICo","1 Co","1Co","I Corinthians","I Cor","I Co"]}},
	"CO2":{
		"num":47,"abbr":"CO2","usfm":"2Co","osis":"2Cor",
		"chapters":[24,17,18,18,21,18,16,24,15,18,33,21,14],
		"names":{"eng":["2 Corinthians","2Co","2 Cor","2Cor","IICo","2 Co","2Co","II Corinthians","II Cor","II Co"]}},
	"GAL":{
		"num":48,"abbr":"GAL","usfm":"Gal","osis":"Gal",
		"chapters":[24,21,29,31,26,18],
		"names":{"eng":["Galatians","Ga","Gal","Gltns"]}},
	"EPH":{
		"num":49,"abbr":"EPH","usfm":"Eph","osis":"Eph",
		"chapters":[23,22,21,32,33,24],
		"names":{"eng":["Ephesians","Ep","Eph","Ephn"]}},
	"PHP":{
		"num":50,"abbr":"PHP","usfm":"Php","osis":"Phil",
		"chapters":[30,30,21,23],
		"names":{"eng":["Philippians","Pp","Phi","Phil","Phi"]}},
	"COL":{
		"num":51,"abbr":"COL","usfm":"Col","osis":"Col",
		"chapters":[29,23,25,18],
		"names":{"eng":["Colossians","Co","Col","Colo","Cln","Clns"]}},
	"TH1":{
		"num":52,"abbr":"TH1","usfm":"1Th","osis":"1Thess",
		"chapters":[10,20,13,18,28],
		"names":{"eng":["1 Thessalonians","1Th","1 Thess","1Thess","ITh","1 Thes","1Thes","1 The","1The","1 Th","1Th","I Thessalonians","I Thess","I The","I Th"]}},
	"TH2":{
		"num":53,"abbr":"TH2","usfm":"2Th","osis":"2Thess",
		"chapters":[12,17,18],
		"names":{"eng":["2 Thessalonians","2Th","2 Thess","2 Thess","2Thess","IITh","2 Thes","2Thes","2 The","2The","2 Th","2Th","II Thessalonians","II Thess","II The","II Th"]}},
	"TI1":{
		"num":54,"abbr":"TI1","usfm":"1Ti","osis":"1Tim",
		"chapters":[20,15,16,16,25,21],
		"names":{"eng":["1 Timothy","1Ti","1 Tim","1Tim","1 Ti","ITi","1Ti","I Timothy","I Tim","I Ti"]}},
	"TI2":{
		"num":55,"abbr":"TI2","usfm":"2Ti","osis":"2Tim",
		"chapters":[18,26,17,22],
		"names":{"eng":["2 Timothy","2Ti","2 Tim","2 Tim","2Tim","2 Ti","IITi","2Ti","II Timothy","II Tim","II Ti"]}},
	"TIT":{
		"num":56,"abbr":"TIT","usfm":"Tit","osis":"Titus",
		"chapters":[16,15,15],
		"names":{"eng":["Titus","Ti","Tit","Tt","Ts"]}},
	"PHM":{
		"num":57,"abbr":"PHM","usfm":"Phm","osis":"Phlm",
		"chapters":[25],
		"names":{"eng":["Philemon","Pm","Phile","Phile","Philm","Pm"]}},
	"HEB":{
		"num":58,"abbr":"HEB","usfm":"Heb","osis":"Heb",
		"chapters":[14,18,19,16,14,20,28,13,28,39,40,29,25],
		"names":{"eng":["Hebrews","He","Heb","Hw"]}},
	"JAM":{
		"num":59,"abbr":"JAM","usfm":"Jas","osis":"Jas",
		"chapters":[27,26,18,17,20],
		"names":{"eng":["James","Jm","Jam","Jas","Ja"]}},
	"PE1":{
		"num":60,"abbr":"PE1","usfm":"1Pe","osis":"1Pet",
		"chapters":[25,25,22,19,14],
		"names":{"eng":["1 Peter","1P","1 Pet","1Pet","IPe","1P","I Peter","I Pet","I Pe"]}},
	"PE2":{
		"num":61,"abbr":"PE2","usfm":"2Pe","osis":"2Pet",
		"chapters":[21,22,18],
		"names":{"eng":["2 Peter","2P","2 Pet","2Pet","2Pe","IIP","II Peter","II Pet","II Pe"]}},
	"JN1":{
		"num":62,"abbr":"JN1","usfm":"1Jn","osis":"1John",
		"chapters":[10,29,24,21,21],
		"names":{"eng":["1 John","1J","1 Jn","1Jn","1 Jo","IJo","I John","I Jo","I Jn"]}},
	"JN2":{
		"num":63,"abbr":"JN2","usfm":"2Jn","osis":"2John",
		"chapters":[13],
		"names":{"eng":["2 John","2J","2 Jn","2Jn","2 Jo","IIJo","II John","II Jo","II Jn"]}},
	"JN3":{
		"num":64,"abbr":"JN3","usfm":"3Jn","osis":"3John",
		"chapters":[14],
		"names":{"eng":["3 John","3J","3 Jn","3 Jn","3Jn","3 Jo","IIIJo","III John","III Jo","III Jn"]}},
	"JDE":{
		"num":65,"abbr":"JDE","usfm":"Jud","osis":"Jude",
		"chapters":[25],
		"names":{"eng":["Jude","Jude","Jude"]}},
	"REV":{
		"num":66,"abbr":"REV","usfm":"Rev","osis":"Rev",
		"chapters":[20,29,22,11,14,17,17,13,21,11,19,17,18,20,8,21,18,24,21,15,27,20],
		"names":{"eng":["Revelation","Re","Rev","Rvltn"]}},
	"BEL":{
		"num":80,"abbr":"BEL","usfm":"Bel","osis":"Bel",
		"chapters":[],
		"names":{"eng":["Bel and the Dragon"]}},
	"SUS":{
		"num":81,"abbr":"SUS","usfm":"Sus","osis":"Sus",
		"chapters":[],
		"names":{"eng":["Susanna"]}},
	"JDT":{
		"num":82,"abbr":"JDT","usfm":"Jdt","osis":"Jdt",
		"chapters":[],
		"names":{"eng":["Judith"]}},
	"MAN":{
		"num":83,"abbr":"MAN","usfm":"Man","osis":"PrMan",
		"chapters":[],
		"names":{"eng":["Prayer of Manasseh","Song of the Three Children"]}},
	"SIR":{
		"num":84,"abbr":"SIR","usfm":"Sir","osis":"Sir",
		"chapters":[],
		"names":{"eng":["Sirach","Ecclesiasticus"]}},
	"SIP":{
		"num":85,"abbr":"SIP","usfm":"","osis":"SirP",
		"chapters":[],
		"names":{"eng":["Sirach Prologue"]}},
	"TOB":{
		"num":86,"abbr":"TOB","usfm":"Tob","osis":"Tob",
		"chapters":[22,14,17,21,22,17,18],
		"names":{"eng":["Tobit"]}},
	"WIS":{
		"num":87,"abbr":"WIS","usfm":"Wis","osis":"Wis",
		"chapters":[],
		"names":{"eng":["Wisdom","Wisdom of Solomon"]}},
	"PAZ":{
		"num":88,"abbr":"PAZ","usfm":"S3Y","osis":"PrAzar",
		"chapters":[],
		"names":{"eng":["Prayer of Azariah"]}},
	"LJE":{
		"num":100,"abbr":"LJE","usfm":"LJe","osis":"EpJer",
		"chapters":[],
		"names":{"eng":["Letter of Jeremiah"]}},
	"BAR":{
		"num":101,"abbr":"BAR","usfm":"Bar","osis":"Bar",
		"chapters":[],
		"names":{"eng":["Baruch"]}},
	"LJB":{
		"num":102,"abbr":"LJB","usfm":"LJe","osis":"EpJer",
		"chapters":[],
		"names":{"eng":["Letter of Jeremiah"]}},
	"BA2":{
		"num":103,"abbr":"BA2","usfm":"2Ba","osis":"",
		"chapters":[],
		"names":{"eng":["2 Baruch "," Apocalypse of Baruch"]}},
	"LBA":{
		"num":104,"abbr":"LBA","usfm":"LBa","osis":"",
		"chapters":[],
		"names":{"eng":["Letter of Baruch "," Epistle of Baruch"]}},
	"MAC":{
		"num":110,"abbr":"MAC","usfm":"","osis":"",
		"chapters":[],
		"names":{"eng":["Maccabees"]}},
	"MA1":{
		"num":111,"abbr":"MA1","usfm":"1Ma","osis":"1Macc",
		"chapters":[],
		"names":{"eng":["1 Maccabees"]}},
	"MA2":{
		"num":112,"abbr":"MA2","usfm":"2Ma","osis":"2Macc",
		"chapters":[],
		"names":{"eng":["2 Maccabees"]}},
	"MA3":{
		"num":113,"abbr":"MA3","usfm":"3Ma","osis":"3Macc",
		"chapters":[],
		"names":{"eng":["3 Maccabees"]}},
	"MA4":{
		"num":114,"abbr":"MA4","usfm":"4Ma","osis":"4Macc",
		"chapters":[],
		"names":{"eng":["4 Maccabees"]}},
	"ODE":{
		"num":131,"abbr":"ODE","usfm":"Ode","osis":"",
		"chapters":[],
		"names":{"eng":["Odes "," Odae"]}},
	"PSO":{
		"num":132,"abbr":"PSO","usfm":"PSo","osis":"",
		"chapters":[],
		"names":{"eng":["Prayer of Solomon"]}},
	"PJE":{
		"num":133,"abbr":"PJE","usfm":"PJe","osis":"",
		"chapters":[],
		"names":{"eng":["Prayer of Jeremiah"]}},
	"JUB":{
		"num":140,"abbr":"JUB","usfm":"Jub","osis":"",
		"chapters":[],
		"names":{"eng":["Jubilees"]}}
};
*/

/**
 * @description Default order of Old Testament books
 */
bible.OT_BOOKS_USFM = ["GEN","EXO","LEV","NUM","DEU","JOS","JDG","RUT","SA1","SA2","KI1","KI2","CH1","CH2","EZR","NEH","EST","JOB","PSA","PRO","ECC","SNG","ISA","JER","LAM","EZK","DAN","HOS","JOL","AMO","OBA","JNA","MIC","NAH","HAB","ZEP","HAG","ZEC","MAL"];

bible.OT_BOOKS = 
["GN","EX","LV","NU","DT","JS","JG","RT","S1","S2","K1","K2","R1","R2","ER","NH","ET","JB","PS","PR","EC","SS","IS","JR","LM","EK","DN","HS","JL","AM","OB","JH","MC","NM","HK","ZP","HG","ZC","ML"];


/**
 * @description Default order of New Testament books
 */
bible.NT_BOOKS_USFM = ["MAT","MRK","LUK","JHN","ACT","ROM","CO1","CO2","GAL","EPH","PHP","COL","TH1","TH2","TI1","TI2","TIT","PHM","HEB","JAM","PE1","PE2","JN1","JN2","JN3","JDE","REV"];

bible.NT_BOOKS = ["MT","MK","LK","JN","AC","RM","C1","C2","GL","EP","PP","CL","H1","H2","T1","T2","TT","PM","HB","JM","P1","P2","J1","J2","J3","JD","RV"];

/**
 * @description Default order of Apocryphal books
 */
bible.AP_BOOKS = 
["BEL","SUS","JDT","MAN","SIR","SIP","TOB","WIS","PAZ","LJE","BAR","LJB","BA2","LBA","MAC","MA1","MA2","MA3","MA4","ODE","PSO","PJE","JUB"]
//["Tob","Jdt","AddEsth","Wis","Sir","Bar","EpJer","PrAzar","Sus","Bel","1Macc","2Macc","3Macc","4Macc","1Esd","2Esd","Ps151"];

/**
 * @description Default order of Apocryphal books
 */
bible.DEFAULT_BIBLE = bible.OT_BOOKS.concat(bible.NT_BOOKS);

/**
 * @description Default order of Bible's with Apocryphal books
 */
bible.APOCRYPHAL_BIBLE = bible.OT_BOOKS.concat(bible.AP_BOOKS, bible.NT_BOOKS);


/**
 * @description Adds names in bulk for a language
 */
bible.addNames = function(lang, bookList, namesData) {
	for (var i in bookList) {
		var osisKey = bookList[i],
			names = namesData[i];
			
		if (typeof names === 'string')
			bible.BOOK_DATA[ osisKey ].names[lang] = [names];
		else
			bible.BOOK_DATA[ osisKey ].names[lang] = names;
	}
}

// Burmese
bible.addNames("bur",bible.DEFAULT_BIBLE,[
"ကမၻာဦးက်မ္း  ","ထြက္ေျမာက္ရာက်မ္း  ","ဝတ္ျပဳရာက်မ္း  ","ေတာလည္ရာက်မ္း  ","တရားေဟာရာက်မ္း   ","ေယာရႈမွတ္စာ  ","တရားသူႀကီးမွတ္စာ   ","ရုသဝတၳဳ   ","ဓမၼရာဇဝင္ပဌမေစာင္   ","ဓမၼရာဇဝင္ဒုတိယေစာင္   ","ဓမၼရာဇဝင္တတိယေစာင္ ","ဓမၼရာဇဝင္စတုတၳေစာင္   ","ရာဇဝင္ခ်ဳပ္ပဌမေစာင္   ","ရာဇဝင္ခ်ဳပ္ဒုတိယေစာင္   ","ဧဇရမွတ္စာ  ","ေနဟမိမွတ္စာ   ","ဧသတာဝတၱဳ   ","ေယာဘဝတၱဳ   ","ဆာလံက်မ္း   ","သုတၱံက်မ္း   ","ေဒသနာက်မ္း   ","ေရွာလမုန္သီခ်င္း   ","ေဟရွာယအနာဂတိၱက်မ္း   ","ေယရမိအနာဂတၱိက်မ္း   ","ေယရမိျမည္တမ္းစကား   ","ေယဇေက်လအနာကတၱိက်မ္း   ","ဒံေယလအနာဂတၱိက်မ္း   ","ေဟာေရွအနာဂတၱိက်မ္း   ","ေယာလအနာဂတၱိက်မ္း   ","အာမုတ္အနာဂတၱိက်မ္း   ","ၾသဗဒိဗ်ာဒိတ္ရူပါရုံ   ","ေယာနဝတၳဳ   ","မိကၡာအနာဂတၱိက်မ္း   ","နာဟံုအနာဂတၱိက်မ္း   ","ဟဗကၠဳတ္အနာဂတၱိက်မ္း   ","ေဇဖနိအနာဂတၱိက်မ္း   ","ဟဂၢဲအနာဂတၱိက်မ္း   ","ဇာခရိအနာဂတၱိက်မ္း   ","မာလခိအနာဂတၱိက်မ္း   ","ရွင္မႆဲခရစ္ဝင္   ","ရွင္မာကုခရစ္ဝင္   ","ရွင္လုကာခရစ္ဝင္   ","ရွင္ေယာဟန္ခရစ္ဝင္   ","တမန္ေတာ္ဝတၳဳ   ","ေရာမၾသဝါဒစာ   ","ေကာရိ ႏၱဳ ၾသဝါဒစာပဌမေစာင္  ","ေကာရိ သု ၾသဝါဒစာဒုတိယေစာင္   ","ဂလာတိၾသဝါဒစာ   ","ဧဖက္ၾသဝါဒစာ   ","ဖိလိပၸိၾသဝါဒစာ   ","ေကာေလာသဲၾသဝါဒစာ   ","သက္သာေလာနိတ္ၾသဝါဒစာပဌမေစာင္   ","သက္သာေလာနိတ္ၾသဝါဒစာဒုတိယေစာင္   ","တိေမာေသၾသဝါဒပဌမေစာင္   ","တိေမာေသၾသဝါဒစာဒုတိယေစာင္   ","တိတုၾသဝါဒစာ   ","ဖိေလမုန္ၾသဝါဒစာ   ","ေဟျဗဲၾသဝါဒစာ   ","ရွင္ယာကုပ္ၾသဝါဒစာ   ","ရွင္ေပတရုၾသဝါဒစာပဌမေစာင္   ","ရွင္ေပတရုၾသဝါဒစာဒုတိယေစာင္   ","ရွင္ေယာဟန္ၾသဝါဒစာပဌမေစာင္    ","ရွင္ေယာဟန္ၾသဝါဒစာဒုတိယေစာင္    ","ရွင္ေယာဟန္ၾသဝါဒစာတတိယေစာင္   ","ရွင္ယုဒၾသဝါဒစာ   ","ဗ်ာဒိတ္က်မ္း   "
]);

// spanish
bible.addNames("spa", bible.DEFAULT_BIBLE, [
	"Génesis","Exodo","Levítico","Números","Deuteronomio","Josué","Jueces","Rut","1 Samuel","2 Samuel","1 Reyes","2 Reyes","1 Crónicas","2 Crónicas","Esdras","Nehemías","Ester","Job","Salmos","Proverbios","Eclesiastés","Cantares","Isaías","Jeremías","Lamentaciones","Ezequiel","Daniel","Oseas","Joel","Amós","Abdías","Jonás","Miqueas","Nahúm","Habacuc","Sofonías","Hageo","Zacarías","Malaquías",
	"Mateo","Marcos","Lucas","Juan","Hechos","Romanos","1 Corintios","2 Corintios","Gálatas","Efesios","Filipenses","Colosenses","1 Tesalonicenses","2 Tesalonicenses","1 Timoteo","2 Timoteo","Tito","Filemón","Hebreos","Santiago","1 Pedro","2 Pedro","1 Juan","2 Juan","3 Juan","Judas","Apocalipsis"
]);

// French
bible.addNames("fre",bible.DEFAULT_BIBLE,[
	"Genèse","Exode","Lévitique","Nombres","Deutéronome","Josué","Juges","Ruth","1 Samuel","2 Samuel","1 Rois","2 Rois","1 Chroniques","2 Chroniques","Esdras","Néhémie","Esther","Job","Psaumes","Proverbes","Ecclésiaste","Cantique","Esaïe","Jérémie","Lamentations","Ezéchiel","Daniel","Osée","Joël","Amos","Abdias","Jonas","Michée","Nahum","Habacuc","Sophonie","Aggée","Zacharie","Malachie",
	"Matthieu","Marc","Luc","Jean","Actes","Romains","1 Corinthiens","2 Corinthiens","Galates","Ephésiens","Philippiens","Colossiens","1 Thessalonicien","2 Thessalonicien","1 Timothée","2 Timothée","Tite","Philemon","Hébreux","Jacques","1 Pierre","2 Pierre","1 Jean","2 Jean","3 Jean","Jude","Apocalypse"
]);

// German
bible.addNames("de",bible.DEFAULT_BIBLE,[
	"Genesis","Exodus","Levitikus","Numeri","Deuteronomium","Josua","Richter","Rut","1 Samuel","2 Samuel","1 Könige","2 Könige","1 Chronik","2 Chronik","Esra","Nehemia","Ester",["Hiob","Ijob"],"Psalter","Sprichwörter","Kohelet","Hohelied Salmos","Jesaja","Jeremia",["Klagelieder","Jeremias"],["Hesekiel","Ezechiel"],"Daniel","Hosea","Joel","Amos","Obadja","Jona","Micha","Nahum","Habakuk","Zefanja","Haggai","Sacharja","Maleachi",
	"Matthäus","Markus","Lukas","Johannes","Apostelgeschichte des Lukas","Römer","1 Korinther","2 Korinther","Galater","Epheser","Philipper","Kolosser","1 Thessalonicher","2 Thessalonicher","1 Timotheus","2 Timotheus","Titus","Philemon","Hebräer","Jakobus","1 Petrus","2 Petrus","1 Johannes","2 Johannes","3 Johannes","Judas","Offenbarung des Johannes"
]);

// Greek
bible.addNames("gre", bible.DEFAULT_BIBLE, [
	"ΓΕΝΕΣΙΣ","ΕΞΟΔΟΣ","ΛΕΥΙΤΙΚΟΝ","ΑΡΙΘΜΟΙ","ΔΕΥΤΕΡΟΝΟΜΙΟΝ","ΙΗΣΟΥΣ ΝΑΥΗ","ΚΡΙΤΑΙ","ΡΟΥΘ","ΒΑΣΙΛΕΙΩΝ Α΄","ΒΑΣΙΛΕΙΩΝ B΄","ΒΑΣΙΛΕΙΩΝ Γ΄","ΒΑΣΙΛΕΙΩΝ Δ΄","ΠΑΡΑΛΕΙΠΟΜΕΝΩΝ Α΄","ΠΑΡΑΛΕΙΠΟΜΕΝΩΝ B΄","ΕΣΔΡΑΣ","ΝΕΕΜΙΑΣ","ΕΣΘΗΡ","ΙΩΒ","ΨΑΛΜΟΙ","ΠΑΡΟΙΜΙΑΙ","ΕΚΚΛΗΣΙΑΣΤΗΣ","ΑΣΜΑ ΑΣΜΑΤΩΝ","ΗΣΑΪΑΣ","ΙΕΡΕΜΙΑΣ","ΘΡΗΝΟΙ ΙΕΡΕΜΙΟΥ","ΙΕΖΕΚΙΗΛ ","ΔΑΝΙΗΛ","ΩΣΗΕ","ΙΩΗΛ","ΑΜΩΣ","ΟΒΔΙΟΥ","ΙΩΝΑΣ","ΜΙΧΑΙΑΣ","ΝΑΟΥΜ","ΑΜΒΑΚΟΥΜ","ΣΟΦΟΝΙΑΣ ","ΑΓΓΑΙΟΣ","ΖΑΧΑΡΙΑΣ","ΜΑΛΑΧΙΑΣ",	
	"ΚΑΤΑ ΜΑΤΘΑΙΟΝ","ΚΑΤΑ ΜΑΡΚΟΝ","ΚΑΤΑ ΛΟΥΚΑΝ","ΚΑΤΑ ΙΩΑΝΝΗΝ","ΠΡΑΞΕΙΣ","ΠΡΟΣ ΡΩΜΑΙΟΥΣ","ΠΡΟΣ ΚΟΡΙΝΘΙΟΥΣ Α΄","ΠΡΟΣ ΚΟΡΙΝΘΙΟΥΣ Β΄","ΠΡΟΣ ΓΑΛΑΤΑΣ","ΠΡΟΣ ΕΦΕΣΙΟΥΣ","ΠΡΟΣ ΦΙΛΙΠΠΗΣΙΟΥΣ","ΠΡΟΣ ΚΟΛΟΣΣΑΕΙΣ","ΘΕΣΣΑΛΟΝΙΚΕΙΣ Α΄","ΘΕΣΣΑΛΟΝΙΚΕΙΣ Β΄","ΠΡΟΣ ΤΙΜΟΘΕΟΝ Α΄","ΠΡΟΣ ΤΙΜΟΘΕΟΝ Β΄","ΠΡΟΣ ΤΙΤΟΝ","ΠΡΟΣ ΦΙΛΗΜΟΝΑ","ΠΡΟΣ ΕΒΡΑΙΟΥΣ","ΙΑΚΩΒΟΥ","ΠΕΤΡΟΥ Α΄","ΠΕΤΡΟΥ Β΄","ΙΩΑΝΝΟΥ Α΄","ΙΩΑΝΝΟΥ Β΄","ΙΩΑΝΝΟΥ Γ΄","ΙΟΥΔΑ","ΑΠΟΚΑΛΥΨΙΣ ΙΩΑΝΝΟΥ"
]);

// Hebrew
bible.addNames("heb", bible.OT_BOOKS, [
	"בראשית","שמות","ויקרא","במדבר","דברים","יהושע","שופטים","רות","שמואל א","שמואל ב","מלכים א","מלכים ב","דברי הימים א","דברי הימים ב","עזרא","נחמיה","אסתר","איוב","תהילים","קהלת","קהלת","שיר השירים","ישעה","ירמיה","איכה","יחזקאל","דניאל","הושע","יואל","עמוס","עבדיה","יונה","מיכה","נחום","חבקוק","צפניה","חגי","זכריה","מלאכי"
]);

// Russian
bible.addNames('rus', bible.DEFAULT_BIBLE, [
	"Бытие","Исход","Левит","Числа","Второзаконие","Иисус Навин","Книга Судей","Руфь","1-я Царств","2-я Царств","3-я Царств","4-я Царств","1-я Паралипоменон","2-я Паралипоменон","Ездра","Неемия","Есфирь","Иов","Псалтирь","Притчи","Екклесиаст","Песни Песней","Исаия","Иеремия","Плач Иеремии","Иезекииль","Даниил","Осия","Иоиль","Амос","Авдия","Иона","Михей","Наум","Аввакум","Софония","Аггей","Захария","Малахия",
	"От Матфея","От Марка","От Луки","От Иоанна","Деяния","К Римлянам","1-е Коринфянам","2-е Коринфянам","К Галатам","К Ефесянам","К Филиппийцам","К Колоссянам","1-е Фессалоникийцам","2-е Фессалоникийцам","1-е Тимофею","2-е Тимофею","К Титу","К Филимону","К Евреям","Иакова","1-e Петра","2-e Петра","1-e Иоанна","2-e Иоанна","3-e Иоанна","Иуда","Откровение"
]);

// Chinese (Simplified)
bible.addNames('chi', bible.DEFAULT_BIBLE, [
	"創 世 記","出 埃 及 記","利 未 記","民 數 記","申 命 記","約 書 亞 記","士 師 記","路 得 記","撒 母 耳 記 上","撒 母 耳 記 下","列 王 紀 上","列 王 紀 下","歷 代 志 上","歷 代 志 下","以 斯 拉 記","尼 希 米 記","以 斯 帖 記","約 伯 記","詩 篇","箴 言","傳 道 書","雅 歌","以 賽 亞 書","耶 利 米 書","耶 利 米 哀 歌","以 西 結 書","但 以 理 書","何 西 阿 書","約 珥 書","阿 摩 司 書","俄 巴 底 亞 書","約 拿 書","彌 迦 書","那 鴻 書","哈 巴 谷 書","西 番 雅 書","哈 該 書","撒 迦 利 亞","瑪 拉 基 書","馬 太 福 音","馬 可 福 音","路 加 福 音","約 翰 福 音","使 徒 行 傳","羅 馬 書","歌 林 多 前 書","歌 林 多 後 書","加 拉 太 書","以 弗 所 書","腓 立 比 書","歌 羅 西 書","帖 撒 羅 尼 迦 前 書","帖 撒 羅 尼 迦 後 書","提 摩 太 前 書","提 摩 太 後 書","提 多 書","腓 利 門 書","希 伯 來 書","雅 各 書","彼 得 前 書","彼 得 後 書","約 翰 一 書","約 翰 二 書","約 翰 三 書","猶 大 書","启 示 录"
]);

// Chinese (Traditional)
bible.addNames('zho', bible.DEFAULT_BIBLE, [
	"創 世 記","出 埃 及 記","利 未 記","民 數 記","申 命 記","約 書 亞 記","士 師 記","路 得 記","撒 母 耳 記 上","撒 母 耳 記 下","列 王 紀 上","列 王 紀 下","歷 代 志 上","歷 代 志 下","以 斯 拉 記","尼 希 米 記","以 斯 帖 記","約 伯 記","詩 篇","箴 言","傳 道 書","雅 歌","以 賽 亞 書","耶 利 米 書","耶 利 米 哀 歌","以 西 結 書","但 以 理 書","何 西 阿 書","約 珥 書","阿 摩 司 書","俄 巴 底 亞 書","約 拿 書","彌 迦 書","那 鴻 書","哈 巴 谷 書","西 番 雅 書","哈 該 書","撒 迦 利 亞","瑪 拉 基 書","馬 太 福 音","馬 可 福 音","路 加 福 音","約 翰 福 音","使 徒 行 傳","羅 馬 書","歌 林 多 前 書","歌 林 多 後 書","加 拉 太 書","以 弗 所 書","腓 立 比 書","歌 羅 西 書","帖 撒 羅 尼 迦 前 書","帖 撒 羅 尼 迦 後 書","提 摩 太 前 書","提 摩 太 後 書","提 多 書","腓 利 門 書","希 伯 來 書","雅 各 書","彼 得 前 書","彼 得 後 書","約 翰 一 書","約 翰 二 書","約 翰 三 書","猶 大 書","启 示 录"
]);

// Arabic
bible.addNames('ara', bible.DEFAULT_BIBLE, [
	"التكوين","الخروج","اللاويين","العدد","التثنية","يشوع","القضاة","راعوث","صموئيل الأول","صموئيل الثاني","الملوك الأول","الملوك الثاني","أخبار الأيام الأول","أخبار الأيام الثاني","عزرا","نحميا","أستير","أيوب","المزامير","الأمثال","الجامعة","نشيد الأنشاد","أشعياء","أرمياء","مراثي أرمياء","حزقيال","دانيال","هوشع","يوئيل","عاموس","عوبديا","يونان","ميخا","ناحوم","حبقوق","صفنيا","حجي","زكريا","ملاخي","متى","مرقس","لوقا","يوحنا","أعمال الرسل","رومية","1 كورنثوس","2 كورنثوس","غلاطية","أفسس","فيليبي","كولوسي","1 تسالونيكي","2 تسالونيكي","1 تيموثاوس","2 تيموثاوس","تيطس","فيليمون","العبرانيين","يعقوب","1 بطرس","2 بطرس","1 يوحنا","2 يوحنا","3 يوحنا","يهوذا","رؤيا"
]);

// turkish
bible.addNames('tur', bible.DEFAULT_BIBLE, [
["Yaratilis", "Tekvin"],
["Misir'dan Çikis", "Çikis"],
"Levililer",
["Çölde Sayim", "Sayilar"],
"Yasa'nin Tekrari",
"Yesu",
"Hakimler",
"Rut",
"1 Samuel",
"2 Samuel",
"1 Krallar",
"2 Krallar",
"1 Tarihler",
"2 Tarihler",
"Ezra",
"Nehemya",
"Ester",
["Eyüp", "Eyub"],
"Mezmurlar",
["Süleyman'in Özdeyisleri", "Süleyman'in Meselleri"],
"Vaiz",
["Ezgiler Ezgisi", "Nesideler Nesidesi"],
["Yesaya", "Isaya"],
"Yeremya",
["Agitlar", "Yeremya'nin Mersiyeleri"],
"Hezekiel",
"Daniel",
"Hosea",
"Yoel",
"Amos",
["Ovadya", "Obadya"],
"Yunus",
"Mika",
"Nahum",
"Habakkuk",
["Sefanya", "Tsefanya"],
["Hagay", "Haggay"],
["Zekeriya", "Zekarya"],
"Malaki",
"Matta",
"Markos",
"Luka",
"Yuhanna",
["Elçilerin Isleri", "Resullerin Isleri"],
"Romalilar",
["1 Korintliler", "1. Korintoslular"],
["2 Korintliler", "2. Korintoslular"],
"Galatyalilar",
["Efesliler", "Efesoslular"],
"Filipililer",
"Koloseliler",
"1 Selanikiler",
"2 Selanikiler",
"1 Timoteos",
"2 Timoteos",
"Titus",
"Filimon",
"Ibraniler",
["Yakup", "Yakub"],
"1 Petrus",
"2 Petrus",
"1 Yuhanna",
"2 Yuhanna",
"3 Yuhanna",
"Yahuda",
"Vahiy"	
	
]);