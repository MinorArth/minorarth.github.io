const LOGO_IMAGE = "../img/AudioBoots.png";
const LOGO_TITLE = "AudioBoots";
const LOGO_LINK = "..";
const ALBUM_TITLE = getMeta("og_title") || document.title;
const ALBUM_DESCRIPTION = getMeta("og_description");
const ALBUM_LINK = "https://audioboots.org/Albums/AH2025";
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
	"AudioBoots": "https://audioboots.org",
	"Facebook": "https://www.facebook.com/groups/audioboots"
};

var items = {
	"Tracks": [
		{
			"id": 81827,
			"file": "1573516364_215833350_39596948.mp3",
			"producer": "Chocomang",
			"artists": "The Specials / Halestorm",
			"title": "Back From The Ghost Town",
			"image": "1861053304_1351838718_1942691861.png"
		},
		{
			"id": 81679,
			"file": "173181215_2077027146_1968628718.mp3",
			"producer": "Minor Arth",
			"artists": "Nine Inch Nails / Depeche Mode",
			"title": "As Alive As The Dead Of Night",
			"image": "444395565_332140054_1712611197.jpg",
			"links": { "Tron: Ares video": "https://youtu.be/R_7aqIwfIqM" }
		},
		{
			"id": 81702,
			"file": "181104574_706989378_768157532.mp3",
			"producer": "Brighton Sonny",
			"artists": "Of Mice & Men / Lady Gaga",
			"title": "You're Not A Monster",
			"image": "1049762337_1036241531_954898949.png"
		},
		{
			"id": 81672,
			"file": "1691749916_297710047_551516965.mp3",
			"producer": "Mashete",
			"artists": "Nickelback / Imagine Dragons",
			"title": "Anymore Monster",
			"image": "1723706706_1374428089_1415606824.png"
		},
		{
			"id": 81770,
			"file": "411131157_223890597_1966936771.mp3",
			"producer": "Brighton Sonny",
			"artists": "Lady Gaga / All Time Low / Blackbear",
			"title": "Monster Monster Monsters",
			"image": "95070989_1901786684_700257613.png"
		},
		{
			"id": 81670,
			"file": "220075446_986779780_1147710854.mp3",
			"producer": "Mashete",
			"artists": "Linkin Park / Avril Lavigne",
			"title": "Heavy Is The Devil",
			"image": "1176015637_1110695744_1187218781.png"
		},
		{
			"id": 81909,
			"file": "522493157_925565409_427727535.mp3",
			"producer": "Brighton Sonny",
			"artists": "Lady Gaga / Lana Del Rey",
			"title": "Marry the Monsters (Brighton Sonny mashup)",
			"image": "836817819_1296318803_1380605576.png"
		},
		{
			"id": 82023,
			"file": "160234334_579328652_1618604042.mp3",
			"producer": "Minor Arth",
			"artists": "Danny Elfman / Depeche Mode",
			"title": "Wednesday's Dressed In Black",
			"image": "1390975516_249410697_761824185.jpg",
			"links": { "Wednesday video": "https://youtu.be/1m3Xct6_BEM" }
		},
		{
			"id": 81639,
			"file": "1042238091_975999283_1710950049.mp3",
			"producer": "DJ Useo",
			"artists": "Oingo Boingo / The Madeira",
			"title": "Witch Doctor's Dead Man's Party",
			"image": "1049671896_1445611128_1245237039.png",
			"links": { "Nosferatu The Monster Mashup Vol. 1": "https://monstermashup.bandcamp.com/album/nosferata-the-monster-mashup-volume-1", "Vol. 2": "https://monstermashup.bandcamp.com/album/nosferata-the-monster-mashup-volume-2"} 
		}
	],
	"Mixes": [
		{
			"file": "https://hearthis.app/vxmfxz7w/dj-useo-audioboots-halloween-2025-d1-podcast/stream.mp3?s=uTy&amp;t=1960378053",
			"artists": "AudioBoots Halloween 2025",
			"title":  "Disc 1 preview mix",
			"image": "https://i.postimg.cc/kgwYBwwv/audioboots-halloween-2025-front.jpg"
		},
		{
			"file": "https://hearthis.app/vxmfxz7w/dj-useo-audioboots-halloween-2025-d2-podcast/stream.mp3?s=dGg&amp;t=1960345511",
			"artists": "AudioBoots Halloween 2025",
			"title":  "Disc 2 preview mix",
			"image": "https://i.postimg.cc/kgwYBwwv/audioboots-halloween-2025-front.jpg"
		}
	]
};

producers = distinct(items.Tracks, "producer");

loadPlaylist();