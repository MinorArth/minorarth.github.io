const LOGO_IMAGE = "../img/mam_white.png";
const LOGO_TITLE = "Minor Arth";
const LOGO_LINK = "..";
const ALBUM_TITLE = getMeta("og_title") || document.title;
const ALBUM_DESCRIPTION = getMeta("og_description");
const ALBUM_LINK = "https://www.mediafire.com/file/bfz9rl1a905qqqh/MinorArth-TheMashmaker-volume4.zip/file";
const ALBUM_ARTIST = "Minor Arth";
const TRACK_LINK_PATH = "https://remix.audio/track/";
const AUDIO_PATH = "https://remix.audio/uploads/tracks/";
const IMAGE_PATH = "https://remix.audio/uploads/media/";
const AUDIO_TYPE = ".mp3";
const IMAGE_TYPE = ".jpg";
const PLAYER_IMAGE = "https://remix.audio/uploads/media/1170299058_655743859_1059535128.jpg";

var items = [
	{
		"id": 93053,
		"file": "1424944979_387566719_1666414772.mp3",
		"localFile": "Chemical Brothers - Underworld - Tame Impala - Star Of Summer",
		"producer": "Minor Arth",
		"artists": "Chemical Brothers / Underworld / Tame Impala",
		"title": "Star Of Summer",
		"image": "1170299058_655743859_1059535128.jpg",
		"sources": [
			"The Chemical Brothers - Star Guitar | 2002",
			"Underworld - Born Slippy (Nuxx) | 1996",
			"Tame Impala - End Of Summer | 2025"
		],
		"links": { "Summer Booty 2026": "../sb2026?tame", "VIDEO": "https://youtu.be/Rqa0Lc2dFys" }
	}
];

var links = {
	"<": "..",
	"remix.audio": "https://remix.audio/playlist/3899",
	"YouTube": "https://www.youtube.com/@Skibilibop",
	"Facebook": "https://www.facebook.com/skibilibop"
};

loadPlaylist();
