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

    var subscriber = _.extend(req.body, {
      origin: template
    });
    // TODO: check to make sure email isnt in here
    // if not, save email then send email
    Subscriber.create(subscriber, function(err, doc){
      if (err) {
        return next(err);
      }

      var message = _.extend(doc, {
        template: template,
        meta: {
          email: doc.email,
          name: doc.name
        }
      });

      mailer.send(message).then(function(){
        res.send('ok');
      })
      .fail(function(err){
        next(err);
      });
    });


  }
};
