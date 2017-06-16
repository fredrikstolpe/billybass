var tts = require('./tts.js');
var billymoves = require('./billymoves.js');

module.exports = {
    say : function(phrase){
        var words = phrase.split(" ");
        billymoves.neck.up();
        promises
        words.forEach(function(element) {
            tts.say(req.query.phrase);
        }, this);
        billymoves.neck.down();
    }
}