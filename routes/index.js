const express = require('express');
const router = express.Router();
const user = require('../get/getUser');
const dbconfig = require('../util/dbconfig');


// get请求
router.get('/', user.getUser);
router.get('/select',(req,res)=>{
    const sql = 'select * from cate';
    const sqlArr = [];
    const callBack = (err,data)=>{
        if(err){
          res.send({
              'err':err,
              'msg':'查询失败'
          })
          console.log('查询失败');
        }else{
          res.send({
            'list':data,
            'msg':'查询成功'
          })
          console.log('查询成功');
        }
      }
    dbconfig.sqlConnect(sql,sqlArr,callBack)
})
router.post('/add',(req,res)=>{
    let sql = 'insert into cate set category=?,status=?';
    let sqlArr = [req.query.category,req.query.status];
    const callBack = (err,data)=>{
        if(err){
          res.send({
              'code':200,
              'msg':'新增数据失败'
          })
          console.log('新增数据失败');
        }else{
          res.send({
            'code':400,
            'msg':'新增数据成功'
          })
          console.log('新增数据成功');
        }
      }
      dbconfig.sqlConnect(sql,sqlArr,callBack)
})
router.put('/update',(req,res)=>{
    let sql = 'update cate set category=?,status=? where id=?';
    let sqlArr = [req.query.category,req.query.status,req.query.id];
    const callBack = (err,data)=>{
        if(err){
          res.send({
            'code':200,
            'msg':'更改数据失败'
          })
          console.log('更改数据失败');
        }else{
          res.send({
            'code':400,
            'msg':'更改数据成功'
          })
          console.log('更改数据成功');
        }
      }
      dbconfig.sqlConnect(sql,sqlArr,callBack)
})
router.delete('/delete',(req,res)=>{
    let sql = 'delete from cate  where id=?';
    let sqlArr = [req.query.id];
    const callBack = (err,data)=>{
        if(err){
          res.send({
            'code':200,
            'msg':'删除数据失败'
          })
          console.log('删除数据失败');
        }else{
          res.send({
            'code':400,
            'msg':'删除数据成功'
          })
          console.log('删除数据成功');
        }
      }
      dbconfig.sqlConnect(sql,sqlArr,callBack)
})
router.get('/getJS',user.getJS)

module.exports = router;
