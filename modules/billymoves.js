var Pin = require('./pin.js');

var tailPin = new Pin(19);
tailPin.setupOutput();

var neckPin = new Pin(21);
neckPin.setupOutput();

var mouthPin = new Pin(23);
mouthPin.setupOutput();

module.exports = {
    neck : {
        up : function(){
            neckPin.write(true);
        },
        down : function(){
            neckPin.write(false);
        }
    },
    tail : {
        up : function(){
            tailPin.write(true);
        },
        down : function(){
            tailPin.write(false);
        }
    },
    mouth : {
        open : function(){
            tailPin.write(true);
        },
        close : function(){
            tailPin.write(false);
        }
    }
}