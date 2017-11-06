var letter = require("./letter.js")

myLetter = new letter.letter("a");
console.log(myLetter);
console.log(myLetter.value);

var word = require("./word.js");

var myWord = new word.wordCons("Pikachu");
console.log(myWord);
console.log(myWord.value);
for(var i=0;i < myWord.letters[i].value.length; i++){
	console.log(myWord.letters[i].value);
}

var game = require("./game.js");
console.log(game.randomWord);