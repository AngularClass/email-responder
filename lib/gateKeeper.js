var compose = require('composable-middleware');

module.exports = function(){
  return compose()
    .use(function(req, res, next){
      if (!$whiteList[req.hostname]) {
        return res.status(403).send();
      }
      next();
    });
};
