var inquirer = require("inquirer");
var Word = require('./word.js');

var wordOptions = ["dog", "bird", "hedgehog"];
var currentWordObj;
var guessesLeft = 10;

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
        currentWordObj = new Word(wrd);
        currentWordObj.makeLtrArray();
        gameplay();
    });
};

// Makes display word, takes user guess and checks guess
function gameplay() {
    if (currentWordObj.checkComplete()) {
        console.log("\nYou got it!\n")
    } else if (guessesLeft === 0) {
        console.log("\nOut of guesses!\n")
    } else {
        promptPlayer();
    }
};

function promptPlayer() {
    currentWordObj.makeDisplayWord();
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
            currentWordObj.checkGuess(guess);
            gameplay();
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

// check if word is done



