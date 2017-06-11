var express = require('express');
var router = express.Router();
var validate = require('express-validation');
var validation = require('../validation/');

router.get('/neck/:action', validate(validation.api.neck.get), function(req, res, next) {
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
