'use strict';
var fs = require('fs');

global._ = require('lodash');
global.$handleError = function(message, error){};
global.$whiteList = JSON.parse(fs.readFileSync(__dirname + '/whitelist.json', 'utf-8'));

global.$config = require('./env');
global.$log = $config.logging ? console : noop;


function noop(){};
