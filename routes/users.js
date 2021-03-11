var express = require('express');
var router = express.Router();
const sendCode = require('../get/getMes')

/* GET users listing. */
router.post('/sendCode',sendCode.Code);
router.post('/codePhone',sendCode.codePhoneLogin)
module.exports = router;
