const LOGO_IMAGE = "../img/mam_white.png";
const LOGO_TITLE = "Minor Arth";
const LOGO_LINK = "..";
const ALBUM_TITLE = getMeta("og_title") || document.title;
const ALBUM_DESCRIPTION = getMeta("og_description");
const ALBUM_LINK = "https://www.mediafire.com/file/svuy6z9tx3ucomf/MinorArth-DepecheModeMashups-volume1.zip/file";
const ALBUM_ARTIST = "Minor Arth";
const TRACK_LINK_PATH = "https://remix.audio/track/";
const AUDIO_PATH = "https://remix.audio/uploads/tracks/";
const IMAGE_PATH = "https://remix.audio/uploads/media/";
const AUDIO_TYPE = ".mp3";
const IMAGE_TYPE = ".jpg";
const PLAYER_IMAGE = "./Mashmaker4.jpg";

var items = [
	{
		"id": 93053,
		"file": "1424944979_387566719_1666414772.mp3",
		"producer": "Minor Arth",
		"artists": "The Chemical Brothers / Tame Impala / Underworld",
		"title": "Star Of Summer",
		"image": "2110265191_1020054077_252067064.jpg",
		"sources": [
			"The Chemical Brothers - Star Guitar | 2002",
			"Underworld - Born Slippy (Nuxx) | 1996",
			"Tame Impala - End Of Summer | 2025"
		],
		"links": { "Summer Booty 2026": "https://audioboots.org/Albums/SB2026", "VIDEO": "https://youtu.be/Rqa0Lc2dFys" }
	},
	{
		"id": 91071,
		"file": "753517544_590547353_1694923839.mp3",
		"producer": "Minor Arth",
		"artists": "Pendulum / Zanias",
		"title": "9000 Serpent Miles",
		"image": "62424416_1457729924_465811239.jpg",
		"sources": [
			"Pendulum - 9,000 Miles | 2008",
			"Zanias - Serpentsmile | Cataclysm | 2025"
		],
		"links": { "Phil B mashup show | Select Radio": "https://www.mixcloud.com/philb-mashup/phil-b-mashups-84-destination-unknown-27th-may-2026-on-select-radio" }
	},
	{
		"id": 91826,
		"file": "566284598_1111181243_1804857679.mp3",
		"producer": "Minor Arth",
		"artists": "Tycho / Joy Division / PJ Harvey",
		"title": "Love Will Tear Us Apart | Daydream mix",
		"image": "827500937_1023543336_538303676.jpg",
		"sources": [
			"Tycho - Daydream | 2011",
			"Joy Division - Love Will Tear Us Apart | 1980",
			"PJ Harvey & Tim Phillips - Love Will Tear Us Apart | 2024 cover"
		],
	},
	{
		"id": 84910,
		"file": "1322039203_1789861087_1519769869.mp3",
		"producer": "Minor Arth",
		"artists": "Babylon Zoo / David Bowie",
		"title": "Spaceman Oddity",
		"image": "571778401_1371646042_270440403.jpg",
		"sources": [
			"Babylon Zoo - Spaceman | 1996",
			"David Bowie - Space Oddity | 1969"
		],
		"links": { "Maggiore on Bowie": "https://maggioreonbowie.com/xxx-9", "VIDEO": "https://youtu.be/CLNil-TOSYU" }
	},
	{
		"id": 77502,
		"file": "1168746275_867123912_1050153974.mp3",
		"producer": "Minor Arth",
		"artists": "Garbage / Lady Gaga",
		"title": "No Future In Bad Romance",
		"image": "1812613738_1092426343_115107876.jpg",
		"sources": [
			"Garbage - There’s No Future In Optimism | 2025",
			"Lady Gaga - Bad Romance | 2009"
		],
		"links": { "Summer Booty 2025": "https://audioboots.org/Albums/SB2025" }
	},
	{
		"id": 88976,
		"file": "279720474_120463665_732952616.mp3",
		"producer": "Minor Arth",
		"artists": "Jamiroquai / Fontaines DC",
		"title": "Starburster Underground",
		"image": "1297376066_1274330096_1533861312.jpg",
		"sources": [
			"Jamiroquai - Deeper Underground | 1998",
			"Fontaines DC - Starburster | 2024"
		],
		"links": { "Mashing Too Much TV": "../m2mtv?starburster" }
	},
	{
		"id": 71368,
		"file": "442705704_690638085_2009540830.mp3",
		"producer": "Minor Arth",
		"artists": "Tears For Fears / Imagine Dragons",
		"title": "I Don't Know Why Everybody Wants To Rule The World",
		"image": "1339719309_853193426_1137913115.jpg",
		"sources": [
			"Tears For Fears - Everybody Wants To Rule The World | 1985",
			"Imagine Dragons - I Don't Know Why | 2017"
		]
	},
	{
		"id": 59627,
		"file": "591083440_2134279036_181534057.mp3",
		"producer": "Minor Arth",
		"artists": "The Clash / The Rolling Stones / Blondie",
		"title": "The Magnificent Miss Rapture",
		"image": "540094267_1004121154_1969074518.jpg",
		"sources": [
			"The Clash - The Magnificent Seven | 1981",
			"The Rolling Stones - Miss You | 1978 / live 1989",
			"Blondie - Rapture | 1980"
		],
		"links": {
			"Boot Of The Day": "https://www.facebook.com/bootoftheday/posts/pfbid0Mzi1DyRVTFVK7EQe21yEKyzePHySJFxN8F1DUVpBpph1WPVcgkJimWXifc7pJGcBl",
			"80s Mashed vol. 7": "https://audioboots.org/Albums/80sMashed7"
		}
	},
	{
		"id": 88711,
		"file": "1757824873_2037282249_757621320.mp3",
		"producer": "Minor Arth",
		"artists": "Moby / Public Enemy",
		"title": "Fight The Power's Extreme Ways",
		"image": "871074345_2012512590_963641934.jpg",
		"sources": [
			"Moby - Extreme Ways | 2002 + Jason Bourne version | 2016",
			"Public Enemy - Fight The Power | Do The Right Thing | 1989"
		],
		"links": { "Mashing Too Much TV": "../m2mtv?power" , "VIDEO": "https://youtube.com/shorts/o_bteVRXh0I" }
	},
	{
		"id": 78338,
		"file": "1478390180_1290869314_34766465.mp3",
		"producer": "Minor Arth",
		"artists": "Kavinsky / Don Toliver / Doja Cat",
		"title": "Lose My Odd Look | F1 mix",
		"sources": [
			"Kavinsky - Odd Look | 2013",
			"Don Toliver & Doja Cat - Lose My Mind | F1 | 2025"
		],
		"image": "458380788_468501545_28912752.jpg",
		"links": { "Never Let Me Down Behind The Wheel": "../dmvolume2?f1"}
	},
	{
		"id": 80741,
		"file": "2079404799_2127249438_286057817.mp3",
		"producer": "Minor Arth",
		"artists": "Air / Massive Attack / Shara Nelson",
		"title": "Silver Woman's Safe From Harm",
		"sources": [
			"Air - La Femme d'Argent | 1998",
			"Massive Attack / Shara Nelson - Safe From Harm | 1991"
		],
		"image": "2050854018_1512159394_1216791351.jpg"
	},
	{
		"id": 57604,
		"file": "382267701_1398478012_1048426216.mp3",
		"producer": "Minor Arth",
		"artists": "Womack & Womack / Gorillaz",
		"title": "Andromeda's Teardrops",
		"sources": [
			"Womack & Womack - Teardrops | 1988",
			"Gorillaz ft. DRAM - Andromeda | 2017"
		],
		"image": "1564648277_695565599_1631581346.jpg"
	},
	{
		"file": "./Chris Rea - Sade - Hang On To The Beach Operator.mp3",
		"producer": "Minor Arth",
		"artists": "Chris Rea / Sade",
		"title": "Hang On To The Beach Operator",
		"image": "artwork/Chris Rea - Sade - Hang On To The Beach Operator.jpg",
		"sources": [
			"Chris Rea - On the Beach | 1984",
			"Sade - Smooth Operator | 1984",
			"Sade - Hang On To Your Love | 1984"
		],
		"links": { "Summer Booty 2026": "https://audioboots.org/Albums/SB2026" }
	},
	{
		"id": 70738,
		"file": "969627076_176902464_964996595.mp3",
		"producer": "Minor Arth",
		"artists": "AWOLNATION / Portishead",
		"title": "Glory Sail",
		"sources": [
			"AWOLNATION - Sail | 2011",
			"Portishead - Glory Box | 1994"
		],
		"image": "778163889_84060144_2100268417.jpg"
	},
	{
		"id": 65105,
		"file": "759778726_450361870_966032937.mp3",
		"producer": "Minor Arth",
		"artists": "Hooverphonic / The Cure",
		"title": "Last Day In Eden",
		"image": "1325731059_1479326090_526601115.jpg",
		"sources": [
			"Hooverphonic - Eden | 1998",
			"The Cure - The Last Day of Summer | 2000"
		],
		"video": "https://youtu.be/x-0afDBrLlc"
	},
	{
		"file": "./Ennio Morricone - Metallica - The Unforgiven Ecstasy Of Gold.mp3",
		"producer": "Minor Arth",
		"artists": "Ennio Morricone / Metallica",
		"title": "The Unforgiven Ecstasy Of Gold",
		"image": "artwork/Ennio Morricone - Metallica - The Unforgiven Ecstasy Of Gold.jpg",
		"sources": [
			"Ennio Morricone - The Ecstasy Of Gold | The Good, The Bad And The Ugly | 1966",
			"Metallica - The Unforgiven | 1991",
		]
	},
	{
		"id": 52622,
		"file": "1877458278_762718265_137194361.mp3",
		"producer": "Minor Arth",
		"artists": "New Order / The XX",
		"title": "Crystalised | Murderised mix",
		"sources": [
			"New Order - Murder | 1984",
			"The XX - Crystalised | 2009",
			"Gorillaz - Crystalised | 2010 cover"
		],
		"image": "1833865417_760292616_45605140.jpg",
		"links": {"Boot Of The Day": "https://www.facebook.com/bootoftheday/posts/pfbid02ah7ytDhA1FgbufX5qYxMUPuGLLef4vK1xy1CDP8j8QKaLeAv7eQQsWBiHU3b1wVCl", "VIDEO": "https://youtu.be/z20DDnTv07o",}
	},
	{
		"id": 71590,
		"file": "2021658109_1051682180_1421797385.mp3",
		"producer": "Minor Arth",
		"artists": "Giorgio Moroder / Marianne Faithfull",
		"title": "Broken English | Chase mix",
		"sources": [
			"Giorgio Moroder - Chase | Midnight Express | 1978",
			"Marianne Faithfull - Broken English | 1979",
			"Daft Punk - Giorgio by Moroder | 2013"
		],
		"image": "197895655_34485075_632884523.jpg"
	},
	{
		"id": 69552,
		"file": "280942682_1720566613_1282992463.mp3",
		"producer": "Minor Arth",
		"artists": "Depeche Mode / The Beatles",
		"title": "The Things We Said Today",
		"image": "92876396_71318353_1684204332.jpg",
		"sources": [
			"The Beatles - Things We Said Today | 1963",
			"Depeche Mode - The Things You Said | 1987"
		],
		"links": { "The Things You Said Today": "../dmvolume1/?beatles", "VIDEO": "https://youtu.be/Nq3D8LNCNm0" },
	},
	{
		"id": 84340,
		"file": "313902245_1400201054_653802470.mp3",
		"producer": "Minor Arth",
		"artists": "Stranger Things / MGMT",
		"title": "Stranger Kids",
		"image": "1137948349_1136657195_15624229.jpg",
		"sources": [
			"Kyle Dixon / Michael Stein - Kids | Stranger Things | 2016",
			"MGMT - Kids | 2007"
		],
		"links": { "My Favourite Stranger Things": "../dmmashcelebration?stranger", "VIDEO": "https://youtu.be/erbi-qdekBY" }
	}
];

var links = {
	"<": "..",
	"remix.audio": "https://remix.audio/playlist/3085",
	"YouTube": "https://www.youtube.com/@MinorArth",
	"Facebook": "https://www.facebook.com/MinorArthMashups"
};

loadPlaylist();
