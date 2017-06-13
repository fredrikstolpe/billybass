var express = require('express');
var router = express.Router();
var validate = require('express-validation');
var validation = require('../validation/');
var Pin = require('../modules/pin.js');

var tailPin = new Pin(19);
tailPin.setupOutput();

var neckPin = new Pin(21);
neckPin.setupOutput();

var mouthPin = new Pin(23);
mouthPin.setupOutput();

router.get('/neck/:action', validate(validation.api.neck.get), function(req, res, next) {
  neckPin.write(req.params.action == 'up');
  res.json({
    success: true,
    result: req.params.action
  });
});

router.get('/mouth/:action', validate(validation.api.mouth.get), function(req, res, next) {
  mouthPin.write(req.params.action == 'open');
  res.json({
    success: true,
    result: req.params.action
  });
});

router.get('/tail/:action', validate(validation.api.tail.get), function(req, res, next) {
  tailPin.write(req.params.action == 'up');
  res.json({
    success: true,
    result: req.params.action
  });
});

module.exports = router;