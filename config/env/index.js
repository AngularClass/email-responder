// Default config for server (config/env/index.js)
// -----------------------------------------------
// WIll be overwritten and or extended dependent on whatever the **NODE_ENV** is

'use strict';

// If in dev mode, set secrets for local
if (process.env.NODE_ENV === 'development') {
  var secrets;
  try {
    secrets = require('../_secrets');
  } catch(e){
    $handleError('You have to include a _secrets file if in development env', e);
  }

  _.forEach(secrets, function(val, name){
    process.env[name] = val;
  });
}

var all = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || '8080',
  secrets: {
    emailPassword: process.env.EMAIL_PASSWORD,
    emailFrom: process.env.FROM
  },
  mongo: {
    options: {
      db: {
        safe: true
      }
    }
  }
};

module.exports = _.merge(all, require('./' + all.env) || {});
