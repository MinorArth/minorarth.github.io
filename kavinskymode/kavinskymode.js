var links = {
	"<": "..",
	"Facebook": "https://www.facebook.com/MinorArthMashups",
	"remix.audio": "https://remix.audio/playlist/2449",
	"YouTube": "https://www.youtube.com/@MinorArth"
};

var items = [
	{
		"id": 53038,
		"file": "1528258040_172576223_2130344446.mp3",
		"producer": "Minor Arth",
		"artists": "Kavinsky / Depeche Mode",
		"title": "Something To Do In Autodrive",
		"sources": [ "Kavinsky - Testarossa Autodrive | 2006", "Depeche Mode - Something To Do | 1984" ],
		"image": "776688174_1168472281_248581402.jpg"
	},
	{
		"id": 53524,
		"file": "707912503_553182076_2086510767.mp3",
		"producer": "Minor Arth",
		"artists": "Kavinsky / Depeche Mode",
		"title": "My Favourite Stranger Is Miles Away | ProtoVision mix",
		"sources": [
			"Kavinsky - ProtoVision | 2013",
			"Depeche Mode - My Favourite Stranger | 2023",
			"Depeche Mode - Miles Away / The Truth Is | 2009"
		],
		"image": "960573698_1470745835_1436081296.jpg"
	},
	{
		"id": 53138,
		"file": "846145833_1052099080_2043750842.mp3",
		"producer": "Instamatic",
		"artists": "Kavinsky / Depeche Mode",
		"title": "Instamatic - Kavinsky Mode",
		"sources": [ "Kavinsky - Roadgame | 2013", "Depeche Mode - Behind The Wheel | 1987", "Out Run video game samples" ],
		"image": "640919013_785528246_1950469825.jpg"
	},
	{
		"id": 53231,
		"file": "1323905345_1088804435_178004740.mp3",
		"producer": "Minor Arth",
		"artists": "Kavinsky / Depeche Mode",
		"title": "Nightcall From Heaven",
		"sources": [ "Kavinsky - Nightcall | 2010", "Depeche Mode - Heaven | 2013"],
		"image": "1500840872_414924429_140724256.png"
	}
];

producers = Array.from(new Set(items.map(i => i.producer)));
