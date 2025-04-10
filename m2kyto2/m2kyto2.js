const LOGO_IMAGE = "../img/AudioBoots.png";
const LOGO_TITLE = "AudioBoots";
const LOGO_LINK = "..";
const ALBUM_TITLE = getMeta("og_title") || document.title;
const ALBUM_DESCRIPTION = getMeta("og_description");
const ALBUM_LINK = "https://audioboots.org/Albums/M2KYTO2";
const ALBUM_ARTIST = "";
const TRACK_LINK_PATH = "https://remix.audio/track/";
const AUDIO_PATH = "https://remix.audio/uploads/tracks/";
const IMAGE_PATH = "https://remix.audio/uploads/media/";
const AUDIO_TYPE = ".mp3";
const IMAGE_TYPE = ".jpg";
const PLAYER_IMAGE = getMeta("og_image");

var links = {
	"<": "..",
	"remix.audio": "https://remix.audio/playlist/3212",
	"Facebook": "https://www.facebook.com/groups/audioboots"
};

var items = [
//	{ type: "category", title: "Disc 1" },
	{
		"id": 74261,
		"file": "1184833961_815216806_1903531812.mp3",
		"producer": "Chocomang",
		"artists": "Evanescence / Linkin Park",
		"title": "Lost Under",
		"image": "1581720490_948234280_34992834.jpg"
	},
	{
		"id": 74047,
		"file": "1640632024_168835391_1168108782.mp3",
		"producer": "Minor Arth",
		"artists": "David Bowie / The Vibrators",
		"title": "Suffragette In Moscow",
		"image": "1675909593_1650552207_765610049.jpg"
	},
	{
		"id": 74030,
		"file": "2033016901_1626588208_547307465.mp3",
		"producer": "satis5d",
		"artists": "Ratt / The Outfield",
		"title": "Round and Round Ain't Over",
		"image": "1942803553_551002103_629548849.jpg"
	},
	{
		"id": 74231,
		"file": "1097228072_624327015_1172017856.mp3",
		"producer": "Mashete",
		"artists": "Sum 41 vs Girlschool",
		"title": "Bomber Over My Head",
		"image": "238156375_1450290658_754096657.jpg"
	},
	{
		"id": 74088,
		"file": "1831362246_510968400_704296461.mp3",
		"producer": "Brighton Sonny",
		"artists": "Limp Bizkit / Saliva",
		"title": "Rollin’ Rollin’ Boom",
		"image": "1559652862_1501030426_2051024342.png"
	},
	{
		"id": 74076,
		"file": "316158735_1558884499_1309871623.mp3",
		"producer": "DJ Useo",
		"artists": "New Order / Jesus & Mary Chain",
		"title": "Head On True Faith",
		"image": "630593282_2084274979_1855853165.jpg"
	},
	{
		"id": 74212,
		"file": "742480831_1050916389_1021543674.mp3",
		"producer": "Chocomang",
		"artists": "Siouxie & The Banshees / Bill Haley & His Comets",
		"title": "Rock Around A Void",
		"image": "559647813_1999902743_530723807.jpg"
	},
	{
		"id": 74277,
		"file": "1926860378_1228009953_992216715.mp3",
		"producer": "Mashete",
		"artists": "Def Leppard / Staind",
		"title": "Lady Strange Here And Now",
		"image": "909261143_643144228_575065484.jpg"
	},
	{
		"id": 74157,
		"file": "231591759_1420282712_187574370.mp3",
		"producer": "Brighton Sonny",
		"artists": "Linkin Park / Morcheeba",
		"title": "What I've Done, I Drank Blood Like Lemonade",
		"image": "1894549820_1700907134_402218055.png"
	},

//	{ type: "category", title: "Disc 2" },
	{
		"id": 74258,
		"file": "555066364_1185361655_1781795757.mp3",
		"producer": "Brighton Sonny",
		"artists": "Nine Inch Nails / DJ Shadow",
		"title": "The Rocket That Fuels",
		"image": "676699320_603560713_938984371.png"
	},
	{
		"id": 74348,
		"file": "852133565_133337007_729175014.mp3",
		"producer": "Brighton Sonny",
		"artists": "Foreigner / Selena Gomez",
		"title": "Hot Blooded Love",
		"image": "1875043593_1866051411_1005931960.png"
	},
	{
		"id": 74232,
		"file": "1696785854_10799045_945224268.mp3",
		"producer": "Mashete",
		"artists": "Stray Cats / The Offspring",
		"title": "The Kids Rock This Town",
		"image": "1557524785_1977952167_2121016035.jpg"
	},
	{
		"id": 74412,
		"file": "1112346959_327744545_1886838220.mp3",
		"producer": "Brighton Sonny",
		"artists": "Rammstein / Johnny Cash",
		"title": "Du Hast Einen Persönlichen Jesus",
		"image": "1096083782_1377798027_483639529.png"
	},
	{
		"id": 74230,
		"file": "1187801283_1227390058_2114156973.mp3",
		"producer": "Chocomang",
		"artists": "Staind / Elton John / Dua Lipa",
		"title": "Throw Your Sacrifice Away",
		"image": "1270473291_523048305_1062039907.jpg"
	},
	{
		"id": 74278,
		"file": "841735379_631231807_1859074766.mp3",
		"producer": "Mashete",
		"artists": "The Cardigans / 12 Stones",
		"title": "My Favourite Crash",
		"image": "486795513_443327904_470118705.jpg"
	},
	{
		"id": 74203,
		"file": "859970493_1916625508_1687962000.mp3",
		"producer": "Chocomang",
		"artists": "The Clash / Captain Sensible",
		"title": "Wot Riot",
		"image": "1965990290_1561138925_1899495533.jpg"
	},
	{
		"id": 74402,
		"file": "1198280630_1765108267_404894893.mp3",
		"producer": "Minor Arth",
		"artists": "Ariel Pink's Haunted Graffiti / Joy Division",
		"title": "The Digital Interzone Is A Lie",
		"image": "257642114_1807326955_1834772419.jpg"
	},
	{
		"id": 74446,
		"file": "1249613109_761354784_1629811885.mp3",
		"producer": "Chocomang",
		"artists": "The Stooges / Soundgarden",
		"title": "No Wave",
		"image": "305646546_1262247047_1241288889.jpg"
	},
	{ type: "category", title: "Album preview" },
	{
		"file": "https://hearthis.at/vxmfxz7w/dj-useo-mashups-to-knock-your-teeth-out-the-sequel-the-mix-disc-1/stream.mp3?s=Utz",
		"artists": "Mashups To Knock Your Teeth Out!",
		"title":  "The Sequel | Disc 1 preview",
		"image": "1942803553_551002103_629548849.jpg"
	},
	{
		"file": "https://hearthis.at/vxmfxz7w/dj-useo-mashups-to-knock-your-teeth-out-the-sequel-the-mix-disc-2/stream.mp3?s=x2X",
		"artists": "Mashups To Knock Your Teeth Out!",
		"title":  "The Sequel | Disc 2 preview",
		"image": "1942803553_551002103_629548849.jpg"
	}
];

producers = distinct(items, "producer");

loadPlaylist();