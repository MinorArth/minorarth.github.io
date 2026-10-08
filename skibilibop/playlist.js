const LOGO_IMAGE = "../img/mam_white.png";
const LOGO_TITLE = "Minor Arth";
const LOGO_LINK = "..";
const ALBUM_TITLE = getMeta("og_title") || document.title;
const ALBUM_DESCRIPTION = getMeta("og_description");
const ALBUM_LINK = "https://www.mediafire.com/file/bfz9rl1a905qqqh/MinorArth-TheMashmaker-volume4.zip/file";
const ALBUM_ARTIST = "Boot Of The Day";
const TRACK_LINK_PATH = "https://remix.audio/track/";
const AUDIO_PATH = "https://remix.audio/uploads/tracks/";
const IMAGE_PATH = "https://remix.audio/uploads/media/";
const AUDIO_TYPE = ".mp3";
const IMAGE_TYPE = ".jpg";
const PLAYER_IMAGE = "https://remix.audio/uploads/media/1170299058_655743859_1059535128.jpg";

var items = [
	{
		"id": 97425,
		"file": "2046391232_788476097_339679126.mp3",
		"producer": "Elea Rigby",
		"title": "You & Me - SKiBiLiBoP (Disclosure vs Zero 7 & Sophie Barker)",
		"image": "1170299058_655743859_1059535128.jpg"
	},
	{
		"id": 97330,
		"file": "343575455_829944949_1064754177.mp3",
		"producer": "SKiBiLiBoP",
		"title": "Raggamuffin Family",
		"artists": "Mary J Blige / L'Entourloop",
		"image": "1320227999_1297153257_632898479.jpg",
		"links": { "Boot Of The Day": "https://fb.watch/v/7Dzgp4KlN" }
	},
	{
		"id": 97487,
		"file": "518478335_1027987750_181692526.mp3",
		"producer": "DoM",
		"artists": "Bob Marley / Yazoo / The Dandy Warhols / Billie Eilish / Billy Idol",
		"title": "Jamming megamix",
		"image": "330859929_732142591_1608353696.png"
	},
	{
		"id": 97448,
		"file": "772429497_848592957_835228235.mp3",
		"producer": "Michmash",
		"title": "50 nuances de zik",
		"image": "893004245_1793836563_70981805.jpeg",
		"links": { "Boot Of The Day": "https://www.facebook.com/bootoftheday/posts/pfbid02a1yUNPJAFxqEm7Bvv1ff2562cjfk1yxZY52QhKLgNqwJ3BwUKcAKw2ZuLNfhnGFxl" }
	},
	{
		"id": 97449,
		"file": "1658988831_1179553169_401767214.mp3",
		"producer": "Funky Belek",
		"artists": "Bob Marley / Patapouf",
		"title": "Buffalo Grill Soldier",
		"image": "1860880619_1734886237_1451095500.jpg",
		"video": "https://youtu.be/DPfdUISnWMk"
	},
	{
		"id": 97428,
		"file": "129085291_1775745938_719441477.mp3",
		"producer": "Minor Arth",
		"title": "MC Solaar / Arlo Parks - Caroline",
		"image": "1577102287_1234688910_836529446.jpg"
	}
];

var links = {
	"<": "..",
	"remix.audio": "https://remix.audio/playlist/3899",
	"YouTube": "https://www.youtube.com/@Skibilibop",
	"Facebook": "https://www.facebook.com/skibilibop"
};

loadPlaylist();
