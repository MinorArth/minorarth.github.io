const LOGO_IMAGE = "../img/AudioBoots.png";
const LOGO_TITLE = "AudioBoots";
const LOGO_LINK = "..";
const ALBUM_TITLE = getMeta("og_title") || document.title;
const ALBUM_DESCRIPTION = getMeta("og_description");
const ALBUM_LINK = "https://audioboots.org/Albums/AH2026";
const ALBUM_ARTIST = "";
const TRACK_LINK_PATH = "https://remix.audio/track/";
const AUDIO_PATH = "https://remix.audio/uploads/tracks/";
const IMAGE_PATH = "https://remix.audio/uploads/media/";
const AUDIO_TYPE = ".mp3";
const IMAGE_TYPE = ".jpg";
const PLAYER_IMAGE = getMeta("og_image");

var links = {
	"<": "..",
	"remix.audio": "https://remix.audio/playlist/3437",
	"AudioBoots": "https://audioboots.org",
	"Facebook": "https://www.facebook.com/groups/audioboots"
};

var items = {
	"Tracks": [
		{
			"id": 98225,
			"file": "769825040_830725879_1697347776.mp3",
			"producer": "Minor Arth",
			"artists": "Tame Impala / Bat For Lashes",
			"title": "What's A Girl To Dracula ?",
			"image": "1303135874_1236503960_1426903226.jpg"
		},
		{
			"id": 97759,
			"file": "1791771260_1263912440_1944052104.mp3",
			"producer": "Chocomang",
			"artists": "The Doors / Empire Of the Sun",
			"title": "We The People Are Strange",
			"image": "183808798_1906034056_961364722.png"
		},
		{
			"id": 97801,
			"file": "1745339148_1344323387_1415755193.mp3",
			"producer": "Brighton Sonny",
			"artists": "Marina & Blue Öyster Cult",
			"title": "Oh No! The Reaper!",
			"image": "1010319053_1936816885_1009683135.png"
		},
		{
			"id": 90805,
			"file": "1021545732_200609049_1787618904.wav",
			"producer": "rickyBE",
			"artists": "Michael Jackson",
			"title": "Thriller | rickyBE Deephouse mix",
			"image": "1859416951_699969499_22571937.png"
		},
		{
			"id": 98081,
			"file": "584588094_794044187_625825697.wav",
			"producer": "rickyBE",
			"artists": "Nirvana / Deadmau5",
			"title": "Smells Like Spirits",
			"image": "1988376354_1321268891_2016596803.jpg"
		},
		{
			"id": 97781,
			"file": "1790055745_1657577986_1045119969.mp3",
			"producer": "Mashete Mixes",
			"artists": "Disturbed / Delain",
			"title": "Smalltown Of Monsters",
			"image": "1304971541_1070894995_1681468729.png"
		},
		{
			"id": 98038,
			"file": "392232551_797717754_254167385.mp3",
			"producer": "Brighton Sonny",
			"artists": "Selena Gomez / Marshmello / Warren Zevon",
			"title": "We're Wolves of London",
			"image": "2111100293_1072575955_217043128.png"
		},
		{
			"id": 97553,
			"file": "1811332192_167108810_397699768.mp3",
			"producer": "DJ Useo",
			"artists": "Motley Crue / Muse",
			"title": "Shout At The Halloween Devil",
			"image": "671462608_2100798140_1116353713.jpg"
		},
		{
			"id": 97942,
			"file": "1634576325_1365137847_745794120.mp3",
			"producer": "DoM",
			"artists": "Rob Zombie / Jean-Jacques Perrey",
			"title": " DragEva",
			"image": "1217572930_1784616792_122780810.png"
		},
		{
			"id": 97708,
			"file": "1504144220_932162656_130756563.mp3",
			"producer": "Minor Arth",
			"artists": "Nick Cave / PJ Harvey / Depeche Mode",
			"title": "Don't Say You Love Henry Lee",
			"image": "1567046635_695427697_458683917.jpg"
		},
		{
			"id": 97701,
			"file": "499808707_1009859134_192687747.mp3",
			"producer": "Chocomang",
			"artists": "Lady Gaga / Lykke Li",
			"title": "I Follow Monsters",
			"image": "601792395_1385858261_1638839753.png"
		},
		{
			"id": 97783,
			"file": "265035436_2044887150_51229523.mp3",
			"producer": "Mashete Mixes",
			"artists": "Iron Maiden / Avenged Sevenfold",
			"title": "Children Of The Damned's World Dies",
			"image": "1728052653_1408286761_996683147.png"
		},
		{
			"id": 97899,
			"file": "1127499431_88890571_1743083117.mp3",
			"producer": "DoM",
			"artists": "The Cramps / Brigitte Bardot",
			"title": "Contact Muck",
			"image": "889331962_1505957931_1490350565.png"
		},
		{
			"id": 97774,
			"file": "434390845_93563080_601153041.mp3",
			"producer": "Brighton Sonny",
			"artists": "Madonna / Tate McRae",
			"title": "Ghosttown Grave",
			"image": "2069983976_497187326_2041785798.png"
		},
		{
			"id": 97782,
			"file": "1731296820_1804554862_1712956891.mp3",
			"producer": "Mashete Mixes",
			"artists": "Seether / All Time Low",
			"title": "Walk Away From Hell",
			"image": "55462944_1262243364_1771923816.png"
		},
		{
			"id": 97679,
			"file": "1844931106_1517248159_768375745.mp3",
			"producer": "Chocomang",
			"artists": "Halestorm / Green Day",
			"title": "Boulevard Of The Dead Alive",
			"image": "929573294_1640942981_1646460467.png"
		}
	],
	"Mixes": [
		{
			"file": "https://audioboots.org/Albums/AH2026/previews/ah2026-disc1-dusk-preview.mp3",
			"artists": "AudioBoots Halloween 2026",
			"title":  "Disc 1 - Dusk preview mix",
			"image": PLAYER_IMAGE
		},
		{
			"file": "https://audioboots.org/Albums/AH2026/previews/ah2026-disc2-midnight-preview.mp3",
			"artists": "AudioBoots Halloween 2026",
			"title":  "Disc 2 - Midnight preview mix",
			"image": PLAYER_IMAGE
		}
	]
};

producers = distinct(items.Tracks, "producer");

loadPlaylist();