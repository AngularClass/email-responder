var Subscriber = require('../../models/subscribers');

module.exports = {
  all: function(req, res, next){
    next();
  },
  get: function(req, res, next){
    res.send('angularclass');
  },
  post: function(req, res, next){
    var email = req.body.email;
    $log.log(email);
    res.send(email);
  }
};
