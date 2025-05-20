const LOGO_IMAGE = "../img/AudioBoots.png";
const LOGO_TITLE = "AudioBoots";
const LOGO_LINK = "..";
const ALBUM_TITLE = getMeta("og_title") || document.title;
const ALBUM_DESCRIPTION = getMeta("og_description");
const ALBUM_LINK = "https://audioboots.org/Albums/AcousticUnplugged";
const ALBUM_ARTIST = "";
const TRACK_LINK_PATH = "https://remix.audio/track/";
const AUDIO_PATH = "https://remix.audio/uploads/tracks/";
const IMAGE_PATH = "https://remix.audio/uploads/media/";
const AUDIO_TYPE = ".mp3";
const IMAGE_TYPE = ".jpg";
const PLAYER_IMAGE = getMeta("og_image");

var links = {
	"<": "..",
	"remix.audio": "https://remix.audio/playlist/2306",
	"Facebook": "https://www.facebook.com/groups/audioboots/"
};

var items = [
	{
		"id": 48643,
		"file": "1145204191_454908177_853137609.mp3",
		"image": "143324454_2039473675_322579162.jpg",
		"localFile": "01. Chocomang - U2 - Simple Minds - KT Tunstall - Bad Promises.mp3",
		"sources": [
			"U2 - Bad | Songs of Surrender | 2023",
			"Simple Minds ft. KT Tunstall - Promised You a Miracle | 2016"
		],
		"songTitle": "Bad Promises",
		"producer": "Chocomang",
		"artists": "U2 / Simple Minds / KT Tunstall"
	},
	{
		"id": 48636,
		"file": "695902706_358830806_532132564.mp3",
		"image": "784911495_206371844_1612166071.jpg",
		"localFile": "02. MasheteMixes - Korn - Adele - Set Fire Away From Me.mp3",
		"sources": [
			"Korn - Falling Away from Me | Live MTV Studio NYC | 2006",
			"Adele - Set Fire To The Rain | 2011"
		],
		"songTitle": "Set Fire Away From Me",
		"producer": "Mashete",
		"artists": "Korn / Adele"
	},
	{
		"id": 48591,
		"file": "232926926_174241626_1068328197.mp3",
		"image": "1370652292_1128394543_591651073.jpg",
		"localFile": "03. Minor Arth - Nouvelle Vague - The Cure - Master And Servant Go To Bed.mp3",
		"sources": [
			"Nouvelle Vague ft. Martin Gore - Master And Servant | 2009",
			"The Cure - Let's Go To Bed / Friday I'm In Love | acoustic 2001"
		],
		"songTitle": "Master And Servant Go To Bed",
		"artists": "Nouvelle Vague / The Cure",
		"producer": "Minor Arth",
		"links": { "Depeche Mode /": "../dmvolume1" , "Cure version": "https://remix.audio/track/62446" } 
	},
	{
		image: PLAYER_IMAGE,
		"localFile": "04. Ipse Dixit - Pink Floyd - The Rolling Stones - Wish You Were Satisfaction.mp3",
		"sources": [
			"Pink Floyd - Wish You Were Here | 1975",
			"The Rolling Stones - (I can't get no) Satisfaction | 1965"
		],
		"songTitle": "Wish You Were Satisfaction",
		"producer": "Ipse Dixit",
		"artists": "Pink Floyd / The Rolling Stones"
	},
	{
		"id": 48796,
		"file": "1706615167_723553847_827775460.mp3",
		"image": "1519373502_30694960_1066970944.jpeg",
		"localFile": "05. DoM - Joy Division - The Police - The Sumners - Message Of Love.mp3",
		"sources": [
			"Joy Division / Bernard Sumner - Love Will Tear Us Apart | acoustic 2009",
			"The Police / Sting (Gordon Sumner) - Message In A Bottle | 1979"
		],
		"songTitle": "Message Of Love",
		"producer": "DoM",
		"artists": "Joy Division / The Police / The Sumners"
	},
	{
		image: PLAYER_IMAGE,
		"localFile": "06. DJ Useo - T Rex - Lana Del Rey - Get It On Video Games.mp3",
		"sources": [
			"T Rex - Get It On | live | 1971",
			"Lana Del Rey - Video Games | 2012"
		],
		"songTitle": "Get It On Video Games",
		"producer": "DJ Useo",
		"artists": "T Rex / Lana Del Rey"
	},
	{
		image: PLAYER_IMAGE,
		"localFile": "07. Succursale - Jefferson Airplane - Bjork - Human Rabbit.mp3",
		"sources": [
			"Jefferson Airplane - White Rabbit | 1967 | *almost unplugged",
			"Björk - Human Behaviour | MTV Unplugged | 1993"
		],
		"songTitle": "Human Rabbit",
		"producer": "Succursale",
		"artists": "Jefferson Airplane / Björk"
	},
	{
		image: PLAYER_IMAGE,
		"localFile": "08. DJ Petrushka - Smashmouth - James Taylor - Friend On The Sun.mp3",
		"sources": [
			"Smashmouth - Walking On The Sun | acoustic 2018",
			"James Taylor - You’ve Got A Friend | 1971"
		],
		"songTitle": "Friend On The Sun",
		"producer": "DJ Petrushka",
		"artists": "Smashmouth / James Taylor"
	},
	{
		"id": 48642,
		"file": "166724836_760389485_163921963.mp3",
		"image": "145777648_1721096920_270271633.jpg",
		"localFile": "09. Chocomang - Hoobastank - Massive Attack - Tracey Thorn - The Protection Reason.mp3",
		"sources": [
			"Hoobastank - The Reason | acoustic 2020",
			"Massive Attack ft. Tracey Thorn - Protection | 1995"
		],
		"songTitle": "The Protection Reason",
		"producer": "Chocomang",
		"artists": "Hoobastank / Massive Attack / Tracey Thorn"
	},
	{
		"id": 48799,
		"file": "1428965157_1496186162_1600192235.mp3",
		"image": "1816314675_473230448_1778425474.jpg",
		"localFile": "10. Minor Arth - Echo & The Bunnymen - Fontaines DC - The Roman Killing Moon Holiday.mp3",
		"sources": [
			"Echo & The Bunnymen / Ian Mc Culloch - The Killing Moon | acoustic 2009",
			"Fontaines DC - Roman Holiday | 2022"
		],
		"songTitle": "The Roman Killing Moon Holiday",
		"producer": "Minor Arth",
		"artists": "Echo & The Bunnymen / Fontaines DC",
		"links": { "Inverse electric version": "../mashmaker2" } 
	},
	{
		"id": 48657,
		"file": "241416803_603434969_1571651251.mp3",
		"image": "30233730_1590070519_1376729847.jpg",
		"localFile": "11. MasheteMixes - Nickelback - Smashing Pumpkins - How You Remind Today.mp3",
		"sources": [
			"Nickelback - How You Remind | acoustic | 2002",
			"Smashing Pumpkins - Today | 1993"
		],
		"songTitle": "How You Remind Today",
		"producer": "Mashete",
		"artists": "Nickelback / Smashing Pumpkins"
	},
	{
		image: PLAYER_IMAGE,
		"localFile": "12. Succursale - Bob Marley - Dua Lipa - IDGAF About Redemption.mp3",
		"sources": [
			"Bob Marley - Redemption song | 1980",
			"Dua Lipa - IDGAF | NZ Live acoustic session, 2018"
		],
		"songTitle": "IDGAF About Redemption",
		"producer": "Succursale",
		"artists": "Bob Marley / Dua Lipa"
	},
	{
		"id": 48640,
		"file": "525648499_1110030305_941439404.mp3",
		"image": "2057310974_16278344_589109802.jpg",
		"localFile": "13. Chocomang - Ava Max - Imagine Dragons - Believer But Psycho.mp3",
		"sources": [
			"Ava Max - Sweet But Psycho | acoustic | 2018",
			"Imagine Dragons - Believer | 2017"
		],
		"songTitle": "Believer But Psycho",
		"producer": "Chocomang",
		"artists": "Ava Max / Imagine Dragons"
	},
	{
		image: PLAYER_IMAGE,
		"localFile": "14. Ipse Dixit - When In Rome - Count Basie & His Orchestra - All Of Me Promise.mp3",
		"sources": [
			"Count Basie & His Orchestra - All Of Me | 1965",
			"When In Rome - The Promise | 1988"
		],
		"songTitle": "All Of Me Promise",
		"producer": "Ipse Dixit",
		"artists": "When In Rome / Count Basie & His Orchestra"
	},
	{
		"id": 49081,
		"file": "422372449_969909247_475087474.mp3",
		"image": "987706495_1406700327_916671251.jpg",
		"localFile": "15. Minor Arth - Everlast - Edie Brickell - What I Am Is What It's Like.mp3",
		"sources": [
			"Everlast - What It's Like | acoustic | 2020",
			"Edie Brickell & New Bohemians - What I Am | 1988"
		],
		"songTitle": "What I Am Is What It's Like",
		"producer": "Minor Arth",
		"artists": "Everlast / Edie Brickell"
	},
	{
		image: PLAYER_IMAGE,
		"localFile": "16. DJ Useo - The Who - The Stranglers - Dead Loss Fooled Again.mp3",
		"sources": [
			"The Who - Won’t Get Fooled Again | live",
			"The Stranglers - Dead Loss Angeles | 1979"
		],
		"songTitle": "Dead Loss Fooled Again",
		"producer": "DJ Useo",
		"artists": "The Who / The Stranglers"
	},
	{
		"id": 48641,
		"file": "425287627_1811650010_994111158.mp3",
		"image": "1065429571_397676193_2035154804.jpg",
		"localFile": "17. Chocomang - 3 Doors Down - Spandau Ballet - Here Without Gold.mp3",
		"sources": [
			"3 Doors Down - Here Without You | acoustic Australian single | 2004",
			"Spandau Ballet - Gold | 1983"
		],
		"songTitle": "Here Without Gold",
		"producer": "Chocomang",
		"artists": "3 Doors Down / Spandau Ballet"
	},
	{
		image: PLAYER_IMAGE,
		"localFile": "18. MasheteMixes - Hinder - Gala - Lips Of Desire.mp3",
		"sources": [
			"Hinder - Lips Of An Angel | acoustic 2020",
			"Gala - Freed From Desire | 1996"
		],
		"songTitle": "Lips Of Desire",
		"producer": "Mashete",
		"artists": "Hinder / Gala"
	},
	{
		image: PLAYER_IMAGE,
		"localFile": "19. Succursale - Lauryn Hill - Nina Simone - Feeling Intentionally Good.mp3",
		"sources": [
			"Lauryn Hill - Mr Intentional | MTV Unplugged 2002",
			"Nina Simone - Feeling Good | 1965"
		],
		"songTitle": "Feeling Intentionally Good",
		"producer": "Succursale",
		"artists": "Lauryn Hill / Nina Simone"
	},
	{
		"id": 50857,
		"file": "1327063780_2111214977_506107291.mp3",
		"image": "118861762_1960361851_1570964406.jpg",
		"localFile": "20. Minor Arth - The Rolling Stones - Midnight Oil - Beds Are On Fire.mp3",
		"sources": [
			"The Rolling Stones - Play With Fire | 1965",
			"Midnight Oil - Beds Are Burning | 1987"
		],
		"songTitle": "Beds Are On Fire",
		"producer": "Minor Arth",
		"artists": "The Rolling Stones / Midnight Oil"
	},
	{
		"id": 48639,
		"file": "1378696163_1696805080_484238802.mp3",
		"image": "1660210717_1747387343_161594445.jpg",
		"localFile": "21. Chocomang - Avicii - Little Boots - Earthquake Could Be The One.mp3",
		"sources": [
			"Avicii - I Could Be The One | Noonie Bao acoustic mix | 2012 | *almost unplugged",
			"Little Boots - Earthquake | 2009"
		],
		"songTitle": "Earthquake Could Be The One",
		"producer": "Chocomang",
		"artists": "Avicii / Little Boots"
	},
	{
		"id": 48608,
		"file": "1363113668_1364026379_858714307.mp3",
		"image": "1188090638_2105394324_1176847249.jpeg",
		"localFile": "22. DoM - The Cure - David Bowie - A Forest For Lazarus.mp3",
		"sources": [
			"The Cure - A Forest | acoustic 2001",
			"David Bowie - Lazarus | 2016"
		],
		"songTitle": "A Forest For Lazarus",
		"producer": "DoM",
		"video": "https://www.youtube.com/watch?v=Iv8Wd7wlEsk",
		"artists": "The Cure / David Bowie"
	},
	{
		"id": 48606,
		"file": "1223567431_394034380_1035602820.mp3",
		"image": "197915772_156272355_651065372.jpg",
		"localFile": "23. DJ Useo - Kula Shaker - Eels - Govinda's Beautiful Blues.mp3",
		"sources": [
			"Kula Shaker - Govinda | acoustic | 1996",
			"Eels - Beautiful Day / Mr. E's Beautiful Blues | 2000"
		],
		"songTitle": "Govinda's Beautiful Blues",
		"producer": "DJ Useo",
		"artists": "Kula Shaker / Eels"
	},
	{
		image: PLAYER_IMAGE,
		"localFile": "24. Ipse Dixit - Bob Dylan - Robyn Hitchcock - Highway 61 Little Ghost.mp3",
		"sources": [
			"Robyn Hitchcock - Come Here, Little Ghost | 2023",
			"Bob Dylan - Highway 61 Revisited | 1965"
		],
		"songTitle": "Highway 61 Little Ghost",
		"producer": "Ipse Dixit",
		"artists": "Bob Dylan / Robyn Hitchcock"
	},
	{
		"id": 52840,
		"file": "165141545_1752314633_1118877787.mp3",
		"title": "Nirvana & Emilie Simon - Come As You Are | piano version | AudioBoots Unplugged",
		"image": "2106719030_1669722814_1571559421.jpg",
		"localFile": "25. Minor Arth - Emilie Simon - Kurt Cobain - Come As You Are.mp3",
		"sources": [
			"Emilie Simon - Come As You Are | live Paris Olympia | 2006",
			"Nirvana - Come As You Are | MTV Unplugged | 1993"
		],
		"songTitle": "Come As You Are",
		"producer": "Minor Arth",
		"artists": "Emilie Simon / Kurt Cobain"
	}
];

producers = distinct(items, "producer");

loadPlaylist();
