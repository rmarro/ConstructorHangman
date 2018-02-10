var Letter = function(ltr) {
    this.ltr = ltr;
    this.guessed = false;
    this.ltrDisplay = function() {
        if (this.guessed === true) {
            return ltr;
        } else {
            return "_";
        };
    };
    this.ltrCheck = function(guess) {
        if (this.ltr === guess) {
            this.guessed = true;
            return true;
        } else {
            return false;
        }
    };
};

module.exports = Letter;