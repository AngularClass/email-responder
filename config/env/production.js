// Production config for server (config/env/production.js)
// -----------------------------------------------
'use strict';

module.exports = {
  // **ip** duh
  ip: process.env.IP || undefined,

  // **port** default port to 8080
  port: process.env.PORT || 8080,

  // **mongo** setup the mongodb url
  mongo: {
    uri: process.env.MONGO_URL ||
         process.env.MONGOLAB_URI ||
         process.env.MONGOHQ_URL ||
         'mongodb://localhost/responder'
  }
};
