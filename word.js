var Letter = require('./letter.js');

var Word = function(wrd) {
    this.wrdSplit = wrd.split("");
    this.ltrArray = [];

    // Use Letter constructor to make an array of Letter objects
    this.makeLtrArray = function() {
        for (i=0; i < this.wrdSplit.length; i++) {
            var ltrObject = new Letter(this.wrdSplit[i]);
            this.ltrArray.push(ltrObject);
        };
    };

    // Use function in each letter object to display letter or blank
    this.makeDisplayWrd = function() {
        this.displayWrdArray = [];
        for (i=0; i < this.ltrArray.length; i++) {
            var ltrDisplay = this.ltrArray[i].ltrDisplay();
            this.displayWrdArray.push(ltrDisplay);
        };
        // Should this be changed to return?
        console.log(this.displayWrdArray.join(" "));
    };

    this.checkGuess = function(guess) {
        for (i=0; i < this.ltrArray.length; i++) {
            this.ltrArray[i].ltrCheck(guess);
        };
    };
};


// TESTING: this all works!!!!!!!
// Create new word object, call make letter array, call make display word
wrd = "hedgehog";
var test = new Word(wrd);
test.makeLtrArray();
test.makeDisplayWrd();

// make a guess, run check guess, run make display word
var guess = "h";
test.checkGuess(guess);
test.makeDisplayWrd();

// make a guess, run check guess, run make display word
var guess = "e";
test.checkGuess(guess);
test.makeDisplayWrd();
