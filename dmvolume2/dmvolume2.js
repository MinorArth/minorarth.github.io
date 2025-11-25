const LOGO_IMAGE = "../img/mam_white.png";
const LOGO_TITLE = "Minor Arth";
const LOGO_LINK = "..";
const ALBUM_TITLE = getMeta("og_title") || document.title;
const ALBUM_DESCRIPTION = getMeta("og_description");
const ALBUM_LINK = "https://www.mediafire.com/file/svuy6z9tx3ucomf/MinorArth-DepecheModeMashups-volume1.zip/file";
const ALBUM_ARTIST = "Minor Arth";
const TRACK_LINK_PATH = "https://remix.audio/track/";
const AUDIO_PATH = "";
const IMAGE_PATH = "./artwork/";
const AUDIO_TYPE = ".mp3";
const IMAGE_TYPE = ".jpg";
const PLAYER_IMAGE = "./artwork/dmmashups-volume2.jpg";

const links = {
	"<": "..",
	"remix.audio": "https://remix.audio/playlist/2789",
	"DM Mashup Videos": "https://www.youtube.com/watch?v=FD4xU1Oj8pE&list=PLUq5Z5VhjxM1p4sMIlk6zFlnBRW5hJt1r",
	"Facebook": "https://www.facebook.com/MinorArthMashups"
};

var items = {
	"Part 1": [
		{
			"image": "The Alan Parsons Project - Depeche Mode - Nothing -- Sirius mix.jpg",
			"file": "The Alan Parsons Project - Depeche Mode - Nothing -- Sirius mix.mp3",
			"sources": [ 
				"The Alan Parsons Project - Sirius | 1982", 
				"Sirius | Disco Demolition remix | 2017",
				"Depeche Mode - Nothing | 1987" 
			],
			"songTitle": "Nothing | Sirius mix",
			"artists": "The Alan Parsons Project / Depeche Mode"
		},
		{
			"id": 34091,
			"image": "Depeche Mode - Kate Bush - Running Stripped.jpg",
			"file": "Depeche Mode - Kate Bush - Running Stripped.mp3",
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
			"id": 18641,
			"image": "The Cure - Depeche Mode - Burn In My Shoes.jpg",
			"file": "The Cure - Depeche Mode - Burn In My Shoes.mp3",
			"sources": [
				"The Cure - Burn | 1994",
				"Depeche Mode - Walking In My Shoes | 1993"
			],
			"songTitle": "Burn In My Shoes",
			"artists": "The Cure / Depeche Mode",
			"video": "https://youtu.be/TFOJ7QWNnqw"
		},
		{
			"id": 78339,
			"image": "Hans Zimmer - Depeche Mode - Never Let Me Down Behind The Wheel -- F1 mix.jpg",
			"file": "Hans Zimmer - Depeche Mode - Never Let Me Down Behind The Wheel -- F1 mix.mp3",
			"sources": [
			"Hans Zimmer - F1 | 2025",
			"Depeche Mode - Never Let Me Down Again | 1987",
			"Depeche Mode - Behind The Wheel | 1987"
			],
			"songTitle": "Never Let Me Down Behind The Wheel | F1 mix",
			"artists": "Hans Zimmer / Depeche Mode"
		},
		{
			"id": 21884,
			"image": "David Bowie - Depeche Mode - A Question Of Time And Space, Boy.jpg",
			"file": "David Bowie - Depeche Mode - A Question Of Time And Space, Boy.mp3",
			"sources": [
				"David Bowie - Hallo Spaceboy | 1995",
				"Depeche Mode - A Question Of Time | 1986"
			],
			"songTitle": "A Question Of Time And Space, Boy",
			"artists": "David Bowie / Depeche Mode",
			"video": "https://youtu.be/Gz4_Tn0pmf0"
		},
		{
			"image": "Dido - Depeche Mode - Enjoy The Silence -- Hunter mix.jpg",
			"file": "Dido - Depeche Mode - Enjoy The Silence -- Hunter mix.mp3",
			"sources": [
				"Dido - Hunter | 1999", 
				"Depeche Mode - Enjoy The Silence | 1990"
			],
			"songTitle": "Enjoy The Silence | Hunter mix",
			"artists": "Dido / Depeche Mode"
		},
		{
			"image": "Duran Duran - Depeche Mode - Here Is A Prayer To Save The House.jpg",
			"file": "Duran Duran - Depeche Mode - Here Is A Prayer To Save The House.mp3",
			"sources": [
				"Duran Duran - Save A Prayer | 1982",
				"Depeche Mode - Here Is The House | 1986"
			],
			"songTitle": "Here Is A Prayer To Save The House",
			"artists": "Duran Duran / Depeche Mode"
		},
		{
			"image": "Mesh - Depeche Mode - New Dress -- Defender mix.jpg",
			"file": "Mesh - Depeche Mode - New Dress -- Defender mix.mp3",
			"sources": [ 
				"mesh - My Defender | 1999",
				"Depeche Mode - New Dress | 1986"
			],
			"songTitle": "New Dress | Defender mix",
			"artists": "Mesh / Depeche Mode",
			"video": "https://youtu.be/oUPM8ObPLWY"
		},
		{
			"id": 18106,
			"image": "Massive Attack - Depeche Mode - Angel In Your Room.jpg",
			"file": "Massive Attack - Depeche Mode - Angel In Your Room.mp3",
			"sources": [
				"Massive Attack - Angel | 1998",
				"Depeche Mode - In Your Room | 1993"
			],
			"songTitle": "Angel In Your Room",
			"artists": "Massive Attack / Depeche Mode"
		},
		{
			"image": "Garbage - Depeche Mode - The World Is Not Enough When I Lose Myself.jpg",
			"file": "Garbage - Depeche Mode - The World Is Not Enough When I Lose Myself.mp3",
			"sources": [
				"Garbage - The World Is Not Enough | 1999",
				"Depeche Mode - Only When I Lose Myself | 1998"
			],
			"songTitle": "The World Is Not Enough When I Lose Myself",
			"artists": "Garbage / Depeche Mode"
		},
		{
			"id": 82023,
			"image": "Danny Elfman - Depeche Mode - Wednesday's Dressed In Black.jpg",
			"file": "Danny Elfman - Depeche Mode - Wednesday's Dressed In Black.mp3",
			"sources": [
				"Danny Elfman - Wednesday theme | 2022",
				"Depeche Mode - Dressed In Black | 1986"
			],
			"songTitle": "Wednesday's Dressed In Black",
			"artists": "Danny Elfman / Depeche Mode",
			"video": "https://youtu.be/1m3Xct6_BEM"
		},
		{
			"id": 61518,
			"image": "Erik Satie - Depeche Mode - It Doesn't Matter Two -- Gnossienne 1 mix.jpg",
			"file": "Erik Satie - Depeche Mode - It Doesn't Matter Two -- Gnossienne 1 mix.mp3",
			"sources": [
				"Erik Satie - Gnossienne No. 1",
				"Depeche Mode - It Doesn't Matter Two | 1986" ],
			"songTitle": "It Doesn't Matter Two | Gnossienne 1 mix",
			"artists": "Erik Satie / Depeche Mode"
		},
	],
	"Part 2": [
		{
			"image": "Isaac Hayes - Depeche Mode - Halo -- Shaft mix.jpg",
			"file": "Isaac Hayes - Depeche Mode - Halo -- Shaft mix.mp3",
			"sources": [
				"Isaac Hayes - Shaft theme | 1971",
				"Depeche Mode - Halo | 1990"
			],
			"songTitle": "Halo | Shaft mix",
			"artists": "Isaac Hayes / Depeche Mode"
		},
		{
			"image": "The Hu - Depeche Mode - Yuve Yu Jesus.jpg",
			"file": "The Hu - Depeche Mode - Yuve Yu Jesus.mp3",
			"sources": [
				"The Hu - Yuve Yuve Yu | 2016",
				"Depeche Mode - Personal Jesus | 1989",
			],
			"songTitle": "Yuve Yu Jesus",
			"artists": "The Hu / Depeche Mode"
		},
		{
			"image": "Didier Marouani - Depeche Mode - Little 15 -- Space Opera mix.jpg",
			"file": "Didier Marouani - Depeche Mode - Little 15 -- Space Opera mix.mp3",
			"sources": [
				"Didier Marouani - Space Opera Part 1 | 1988",
				"Depeche Mode - Little 15 | 1987",
				"Depeche Mode - Pimpf | 1987"
			],
			"songTitle": "Little 15 | Space Opera mix",
			"artists": "Didier Marouani / Depeche Mode"
		},
		{
			"id": 18059,
			"image": "U2 - Depeche Mode - Lemon In My Eyes.jpg",
			"file": "U2 - Depeche Mode - Lemon In My Eyes.mp3",
			"sources": [
				"U2 - Lemon | 1993",
				"Depeche Mode - World In My Eyes | 1990"
			],
			"songTitle": "Lemon In My Eyes",
			"artists": "U2 / Depeche Mode",
			"video": "https://youtu.be/W8N-BNBRn00"
		},
		{
			"id": 80150,
			"image": "DNA - Depeche Mode - Serenissima Of Sin.jpg",
			"file": "DNA - Depeche Mode - Serenissima Of Sin.mp3",
			"sources": [
				"DNA - La Serenissima | 1990",
				"Depeche Mode - Sea Of Sin | 1990"
			],
			"songTitle": "Serenissima Of Sin",
			"artists": "DNA / Depeche Mode"
		},
		{
			"id": 21683,
			"image": "Depeche Mode - Garbage - Mercy Crush.jpg",
			"file": "Depeche Mode - Garbage - Mercy Crush.mp3",
			"sources": [
				"Depeche Mode - Mercy In You | 1993",
				"Garbage - #1 Crush | 1995" 
			],
			"songTitle": "Mercy Crush",
			"artists": "Depeche Mode / Garbage",
			"video": "https://youtu.be/RDwHZ9A_aww"
		},
		{
			"id": 58017,
			"image": "Massive Attack - Depeche Mode - Harm's No Good.jpg",
			"file": "Massive Attack - Depeche Mode - Harm's No Good.mp3",
			"sources": [
				"Massive Attack / Shara Nelson - Safe From Harm | 1991",
				"Depeche Mode - It's No Good | 1997"
			],
			"songTitle": "Harm's No Good",
			"artists": "Massive Attack / Depeche Mode",
			"video": "https://youtu.be/rUCIN33QyyM"
		},
		{
			"id": 83021,
			"image": "Led Zeppelin - Depeche Mode - I Feel The Levee Break.jpg",
			"file": "Led Zeppelin - Depeche Mode - I Feel The Levee Break.mp3",
			"sources": [
				"Led Zeppelin - When The Levee Breaks | 1971",
				"Depeche Mode - I Feel You | 1993",
				"Mélanie De Biasio - I Feel You | 2013"
			],
			"songTitle": "I Feel The Levee Break",
			"artists": "Led Zeppelin / Depeche Mode",
			"video": "https://youtu.be/_TcU5wb0Vsc"
		},
		{
			"image": "Depeche Mode - David Bowie - I'm Afraid Of A Gun.jpg",
			"file": "Depeche Mode - David Bowie - I'm Afraid Of A Gun.mp3",
			"sources": [
				"Depeche Mode - Barrel Of A Gun | 1997",
				"David Bowie - I'm Afraid Of Americans | 1997"
			],
			"songTitle": "I'm Afraid Of A Gun",
			"artists": "Depeche Mode / David Bowie",
			"video": "https://youtu.be/XdMTSEDxo0M"
		},
		{
			"image": "Type O Negative - Depeche Mode - One Caress To Death.jpg",
			"file": "Type O Negative - Depeche Mode - One Caress To Death.mp3",
			"sources": [
				"Type O Negative - Love You To Death | 1996",
				"Depeche Mode - One Caress | 1993"
			],
			"songTitle": "One Caress To Death",
			"artists": "Type O Negative / Depeche Mode"
		},
		{
			"image": "The Korgis - Depeche Mode - Everybody's Got To Learn The Truth.jpg",
			"file": "The Korgis - Depeche Mode - Everybody's Got To Learn The Truth.mp3",
			"sources": [
				"The Korgis - Everybody's Got To Learn Sometime | 1980",
				"Depeche Mode - Policy Of Truth | 1990"
			],
			"songTitle": "Everybody's Got To Learn The Truth",
			"artists": "The Korgis / Depeche Mode",
			"video": ""
		},
		{
			"image": "Elton John - Depeche Mode - Song For Sometimes.jpg",
			"file": "Elton John - Depeche Mode - Song For Sometimes.mp3",
			"sources": [
				"Elton John - Song For Guy | 1977",
				"Depeche Mode - Sometimes | 1986",
			],
			"songTitle": "Song For Sometimes",
			"artists": "Elton John / Depeche Mode"
		}
	]
};

loadPlaylist();
