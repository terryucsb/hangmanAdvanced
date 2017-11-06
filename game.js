var wordsToGuess = ["Pikachu", "Squirtle", "Togeppi", "Charmander", "Blastoise", "Mewtwo", "Mew", "Bulbasaur", "Ash", "Rock", "Staryu"];
var randomIndex = Math.floor(Math.random() * wordsToGuess.length);
var randomWord = wordsToGuess[randomIndex];
exports.randomWord = randomWord;