var mongoose = require('mongoose'),
    schema = mongoose.Schema;


var SubscriberSchema = new schema({

  email: {
    type: String,
    required: true
  },

  name: String,

  list: String
});

module.exports = mongoose.model('subscriber', SubscriberSchema);
