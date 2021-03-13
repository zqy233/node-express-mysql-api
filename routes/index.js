const express = require('express');
const router = express.Router();
const user = require('../api/get/getUser');

const dbconfig = require('../util/dbconfig');

const deletedata = require('../api/delete/delete')

// get请求
router.get('/', user.getUser);
router.get('/select',(req,res)=>{
    const sql = 'select * from  family';
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
            data,
          })
          console.log('查询成功');
        }
      }
    dbconfig.sqlConnect(sql,sqlArr,callBack)
})
router.post('/add',(req,res)=>{
    // let sql = `INSERT INTO family (name, relaphone, mem_corp, mem_job, profession, mem_birthday, relaaddr, pk_psndoc_sub) VALUES ('亲戚', '18105169999', '用友', '工程师', '去月球', '2021-03-12', '故宫', '0001A110000000008P9Y');`;
    let sql = `INSERT INTO family set name=?, relaphone=?, mem_name=?`
    // , mem_job=?, profession=?, mem_birthday=?, relaaddr=?, pk_psndoc_sub=?;
    // let sqlArr = [req.query.category,req.query.status];
    let sqlArr = [req.body.mem_name,req.body.name,req.body.relaphone];
      // , req.query.mem_job, req.query.profession, req.query.mem_birthday, req.query.relaaddr, req.query.pk_psndoc_sub];
    console.log(sqlArr);
    console.log(req.query);
    const callBack = (err,data)=>{
        if(err){
          res.send({
              'code':200,
              'msg':'新增数据失败',
              'err':err
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
router.delete('/delete',deletedata.deletedata)
// router.delete('/delete',(req,res)=>{
//     let sql = 'delete from cate  where id=?';
//     let sqlArr = [req.query.id];
//     const callBack = (err,data)=>{
//         if(err){
//           res.send({
//             'code':200,
//             'msg':'删除数据失败'
//           })
//           console.log('删除数据失败');
//         }else{
//           res.send({
//             'code':400,
//             'msg':'删除数据成功'
//           })
//           console.log('删除数据成功');
//         }
//       }
//       dbconfig.sqlConnect(sql,sqlArr,callBack)
// })
router.get('/getJS',user.getJS)

module.exports = router;
