Raspberry pi B rev 2
pin configuration
____________ ___
          1 |o o|
            |o o|
            |o o|
            |o o|
    GND ->  |o o|
            |o o|
            |o o|
 15 BTN ->  |o o|
            |o o|
 19 TAIL -> |o o|
 21 NECK -> |o o|
23 MOUTH -> |o o|
     GND -> |o o|
             ---|
                |
                |

## Todo

* Button pin

* Remove webservice, make soundtrig instead

var SoundTrig = require('./lib/soundtrig.js');

var soundTrig = new SoundTrig({});
soundTrig.start();

soundTrig.on('soundStart', function() {
  console.log('soundStart');
});

soundTrig.on('soundStop', function() {
  console.log('soundStop');
});

soundTrig.on('error', function() {
  console.log('error');
});