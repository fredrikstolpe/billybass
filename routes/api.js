var express = require('express');
var router = express.Router();
var validate = require('express-validation');
var validation = require('../validation/');
var Pin = require('../modules/pin.js');

var neckPin = new Pin(19);
neckPin.setupOutput();
var pin2 = new Pin(11);
var pin3 = new Pin(21);

router.get('/neck/:action', validate(validation.api.neck.get), function(req, res, next) {
  neckPin.write(req.params.action == 'up');
  res.json({
    success: true,
    result: true
  });  
});

router.get('/mouth/:action', validate(validation.api.mouth.get), function(req, res, next) {
  res.json({
    success: true,
    result: true
  }); 
});

router.get('/tail/:action', validate(validation.api.tail.get), function(req, res, next) {
  res.json({
    success: true,
    result: true
  }); 
});

module.exports = router;
