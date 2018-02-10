var Letter = require('./letter.js');

var Word = function(word) {
    this.wordSplit = word.split("");
    this.ltrArray = [];

    // Use Letter constructor to make an array of Letter objects
    this.makeLtrArray = function() {
        for (i=0; i < this.wordSplit.length; i++) {
            var ltrObject = new Letter(this.wordSplit[i]);
            this.ltrArray.push(ltrObject);
        };
    };

    // Use function in each letter object to display letter or blank
    this.makeDisplayWord = function() {
        this.displayWordArray = [];
        for (i=0; i < this.ltrArray.length; i++) {
            var ltrDisplay = this.ltrArray[i].ltrDisplay();
            this.displayWordArray.push(ltrDisplay);
        };
        console.log(this.displayWordArray.join(" ") + "\n");
    };

    // Check the user's guess in each letter object of array
    this.checkGuess = function(guess) {
        for (i=0; i < this.ltrArray.length; i++) {
            this.ltrArray[i].ltrCheck(guess);
        };
    };

    // Check if the word is complete if every letter object has guessed true
    this.checkComplete = function() {
        if (this.ltrArray.every(function(ltrObj) {
            return ltrObj.guessed === true;
        })) {
            // console.log("\nYou got it!\n");
            return true;
        }
    }
};

module.exports = Word;
