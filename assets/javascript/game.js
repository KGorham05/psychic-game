// Computer picks a letter at random
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)]


console.log(computerChoice);

// Track wins, losses, guesses, guesses left

var wins = 0;
var losses = 0;
var guesses = 10;
var guessedLetters = [];

// Create variables that hold references to the places
// in the HTML where we want to display things. 

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesText = document.getElementById("remaining-guesses-text");
var previousGuessesText = document.getElementById("previous-guesses-text");

// This will run whenever the user presses a key. 
document.onkeyup = function (event) {
    console.log("The function is running");
    
    // determines which key is pressed
    var userGuess = event.key;
    
    // Add userGuess to guessedLetters
    guessedLetters.push(event.key);

    // If the user guesses correct they win the game and
    // the win counter increase by 1 

    if (userGuess === computerChoice) {
        // not sure about the code below
        alert("You win!");
        wins++;
    } else {
        // if they guess wrong guesses decrease by 1
        guesses--;
    }
    // if you run out of guesses, computer wins 
    if (guesses === 0) {
        alert("Computer wins!");
        // losses increase by 1 
        losses++;
    }

    // Record information to the scoreboard 
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesText.textContent = "Remaining Guesses: " + guesses;
    previousGuessesText.textContent = "Previous Guesses: " + guessedLetters;

    //reset the game variables 
    
};

// document.getElementById('wins').innerHTML = "Wins: " + wins;
// document.getElementById('losses').innerHTML = "losses: " + losses;
// document.getElementById('guesses').innerHTML = "Guesses left: " + guesses;