'use strict';
var fs = require('fs');

global._ = require('lodash');

global.$handleError = function(message, error){};

global.$config = require('./env');

global.$whiteList = JSON.parse(fs.readFileSync(__dirname + '/whitelist.json', 'utf-8'));

// whitelist locahost in dev env
if ($config.env === 'development') {
  $whiteList.localhost = true;
}
global.$log = $config.logging ? console : noop;


function noop(){};
