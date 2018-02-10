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
        // Should this be changed to return?
        console.log(this.displayWordArray.join(" "));
        console.log("");
    };

    this.checkGuess = function(guess) {
        for (i=0; i < this.ltrArray.length; i++) {
            this.ltrArray[i].ltrCheck(guess);
        };
    };
};

module.exports = Word;

// TESTING: this all works!!!!!!!
// Create new word object, call make letter array, call make display word
// wrd = "hedgehog";
// var test = new Word(word);
// test.makeLtrArray();
// test.makeDisplayWord();

// make a guess, run check guess, run make display word
// var guess = "h";
// test.checkGuess(guess);
// test.makeDisplayWord();

// make a guess, run check guess, run make display word
// var guess = "e";
// test.checkGuess(guess);
// test.makeDisplayWord();
