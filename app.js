ascii = "=,..............................................................................\n=,..............................................................................\n:,..............................................................................\n:,..............................................................................\n,,..............................................................................\n,,,.............................................................................\n,,,.............................................................................\n,,,.............................................................................\n,,,.............................................................................\n,,,.........................::.......................=..........................\n,,,.........................,...................................................\n,,,.............................................~:+?:...........................\n,,,.........................,=~~..............,:7?+77...I=:.==:.................\n,,,.........................?=7,.............~=7=,+,...?+I777777I=,.............\n,,,..................,.....?++..............:=7..........:7I,~,,,,,,,,..........\n,,,................=I7?=~,?+,....:==.~+7..,:=7~..:7....:+7:~,,.,.:..............\n,,,.............,II..,7I??+...~+,7+==?:..,~=+III7,....:I7,,,....................\n,,,...........:77I..777I?+...I?,.++++7,..~+77..::....=77,.......................\n,,,..........+77,..,~77?I,.,7I.I=,?++7I:=+7=,,.....,+7?=........................\n,,,..........,?77777=?7?~.77+,..,I+?++?=??7.......,+7,....,I,...................\n,,............,...,..,II..?7+,=?+.+7+,.7+7.......,+7=.....~77...................\n,,..............,.....,:,.,..,,.,:~.:.,?7,.:~...~+~,.....=77,..........,,.......\n,,,............,,~~,,,......,::,.....:I?,.........:....~+I7,......:+7,..........\n,..........,,.,:77I77=:.......,.....,,=...............,+I77,,=777:::,...........\n,,,.......:77:I7=.,77?+7..,.,..,,.,,,,,,,.,.,.,,~...~=?I777777=,,,,.............\n,,.......,77777=...77+,:.I7+,.,,,,=?.,,I+:.,,,~?7~.,7?I77777,:,,................\n,,.......,:777?~..,7II..=7+,..,,I+?7.,7?I:..=+I7,..,=?777777,,..................\n,,........,=777I?.,7=..77?,..,7I?I:,,7I+I.=+++I:..+II777?I777,..................\n,,........,7777??,7=...777:=7+~??,.,7I+++=,,7+II?I~?I7+,=,,+77,.................\n,,.......,777I777+:..:77II?~.=7+.,,7I+++.:.=7++I..7?7~+...,:=,?I,...............\n,,.......,77=.....,.:7I=:..:.7~.,.7+===,,..?==.:.:?7+,........:=,,..............\n,,.......,I77.,:~........,..,~?,.,,:~:=....~.,...7II?..............7............\n,........~7+,...............,,,...,:~,.........,7++:...............:7...........\n,........77~...................................7+,,................,,...........\n,........,~~..................................7=.,..............................\n,.......,....,I..............................:..~...............................\n,.......,.......................................................................\n,........................................:,.....................................\n,.........................................:.....................................\n................................................................................\n,...............................................................................\n................................................................................\n,...............................................................................\n,...............................................................................\n,...............................................................................\n,...............................................................................\n................................................................................\n................................................................................\n,,..............................................................................\n,,,,,..................................................................,,,,,,,,,"
console.log(ascii);
// define all of our songs/lyrics
var buttons = ["oh yeah", "one more time", "around the world", "harder", "better", "faster", "stronger", "make love", "give life back to music", "get lucky", "lose yourself to dance", "doin' it right", "human after all", "robot rock"]

lyrics = [
	"Da funk back to the punk, c'mon.",
	"Around the world, around the world.",
	// discovery lyrics
	"one more time, we're gonna celebrate",
	"oh yeah, all right, don't stop the dancing",
	"harder better faster stronger",
	// human after all songs
	"Technologic. Technologic. Technologic. Technologic.",
	"buy it use it break it fix it",
	"trash it change it mail upgrade it",
	// "charge it point it zoom it press it",
	// "snap it work it quick erase it",
	// "plug it play it burn it rip it",
	// "drag and drop it zip unzip it",
	// "lock it fill it curl it find it",
	// "view it code it jam unlock it",
	// "surf it, scroll it, pause it, click it",
	// "cross it, crack it, switch update it",
	// "name it, read it, tune it, print it",
	// "scan it, send it, fax rename it",
	// "touch it, bring it, pay it, watch it",
	// "turn it, leave it, start format it",
	"lose yourself to dance",
	"come on come on come on come on come on, come on come on come on come on come on",
	"robot rock",
	"rollin' and scratchin'",
	"face to face"
]




// define our paragraph length, in words
PARA_WORD_LENGTH = 150;
$(".generateButton").text(buttons[Math.floor(Math.random() * buttons.length)])
var generate = function() {
	$(".generateButton").text(buttons[Math.floor(Math.random() * buttons.length)])
	var paragraphCount = parseInt($(".paragraphInput").val())
		// if paragraphInput does not contain a number
		// , don't do anything.
	if (typeof paragraphCount != "number") {
		return;
	}
	// if paragraphInput is greater than 100, set it to 100
	if (paragraphCount > 100) {
		paragraphCount = 100;
	}
	// create the paragraphs for our ipsum
	ipsum = []
	for (var i = 0; i < paragraphCount; i++) {
		// pick a song from an album to use as the lorem ipsum:
		// var album = albums[Object.keys(albums)[Math.floor(Math.random() * Object.keys(albums).length)]]
		// var song = album[Object.keys(album)[Math.floor(Math.random() * Object.keys(album).length)]]
		ipsum[i] = generateParagraph(lyrics)
	}
	$(".ipsum").html("")
	for (var i = 0; i < ipsum.length; i++) {
		$(".ipsum").append($('<p></p>').text(ipsum[i]))
	}
}
var generateParagraph = function(lyrics) {
	// avg paragraph length is 150 words - always have to check and see if the latest total is more or less than that
	var newParagraphLyrics = [];
	// while we have a word count of less than PARA_WORD_LENGTH
	while (newParagraphLyrics.join(" ").split(" ").length < PARA_WORD_LENGTH) {
		newParagraphLyrics = newParagraphLyrics.concat(lyrics[Math.floor(Math.random() * lyrics.length)])
	}
	// create our new paragraph string
	newParagraphString = ""
	newParagraphString = newParagraphString + newParagraphLyrics[0][0].toUpperCase() + newParagraphLyrics[0].slice(1)
	for (var i = 1; i < newParagraphLyrics.length; i++) {
		rand = Math.random()
		if (rand <= 0.5) {
			newParagraphString = newParagraphString + " " + newParagraphLyrics[i]
		} else if (rand <= 0.75) {
			newParagraphString = newParagraphString + ", " + newParagraphLyrics[i].toLowerCase()
		} else {
			newParagraphString = newParagraphString + ". " + newParagraphLyrics[i][0].toUpperCase() + newParagraphLyrics[i].slice(1)
		}
		// newParagraphLyrics[i]
	}
	newParagraphString = newParagraphString.concat(".")
	return newParagraphString
}


aroundTheWorld = ["around the world"]
harderBetterFasterStronger = ["harder", "better", "faster", "stronger"]
oneMoreTime = ["one more time", "we're gonna celebrate", "oh yeah, all right", "don't stop the dancing"]


console.log(generateParagraph(aroundTheWorld));
console.log(generateParagraph(harderBetterFasterStronger));
console.log(generateParagraph(oneMoreTime));
