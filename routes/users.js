var express = require('express');
var router = express.Router();
var path = require('path');
var app = express();
const sendCode = require('../get/getMes')
app.use(express.static(path.join(__dirname, 'images')))

/* GET users listing. */
router.post('/sendCode',sendCode.Code);
router.post('/codePhone',sendCode.codePhoneLogin)
module.exports = router;
