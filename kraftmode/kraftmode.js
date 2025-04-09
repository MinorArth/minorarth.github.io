const LOGO_IMAGE = "../img/mam_white.png";
const LOGO_TITLE = "Minor Arth";
const LOGO_LINK = "..";

const ALBUM_TITLE = getMeta("og_title") || document.title;
const ALBUM_DESCRIPTION = getMeta("og_description");
const ALBUM_LINK = "https://www.mediafire.com/file/5jiy5b2ao3pbn53/MinorArth-KraftModeEP.zip/file";
const ALBUM_ARTIST = "Minor Arth";
const TRACK_LINK_PATH = "https://remix.audio/track/";
const AUDIO_PATH = "https://remix.audio/uploads/tracks/";
const IMAGE_PATH = "https://remix.audio/uploads/media/";
const AUDIO_TYPE = ".mp3";
const IMAGE_TYPE = ".jpg";

var links = {
	"<": "..",
	"Facebook": "https://www.facebook.com/MinorArthMashups",
	"remix.audio": "https://remix.audio/playlist/2733",
	"YouTube": "https://www.youtube.com/@MinorArth"
};

var items = [
	{
		id: 19402,
		file: "1508467_1802455964_2010175909.mp3",
		author: "Minor Arth",
		artists: "Kraftwerk / Depeche Mode / The Stranglers",
		title: "Strange Model",
		sources: [
			"Kraftwerk - The Model | 1978",
			"Depeche Mode - Strangelove | 1987",
			"The Stranglers - The European Female | 1982",
		],
		video: "https://youtu.be/pz83tO_aTyM",
		image: "31169987_570877271_795201279.jpg"
	},
	{
		id: 19401,
		file: "1992192372_47439495_278507144.mp3",
		author: "Minor Arth",
		artists: "Kraftwerk / Depeche Mode",
		title: "People Are Numbers",
		sources: [
			"Kraftwerk - Numbers | Computer World | 1981",
			"Depeche Mode - People Are People | 1984"
		],
		video: "https://youtu.be/m8zUtJlff_g",
		image: "1325777255_834725289_978931676.jpg"
	},
	{
		id: 19403,
		file: "1674492422_1306326625_2003354294.mp3",
		author: "Minor Arth",
		artists: "Kraftwerk / Depeche Mode",
		title: "Halo Robots",
		sources: [
			"Kraftwerk - The Robots | 1978",
			"Depeche Mode - Halo | 1990",
		],
		video: "https://youtu.be/pz83tO_aTyM",
		image: "1517760380_736358051_722969622.jpg"
	},
	{
		id: 60537,
		file: "1565368611_1097620179_285284931.mp3",
		author: "Minor Arth",
		artists: "Kraftwerk / Depeche Mode",
		title: "People's Elektro Kardiogramm",
		sources: [
			"Kraftwerk - Elektro Kardiogramm | 2003",
			"Depeche Mode - People Are Good | 2023",
			"Depeche Mode - People Are People | 1984"
		],
		image: "292822829_232794897_1193554332.jpg"
	}
];

const PLAYER_IMAGE = items[0].image;
loadPlaylist();