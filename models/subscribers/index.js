var mongoose = require('mongoose'),
    schema = mongoose.Schema;


var SubscriberSchema = new schema({

  email: {
    type: String,
    required: true
  },

  name: String,

  // what site ex: angular class
  origin: String,

  // what event ex: subscribe
  event: String
});

module.exports = mongoose.model('subscriber', SubscriberSchema);
