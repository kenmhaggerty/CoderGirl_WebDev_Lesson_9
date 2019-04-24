// wheel_of_fortune.js
// CoderGirl WebDev (Winter 2019) — LaunchCode

// VARIABLES /////////////////////////////////////////////////////////

// In a normal application you would ask for user input.
// In this exercise we will set the variables ourselves.

// Set a secret word!

var user = prompt("Would you like to play Wheel of Fortune?");
user ? console.log("Wonderful!  Your word contains: 4 letters.") : console.log("Then go away!");
var guess = prompt("Would you like to guess a letter or a word?");
switch(guess) {
	case "letter":
		var letter = console.log("Ok!  Guess a letter!");
		break;
	case "word":
		var word = console.log("Ok!  Guess a word!");
		break;
}
		switch(word) {
			case "FIVE":
				console.log("Congratulations! You won Wheel Of Fortune!");
				break;
			default:
				console.log("Nope, keep trying!");
				break;
		}
		switch(letter) {
			case "F":
				console.log("There is one F!  F_ _ _");
				break;
			case "I":
				console.log("There is one I!  _I_ _");
				break;
			case "V":
				console.log("There is one V!  _ _V_");
				break;
			case "E":
				console.log("There is one E!  _ _ _E");
			default:
				console.log("Nope, no" + letter + "keep trying!"); 
				break;
		}
		



// Ask player if they would like to guess a letter or guess the
// solution.




// If they are guessing a letter, set the letter that they are
// guessing. If they are guessing the word, then set the word
// as their guess.



// SCRIPT ////////////////////////////////////////////////////////////

// If guessing a letter...

	// If the word contains the letter...

		// Print back the word with all instances of that letter revealed.

	// If the word does not contain the letter...

		// Print back "Sorry, no <letter>!" but with <letter> replaced by the player's guess.

// If guessing the word...

	// If they are correct...

		// Print "Congratulations! You won Wheel Of Fortune!"

	// If they are incorrect...

		// Print back "Nope, keep trying!"

// End of script!
