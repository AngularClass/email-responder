var express = require('express'),
    router  = express.Router(),
    ngClassCtrl = require('./controller');

router.route('/')
.all(ngClassCtrl.all)
.get(ngClassCtrl.get)
.post(ngClassCtrl.post);

module.exports = router;
