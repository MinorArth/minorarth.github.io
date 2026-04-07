const LOGO_IMAGE = "../img/AudioBoots.png";
const LOGO_TITLE = "AudioBoots";
const LOGO_LINK = "..";
const ALBUM_TITLE = getMeta("og_title") || document.title;
const ALBUM_DESCRIPTION = getMeta("og_description");
const ALBUM_LINK = "https://audioboots.org/Albums/TooMuchTV";
const ALBUM_ARTIST = "";
const TRACK_LINK_PATH = "https://remix.audio/track/";
const AUDIO_PATH = "https://remix.audio/uploads/tracks/";
const IMAGE_PATH = "https://remix.audio/uploads/media/";
//const AUDIO_PATH = "tracks/";
//const IMAGE_PATH = "./covers/";
const AUDIO_TYPE = ".mp3";
const IMAGE_TYPE = ".jpg";
const PLAYER_IMAGE = "./MashingTooMuchTV.jpg";

const links = {
	"<": "..",
	"remix.audio": "https://remix.audio/playlist/3624",
	"AudioBoots": "https://audioboots.org/forum/",
	"Facebook": "https://www.facebook.com/groups/audioboots"
};

var items = {
	"Disc 1": [
	{
		"localFile": "01 - AudioPusher - Rihanna Gets Shafted ( Rihanna vs Isaac Hayes )",
		"sources": [
			"Isaac Hayes - Theme from Shaft | Shaft | 1971",
			"Calvin Harris / Rihanna - This Is What You Came For | 2016"
		]
	},
	{
		"localFile": "02 - DJ Petrushka - (Don't Fear) The Monster ( Blue Oyster Cult vs Fifth Harmony )",
		"sources": [
			"Blue Oyster Cult - (Don't Fear) The Reaper | 1978",
			"Fifth Harmony - I'm In Love with a Monster | Hotel Transylvania 2 | 2015"
		]
	},
	{
		"id": 88771,
		"file": "1222231880_960468061_1082397925.mp3",
		"localFile": "03 - Chocomang - A View to Sky Fall ( Duran Duran vs Adele )",
		"image": "1384918375_446922101_1594700546.jpg",
		"sources": [
			"Duran Duran - A View to a Kill | James Bond - A View to a Kill | 1985",
			"Adele - Skyfall | James Bond - Skyfall | 2012"
		]
	},
	{
		"id": 88854,
		"file": "1561430440_1177208682_1732140218.mp3",
		"localFile": "04 - MasheteMixes - Gasoline ( David Bowie vs Audioslave )",
		"image": "841654616_749917391_1512496248.jpg",
		"sources": [
			"Audioslave - Gasoline | 2002",
			"Audioslave - Be Yourself | 2005",
			"David Bowie - Cat People (Putting Out Fire) | Cat People | 1982"
		]
	},
	{
		"localFile": "05 - Voicedude - Mayor Joe Of Kingstown ( Jimi Hendrix vs Andrew Lockington )",
		"sources": [
			"Jimi Hendrix - Hey Joe | 1967",
			"Andrew Lockington - Mayor of Kingstown Theme | Mayor of Kingstown | 2022"
		]
	},
	{

		"id": 89226,
		"file": "1172460014_479457178_1124364838.mp3",
		"localFile": "06 - Minor Arth - Clubbed You To Death ( Rob Dougan vs Type O Negative )",
		"image": "1041443355_1192348589_2129404809.jpg",
		"sources": [
			"Rob Dougan - Clubbed To Death | The Matrix | 1998",
			"Type O Negative - Love You To Death | 1996"
		]
	},
	{
		"id": 88954,
		"file": "2098572642_1075509264_321240148.mp3",
		"localFile": "07 - DoM - At Last in Twin Peaks ( Etta James vs Angelo Badalamenti )",
		"image": "1619508290_1427927586_1673972156.png",
		"sources": [
			"Angelo Badalamenti - Twin Peaks Theme | Twin Peaks | 1990",
			"Etta James - At Last | 1960"
		]
	},
	{
		"localFile": "08 - DJ Useo - Imperial Numb ( Pink Floyd vs John Williams vs Reyrzy )",
		"sources": [
			"Pink Floyd - Comfortably Numb | The Wall movie | 1978",
			"John Williams - The Imperial March | Star Wars - A New Hope | 1977",
			"Reyrzy - Hip Hop Samples remix/beats"
		]
	},
	{
		"localFile": "09 - AtoZ - Barney Miller's Music Now ( James Taylor vs Jack Elliott & Allyn Ferguson )",
		"sources": [
			"James Taylor - Rock 'n' Roll Is Music Now | 1974",
			"Jack Elliott & Allyn Ferguson - Barney Miller Theme | 1975"
		]
	},
	{
		"id": 88782,
		"file": "84076328_1806024504_2010642146.mp3",
		"localFile": "10 - Chocomang - Everybody Gotta Learn to Fly ( Beck & Jon Brion vs Foo Fighters )",
		"image": "1780265599_845002798_823434292.jpg",
		"sources": [
			"Beck / Jon Brion - Everybody's Gotta Learn Sometime | Eternal Sunshine of the Spotless Mind | 2004",
			"Foo Fighters - Learn to Fly | 1999"
		]
	},
	{
		"id": 88855,
		"file": "520850242_1047656409_283910220.mp3",
		"producer": "Mashete",
		"localFile": "11 - MasheteMixes - How You Remove Love ( The Cult vs Avril Lavigne )",
		"image": "319660250_335815930_1458339800.jpg",
		"sources": [
			"The Cult - Love Removal Machine | 1987",
			"Avril Lavigne - How You Remind Me | One Piece Film Z | 2012"
		]
	},
	{
		"localFile": "12 - DJ Petrushka - You Should Be Dancing To The Theme From CHiPS ( Bee Gees vs John Parker )",
		"sources": [
			"Bee Gees - You Should Be Dancing | Saturday Night Fever | 1977",
			"John Parker - Theme from CHiPs | CHiPs | 1977"
		]
	},
	{
		"localFile": "13 - Minor Arth - Better With A Brother ( Lin-Manuel Miranda vs Meghan Trainor )",
		"sources": [
			"Lin-Manuel Miranda - I Always Wanted A Brother | Mufasa - The Lion King | 2024",
			"Meghan Trainor - Better When I'm Dancing | The Peanuts Movie | 2015"
		]
	},
	{
		"id": 88853,
		"file": "1865928658_895525731_1517075988.mp3",
		"localFile": "14 - MasheteMixes - Burning Time ( Survivor vs Robin Beck )",
		"image": "127551728_997145553_485702902.jpg",
		"sources": [
			"Survivor - Burning Heart | Rocky IV | 1985",
			"Robin Beck - First Time | 1989"
		]
	},
	{
		"localFile": "15 - AtoZ - The Night Man ( The Eagles vs J-Kwon feat. Andy Milonakis vs Angelo Badalamenti )",
		"sources": [
			"The Eagles - Hotel California | 1977",
			"J-Kwon / Andy Milonakis - Tipsy | The Andy Milonakis Show | 2005",
			"Angelo Badalamenti - Twin Peaks Theme | Twin Peaks | 1990"
		]
	},
	{
		"id": 88850,
		"file": "1856891924_978634562_1180317064.mp3",
		"localFile": "16 - Chocomang - How to Save through a Periscope ( The Fray vs Papa Roach )",
		"image": "578354692_763997096_22279421.jpg",
		"sources": [
			"The Fray - How to Save a Life | Grey's Anatomy | 2005",
			"Papa Roach - Periscope | 2017"
		]
	},
	{
		"id": 88767,
		"file": "1118516316_335376483_785042880.mp3",
		"localFile": "17 - DJ Useo - Theme From Doctor Detroit's Weird Science ( Oingo Boingo vs Devo )",
		"image": "745977018_607983017_2045004989.jpg",
		"sources": [
			"Oingo Boingo - Weird Science | Weird Science | 1985",
			"Devo - Theme from Doctor Detroit | Doctor Detroit | 1983"
		]
	}
],
"Disc 2": [
	{
		"id": 89002,
		"file": "1440382498_871060729_1213936025.mp3",
		"localFile": "01 - DoM - Sedated Misirlou ( Ramones vs Dick Dale )",
		"image": "1464285015_1794259392_1782085642.png",
		"sources": [
			"Dick Dale - Misirlou | 1962 | Pulp Fiction | 1994",
			"Ramones - I Wanna Be Sedated | 1978"
		]
	},
	{
		"id": 88852,
		"file": "610261775_2036044229_1420291340.mp3",
		"producer": "Mashete",
		"localFile": "02 - MasheteMixes - How Divide Is Your Love ( Linkin Park vs Bee Gees )",
		"image": "76896098_1143883334_423165383.jpg",
		"sources": [
			"Linkin Park - New Divide | Transformers: Revenge of the Fallen | 2009",
			"Bee Gees - How Deep Is Your Love | Saturday Night Fever | 1977"
		]
	},
	{
		"localFile": "03 - DJ Petrushka - Streetbeater Killed The Radio Star ( The Buggles vs Quincy Jones )",
		"sources": [
			"The Buggles - Video Killed the Radio Star | 1980",
			"Quincy Jones - Streetbeater | Sanford and Son | 1972"
		]
	},
	{
		"localFile": "04 - AtoZ - In The End We Close Our Eyes ( The Beatles vs Marius Constant )",
		"sources": [
			"The Beatles - The End | 1970",
			"Marius Constant - The Twilight Zone Theme | 1959"
		]
	},
	{
		"id": 88976,
		"file": "279720474_120463665_732952616.mp3",
		"localFile": "05 - Minor Arth - Starburster Underground ( Jamiroquai vs Fontaines DC )",
		"image": "1297376066_1274330096_1533861312.jpg",
		"sources": [
			"Jamiroquai - Deeper Underground | Godzilla | 1998",
			"Fontaines DC - Starburster | House Of Guinness / MobLand | 2024"
		]
	},
	{
		"id": 88909,
		"file": "1274037104_614636917_979886585.mp3",
		"localFile": "06 - Chocomang - Lucky Reality ( The Verve vs Richard Sanderson )",
		"image": "936769071_1617716299_2065739047.jpg",
		"sources": [
			"The Verve - Lucky Man | 1997",
			"Richard Sanderson - Reality | La Boum | 1980"
		]
	},
	{
		"localFile": "07 - DJ Useo - Shaft Success ( Sigue Sigue Sputnik vs Isaac Hayes )",
		"sources": [
			"Sigue Sigue Sputnik - Success | 1988",
			"Isaac Hayes - Theme from Shaft | Shaft | 1971"
		]
	},
	{
		"localFile": "08 - rickyBE - Whoomp P.I. ( Tag Team vs Mike Post & Pete Carpenter )",
		"sources": [
			"Tag Team - Whoomp! (There It Is) | 1993",
			"Mike Post & Pete Carpenter - Magnum P.I. Theme | 1980"
		]
	},
	{
		"localFile": "09 - DJ Petrushka - Barney Miller Theme On Fire ( They Might Be Giants vs Jack Elliott )",
		"sources": [
			"They Might Be Giants - You're On Fire | 2013",
			"Jack Elliott & Allyn Ferguson - Barney Miller Theme  | 1975"
		]
	},
	{
		"id": 88711,
		"file": "1757824873_2037282249_757621320.mp3",
		"localFile": "10 - Minor Arth - Fight The Power's Extreme Ways ( Moby vs Public Enemy )",
		"image": "871074345_2012512590_963641934.jpg",
		"sources": [
			"Moby - Extreme Ways | Jason Bourne | 2016 + original | 2002",
			"Public Enemy - Fight The Power | Do The Right Thing | 1989"
		]
	},
	{
		"id": 88851,
		"file": "1143024045_1602294159_715253228.mp3",
		"image": "129667517_1735051974_1208339591.jpg",
		"localFile": "11 - MasheteMixes - Faint At The Bottom ( Linkin Park vs Staind )",
		"sources": [
			"James Bond - From Russia with Love | 1963",
			"Linkin Park - Faint | 2003",
			"Staind - The Bottom | Transformers: Dark of the Moon | 2011"
		]
	},
	{
		"localFile": "12 - DJ Useo - Mrs. Robinson In Love With My Car ( Queen vs Simon & Garfunkel )",
		"sources": [
			"Queen - I'm In Love with My Car | 1975",
			"Simon & Garfunkel - Mrs. Robinson | The Graduate | 1967"
		]
	},
	{
		"localFile": "13 - AtoZ - WhoopdeBay ( Daffy Duck & Looney Tunes vs Crooner T. Warbler / AtoZ )",
		"sources": [
			"Daffy Duck & Looney Tunes - The Merry-Go-Round Broke Down | Looney Tunes | 1937",
			"Crooner T. Warbler (AtoZ) - Original vocal performance"
		]
	},
	{
		"id": 88964,
		"file": "1565915931_1537454560_914128256.mp3",
		"localFile": "14 - Chocomang - Running Happy 2026 ( Airbourne vs Pharrell Williams )",
		"image": "472996528_1763271748_432185071.jpg",
		"sources": [
			"Airbourne - Runnin' Wild | 2007",
			"Pharrell Williams - Happy | Despicable Me 2 | 2013"
		]
	},
	{
		"localFile": "15 - Minor Arth - The World Is Not Enough When I Lose Myself ( Garbage vs Depeche Mode )",
		"sources": [
			"Garbage - The World Is Not Enough | James Bond - The World Is Not Enough | 1999",
			"Depeche Mode - Only When I Lose Myself | 1998"
		]
	},
	{
		"localFile": "16 - DJ Useo - Boss Of Ziggy ( David Bowie vs They Might Be Giants )",
		"sources": [
			"David Bowie - Ziggy Stardust | 1972",
			"They Might Be Giants - Boss of Me | Malcolm in the Middle | 2000"
		]
	},
	{
		"localFile": "17 - DJ Petrushka - Armenia Monkees In The Sky ( The Who vs The Monkees )",
		"sources": [
			"The Who - Armenia City in the Sky | 1967",
			"The Monkees - Theme from The Monkees | 1966"
		]
	},
	{
		"localFile": "18 - AtoZ - Seinfeld's Island ( The Eligibles vs Jonathon Wolff )",
		"sources": [
			"The Eligibles - The Ballad of Gilligan's Isle | Gilligan's Island | 1964",
			"Jonathon Wolff - Seinfeld Theme | Seinfeld | 1989"
		]
	}
]
};

loadPlaylist();
