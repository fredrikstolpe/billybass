var express = require('express');
var router = express.Router();
var validate = require('express-validation');
var validation = require('../validation/');
var flitetts = require('../modules/flitetts.js');
var billymoves = require('../modules/billymoves.js');

router.get('/say', validate(validation.api.say.get), function(req, res, next) {
  flitetts.say(req.query.phrase)
  .then(
    function (result){
      res.json({
        success: true,
        result: req.params.action
      });
    },
    function (err){
      res.json({
        success: false
      });
    }
  );
});

router.get('/neck/:action', validate(validation.api.neck.get), function(req, res, next) {
  if (req.params.action == 'up'){
    billymoves.neck.up();
  }
  else{
    billymoves.neck.down();
  }
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