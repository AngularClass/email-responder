var gateKeeper = require('./gateKeeper');
var errorHandler = require('./errorHandler');
var checkEmail = require('./checkEmail');

module.exports = {
  gateKeeper: gateKeeper,
  errorHandler: errorHandler,
  checkEmail: checkEmail
};
