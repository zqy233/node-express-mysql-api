var express = require('express');
const dbconfig = require('../util/dbconfig');
var router = express.Router();

// get请求
router.get('/', (req, res, next) =>{
  var sql = "select * from  cate";
  var sqlArr = [];
  var callBack = (err,data)=>{
    if(err){
      console.log('连接出错了');
    }else{
      res.send({
        'list':data
      })
    }
  }
  dbconfig.sqlConnect(sql,sqlArr,callBack)
});

module.exports = router;
