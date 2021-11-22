console.log("creating houses object");

var allHouses = {
	"House Algood":1,
	"House Allyrion of Godsgrace":2,
	"House Amber":3,
	"House Ambrose":4,
	"House Appleton of Appleton":5,
	"House Arryn of Gulltown":6,
	"House Arryn of the Eyrie":7,
	"House Ashford of Ashford":8,
	"House Ashwood":9,
	"House Baelish of Harrenhal":10,
	"House Baelish of the Fingers":11,
	"House Ball":12,
	"House Banefort of Banefort":13,
	"House Bar Emmon of Sharp Point":14,
	"House Baratheon of Dragonstone":15,
	"House Baratheon of King's Landing":16,
	"House Baratheon of Storm's End":17,
	"House Beesbury of Honeyholt":18,
	"House Belmore of Strongsong":19,
	"House Bettley":20,
	"House Bigglestone":21,
	"House Blackbar of Bandallon":22,
	"House Blackfyre of King's Landing":23,
	"House Blackmont of Blackmont":24,
	"House Blackmyre":25,
	"House Blacktyde of Blacktyde":26,
	"House Blackwood of Raventree Hall":27,
	"House Blanetree":28,
	"House Blount":29,
	"House Boggs":30,
	"House Boggs of Crackclaw Point":31,
	"House Bole":32,
	"House Bolling":33,
	"House Bolton of the Dreadfort":34,
	"House Borrell of Sweetsister":35,
	"House Botley of Lordsport":36,
	"House Bracken of Stone Hedge":37,
	"House Branch":38,
	"House Branfield":39,
	"House Brax of Hornvale":40,
	"House Breakstone":41,
	"House Briar":42,
	"House Bridges":43,
	"House Brightstone":44,
	"House Brook":45,
	"House Broom":46,
	"House Brownhill":47,
	"House Brune of Brownhollow":48,
	"House Brune of the Dyre Den":49,
	"House Buckler of Bronzegate":50,
	"House Buckwell of the Antlers":51,
	"House Bulwer of Blackcrown":52,
	"House Burley":53,
	"House Bushy":54,
	"House Butterwell":55,
	"House Byrch":56,
	"House Bywater":57,
	"House Cafferen of Fawnton":58,
	"House Cargyll":59,
	"House Caron of Nightsong":60,
	"House Cassel":61,
	"House Casterly of Casterly Rock":62,
	"House Caswell of Bitterbridge":63,
	"House Cave":64,
	"House Celtigar of Claw Isle":65,
	"House Cerwyn of Cerwyn":66,
	"House Chambers":67,
	"House Charlton":68,
	"House Chelsted":69,
	"House Chester of Greenshield":70,
	"House Chyttering":71,
	"House Clegane":72,
	"House Clifton":73,
	"House Cockshaw":74,
	"House Codd":75,
	"House Coldwater of Coldwater Burn":76,
	"House Cole":77,
	"House Condon":78,
	"House Conklyn":79,
	"House Connington of Griffin's Roost":80,
	"House Corbray of Heart's Home":81,
	"House Cordwayner of Hammerhal":82,
	"House Costayne of Three Towers":83,
	"House Cox of Saltpans":84,
	"House Crabb":85,
	"House Crakehall of Crakehall":86,
	"House Crane of Red Lake":87,
	"House Cray":88,
	"House Cressey":89,
	"House Crowl of Deepdown":90,
	"House Cuy of Sunhouse":91,
	"House Dalt of Lemonwood":92,
	"House Dargood":93,
	"House Darke":94,
	"House Darklyn of Duskendale":95,
	"House Darkwood":96,
	"House Darry of Darry":97,
	"House Dayne of High Hermitage":98,
	"House Dayne of Starfall":99,
	"House Deddings":100,
	"House Doggett":101,
	"House Dondarrion of Blackhaven":102,
	"House Donniger":103,
	"House Drinkwater":104,
	"House Drox":105,
	"House Drumm of Old Wyk":106,
	"House Dryland":107,
	"House Dunn":108,
	"House Durrandon":109,
	"House Durwell":110,
	"House Dustin of Barrowton":111,
	"House Edgerton":112,
	"House Egen":113,
	"House Elesham of the Paps":114,
	"House Erenford":115,
	"House Errol of Haystack Hall":116,
	"House Estermont of Greenstone":117,
	"House Estren of Wyndhall":118,
	"House Falwell":119,
	"House Farman of Faircastle":120,
	"House Farring":121,
	"House Farwynd of Sealskin Point":122,
	"House Farwynd of the Lonely Light":123,
	"House Fell of Felwood":124,
	"House Fenn":125,
	"House Ferren":126,
	"House Fisher":127,
	"House Fisher of the Stony Shore":128,
	"House Flint of the mountains":129,
	"House Flint of Breakstone Hill":130,
	"House Flint of Flint's Finger":131,
	"House Flint of Widow's Watch":132,
	"House Florent of Brightwater Keep":133,
	"House Follard":134,
	"House Foote":135,
	"House Foote of Nightsong":136,
	"House Footly of Tumbleton":137,
	"House Forrester":138,
	"House Fossoway of Cider Hall":139,
	"House Fossoway of New Barrel":140,
	"House Fowler of Skyreach":141,
	"House Frey of Riverrun":142,
	"House Frey of the Crossing":143,
	"House Frost":144,
	"House Gardener of Highgarden":145,
	"House Gargalen of Salt Shore":146,
	"House Garner":147,
	"House Gaunt":148,
	"House Glenmore":149,
	"House Glover of Deepwood Motte":150,
	"House Goodbrook":151,
	"House Goodbrother of Corpse Lake":152,
	"House Goodbrother of Crow Spike Keep":153,
	"House Goodbrother of Downdelving":154,
	"House Goodbrother of Hammerhorn":155,
	"House Goodbrother of Orkmont":156,
	"House Goodbrother of Shatterstone":157,
	"House Gower":158,
	"House Graceford of Holyhall":159,
	"House Grafton of Gulltown":160,
	"House Grandison of Grandview":161,
	"House Graves":162,
	"House Greenfield of Greenfield":163,
	"House Greengood":164,
	"House Greenwood":165,
	"House Grell":166,
	"House Grey":167,
	"House Greyiron of Orkmont":168,
	"House Greyjoy of Pyke":169,
	"House Greystark of Wolf's Den":170,
	"House Grimm of Greyshield":171,
	"House Haigh":172,
	"House Hamell":173,
	"House Harclay":174,
	"House Hardy":175,
	"House Hardyng":176,
	"House Harlaw of Grey Garden":177,
	"House Harlaw of Harlaw":178,
	"House Harlaw of Harlaw Hall":179,
	"House Harlaw of Harridan Hill":180,
	"House Harlaw of the Tower of Glimmering":181,
	"House Harlton":182,
	"House Harroway of Harrenhal":183,
	"House Harte":184,
	"House Hastwyck":185,
	"House Hasty":186,
	"House Hawick of Saltpans":187,
	"House Hawthorne":188,
	"House Hayford of Hayford":189,
	"House Heddle":190,
	"House Herston":191,
	"House Hersy of Newkeep":192,
	"House Hetherspoon":193,
	"House Hewett of Oakenshield":194,
	"House Hightower of the Hightower":195,
	"House Hoare of Orkmont":196,
	"House Hogg of Sow's Horn":197,
	"House Hollard":198,
	"House Holt":199,
	"House Holt":200,
	"House Hook":201,
	"House Hornwood of Hornwood":202,
	"House Horpe":203,
	"House Hull":204,
	"House Humble":205,
	"House Hunt":206,
	"House Hunter of Longbow Hall":207,
	"House Hutcheson":208,
	"House Inchfield":209,
	"House Ironmaker":210,
	"House Ironsmith":211,
	"House Jast":212,
	"House Jordayne of the Tor":213,
	"House Justman":214,
	"House Karstark of Karhold":215,
	"House Keath":216,
	"House Kellington":217,
	"House Kenning of Harlaw":218,
	"House Kenning of Kayce":219,
	"House Kettleblack":220,
	"House Kidwell of Ivy Hall":221,
	"House Knott":222,
	"House Kyndall":223,
	"House Ladybright":224,
	"House Lake":225,
	"House Lake":226,
	"House Langward":227,
	"House Lannett":228,
	"House Lannister of Casterly Rock":229,
	"House Lannister of Darry":230,
	"House Lannister of Lannisport":231,
	"House Lanny":232,
	"House Lantell":233,
	"House Lefford of the Golden Tooth":234,
	"House Leygood":235,
	"House Liddle":236,
	"House Lightfoot":237,
	"House Lipps":238,
	"House Locke of Oldcastle":239,
	"House Lolliston":240,
	"House Long":241,
	"House Longthorpe of Longsister":242,
	"House Longwaters":243,
	"House Lonmouth":244,
	"House Lorch":245,
	"House Lothston of Harrenhal":246,
	"House Lowther":247,
	"House Lyberr":248,
	"House Lychester":249,
	"House Lydden of Deep Den":250,
	"House Lynderly of the Snakewood":251,
	"House Magnar of Kingshouse":252,
	"House Mallery":253,
	"House Mallister of Seagard":254,
	"House Manderly of White Harbor":255,
	"House Manning":256,
	"House Manwoody of Kingsgrave":257,
	"House Marbrand of Ashemark":258,
	"House Marsh":259,
	"House Massey of Stonedance":260,
	"House Meadows of Grassy Vale":261,
	"House Melcolm of Old Anchor":262,
	"House Merlyn of Pebbleton":263,
	"House Merryweather of Longtable":264,
	"House Mertyns of Mistwood":265,
	"House Middlebury":266,
	"House Mollen":267,
	"House Moore":268,
	"House Mooton of Maidenpool":269,
	"House Moreland":270,
	"House Mormont of Bear Island":271,
	"House Morrigen of Crow's Nest":272,
	"House Moss":273,
	"House Mudd of Oldstones":274,
	"House Mullendore of Uplands":275,
	"House Musgood":276,
	"House Myatt":277,
	"House Myre of Harlaw":278,
	"House Nayland of Hag's Mire":279,
	"House Netley":280,
	"House Norcross":281,
	"House Norrey":282,
	"House Norridge":283,
	"House Nutt":284,
	"House Nymeros Martell of Sunspear":285,
	"House Oakheart of Old Oak":286,
	"House Oldflowers":287,
	"House Orkwood of Orkmont":288,
	"House Orme":289,
	"House Osgrey of Leafy Lake":290,
	"House Osgrey of Standfast":291,
	"House Overton":292,
	"House Paege":293,
	"House Parren":294,
	"House Payne":295,
	"House Peake of Starpike":296,
	"House Peasebury of Poddingfield":297,
	"House Peat":298,
	"House Peckledon":299,
	"House Penrose of Parchments":300,
	"House Perryn":301,
	"House Piper of Pinkmaiden":302,
	"House Plumm":303,
	"House Pommingham":304,
	"House Poole":305,
	"House Prester of Feastfires":306,
	"House Pryor of Pebble":307,
	"House Pyle":308,
	"House Pyne":309,
	"House Qoherys of Harrenhal":310,
	"House Qorgyle of Sandstone":311,
	"House Quagg":312,
	"House Rambton":313,
	"House Redbeard":314,
	"House Redding":315,
	"House Redfort of Redfort":316,
	"House Redwyne of the Arbor":317,
	"House Reed of Greywater Watch":318,
	"House Reyne of Castamere":319,
	"House Rhysling":320,
	"House Risley":321,
	"House Rogers of Amberly":322,
	"House Rollingford":323,
	"House Roote of Lord Harroway's Town":324,
	"House Rosby of Rosby":325,
	"House Rowan of Goldengrove":326,
	"House Roxton of the Ring":327,
	"House Royce of Runestone":328,
	"House Royce of the Gates of the Moon":329,
	"House Ruthermont":330,
	"House Ruttiger":331,
	"House Ryder of the Rills":332,
	"House Ryger of Willow Wood":333,
	"House Rykker of Duskendale":334,
	"House Ryswell of the Rills":335,
	"House Saltcliffe of Saltcliffe":336,
	"House Santagar of Spottswood":337,
	"House Sarsfield of Sarsfield":338,
	"House Sarwyck":339,
	"House Seaworth of Cape Wrath":340,
	"House Selmy of Harvest Hall":341,
	"House Serrett of Silverhill":342,
	"House Serry of Southshield":343,
	"House Sharp":344,
	"House Shawney":345,
	"House Shell":346,
	"House Shell":347,
	"House Shepherd":348,
	"House Shermer of Smithyton":349,
	"House Shett of Gull Tower":350,
	"House Shett of Gulltown":351,
	"House Slate of Blackpool":352,
	"House Sloane":353,
	"House Slynt of Harrenhal":354,
	"House Smallwood of Acorn Hall":355,
	"House Sparr of Great Wyk":356,
	"House Spicer of Castamere":357,
	"House Stackhouse":358,
	"House Stackspear":359,
	"House Staedmon of Broad Arch":360,
	"House Stane of Driftwood Hall":361,
	"House Stark of Winterfell":362,
	"House Staunton of Rook's Rest":363,
	"House Stokeworth of Stokeworth":364,
	"House Stonehouse of Old Wyk":365,
	"House Stonetree of Harlaw":366,
	"House Stout of Goldgrass":367,
	"House Strickland":368,
	"House Strong of Harrenhal":369,
	"House Sunderland of the Three Sisters":370,
	"House Sunderly of Saltcliffe":371,
	"House Sunglass of Sweetport Sound":372,
	"House Swann of Stonehelm":373,
	"House Swyft of Cornfield":374,
	"House Swygert":375,
	"House Tallhart of Torrhen's Square":376,
	"House Tarbeck of Tarbeck Hall":377,
	"House Targaryen of King's Landing":378,
	"House Tarly of Horn Hill":379,
	"House Tarth of Evenfall Hall":380,
	"House Tawney of Orkmont":381,
	"House Teague":382,
	"House Templeton":383,
	"House Terrick":384,
	"House Thenn":385,
	"House Thorne":386,
	"House Toland of Ghost Hill":387,
	"House Tollett of the Grey Glen":388,
	"House Torrent of Littlesister":389,
	"House Towers":390,
	"House Towers of Harrenhal":391,
	"House Toyne":392,
	"House Trant of Gallowsgrey":393,
	"House Tudbury":394,
	"House Tully of Riverrun":395,
	"House Turnberry":396,
	"House Tyrell of Brightwater Keep":397,
	"House Tyrell of Highgarden":398,
	"House Uffering":399,
	"House Uller of Hellholt":400,
	"House Umber of the Last Hearth":401,
	"House Upcliff":402,
	"House Vaith of the Red Dunes":403,
	"House Vance of Atranta":404,
	"House Vance of Wayfarer's Rest":405,
	"House Varner":406,
	"House Velaryon of Driftmark":407,
	"House Vikary":408,
	"House Volmark":409,
	"House Vypren":410,
	"House Vyrwel of Darkdell":411,
	"House Wade":412,
	"House Wagstaff":413,
	"House Waterman":414,
	"House Waxley of Wickenden":415,
	"House Wayn":416,
	"House Waynwood of Ironoaks":417,
	"House Weaver":418,
	"House Webber of Coldmoat":419,
	"House Wells":420,
	"House Wells":421,
	"House Wendwater":422,
	"House Wensington":423,
	"House Westbrook":424,
	"House Westerling of the Crag":425,
	"House Westford":426,
	"House Whent of Harrenhal":427,
	"House Whitehill":428,
	"House Willum":429,
	"House Wode":430,
	"House Woodfoot of Bear Island":431,
	"House Woods":432,
	"House Woodwright":433,
	"House Woolfield":434,
	"House Wull":435,
	"House Wydman":436,
	"House Wyl of the Boneway":437,
	"House Wylde of Rain House":438,
	"House Wynch of Iron Holt":439,
	"House Wythers":440,
	"House Yarwyck":441,
	"House Yelshire":442,
	"House Yew":443,
	"House Yronwood of Yronwood":444
};