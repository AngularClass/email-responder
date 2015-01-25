var express     = require('express'),
    router      = express.Router(),
    ngClassCtrl = require('./controller'),
    lib         = require('../../middleware');

router.use(lib.checkEmail());
router.route('/')
.all(ngClassCtrl.all)
.get(ngClassCtrl.get)
.post(ngClassCtrl.post);

module.exports = router;
