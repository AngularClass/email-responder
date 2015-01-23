var express = require('express'),
    router  = express.Router();


router.use('/angularclass', require('./services/angularclass/routes'));
module.exports = router;
