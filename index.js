var inquirer = require("inquirer");
var Word = require('./word.js');

var wordOptions = ["dog", "bird", "hedgehog"];
var currentWordObj;
var guessesLeft;
var alreadyGuessed;

// Selects random word, creates array of letter objects, resets guesses, and prompts player
function startGame() {
    inquirer.prompt(
        [
            {
                name: "start",
                type: "select",
                message: "~WELCOME TO GUESS THE ANIMAL~ \n   PRESS ENTER TO START GAME"
            }
        ]
    ).then(function() {
        var wrd = wordOptions[Math.floor(Math.random()*3)];
        currentWordObj = new Word(wrd);
        currentWordObj.makeLtrArray();
        guessesLeft = 8;
        alreadyGuessed = [];
        gameplay();
    });
};


// Check if word is done, check if guesses are left, ends game or prompts player accordingly
function gameplay() {
    if (currentWordObj.checkComplete()) {
        currentWordObj.makeDisplayWord();
        console.log("YOU GOT IT!\n");
        askPlayAgain();
    } else if (guessesLeft === 0) {
        currentWordObj.makeDisplayWord();
        console.log("OUT OF GUESSES!\n");
        askPlayAgain();
    } else {
        promptPlayer();
    }
};


// Displays word, guesses left, and letters already guessed; checks guess input
function promptPlayer() {
    currentWordObj.makeDisplayWord();
    console.log(`GUESSES LEFT: ${guessesLeft}`)
    console.log("ALREADY GUESSED: "+ alreadyGuessed.join(" "))
    inquirer.prompt(
        [
            {
            name: "guess",
            type: "input",
            message: "GUESS A LETTER!",
            }
        ]
    ).then(function(data) {
        var guess = data.guess;
        if (alreadyGuessed.indexOf(guess) != -1) {
            console.log("\nALREADY GUESSED!\n");
            promptPlayer();
        } else {
            currentWordObj.checkGuess(guess);
            if (currentWordObj.checkGuess(guess)) {
                console.log("\nCORRECT\n");
            } else {
                guessesLeft--;
                alreadyGuessed.push(guess);
                console.log("\nINCORRECT\n");
            };
            gameplay();
        };
    });
};

// Ask if the player wants to play again
function askPlayAgain() {
    inquirer.prompt(
        [
            {
                name: "replay",
                type: "list",
                choices: ["Yes", "No"],
                message: "DO YOU WANT TO PLAY AGAIN?"
            }
        ]
    ).then(function(data) {
        if (data.replay === "Yes") {
            startGame();
        }
    })
};



startGame();