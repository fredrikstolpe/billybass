module.exports = function(err, req, res, next) {
  console.log(err);
    
  res.status(err.status || 500);

  res.json({
    success: false,
    message: err,
    result: null
  });
};