const LOGO_IMAGE = "./img/mam_white.png";
const LOGO_TITLE = "Minor Arth";
const LOGO_LINK = ".";

const ALBUM_TITLE =  getMeta("og_title");
const ALBUM_DESCRIPTION = getMeta("og_description");
const ALBUM_LINK = "https://minorarth.github.io/";

const ALBUM_ARTIST = "";
const TRACK_LINK_PATH = "https://remix.audio/track/";
const AUDIO_PATH = "https://remix.audio/uploads/tracks/";
const IMAGE_PATH = "https://remix.audio/uploads/media/";
const AUDIO_TYPE = ".mp3";
const IMAGE_TYPE = ".jpg";

var links = {
	"remix.audio": "https://remix.audio/profile/minorarth",
	"YouTube": "https://www.youtube.com/@MinorArth",
	"Facebook": "https://www.facebook.com/MinorArthMashups"
};

var items = [
	{ 
		type: "category",
		title: "Collaborative Albums" 
	},
	{
		url: "./demondetournement",
		artists: "Gorillaz",
		title: "Demon Détournement",
		description: "Demon Days | The 20th Anniversary Mashup Album",
		producer: "Steff St. Moore / Minor Arth / DoM",
		image: "./demondetournement/artwork/DemonDetournement.jpg",
		release: "April 2025",
		nbTracks: 27
	},
	{
		url: "./ah2025",
		title: "AudioBoots Halloween 2025",
		description: "41 new Halloween mashups!",
		producer: "DJ Useo / Chocomang / Minor Arth / ... ",
		image: "https://i.postimg.cc/kgwYBwwv/audioboots-halloween-2025-front.jpg",
		release: "October 2025",
		nbTracks: 41
	},
	{
		url: "./acoustic-unplugged",
		title: "AudioBoots Acoustic Unplugged",
		description: "25 acoustic / unplugged mashups by 9 producers",
		producer: "Minor Arth / DJ Useo / Chocomang / ... ",
		image: "https://audioboots.org/Albums/AcousticUnplugged/assets/AudioBoots Unplugged.jpg",
		release: "June 2023",
		nbTracks: 25
	},
	{ 
		type: "category",
		title: "Solo Albums"
	},
	{
		url: "./mashmaker3",
		title: "The Mashmaker, volume 3",
		description: "Best of 2023 - 2024",
		image: "./mashmaker3/Mashmaker3.jpg",
		release: "December 2024",
		nbTracks: 18
	},
	{
		url: "./mashmaker2",
		title: "The Mashmaker, volume 2",
		description: "Best of 2022 - 2023",
		image: "./mashmaker2/Mashmaker2.jpg",
		release: "January 2024",
		nbTracks: 18
	},
	{
		url: "./mashmaker1",
		title: "The Mashmaker, volume 1",
		description: "Best of 2019 - 2022",
		image: "./mashmaker1/Mashmaker1.jpg",
		release: "April 2023",
		nbTracks: 16
	},
	{ 
		type: "category",
		title: "Depeche Mode"
	},
	{
		url: "./dmvolume1",
		title: "Some Great Music For The Mashes",
		artists: "Depeche Mode",
		description: "Depeche Mode mashups volume 1",
		image: "./dmvolume1/dmmashups-volume1.jpg",
		release: "June 2024",
		nbTracks: 22
	},
	{
		url: "./kraftmode",
		title: "Kraft Mode EP",
		artists: "Kraftwerk / Depeche Mode",
		image: "https://remix.audio/uploads/media/31169987_570877271_795201279.jpg",
		release: "April 2024",
		nbTracks: 4
	},
	{
		url: "./kavinskymode",
		title: "Kavinsky Mode EP",
		artists: "Kavinsky / Depeche Mode",
		producer: "Minor Arth / Instamatic",
		image: "https://remix.audio/uploads/media/640919013_785528246_1950469825.jpg",
		release: "November 2023",
		nbTracks: 4
	},
	{
		type: "category",
		title: "Friends' Albums" 
	},
	{
		url: "m2kyto2",
		title: "Mashups To Knock Your Teeth Out! The Sequel",
		description: "The raw energy of punk rock, the gritty vibes of grunge, and the powerful riffs of metal in 43 brand-new tracks by 10 producers",
		producer: "AudioBoots",
		image: "https://audioboots.org/Albums/M2KYTO2/assets/album_cover.jpg",
		release: "March 2025",
		nbTracks: 43
	},
	{
		url: "./ziggystardub",
		producer: "DoM",
		artists: "David Bowie / Easy Star All-Stars",
		title: "The Rise And Fall Of Ziggy Stardub",
		description: "Ziggy Stardust | Reggae versions",
		image: "./ziggystardub/ZiggyStardub.jpg",
		release: "April 2023",
		nbTracks: 12
	}
];

loadPlaylist();
