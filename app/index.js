var express = require('express');
var router = express.Router();

router.use('', require('./v1/routes/store'));
router.use('', require('./v1/routes/user'));
router.use('', require('./v1/routes/provider'));
router.use('', require('./v1/routes/admin'));
//router.use('/v2', require('./v2'));
 
module.exports = router;