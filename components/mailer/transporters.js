var create = require('nodemailer').createTransport;
var transporters = module.exports = {};

transporters.gmail = create({
  service: 'gmail',
  auth: {
    user: $config.secrets.emailFrom,
    pass: $config.secrets.emailPassword
  }
});
