const dbconfig = require("../../util/dbconfig");
let deletedata = (req,res)=>{
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
}
module.exports = {
    deletedata
  };