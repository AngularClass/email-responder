'use strict';


global._ = require('lodash');
global.$handleError = function(message, error){};

global.$config = require('./env');

if ($config.logging) {
  global.$log = console;
}


function noop(){};
