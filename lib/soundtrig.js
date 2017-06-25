var spawn = require('child_process').spawn;
var EventEmitter = require('events').EventEmitter;
var util = require('util');
/* 
options: { threshold : '0.2' }

Events: soundStart, soundStop, error

sudo apt-get install sox
aplay -l
sudo nano /usr/share/alsa/alsa.conf
defaults.ctl.card 1 (for example)
defaults.pcm.card 1
*/
var SoundTrig = function SoundTrig(options){

  EventEmitter.call(this);

  this.recRunning = false;
  this.cmd = "sox";
  this.cmdArgs = [
    '-q',
    '-b','16',
    '-d','-t','flac','-',
    'rate','16000','channels','1',
    'silence','1','0.01',(options.threshold || '0.2')+'%','1','0.01',(options.threshold || '0.2')+'%'
  ];
};

util.inherits(SoundTrig, EventEmitter);
module.exports = SoundTrig;

SoundTrig.prototype.start = function(){
  console.log('start');
  this.detectSound();
}

SoundTrig.prototype.detectSound = function(){

  var self = this;

  var cmd = spawn(self.cmd, self.cmdArgs, {stdin: 'pipe'});

  cmd.stdout.setEncoding('binary');
  cmd.stdout.on('data', function(data) {
    if(!self.recRunning) {
      self.emit('soundStart');
      self.recRunning = true;
    }
  });

  cmd.stderr.setEncoding('utf8');
  cmd.stderr.on('data', function(data) {
    console.log(data)
  });

  cmd.on('close', function(code) {
    self.recRunning = false;
    if(code) {
      self.emit('error', 'sox exited with code ' + code);
    }
    self.emit('soundStop');
    self.detectSound();
  });
};