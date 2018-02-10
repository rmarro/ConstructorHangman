var inquirer = require("inquirer");
var Word = require('./word.js');

var wordOptions = ["dog", "bird", "hedgehog"];
var currentWord;

// Selects random word, creates array of letter objects, and prompts player
function startGame() {
    inquirer.prompt(
        [
            {
                name: "start",
                type: "select",
                message: "WELCOME TO GUESS THE ANIMAL \n  PRESS ENTER TO START GAME"
            }
        ]
    ).then(function() {
        var wrd = wordOptions[Math.floor(Math.random()*3)];
        currentWord = new Word(wrd);
        currentWord.makeLtrArray();
        promptPlayer();
    });
};

// Makes display word, takes user guess and checks guess
function promptPlayer() {
    currentWord.makeDisplayWord();
    inquirer.prompt(
        [
            {
            name: "guess",
            type: "input",
            message: "Guess a letter!",
            }
        ]
    ).then(function(data) {
        var guess = data.guess;
        currentWord.checkGuess(guess);
        promptPlayer();
    })
};

startGame();


// TRY THIS LOGIC FOR GAMEPLAY
// gameplay function
// function to check if word is done
// if yes, congrats and inquire play again
// if no, function to check if guesses left
// if no, out of guesses and prompt play again
// if yes, prompt player for guess
// if correct, gameplay
// if incorrect, guessesLeft-- and gameplay





