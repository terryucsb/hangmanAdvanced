var letterCons = require("./letter.js");
var inquirer = require("inquirer");
var randomWord = game.randomWord;
var letterGuessed;
exports.letter;


var myWord = new wordCons.wordCons(game.randomWord);
var maxGuesses = 10;

function takeGuess(){
	console.log(myWord.toString());
	if (myWord.guessesMade.length > = maxGuesses){
		console.log("No more guesses left.");
		return "Game Over.";
	}
	inquirer.prompt([{
		name: "letter",
		type: "text",
		message: "Guess a letter",
		valdiate: function(str){
			if (str.length !=1) return false;
			var regEx = new RegExp("^[a-zA-Z\s]{1,1}$");
			return regEx.test(str);
		}
		}]).then(function(letterInput){ //Game control
			var letter = letterInput.letter;
			myWord.findLetter(letter); //Check
			if(myWord.isComplete()){ 
				console.log('Yes! It was ' + myWord.toString() + '!');
				return; //Winner
			}
			console.log('-------------------\n'); //If we are here the game did not end. Next guess.
			console.log('You have ' + (maxGuesses - myWord.guessesMade.length) + ' guesses left.')
			takeGuess(); //Recursive call
		}
		);
	}
	takeGuess();


