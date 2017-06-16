var exec = require('child-process-promise').exec;
var q = require("q");

//sudo apt-get install flite
module.exports = {
  say : function(phrase){
    var deferred = q.defer();
    exec('flite -voice slt -t "' + phrase + '"')
    .then(function (result) {
      deferred.resolve(result.stdout);
    })
    .catch(function (err) {
      deferred.reject(err);
    });
    return deferred.promise;
  }
}