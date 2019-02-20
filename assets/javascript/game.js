// Computer picks a letter at random
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 

var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)]


console.log(computerChoice);

// Track wins, losses, guesses, guesses left

var wins = 0;
var losses = 0;
var guesses = 10;

// If the user guesses correct they win the game and
// the win counter increase by 1 
document.onkeypress = function(event) {
    var userGuess = event.key;
    // need to add userGuess to previousGuesses

    if (userGuess === computerChoice) {
        message.textContent = "You win!";
        wins++;
    } else {
        // if they guess wrong guesses decrease by 1
        guesses--;
    }
    // if you run out of guesses, computer wins 
    if (guesses === 0) {
        message.textContent = "Computer wins!";
        // losses increase by 1 
        losses++;
    }
}

document.getElementById('wins').innerHTML = "Wins: " + wins;
document.getElementById('losses').innerHTML = "losses: " + losses;
document.getElementById('guesses').innerHTML = "Guesses left: " + guesses;