const express = require('express');
const router = express.Router();
const user = require('../get/getUser');

// get请求
router.get('/', user.getUser);
router.get('/getJS',user.getJS)

module.exports = router;
