var express = require('express');
var router = express.Router();

router.use(function(req, res, next) {
  console.log('got image');
  next();
});

router.use(express.static(__dirname + '../images'));

module.exports = router;

