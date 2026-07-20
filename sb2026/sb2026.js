const LOGO_IMAGE = "../img/AudioBoots.png";
const LOGO_TITLE = "AudioBoots";
const LOGO_LINK = "..";
const ALBUM_TITLE = getMeta("og_title") || document.title;
const ALBUM_DESCRIPTION = getMeta("og_description");
const ALBUM_LINK = "https://audioboots.org/Albums/SB2026";
const ALBUM_ARTIST = "";
const TRACK_LINK_PATH = "https://remix.audio/track/";
const AUDIO_PATH = "https://remix.audio/uploads/tracks/";
const IMAGE_PATH = "https://remix.audio/uploads/media/";
const AUDIO_TYPE = ".mp3";
const IMAGE_TYPE = ".jpg";
const PLAYER_IMAGE = "https://audioboots.org/Albums/SB2026/assets/album_cover.jpg";

const links = {
	"<": "..",
	"remix.audio": "https://remix.audio/playlist/3739",
	"AudioBoots": "https://audioboots.org/forum/",
	"Facebook": "https://www.facebook.com/groups/audioboots"
};

var items = [
// Disc 1
	{
		"id": 93176,
		"file": "1649666603_741079828_1793272616.mp3",
		"producer": "Mashete",
		"artists": "Mungo Jerry / Blink 182",
		"title": "Feeling Summertime",
		"image": "546293496_989634072_2143601235.jpg"
	},
	{
		"id": 93257,
		"file": "1893845787_1598338425_1996346845.mp3",
		"producer": "Brighton Sonny",
		"artists": "Katy Perry / Booker T & the MGs",
		"title": "I Kissed A Limbo Girl",
		"image": "106152304_1861040522_1279938630.png"
	},
	{
		"id": 93515,
		"file": "1392001723_1624618106_521783268.mp3",
		"producer": "DoM",
		"artists": "Katy Perry / Depeche Mode",
		"title": "Just Can't Get Hot N' Cold",
		"image": "2115608910_1343042864_1529840393.png"
	},
	{
		"id": 92062,
		"file": "738570177_169232694_1499847918.mp3",
		"producer": "satis5d",
		"artists": "Mazzy Star / The Verve",
		"title": "Into Bitter Sweet Dust",
		"image": "1703929737_2006981534_671440537.jpg"
	},
	{
		"id": 93239,
		"file": "483274730_848865409_1423343036.mp3",
		"producer": "Masdamind",
		"artists": "Keith Urban / The Rolling Stones",
		"title": "Angry Like You",
//		"image": "139747703_1605968937_54321849.jpg"
	},
	{
		"id": 93094,
		"file": "117952051_415785071_1458109778.mp3",
		"producer": "Chocomang",
		"artists": "The Posies / The Stranglers",
		"title": "Midnight Summer Dream All Day",
		"image": "1260214598_1367803886_1495765977.png"
	},
	{
		"id": 94393,
		"file": "1447396135_1177946839_517572340.mp3",
		"producer": "Minor Arth",
		"artists": "David Guetta / Depeche Mode",
		"title": "The Sea Of Sin Is Mine",
		"image": "1750082681_939595694_1254164265.jpg"
	},
	{
		"id": 93567,
		"file": "1627342630_56013236_1777878528.mp3",
		"producer": "DoM",
		"artists": "Michael Jackson / Boney M",
		"title": "Gotta Beat It",
		"image": "673172163_1959203912_475679112.png"
	},
	{
		"id": 93542,
		"file": "2076919875_584903020_1611430672.mp3",
		"producer": "Minor Arth",
		"artists": "Sade / Chris Rea",
		"title": "Hang On To The Beach Operator",
		"image": "2136550805_1013464274_1256933779.jpg",
		"links": { "The Mashmaker, volume 4": "../mashmaker4?sade" }
	},
	{
		"id": 92860,
		"file": "627657241_590999861_690322046.mp3",
		"producer": "DAW-GUN",
		"artists": "PinkPantheress / Right Said Fred",
		"title": "I'm Too Sexy for my Stateside",
//		"image": "2026225269_692313484_85182114.jpg"
	},

// Disc 2
	{
		"id": 93240,
		"file": "1289129265_953158099_929065097.mp3",
		"producer": "Masdamind",
		"artists": "Rihanna / The Vines",
		"title": "Shut Up and Ride",
//		"image": "1632840788_394177413_530926221.jpg"
	},
	{
		"id": 93226,
		"file": "1742911926_531360600_1147596894.mp3",
		"producer": "Chocomang",
		"artists": "Bee Gees / Chris Rea",
		"title": "How Deep Is Your Love On The Beach",
		"image": "1474268585_2048576040_325648018.png"
	},
	{
		"id": 93262,
		"file": "1793095345_675633685_921730177.mp3",
		"producer": "Mashete",
		"artists": "Playahitty / Audiovent",
		"title": "The Summer is Energy",
		"image": "2063624711_1145503532_1685242447.jpg"
	},
	{
		"id": 93241,
		"file": "1800756207_52819692_1145131233.mp3",
		"producer": "Masdamind",
		"artists": "Michael Jackson / Ne-Yo / Estelle / The Power Station / Dua Lipa / Sombr",
		"title": "6 to 12",
//		"image": "1434866036_1748169063_1510375837.jpg"
	},
	{
		"id": 93051,
		"file": "1472436626_1765444874_555672232.mp3",
		"artists": "OMD / Loreena McKennitt",
		"producer": "DJ Useo",
		"title": "The Mummer's Enola Gay Dance",
//		"image": "1360846199_1734374128_1447193202.jpg"
	},
	{
		"id": 92809,
		"file": "1982221151_1524717524_304184996.mp3",
		"producer": "Brighton Sonny",
		"artists": "Kongos / Smash Mouth",
		"title": "Come Walkin' With Me, On The Sun, Now",
		"image": "1959777854_1254491589_544733840.png"
	},
	{
		"id": 93222,
		"file": "1615383676_81976481_472261194.mp3",
		"producer": "Mashete",
		"artists": "DJ Jazzy Jeff / Papa Roach ",
		"title": "Summertime To Be Loved",
		"image": "285368781_2073118383_452768751.jpg"
	},
	{
		"id": 92861,
		"file": "1687366556_129198868_1047130168.mp3",
		"producer": "DAW-GUN",
		"artists": "Temper City / Red Hot Chili Peppers",
		"title": "Self-Aware of My Scar Tissue",
//		"image": "1253490696_1387737020_1897745733.jpg"
	},

// Disc 3
	{
		"id": 93183,
		"file": "1459317344_1827507801_454033064.mp3",
		"producer": "Brighton Sonny",
		"artists": "Lana Del Rey",
		"title": "Cinnamon Sadness / Summertime Girl",
		"image": "8276548_69864813_626230108.png"
	},
	{
		"id": 93300,
		"file": "862309898_161975442_723975060.mp3",
		"producer": "Chocomang",
		"artists": "Michael Sembello / Vonray",
		"title": "Maniac Inside Out",
		"image": "1696705730_59498297_1167292396.png"
	},
	{
		"id": 93204,
		"file": "448165895_376749507_210004763.mp3",
		"producer": "oki",
		"artists": "Zara Larsson / Bicep / Wings",
		"title": "Midnight Glue",
//		"image": "1622824438_1365072089_1159825783.jpg"
	},
	{
		"id": 93358,
		"file": "2080928323_641965486_559366128.mp3",
		"producer": "Chocomang",
		"artists": "Mylène Farmer / David Guetta",
		"title": "Beautiful Day / Une Belle Journée",
		"image": "1884249058_1610414273_1659711106.png"
	},
	{
		"id": 93053,
		"file": "1424944979_387566719_1666414772.mp3",
		"producer": "Minor Arth",
		"artists": "Tame Impala / Chemical Brothers / Underworld",
		"title": "Star Of Summer",
		"image": "2110265191_1020054077_252067064.jpg",
		"links": { "The Mashmaker, volume 4": "../mashmaker4?tame", "VIDEO": "https://youtu.be/Rqa0Lc2dFys" }
	},
	{
		"id": 92862,
		"file": "699999675_294097786_911315896.mp3",
		"producer": "DAW-GUN",
		"artists": "Olivia Dean / Bad Bunny",
		"title": "So Easy to DTMF",
//		"image": "853737360_1293386864_62405077.jpg"
	},
	{
		"id": 92975,
		"file": "1744494638_1696070502_1320957436.mp3",
		"artists": "Sabrina / Linkin Park",
		"producer": "Mashete",
		"title": "Boys Cumulus",
		"image": "946620534_1348394373_976038279.jpg"
	}
];

items.forEach(i => i.image = i.image || PLAYER_IMAGE);
loadPlaylist();