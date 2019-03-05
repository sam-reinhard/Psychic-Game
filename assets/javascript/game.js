// Starting values for wins, losses, guesses left, and user guesses
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var userGuesses = [];
var computerGuess;
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Function that makes the computer select a random letter
function computerSelected() {
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess);
}

// Run the function that makes the computer pick something
computerSelected();

// User releases a key to start guessing
document.onkeyup = function(event){
    var userGuess = event.key;

// Let's compare the user guess with the computer guess and decide the outcomes for possible scenarios
    
    if (userGuess === computerGuess){
        wins++;
        userGuesses = [];
        guessesLeft = 9;
        computerSelected();

    } else if (userGuess !== computerGuess){
        userGuesses.push(userGuess);
        guessesLeft--;         
    }
    
    if (guessesLeft === 0) {
        losses++;
        userGuesses = [];
        guessesLeft = 9;
        computerSelected();
    }

   // Code to put wins, losses, guesses remaining, and the user guesses on the page 
    document.getElementById('wins').textContent = wins;
    document.getElementById('losses').textContent = losses;
    document.getElementById('remaining').textContent = guessesLeft;
    document.getElementById('guesses').textContent = " " + userGuesses; 
}


