// define all of our songs/lyrics
songs = [
	// albums
	"homework", "discovery", "human after all", "random access memories",
	// homework
	"daftendirekt", "WDPK 83.7 FM", "revolution 909", "da funk", "phœnix", "fresh", "around the world", "rollin' & scratchin'", "teachers", "high fidelity", "rock'n roll", "oh yeah", "burnin'", "indo silver club", "alive", "funk",
	// discovery
	"one more time", "aerodynamic", "digital love", "harder, better, faster, stronger", "crescendolls", "nightvision", "superheroes", "high life", "something about us", "voyager", "veridis quo", "short circuit", "face to face", "too long",
	// human after all
	"human after all", "the prime time of your life", "robot rock", "steam machine", "make love", "the brainwasher", "on/off", "television rules the nation", "technologic", "emotion",
	// random access memories
	"give life back to music", "the game of love", "giorgio by moroder", "within", "instant crush", "lose yourself to dance", "touch", "get lucky", "beyond", "motherboard", "fragments of time", "doin' it right", "contact"
]
aroundTheWorld = ["around the world"]
harderBetterFasterStronger = ["work it harder", "make it better", "do it faster", "makes us stronger", "more than ever", "hour after hour", "work is never over"]
technologic = ["buy it, use it, break it, fix it", "trash it, change it, mail - upgrade it", "charge it, point it, zoom it, press it", "snap it, work it, quick - erase it", "write it, cut it, paste it, save it", "load it, check it, quick - rewrite it", "plug it, play it, burn it, rip it", "drag and drop it, zip - unzip it", "lock it, fill it, call it, find it", "view it, code it, jam - unlock it", "surf it, scroll it, pause it, click it", "cross it, crack it, switch - update it", "name it, read it, tune it, print it", "scan it, send it, fax - rename it", "touch it, bring it, pay it, watch it", "turn it, leave it, start - format it", "technologic. Technologic. Technologic. Technologic"]
allWords = {
		"songs": songs,
		"aroundTheWorld": aroundTheWorld,
		"harderBetterFasterStronger": harderBetterFasterStronger,
		"technologic": technologic
	}
	// define our paragraph length, in words
PARA_WORD_LENGTH = 50;
var generatorElement = document.getElementsByClassName('generator')[0];
var addNewParagraph = function() {
	// inefficient crap. whatever, gets the job done. if you're looking for an *efficient* daft punk lorem ipsum generator, you won't find it here!
	validKeys = []
	$("input:checkbox").each(function(index, element) {
		if (element.checked) {
			validKeys.push(element.name)
		}
	})
	if (validKeys.length != 0) {
		filteredAllWords = {}
		for (key of validKeys) {
			filteredAllWords[key] = allWords[key]
		}
		var words = filteredAllWords[Object.keys(filteredAllWords)[Math.floor(Math.random() * Object.keys(filteredAllWords).length)]]
		$(".ipsum").append($('<p></p>').text(generateParagraph(words)))
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
			newParagraphString = newParagraphString + ", " + newParagraphLyrics[i]
		} else {
			newParagraphString = newParagraphString + ". " + newParagraphLyrics[i][0].toUpperCase() + newParagraphLyrics[i].slice(1)
		}
		// newParagraphLyrics[i]
	}
	newParagraphString = newParagraphString.concat(".")
	return newParagraphString
}
regenerate = function() {
		$(".ipsum").html("");
		validKeys = []
		$("input:checkbox").each(function(index, element) {
			if (element.checked) {
				validKeys.push(element.name)
			}
		})
		if (validKeys.length != 0) {
			if (window.innerWidth < 768) {
				while ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
					addNewParagraph();
				}
			} else {
				while (generatorElement.scrollHeight - generatorElement.scrollTop <= generatorElement.clientHeight) {
					addNewParagraph()
				}
			}
		} else {
			$(".ipsum").html("&#x1f916;");
		}
	}
	// generate a bunch of paragraphs to begin with
	regenerate();
	// generate more paragraphs on scroll
generatorElement.onscroll = function(ev) {
	// height of visible element + how far the visible element is scrolled >= total height of the element
	if (generatorElement.scrollHeight - generatorElement.scrollTop <= generatorElement.clientHeight) {
		addNewParagraph()
	}
};
window.onscroll = function(ev) {
	if (window.innerWidth < 768) {
		if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
			// you're at the bottom of the page
			addNewParagraph()
		}
	}
}
