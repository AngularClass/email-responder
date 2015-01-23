// Testing config for server (config/env/testing.js)
// -----------------------------------------------
'use strict';

module.exports = {
  // different database for testing
  mongo: {
    uri: 'mongodb://localhost/responder-test'
  }
};
