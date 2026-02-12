const LOGO_IMAGE = "../img/mam_white.png";
const LOGO_TITLE = "Minor Arth";
const LOGO_LINK = "..";
const ALBUM_TITLE = getMeta("og_title") || document.title;
const ALBUM_DESCRIPTION = getMeta("og_description");
const ALBUM_LINK = "https://www.mediafire.com/file/3osfosv74453ums/MinorArth-DMmashCelebration.zip/file";
const ALBUM_ARTIST = "Minor Arth";
const TRACK_LINK_PATH = "https://remix.audio/track/";
const AUDIO_PATH = "https://remix.audio/uploads/tracks/";
//const AUDIO_PATH = "";
const IMAGE_PATH = "./artwork/";
const AUDIO_TYPE = ".mp3";
const IMAGE_TYPE = ".jpg";
const PLAYER_IMAGE = "./artwork/Duran Duran - Depeche Mode - Here Is A Prayer To Save The House.jpg";

const links = {
	"<": "..",
	"DM Mashups vol. 1": "../dmvolume1",
	"Mega": "https://mega.nz/folder/QxVglBCY#t7g1p9OZGuhoAApYMyxNWg",
	"remix.audio": "https://remix.audio/playlist/2790",
	"DM Mashup Videos": "https://www.youtube.com/watch?v=FD4xU1Oj8pE&list=PLUq5Z5VhjxM1p4sMIlk6zFlnBRW5hJt1r",
	"Facebook": "https://www.facebook.com/MinorArthMashups"
};

var items = {
	"Album": [
		{
			"id": 18124,
			"file": "327004920_1108003792_1817607154.mp3",
			"localFile": "Curses - Depeche Mode - Surrender Celebration",
			"author": "Minor Arth",
//			"image": "https://remix.audio/uploads/media/538570564_1250100579_1044768237.jpg",
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
			"localFile": "Chromatics - Depeche Mode - Love On The Windscreen",
			"author": "Minor Arth",
//			"image": "https://remix.audio/uploads/media/1074895215_811649611_1245966278.jpg",
			"sources": [
				"Chromatics - Looking For Love | 2012",
				"Depeche Mode - Love On The Windscreen | 1986"
			],
			"title": "Love On The Windscreen",
			"artists": "Chromatics / Depeche Mode",
			"video": "https://youtu.be/msqqXcLB5jI"
		},
		{
			"id": 65880,
			"file": "771720424_218872985_137092706.mp3",
			"localFile": "Berlin - Depeche Mode - Take My Lust Away",
			"author": "Minor Arth",
			"artists": "Berlin / Depeche Mode",
			"title": "Take My Lust Away",
			"sources": [
				"Berlin - Take My Breath Away | 1986",
				"Depeche Mode - A Question Of Lust | 1986"
			],
//			"image": "https://remix.audio/uploads/media/450943454_968738645_1625833535.jpg"
		},
		{
			"localFile": "Elton John - Depeche Mode - Song For Sometimes",
			"sources": [
				"Elton John - Song For Guy | 1977",
				"Depeche Mode - Sometimes | 1986",
			],
			"songTitle": "Song For Sometimes",
			"artists": "Elton John / Depeche Mode"
		},
		{
			"id": 61518,
			"localFile": "Erik Satie - Depeche Mode - It Doesn't Matter Two -- Gnossienne 1 mix",
			"file": "1133357380_686093585_496239563.mp3",
			"sources": [
				"Erik Satie - Gnossienne No. 1",
				"Depeche Mode - It Doesn't Matter Two | 1986"
			],
			"songTitle": "It Doesn't Matter Two | Gnossienne 1 mix",
			"artists": "Erik Satie / Depeche Mode"
		},
		{
			"id": 21884,
			"localFile": "David Bowie - Depeche Mode - A Question Of Time And Space, Boy",
			"file": "122331518_765031649_2131110985.mp3",
			"sources": [
				"David Bowie - Hallo Spaceboy | 1995",
				"Depeche Mode - A Question Of Time | 1986"
			],
			"songTitle": "A Question Of Time And Space, Boy",
			"artists": "David Bowie / Depeche Mode",
			"video": "https://youtu.be/Gz4_Tn0pmf0",
			"links": { "Bowie mashups": "../bowie" }
		},
		{
			"id": 34091,
//			"image": "Depeche Mode - Kate Bush - Running Stripped.jpg",
			"localFile": "Depeche Mode - Kate Bush - Running Stripped",
			"file": "1925052501_1082957309_712549437.mp3",
			"sources": [	
				"Depeche Mode - Stripped | 1986",
				"Kate Bush - Running Up That Hill | 1985", 
				"Placebo - Running Up That Hill | 2003"
			],
			"songTitle": "Running Stripped",
			"artists": "Depeche Mode / Kate Bush",
			"video": "https://youtu.be/RDwHZ9A_aww"
		},
		{
			"id": 85225,
			"image": "Duran Duran - Depeche Mode - Here Is A Prayer To Save The House.jpg",
			"localFile": "Duran Duran - Depeche Mode - Here Is A Prayer To Save The House",
			"file": "1077244980_531278487_1790018421.mp3",
			"sources": [
				"Duran Duran - Save A Prayer | 1982",
				"Depeche Mode - Here Is The House | 1986"
			],
			"songTitle": "Here Is A Prayer To Save The House",
			"artists": "Duran Duran / Depeche Mode"
		},
		{
			"artists": "Glass Animals / Depeche Mode",
			"title": "World Full Of Black Mambo",
			"sources": [
				"Glass Animals - Black Mambo | 2014",
				"Depeche Mode - World Full Of Nothing | 1986"
			],
			"localFile": "Glass Animals - Depeche Mode - World Full Of Black Mambo",
			"image": "Glass Animals - Depeche Mode - World Full Of Black Mambo.jpg"
		},
		{
			"id": 82023,
			"localFile": "Danny Elfman - Depeche Mode - Wednesday's Dressed In Black",
			"file": "160234334_579328652_1618604042.mp3",
			"sources": [
				"Danny Elfman - Wednesday theme | 2022",
				"Depeche Mode - Dressed In Black | 1986"
			],
			"songTitle": "Wednesday's Dressed In Black",
			"artists": "Danny Elfman / Depeche Mode",
			"video": "https://youtu.be/1m3Xct6_BEM"
		},
		{
			"id": 83386,
			"localFile": "Mesh - Depeche Mode - New Dress -- Defender mix",
			"file": "1647416626_312490339_1680942115.mp3",
			"sources": [ 
				"mesh - My Defender | 1999",
				"Depeche Mode - New Dress | 1986"
			],
			"songTitle": "New Dress | Defender mix",
			"artists": "Mesh / Depeche Mode",
			"video": "https://youtu.be/8JjinVvgMnQ",
			"links": { "Download": "https://mega.nz/folder/QxVglBCY#t7g1p9OZGuhoAApYMyxNWg/folder/IpNljJhK" }
		}
	],
	"Bonus": [
		{ 
			"title": "But Not Tonight | So Electric mix",
			"artists": "Lifelike / Depeche Mode", 
			"localFile": "Lifelike - Depeche Mode - But Not Tonight -- So Electric mix",
			"sources": [
				"Lifelike - So Electric | 2007",
				"Depeche Mode - But Not Tonight | 1986"
			],
			"producer": "Minor Arth" 
		},
		{ 
			"id": 18043,
			"file": "1932556923_1535933902_1083244237.mp3",
			"localFile": "G Tom Mac - Depeche Mode - The Lost Boys Celebration",
			"title": "The Lost Boys Celebration",
			"artists": "Depeche Mode / G Tom Mac",
			"producer": "LeeDM101 mashup | Minor Arth video",
			"video": "https://youtu.be/pMhay9FZUCc",
			"sources": [
				"Depeche Mode - Black Celebration | 1986",
				"Gerard McMahon - Cry Little Sister | 1987"
			]
		},
		{
			"id": 84389,
			"file": "1407196516_468822454_1273909259.mp3",
			"localFile": "Kyle Dixon - Michael Stein - Depeche Mode - Pink Floyd - My Favourite Stranger Things",
			"producer": "Minor Arth",
			"artists": "Kyle Dixon / Michael Stein / Depeche Mode / Pink Floyd",
			"title": "My Favourite Stranger Things",
			"sources": [
				"Kyle Dixon / Michael Stein - Stranger Things | extended | 2016",
				"Pink Floyd - Welcome To The Machine | 1975",
				"Depeche Mode - Scum | 2017",
				"My Favourite Stranger | 2023",
				"Precious | 2005",
				"Fly On The Windscreen | 1986",
				"Black Celebration | 1986",
				"Sister Of Night | 1997",
				"The Sun and the Rainfall | 1982"
			],
			"video": "https://youtu.be/erbi-qdekBY"
		}
	]
};

loadPlaylist();
