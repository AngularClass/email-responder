var fs = require('fs');
var path = require('path');

var templates = module.exports = {};

templates.angularclass = {
  subscribeBody: fs.readFileSync(path.join(__dirname, 'ngClass_subscribe.html'), 'utf-8'),
  subscribeSubject: 'Get ready to be a ng-enius {{ name }}'
};
