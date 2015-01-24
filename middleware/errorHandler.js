var compose = require('composable-middleware');

var logTags = {
  'SyntaxError': '',
  'RangeError': '',
  'ReferenceError': ''
};

module.exports = function(){
  return compose()
    .use(function(err, req, res, next){
      $log.error(err.stack);
      res.status(500).send(logTags[err.name]);
    });
};
