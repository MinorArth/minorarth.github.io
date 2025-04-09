const LOGO_IMAGE = "../img/mam_white.png";
const LOGO_TITLE = "Minor Arth";
const LOGO_LINK = "..";
const ALBUM_TITLE = getMeta("og_title") || document.title;
const ALBUM_DESCRIPTION = getMeta("og_description");
const ALBUM_LINK = "https://remix.audio/playlist/2449";
const ALBUM_ARTIST = "";
const TRACK_LINK_PATH = "https://remix.audio/track/";
const AUDIO_PATH = "https://remix.audio/uploads/tracks/";
const IMAGE_PATH = "https://remix.audio/uploads/media/";
const AUDIO_TYPE = ".mp3";
const IMAGE_TYPE = ".jpg";

var links = {
	"<": "..",
	"Facebook": "https://www.facebook.com/MinorArthMashups",
	"remix.audio": "https://remix.audio/playlist/2449",
	"YouTube": "https://www.youtube.com/@MinorArth"
};

var items = [
	{
		"id": 53038,
		"file": "1528258040_172576223_2130344446.mp3",
		"producer": "Minor Arth",
		"artists": "Kavinsky / Depeche Mode",
		"title": "Something To Do In Autodrive",
		"sources": [ "Kavinsky - Testarossa Autodrive | 2006", "Depeche Mode - Something To Do | 1984" ],
		"video": "https://youtu.be/FD4xU1Oj8pE",
		"image": "776688174_1168472281_248581402.jpg"
	},
	{
		"id": 53138,
		"file": "846145833_1052099080_2043750842.mp3",
		"producer": "Instamatic",
		"artists": "Kavinsky / Depeche Mode",
		"title": "Kavinsky Mode",
		"sources": [ "Kavinsky - Roadgame | 2013", "Depeche Mode - Behind The Wheel | 1987", "Out Run video game samples" ],
		"image": "640919013_785528246_1950469825.jpg"
	},
	{
		"id": 53524,
		"file": "707912503_553182076_2086510767.mp3",
		"producer": "Minor Arth",
		"artists": "Kavinsky / Depeche Mode",
		"title": "My Favourite Stranger Is Miles Away\nProtoVision mix",
		"sources": [
			"Kavinsky - ProtoVision | 2013",
			"Depeche Mode - My Favourite Stranger | 2023",
			"Depeche Mode - Miles Away / The Truth Is | 2009"
		],
		"video": "https://youtu.be/YO4GEpnEsN0",
		"image": "960573698_1470745835_1436081296.jpg"
	},
	{
		"id": 53231,
		"file": "1323905345_1088804435_178004740.mp3",
		"producer": "Minor Arth",
		"artists": "Kavinsky / Depeche Mode",
		"title": "Nightcall From Heaven",
		"sources": [ "Kavinsky - Nightcall | 2010", "Depeche Mode - Heaven | 2013"],
		"image": "1500840872_414924429_140724256.png"
	}
];

const PLAYER_IMAGE = items[1].image;
loadPlaylist();