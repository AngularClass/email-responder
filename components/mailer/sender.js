'use strict';

// var nodemailer = require('nodemailer');
var q = require('q');
var templates = require('./templates');
var senders = require('./transporters');

// add angular interpolators instead
_.templateSettings.interpolate = /{{([\s\S]+?)}}/g;

var outbox = module.exports = {};

outbox.send = function(message){
  var future = q.defer();
  var sender = senders[message.sender || 'gmail'];

  message = parseMessage(message);

  sender.sendMail({
    from: $config.secrets.from,
    to: message.email,
    subject: message.subject,
    html: message.body
  }, function(err, info){
    if (err) {
      return future.reject(err);
    }
    future.resolve(info);
  });

  return future.promise;
};

outbox.sendBulk = function(messages){
  _.map(messages, function(message){
    return parseMessage(message);
  });
  var future = q.defer();
  return future.promise;
};


function parseMessage(message){
  message.body = _.template(templates[message.template][message.event +'Body'], message.meta);
  message.subject = _.template(templates[message.template][message.event + 'Subject'], message.meta);
  return message;
}
