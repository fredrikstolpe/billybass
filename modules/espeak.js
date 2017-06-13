var exec = require('child-process-promise').exec;
var q = require("q");

module.exports = {
  say : function(phrase){
    var deferred = q.defer();
    exec('espeak -a 200 -vaf+m4 -p 70 -s 140 "' + phrase + '"')
    .then(function (result) {
      deferred.resolve(result.stdout);
    })
    .catch(function (err) {
      deferred.reject(err);
    });
    return deferred.promise;
  }
}
