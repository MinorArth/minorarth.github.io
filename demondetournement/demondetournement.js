const LOGO_IMAGE = "./artwork/SteffsGorillazMashupProject.png";
const LOGO_TITLE = "Steff's Gorillaz Mashup Project";
const LOGO_LINK = "..";
const ALBUM_TITLE = getMeta("og_title") || document.title;
const ALBUM_DESCRIPTION = getMeta("og_description");
//const ALBUM_LINK = "https://mega.nz/file/QhNDTKaJ#OFz3ipCBB7IByG_fUGADxjQiWHOomzwb0rjvVIL3cYw";
const ALBUM_LINK = "https://www.mediafire.com/file/04x0peh45n0es2u/Steffs_Gorillaz_Mashup_Project-Demon_Detournement.zip";
const ALBUM_ARTIST = "";
const TRACK_LINK_PATH = "https://remix.audio/track/";
const AUDIO_PATH = "https://remix.audio/uploads/tracks/";
const IMAGE_PATH = "./artwork/";
ICON_PATH = "../img/";
const AUDIO_TYPE = ".mp3";
const IMAGE_TYPE = ".jpg";
const PLAYER_IMAGE = "./artwork/DemonDetournement.jpg";
var producers = [ "Steff St Moore", "Minor Arth", "DoM" ];

var links = {
	"<": "..",
	"remix.audio": "https://remix.audio/playlist/2953",
	"Gorillaz Mashup Videos": "https://www.youtube.com/watch?v=MWKWE_XsGVA&list=PLUq5Z5VhjxM3G9EXQPOAmrBcFro3FwwjS",
	"Mashup Lovers": "https://www.facebook.com/groups/mashuplovers",
	"Steff St. Moore": "https://remix.audio/profile/SteffStMoore",
	"Minor Arth": "https://www.youtube.com/@MinorArth",
	"DoM": "https://remix.audio/profile/DoM"
};

var items = {
	"Album": [
		{
			"id": 74709,
			"file": "612755084_1728405659_391453970.mp3",
			"localFile": "Minor Arth - Gorillaz - Prince - Vincent Price - Radiohead - Intro",
			"video": "https://youtu.be/MWKWE_XsGVA",
			"sources": [
				"Gorillaz - Intro",
				"Prince - Let's Go Crazy",
				"Vincent Price - Thriller",
				"Radiohead - Fitter Happier"
			],
			"songTitle": "Intro",
			"producer": "Minor Arth",
			"artists": "Gorillaz / Prince / Vincent Price / Radiohead"
		},
		{
			"id": 74915,
			"file": "927289459_850521867_413079467.mp3",
			"localFile": "Steff St Moore & Minor Arth - Gorillaz - Radiohead - Last Lucky Souls",
			"sources": [
				"Gorillaz - Last Living Souls",
				"Radiohead - Lucky"
			],
			"songTitle": "Last Lucky Souls",
			"producer": "Steff St Moore & Minor Arth",
			"artists": "Gorillaz / Radiohead"
		},
		{
			"id": 31701,
			"file": "331654723_1250220683_263260881.mp3",
			"localFile": "DoM - Gorillaz - The Clash - Kids With Guns In Brixton",
			"sources": [
				"Gorillaz - Kids With Guns",
				"The Clash - Guns Of Brixton",
				"https://youtu.be/lJ_1DWvw-jU"
			],
			"songTitle": "Kids With Guns In Brixton",
			"producer": "DoM",
			"artists": "Gorillaz / The Clash",
			"video": "https://youtu.be/lJ_1DWvw-jU"
		},
		{
			"id": 75999,
			"file": "1578808518_1543641697_600077172.mp3",
			"localFile": "Steff St Moore - Gorillaz - Lady Gaga - O Green Telephone World",
			"sources": [
				"Gorillaz - O Green World",
				"Lady Gaga - Telephone"
			],
			"songTitle": "O Green Telephone World",
			"producer": "Steff St Moore",
			"artists": "Gorillaz / Lady Gaga",
			"video": "https://youtu.be/XUz32Zs4EiE"
		},
		{
			"id": 35483,
			"file": "259315763_117280260_1864047493.mp3",
			"localFile": "Minor Arth - Gorillaz - Grandmaster Flash & The Furious Five - The Message To Dirty Harry",
			"sources": [
				"Gorillaz - Dirty Harry",
				"Grandmaster Flash & The Furious Five - The Message"
			],
			"songTitle": "The Message To Dirty Harry",
			"producer": "Minor Arth",
			"artists": "Gorillaz / Grandmaster Flash & The Furious Five"
		},
		{
			// "id": 75998,
			"file": "437153311_54832013_1015990628.mp3",
			"localFile": "Steff St Moore - Gorillaz - Michael Jackson - Feel Good Off The Wall",
			"sources": [
				"Gorillaz - Feel Good, Inc.",
				"Michael Jackson - Off The Wall"
			],
			"songTitle": "Feel Good Off The Wall",
			"artists": "Gorillaz / Michael Jackson",
			"producer": "Steff St Moore",
			// "links": { "YouTube": "https://youtu.be/SHGpqfHeO-o" }
		},
		{
			"id": 74708,
			"file": "1534171093_2106807373_1841257097.mp3",
			"localFile": "Minor Arth - Gorillaz - The Cure - Lovesong Del Manana",
			"sources": [
				"Gorillaz - El Mañana",
				"The Cure - Lovesong"
			],
			"songTitle": "Lovesong Del Mañana",
			"producer": "Minor Arth",
			"artists": "Gorillaz / The Cure",
			"links": { "BOOT OF THE DAY": "https://www.facebook.com/permalink.php?story_fbid=pfbid02NJvzBf23dQTp33u9Xp9E4h37eYYWX6EessMz21dYTmuB2tSy6qzFRkgZeQiRQecrl&id=100063537011274" }
		},
		{
			"id": 30576,
			"file": "1763934030_1961094580_971784066.mp3",
			"localFile": "Minor Arth - Gorillaz - Dave Gahan - Iggy Pop - Grace Jones - Use Every Planet For Nightclubbing",
			"sources": [
				"Gorillaz - Every Planet We Reach Is Dead",
				"Iggy Pop & Grace Jones - Nightclubbing",
				"Dave Gahan - Use You",
				"Grace Jones - Use Me"
			],
			"songTitle": "Use Every Planet For Nightclubbing",
			"producer": "Minor Arth",
			"artists": "Gorillaz / Dave Gahan / Iggy Pop / Grace Jones",
			"video": "https://youtu.be/dtN6gUHhtlo"
		},
		{
			// "id": 75972,
			"file": "601653896_946261058_1321463132.mp3",
			"localFile": "Steff St Moore - Gorillaz - D'Angelo - MF Has Come",
			"sources": [
				"Gorillaz - November Has Come",
				"D'Angelo - Sh*t, Damn, Motherf***er"
			],
			"songTitle": "MF Has Come",
			"producer": "Steff St Moore",
			"artists": "Gorillaz / D'Angelo"
		},
		{
			"id": 40383,
			"file": "146643899_781326685_827781983.mp3",
			"localFile": "Steff St Moore - Gorillaz - Crystal Waters - Gypsy Woman All Alone",
			"sources": [
				"Gorillaz - All Alone",
				"Crystal Waters - Gypsy Woman"
			],
			"songTitle": "Gypsy Woman All Alone",
			"producer": "Steff St Moore",
			"artists": "Gorillaz / Crystal Waters"
		},
		{
			// "id": 75971,
			"file": "1107648121_1391566854_1746042303.mp3",
			"localFile": "Steff St Moore - Gorillaz - Bruce Springsteen - Born To Run In The White Light",
			"sources": [
				"Gorillaz - White Light",
				"Bruce Springsteen - Born To Run"
			],
			"songTitle": "Born To Run In The White Light",
			"producer": "Steff St Moore",
			"artists": "Gorillaz / Bruce Springsteen"
		},
		{
			// "id": 75994,
			"file": "283624304_1074333323_650043499.mp3",
			"id": 35582,
			// "file": "1503928746_1935336146_1418443366.mp3",
			"localFile": "Steff St Moore - Gorillaz - Amy Winehouse - Dare To Go Back To Black",
			"sources": [
				"Gorillaz - DARE",
				"Amy Winehouse - Back To Black"
			],
			"songTitle": "Dare To Go Back To Black",
			"producer": "Steff St Moore",
			"artists": "Gorillaz / Amy Winehouse"
		},
		{
			"id": 40201,
			"file": "1340319017_242182282_241613358.mp3",
			"localFile": "Steff St Moore - Gorillaz - Ultra Nate - Found A Cure Out Of The Monkey's Head",
			"sources": [
				"Gorillaz - Fire Coming Out of a Monkey's Head",
				"Ultra Naté - Found A Cure"
			],
			"songTitle": "Found A Cure Out Of The Monkey's Head",
			"producer": "Steff St Moore",
			"artists": "Gorillaz / Ultra Naté"
		},
		{
			"id": 75177,
			"file": "1994001910_169427007_756911456.mp3",
			"localFile": "Minor Arth - Bjork - Massive Attack - Gorillaz - Karma Days Lost On Venus",
			"sources": [
				"Björk - Venus As A Boy",
				"Massive Attack - Karmacoma",
				"Gorillaz - Don't Get Lost in Heaven / Demon Days"
			],
			"songTitle": "Karma Days Lost On Venus",
			"producer": "Minor Arth",
			"artists": "Björk / Massive Attack / Gorillaz"
		}
	],
	"Bonus": [
		{
			// "id": 76000,
			"file": "532653678_1260639085_175463844.mp3",
			"localFile": "Steff St Moore - Gorillaz - Soul II Soul - Back To Life -- Dirty Harry mix",
			"sources": [
				"Gorillaz - Dirty Harry",
				"Soul II Soul - Back To Life"
			],
			"songTitle": "Back To Life | Dirty Harry mix",
			"artists": "Gorillaz / Soul II Soul",
			"producer": "Steff St Moore",
			// "links": { "YouTube": "https://youtu.be/WYKm9kCRPoM" }
		},
		{
			"id": 32429,
			"file": "809728014_1051900646_1255851805.mp3",
			"localFile": "Minor Arth - Gorillaz - The Do - Archive - Kids With Fear On Their Shoulders",
			"sources": [
				"Gorillaz - Kids With Guns",
				"The Do - On My Shoulders",
				"Archive - Fear There Everywhere"
			],
			"songTitle": "Kids With Fear On Their Shoulders",
			"producer": "Minor Arth",
			"artists": "Gorillaz / The Do / Archive",
			"links": { 
				"Archive version": "https://remix.audio/track/33074", 
				"The Do version": "https://remix.audio/track/33075" 
			}
		},
		{
			"id": 37709,
			"file": "10113748_1637046022_355789952.mp3",
			"localFile": "DoM - Neneh Cherry - Gorillaz - Feel Good Woman",
			"sources": [
				"Neneh Cherry - Woman",
				"Gorillaz - Feel Good, Inc.",
				"https://youtu.be/xSSu5UOTOgw"
			],
			"songTitle": "Feel Good Woman",
			"producer": "DoM",
			"artists": "Neneh Cherry / Gorillaz",
			"video": "https://youtu.be/xSSu5UOTOgw",
			"links": { "BOOT OF THE DAY": "https://www.facebook.com/permalink.php?story_fbid=pfbid037wvVyb1CnNfqV7ZNz3q8VMHByEHBRcAA2CvmmYCi2RnUmB7fK6y4nMU3oxaWcvhyl&id=100063537011274" }
		},
		{
			"id": 63064,
			"file": "1207726596_1413955144_711940888.mp3",
			"localFile": "Minor Arth - Gorillaz - The Kinks - Feel Good On A Sunny Afternoon",
			"sources": [
				"Gorillaz - Feel Good, Inc.",
				"The Kinks - Sunny Afternoon"
			],
			"songTitle": "Feel Good On A Sunny Afternoon",
			"artists": "Gorillaz / The Kinks",
			"producer": "Minor Arth",
			"links": { "Summer Booty 2024": "https://audioboots.org/Albums/SB2024", "BOOT OF THE DAY": "https://www.facebook.com/permalink.php?story_fbid=pfbid02RX5dbgtUU3hS7WBN8zrNhNj242ggdYcCM82FtPzmFy72Jv7Qg3ymaCPLfdXgUge6l&id=100063537011274" }
		},
		{
			"id": 52176,
			"file": "1848257567_1854779707_650347842.mp3",
			"localFile": "DoM - Dolboeb - Gorillaz - Feel Good inc -- Kyoto mix",
			"sources": [
				"Dolboeb - Feel Good, Inc.",
				"Gorillaz - Feel Good, Inc."
			],
			"songTitle": "Feel Good inc | Kyoto mix",
			"producer": "DoM",
			"artists": "Dolboeb / Gorillaz"
		},
		{
			"id": 51955,
			"file": "583847910_1336926808_314685960.mp3",
			"localFile": "DoM - Roxy Music - Gorillaz - Feel You inc",
			"sources": [
				"Roxy Music - Editions of you",
				"Gorillaz - Feel Good, Inc."
			],
			"songTitle": "Feel You inc",
			"producer": "DoM",
			"artists": "Roxy Music / Gorillaz"
		},
		{
			"id": 75830,
			"file": "385348153_1920679167_736910152.mp3",
			"localFile": "Minor Arth & DoM - Gorillaz - Depeche Mode - Feel Good Dream",
			"sources": [
				"Gorillaz - Feel Good, Inc.",
				"Depeche Mode - Dream On"
			],
			"songTitle": "Feel Good Dream",
			"producer": "Minor Arth & DoM",
			"artists": "Gorillaz / Depeche Mode",
			"links": { "DoM version": "https://remix.audio/track/65742" }
		},
		{
			"id": 28352,
			"file": "1504794660_2049043336_1255831903.mp3",
			"localFile": "Minor Arth - Manu Chao - Gorillaz - Feel Bongo Bong inc",
			"sources": [
				"Manu Chao - Bongo Bong",
				"Gorillaz - Feel Good, Inc."
			],
			"songTitle": "Feel Bongo Bong inc",
			"producer": "Minor Arth",
			"artists": "Manu Chao / Gorillaz"
		},
		{
			// "id": 76002,
			"file": "838911111_710089901_1526681702.mp3",
			"localFile": "Steff St Moore - Gorillaz - Will Downing - Michelle Manana",
			"sources": [
				"Gorillaz - El Mañana",
				"Will Downing - Michelle"
			],
			"songTitle": "Michelle Mañana",
			"artists": "Gorillaz / Will Downing",
			"producer": "Steff St Moore",
			// "links": { "YouTube": "https://youtu.be/Bssx5KrhNrk" }
		},
		{
			"id": 77799,
			"file": "1839965126_638022920_1114039605.mp3",
			"localFile": "Minor Arth - Doris Days - Zero 7 - Gorillaz - To Ulrike Manana",
			"sources": [
				"Doris Days - To Ulrike M. | Zero 7 remix",
				"Gorillaz - El Mañana"
			],
			"songTitle": "To Ulrike Mañana",
			"producer": "Minor Arth",
			"artists": "Doris Days / Zero 7 / Gorillaz",
			"links": { "Summer Booty 2025": "https://audioboots.org/Albums/SB2025" }
		},
		{
			"id": 39841,
			"file": "1120974529_1140256527_908575332.mp3",
			"localFile": "Steff St Moore - Gorillaz - Prince - Controversy People",
			"sources": [
				"Gorillaz - People",
				"Prince - Controversy"
			],
			"songTitle": "Controversy People",
			"producer": "Steff St Moore",
			"artists": "Gorillaz / Prince"
		},
		{
			"id": 28074,
			"file": "231995035_1942416277_998251740.mp3",
			"localFile": "DoM - Gorillaz - Tears For Fears - Dare To Shout",
			"sources": [
				"Gorillaz - DARE",
				"Tears For Fears - Shout"
			],
			"songTitle": "Dare To Shout",
			"producer": "DoM",
			"artists": "Gorillaz / Tears For Fears",
			"links": { "BOOT OF THE DAY": "https://www.facebook.com/permalink.php?story_fbid=pfbid02JT6dJ4B8pYpgT2eGSqSXNu9aQ8HxaKVKkMJMg8LcLtaJXjuQ3DFBBQDqnznAR2zKl&id=100063537011274" }
		},
		{
			// "id": 76003,
			"file": "407584130_1151349611_2091194948.mp3",
			"localFile": "Steff St Moore - Gorillaz - Prince - Don't Get Lost in Automatic Heaven",
			"sources": [
				"Gorillaz - Don't Get Lost in Heaven / Demon Days",
				"Prince - Automatic / Let's Go Crazy"
			],
			"songTitle": "Don't Get Lost in Automatic Heaven",
			"producer": "Steff St Moore",
			"artists": "Gorillaz / Prince"
		}
	]
};

loadPlaylist();