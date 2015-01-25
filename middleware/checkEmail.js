var compose = require('composable-middleware');
var Subscriber = require('../models/subscribers');

module.exports = function(){
  return compose()
    .use(function(req, res, next){
      var email = req.body.email || req.query.email;

      Subscriber.findOne({ email: email }, function(err, subscriber) {
        if (err) return next(err);
        if (subscriber) {
          return res.status(400).send({ error: 'Email taken' });
        }
        next();
      });
    });
};
