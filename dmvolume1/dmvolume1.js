const LOGO_IMAGE = "../img/mam_white.png";
const LOGO_TITLE = "Minor Arth";
const LOGO_LINK = "..";
const ALBUM_TITLE = getMeta("og_title") || document.title;
const ALBUM_DESCRIPTION = getMeta("og_description");
const ALBUM_LINK = "https://www.mediafire.com/file/svuy6z9tx3ucomf/MinorArth-DepecheModeMashups-volume1.zip/file";
const ALBUM_ARTIST = "Minor Arth";
const TRACK_LINK_PATH = "https://remix.audio/track/";
const AUDIO_PATH = "https://remix.audio/uploads/tracks/";
const IMAGE_PATH = "https://remix.audio/uploads/media/";
const AUDIO_TYPE = ".mp3";
const IMAGE_TYPE = ".jpg";
const PLAYER_IMAGE = "./dmmashups-volume1.jpg";

const links = {
	"<": "..",
	"remix.audio": "https://remix.audio/playlist/2789",
	"DM Mashup Videos": "https://www.youtube.com/watch?v=FD4xU1Oj8pE&list=PLUq5Z5VhjxM1p4sMIlk6zFlnBRW5hJt1r",
	"Facebook": "https://www.facebook.com/MinorArthMashups",
	"\nAlbum cover: @StuffByMark": "https://www.stuffbymark.co.uk"
};

var items = [
	{
		"id": 40384,
		"file": "324915837_547706520_1154582295.mp3",
		"author": "Minor Arth",
		"title": "Everything Lifts Me Up",
		"image": "471523792_571946680_386698616.jpg",
		"sources": [
			"Moby - Lift Me Up | 2005",
			"Depeche Mode - Everything Counts | 1983"
		],
		"artists": "Moby / Depeche Mode"
	},
	{
		"id": 64700,
		"file": "521829124_1884578772_541958666.mp3",
		"author": "Minor Arth",
		"title": "Just Can't Get Temptation",
		"artists": "New Order / Depeche Mode",
		"sources": [
			"New Order - Temptation | 1982",
			"Depeche Mode - Just Can't Get Enough | 1981"
		],
		"links": { "AudioBoots Summer Booty 2024": "https://audioboots.org/Albums/SB2024" },
		"image": "1502109165_497738085_506679187.jpg"
	},
	{
		"id": 18107,
		"file": "1211742334_1857274291_1842666095.mp3",
		"author": "Minor Arth",
		"image": "1763003201_1123673197_196675649.jpg",
		"sources": [
			"Tears For Fears - Never Shout Again | 1985",
			"Depeche Mode - Never Let Me Down Again | 1987",
		],
		"title": "Never Shout Again",
		"artists": "Tears For Fears / Depeche Mode",
		"video": "https://youtu.be/D6RT2ogPu9U"
	},
	{
		"id": 19402,
		"file": "1508467_1802455964_2010175909.mp3",
		"author": "Minor Arth",
		"title": "Strange Model",
		"image": "31169987_570877271_795201279.jpg",
		"artists": "Kraftwerk / Depeche Mode / The Stranglers",
		"sources": [
			"Kraftwerk - The Model | 1978",
			"Depeche Mode - Strangelove | 1987",
			"The Stranglers - The European Female | 1982",
		],
		"video": "https://youtu.be/pz83tO_aTyM"
	},
	{
		"id": 62446,
		"file": "1809322800_633998506_184053351.mp3",
		"author": "Minor Arth",
		"artists": "The Cure / Depeche Mode",
		"title": "Master And Servant Go To Bed",
		"sources": [
			"The Cure - Let's Go To Bed | 1983",
			"Depeche Mode - Master And Servant | 1984"
		],
		links: { "Nouvelle Vague / Cure": "https://remix.audio/track/48591", "acoustic version": "../acoustic-unplugged/" },
		"image": "438473383_727208601_1640531236.jpg"
	},
	{
		"id": 51278,
		"file": "1120979652_755243373_1511517317.mp3",
		"author": "Minor Arth",
		"image": "568306564_672843720_1722267045.jpg",
		"sources": [
			"Taxi Girl - Cherchez Le Garçon | 1980",
			"Depeche Mode - Photographic | 1981",
		],
		"title": "Photographic Boy",
		"artists": "Taxi Girl / Depeche Mode",
		"links": { "Inverse French version": "https://remix.audio/track/51429" },
		"video": "https://youtu.be/WXMIItxcu3M"
	},
	{
		"id": 18311,
		"file": "1036391139_1726185446_1785178290.mp3",
		"author": "Minor Arth",
		"image": "1601254446_1897991313_212754089.jpg",
		"sources": [
			"The Rolling Stones - Gimme Shelter | 1969",
			"Depeche Mode - Shake The Disease | 1985",
			"https://youtu.be/ESx-DHaT7hY"
		],
		"title": "Gimme Disease",
		"artists": "The Rolling Stones / Depeche Mode",
		"video": "https://youtu.be/ESx-DHaT7hY"
	},
	{
		"id": 68423,
		"file": "563353933_1226507571_31415805.mp3",
		"author": "Minor Arth",
		"artists": "Yello / Depeche Mode",
		"title": "Lost Again In Silence",
		"sources": [
			"Yello - Lost Again | 1983",
			"Depeche Mode - Leave In Silence | 1982"
		],
		"image": "2077564270_856786567_1690330215.jpg"
	},
	{
		"id": 66290,
		"file": "571413028_353465432_238058580.mp3",
		"author": "Minor Arth",
		"artists": "Yeah Yeah Yeahs / Depeche Mode",
		"title": "The Sun, The Wolf And The Rainfall",
		"sources": [
			"Yeah Yeah Yeahs - Wolf | 2022",
			"Depeche Mode - The Sun And The Rainfall | 1982"
		],
		"image": "2066350803_1203772279_2020924231.jpg"
	},
	{
		"id": 51708,
		"file": "1043273729_684282083_2008796406.mp3",
		"author": "Minor Arth",
		"image": "1917008411_1442662475_374910206.jpg",
		"sources": [
			"Mylène Farmer - Sans Contrefaçon | 1987",
			"Depeche Mode - Get the Balance Right | 1982"
		],
		"title": "Balance Sans Contrefaçon",
		"links": { "BOOT OF THE DAY": "https://www.facebook.com/permalink.php?story_fbid=pfbid02de4J2D3FzqEScB7T97ovd33n5w9ohP5SFC4cKFKs4cD3EEX6fpUmo57kZrsv221Fl&id=100063537011274" },
		"artists": "Mylène Farmer / Depeche Mode"
	},
	{
		"id": 19401,
		"file": "1992192372_47439495_278507144.mp3",
		"author": "Minor Arth",
		"image": "1325777255_834725289_978931676.jpg",
		"sources": [
			"Kraftwerk - Numbers | Computer World | 1981",
			"Depeche Mode - People Are People | 1984",
		],
		"title": "People Are Numbers",
		"artists": "Kraftwerk / Depeche Mode",
		"video": "https://youtu.be/m8zUtJlff_g"
	},
	{
		"id": 53038,
		"file": "1528258040_172576223_2130344446.mp3",
		"author": "Minor Arth",
		"image": "776688174_1168472281_248581402.jpg",
		"sources": [
			"Kavinsky - Testarossa Autodrive | 2007",
			"Depeche Mode - Something To Do | 1984",
			"https://youtu.be/FD4xU1Oj8pE"
		],
		"title": "Something To Do In Autodrive",
		"artists": "Kavinsky / Depeche Mode",
		"links": { "BOOT OF THE DAY": "https://www.facebook.com/permalink.php?story_fbid=pfbid034CA4Mm9J6W23MMrhEK95AEjT6gxPozSXxAV2ZRj9zd52NjUFuXiWkajye2k9LyJQl&id=100063537011274" },
		"video": "https://youtu.be/FD4xU1Oj8pE"
	},
	{
		"id": 59410,
		"file": "459760669_1107128209_1821248495.mp3",
		"author": "Minor Arth",
		"image": "1209501321_242983412_110846060.jpg",
		"sources": [
			"Indochine - Canary Bay | 1985",
			"Depeche Mode - It's Called a Heart | 1985"
		],
		"links": { "80s Mashed 7": "https://audioboots.org/Albums/80sMashed7", "BOOT OF THE DAY": "https://www.facebook.com/permalink.php?story_fbid=pfbid0St6UXYLaaGKBEyNCjujm6WiiZz2XpqaW4swoscfDtwm9LM44FoCxFdLMiCXFHL3ql&id=100063537011274" },
		"title": "A Heart At Canary Bay",
		"artists": "Indochine / Depeche Mode"
	},
	{
		"id": 65880,
		"file": "771720424_218872985_137092706.mp3",
		"author": "Minor Arth",
		"artists": "Berlin / Depeche Mode",
		"title": "Take My Lust Away",
		"sources": [
			"Berlin - Take My Breath Away | 1986",
			"Depeche Mode - A Question Of Lust | 1986"
		],
		"image": "450943454_968738645_1625833535.jpg"
	},
	{
		"id": 18124,
		"file": "327004920_1108003792_1817607154.mp3",
		"author": "Minor Arth",
		"image": "538570564_1250100579_1044768237.jpg",
		"sources": [
			"Curses - Surrender | Jennifer Cardini remix | 2019",
			"Depeche Mode - Black Celebration | 1986",
		],
		"title": "Surrender Celebration",
		"artists": "Curses / Depeche Mode",
		"video": "https://youtu.be/AHcUZkA1zsE"
	},
	{
		"id": 34466,
		"file": "880225046_1980996943_302683165.mp3",
		"author": "Minor Arth",
		"image": "1074895215_811649611_1245966278.jpg",
		"sources": [
			"Chromatics - Looking For Love | 2012",
			"Depeche Mode - Love On The Windscreen | 1986"
		],
		"title": "Love On The Windscreen",
		"artists": "Chromatics / Depeche Mode",
		"video": "https://youtu.be/msqqXcLB5jI"
	},
	{
		"id": 63256,
		"file": "306360670_1429166301_10578311.mp3",
		"author": "Minor Arth",
		"title": "Bulletproof Policy Of Truth",
		"artists": "The Silencers / Depeche Mode",
		"sources": [
			"The Silencers - Bulletproof Heart | 1991",
			"Depeche Mode - Policy Of Truth | 1990"
		],
		"video": "https://youtu.be/1ZVwD7-fWd0",
		"image": "321378251_821947349_596519717.jpg"
	},
	{
		"id": 69997,
		"file": "181226506_1463388239_1188404288.mp3",
		"author": "Minor Arth",
		"title": "The Things You Said Today",
		"artists": "The Beatles / Depeche Mode",
		"sources": [
			"The Beatles - Things We Said Today | 1963",
			"Depeche Mode - The Things You Said | 1987"
		],
		"links": { "Inverse | The Things We Said Today": "https://remix.audio/track/69552" },
		"video": "https://youtu.be/Nq3D8LNCNm0",
		"image": "893997111_672924943_400995054.jpg"
	},
	{
		"id": 19403,
		"file": "1674492422_1306326625_2003354294.mp3",
		"author": "Minor Arth",
		"image": "1517760380_736358051_722969622.jpg",
		"sources": [
			"Kraftwerk - The Robots | 1978",
			"Depeche Mode - Halo | 1990"
		],
		"title": "Halo Robots",
		"artists": "Kraftwerk / Depeche Mode",
		"video": "https://youtu.be/pz83tO_aTyM"
	},
	{
		"id": 78083,
		"file": "341658949_1328178205_1439436524.mp3",
		"author": "Minor Arth",
		"image": "1697337059_946053160_98557722.jpg",
		"artists": "Jean-Michel Jarre / Depeche Mode",
		"sources": [
			"Jean-Michel Jarre - Arpegiateur | 1981",
			"Depeche Mode - Waiting For The Night | 1990"
		],
		"title": "Waiting For The Night | Arpegiator mix",
		"video": "https://youtu.be/lf-7Yj2zDnw"
	},
	{
		"id": 19836,
		"file": "232555895_1951216380_819161131.mp3",
		"author": "Minor Arth",
		"image": "1355645944_1124524783_860623310.jpg",
		"sources": [
			"Pink Floyd - One Of These Days | 1971",
			"Depeche Mode - Clean + Personal Jesus | 1990",
		],
		"title": "One Of These Clean Days",
		"artists": "Pink Floyd / Depeche Mode",
		"video": "https://youtu.be/q5U8O7WZkrM"
	},
	{
		"id": 29114,
		"file": "240896625_1196354146_1178044280.mp3",
		"author": "Minor Arth",
		"title": "Depeche Mode & Sebastien Tellier - Little 15 | Amour & Violence remix",
		"image": "301411327_792073574_746777260.jpg",
		"sources": [
			"Sébastien Tellier - L'Amour et la Violence | 2008",
			"Depeche Mode - Little 15 | 1987"
		],
		"title": "Little 15 | Amour & Violence mix",
		"artists": "Sébastien Tellier / Depeche Mode"
	}
];

loadPlaylist();
