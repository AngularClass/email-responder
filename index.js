var express   = require('express'),
    mongoose  = require('mongoose'),
    app       = express();

// init globals & config
require('./config/globals');

// connect to mongo
mongoose.connect($config.mongo.uri);

// setup server
require('./config/server')(app);


module.exports = app;
