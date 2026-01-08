const LOGO_IMAGE = "../img/mam_white.png";
const LOGO_TITLE = "Minor Arth";
const LOGO_LINK = "..";
const ALBUM_TITLE = getMeta("og_title") || document.title;
const ALBUM_DESCRIPTION = getMeta("og_description");
const ALBUM_LINK = "";
const ALBUM_ARTIST = "Minor Arth";
const TRACK_LINK_PATH = "https://remix.audio/track/";
const AUDIO_PATH = "https://remix.audio/uploads/tracks/";
const IMAGE_PATH = "https://remix.audio/uploads/media/";
const AUDIO_TYPE = ".mp3";
const IMAGE_TYPE = ".jpg";
const PLAYER_IMAGE = getMeta("og_image");

const links = {
	"<": "..",
	"remix.audio": "https://remix.audio/playlist/3015",
	"Bowie Mashup Videos": "https://www.youtube.com/playlist?list=PLUq5Z5VhjxM36pI3MyJYdsRFr9eI2v7z6",
	"Facebook": "https://www.facebook.com/MinorArthMashups"
};

var items = [
	{
		"id": 84910,
		"file": "1322039203_1789861087_1519769869.mp3",
		"producer": "Minor Arth",
		"artists": "Babylon Zoo / David Bowie",
		"title": "Spaceman Oddity",
		"image": "571778401_1371646042_270440403.jpg",
		"video": "https://youtu.be/CLNil-TOSYU"
	},
	{
		"id": 18056,
		"file": "440126202_751243427_188274085.mp3",
		"producer": "Minor Arth",
		"artists": "U2 / David Bowie",
		"title": "With Or Without Heroes",
		"image": "693927699_560582344_1020182788.jpg",
		"links": { "The Mashmaker, volume 1": "/mashmaker1" }
	},
	{
		"id": 41926,
		"file": "620088673_1624293685_67726702.mp3",
		"producer": "Minor Arth",
		"artists": "My Robot Friend / David Bowie",
		"title": "Dead Lazarus",
		"image": "230173176_1964376101_931889302.jpg",
		"links": { "The Mashmaker, volume 2": "/mashmaker2" }
	},
	{
		"id": 74047,
		"file": "1640632024_168835391_1168108782.mp3",
		"producer": "Minor Arth",
		"artists": "David Bowie / The Vibrators",
		"title": "Suffragette In Moscow",
		"image": "1675909593_1650552207_765610049.jpg",
		"links": { "Mashups To Knock Your Teeth Out! The Sequel": "/m2kyto2" }
	},
	{
		"id": 21884,
		"file": "122331518_765031649_2131110985.mp3",
		"producer": "Minor Arth",
		"artists": "David Bowie / Depeche Mode",
		"title": "A Question of Time and Space, Boy",
		"image": "2109137829_1544444479_953500093.jpg",
		"links": { "DM Mashups vol. 2": "../dmvolume2" }
	},
	{
		"id": 21280,
		"file": "1812169889_1444601210_684444154.mp3",
		"producer": "Minor Arth",
		"artists": "New Order / David Bowie",
		"title": "Doubts Even In America",
		"image": "1580021039_1097068330_1769703466.jpg"
	},
	{
		"id": 67938,
		"file": "1640991633_618105502_1289807020.mp3",
		"producer": "Minor Arth",
		"artists": "The Cure / David Bowie",
		"title": "Where Are We Alone ? | A-side",
		"image": "1771811344_457015449_1562397315.jpg"
	},
	{
		"id": 68059,
		"file": "1146550625_1446892185_1681616626.mp3",
		"producer": "Minor Arth",
		"artists": "David Bowie / The Cure",
		"title": "Are We Alone Now ? | B-side",
		"image": "314914331_1500557708_1570668891.jpg"
	}
];

loadPlaylist();
