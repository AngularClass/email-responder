var express   = require('express'),
    mongoose  = require('mongoose'),
    app       = express();

// init globals & config
require('./config/globals');

process.env.NODE_ENV =  process.env.NODE_ENV || 'development';

// connect to mongo
console.log($config.mongo.uri)
mongoose.connect($config.mongo.uri);

// setup server
require('./config/server')(app);

app.listen($config.port);
$log.log('listening on port ' + $config.port);

module.exports = app;
