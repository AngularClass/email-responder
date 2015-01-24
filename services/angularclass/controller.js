var Subscriber = require('../../models/subscribers');
var mailer = require('../../components').mailer;
var template = 'angularclass';

module.exports = {
  all: function(req, res, next){
    next();
  },
  get: function(req, res, next){
    res.send('angularclass');
  },
  post: function(req, res, next){
    var email = req.body.email;
    var message = {
      template: template,
      event: req.body.event,
      email: email,
      meta: req.body
    };

    mailer.send(message).then(function(){
      res.send('ok');
    })
    .fail(function(err){
      $log.error(err);
    });
  }
};
