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
		"id": 88976,
		"file": "279720474_120463665_732952616.mp3",
		"producer": "Minor Arth",
		"artists": "Jamiroquai / Fontaines DC",
		"title": "Starburster Underground",
		"image": "1297376066_1274330096_1533861312.jpg",
		"links": { "Mashing Too Much TV": "https://audioboots.org/Albums/TooMuchTV" }
	},
	{
		"id": 77502,
		"file": "1168746275_867123912_1050153974.mp3",
		"producer": "Minor Arth",
		"artists": "Garbage / Lady Gaga",
		"title": "No Future In Bad Romance",
		"image": "1812613738_1092426343_115107876.jpg",
		"links": { "Summer Booty 2025": "https://audioboots.org/Albums/SB2025" }
	},
	{
		"id": 84910,
		"file": "1322039203_1789861087_1519769869.mp3",
		"producer": "Minor Arth",
		"artists": "Babylon Zoo / David Bowie",
		"title": "Spaceman Oddity",
		"image": "571778401_1371646042_270440403.jpg",
		"video": "https://youtu.be/CLNil-TOSYU",
		"links": { "Maggiore on Bowie": "https://maggioreonbowie.com/xxx-9" }
	},
	{
		"id": 91071,
		"file": "753517544_590547353_1694923839.mp3",
		"producer": "Minor Arth",
		"artists": "Pendulum / Zanias",
		"title": "9000 Serpent Miles",
		"image": "62424416_1457729924_465811239.jpg",
		"links": { "Phil B mashup show | Select Radio": "https://www.mixcloud.com/philb-mashup/phil-b-mashups-84-destination-unknown-27th-may-2026-on-select-radio" }
	},
	{
		"id": 91826,
		"file": "566284598_1111181243_1804857679.mp3",
		"producer": "Minor Arth",
		"artists": "Tycho / Joy Division / PJ Harvey",
		"title": "Love Will Tear Us Apart | Daydream mix",
		"image": "827500937_1023543336_538303676.jpg"
	},
	{
		"id": 71368,
		"file": "442705704_690638085_2009540830.mp3",
		"producer": "Minor Arth",
		"artists": "Tears For Fears / Imagine Dragons",
		"title": "I Don't Know Why Everybody Wants To Rule The World",
		"image": "1339719309_853193426_1137913115.jpg"
	},
	{
		"id": 88711,
		"file": "1757824873_2037282249_757621320.mp3",
		"producer": "Minor Arth",
		"artists": "Moby / Public Enemy",
		"title": "Fight The Power's Extreme Ways",
		"image": "871074345_2012512590_963641934.jpg",
		"video": "https://youtube.com/shorts/o_bteVRXh0I",
		"links": { "Mashing Too Much TV": "https://audioboots.org/Albums/TooMuchTV" }
	},
	{
		"id": 80741,
		"file": "2079404799_2127249438_286057817.mp3",
		"producer": "Minor Arth",
		"artists": "Air / Massive Attack / Shara Nelson",
		"title": "Silver Woman's Safe From Harm",
		"image": "2050854018_1512159394_1216791351.jpg"
	},
	{
		"id": 57604,
		"file": "382267701_1398478012_1048426216.mp3",
		"producer": "Minor Arth",
		"artists": "Womack & Womack / Gorillaz",
		"title": "Andromeda's Teardrops",
		"image": "1564648277_695565599_1631581346.jpg"
	},
	{
		"id": 78338,
		"file": "1478390180_1290869314_34766465.mp3",
		"producer": "Minor Arth",
		"artists": "Kavinsky / Don Toliver / Doja Cat",
		"title": "Lose My Odd Look | F1 mix",
		"image": "458380788_468501545_28912752.jpg"
	},
	{
		"id": 70738,
		"file": "969627076_176902464_964996595.mp3",
		"producer": "Minor Arth",
		"artists": "AWOLNATION / Portishead",
		"title": "Glory Sail",
		"image": "778163889_84060144_2100268417.jpg"
	},
	{
		"id": 65105,
		"file": "759778726_450361870_966032937.mp3",
		"producer": "Minor Arth",
		"artists": "Hooverphonic / The Cure",
		"title": "Last Day In Eden",
		"image": "1325731059_1479326090_526601115.jpg",
		"video": "https://youtu.be/x-0afDBrLlc"
	},
	{
		"id": 89819,
		"file": "841212913_224039459_1599428853.mp3",
		"producer": "Minor Arth",
		"artists": "The Smiths / The Kiffness / The Smithness",
		"title": "Sometimes I'm Alone | never ever mix",
		"image": "1532747727_46729518_665663610.jpg"
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
		"video": "https://youtu.be/z20DDnTv07o"
	},
	{
		"id": 71590,
		"file": "2021658109_1051682180_1421797385.mp3",
		"producer": "Minor Arth",
		"artists": "Giorgio Moroder / Marianne Faithfull",
		"title": "Broken English | Chase mix",
		"image": "197895655_34485075_632884523.jpg"
	},
	{
		"id": 59627,
		"file": "591083440_2134279036_181534057.mp3",
		"producer": "Minor Arth",
		"artists": "The Clash / The Rolling Stones / Blondie",
		"title": "The Magnificent Miss Rapture",
		"image": "540094267_1004121154_1969074518.jpg",
		"links": {
			"Boot Of The Day": "https://www.facebook.com/bootoftheday/posts/pfbid0Mzi1DyRVTFVK7EQe21yEKyzePHySJFxN8F1DUVpBpph1WPVcgkJimWXifc7pJGcBl",
			"80s Mashed vol. 7": "https://audioboots.org/Albums/80sMashed7"
		}
	},
	{
		"id": 69552,
		"file": "280942682_1720566613_1282992463.mp3",
		"producer": "Minor Arth",
		"artists": "Depeche Mode / The Beatles",
		"title": "The Things We Said Today",
		"image": "92876396_71318353_1684204332.jpg",
		"links": { "Inverse | The Things You Said Today": "../dmvolume1", "VIDEO": "https://youtu.be/Nq3D8LNCNm0" },
	},
	{
		"id": 84340,
		"file": "313902245_1400201054_653802470.mp3",
		"producer": "Minor Arth",
		"artists": "Stranger Things / MGMT",
		"title": "Stranger Kids",
		"image": "1137948349_1136657195_15624229.jpg",
		"links": { "My Favourite Stranger Things": "https://youtu.be/erbi-qdekBY" }
	}
];

var links = {
	"<": "..",
	"remix.audio": "https://remix.audio/playlist/3085",
	"YouTube": "https://www.youtube.com/@MinorArth",
	"Facebook": "https://www.facebook.com/MinorArthMashups"
};

loadPlaylist();
