const dbconfig = require('../../util/dbconfig');

getUser = (req,res)=>{
    const sql = "select * from  cate";
    const sqlArr = [];
    const callBack = (err,data)=>{
      if(err){
        console.log('连接出错了');
      }else{
        res.send({
          'list':data
        })
      }
    }
    dbconfig.sqlConnect(sql,sqlArr,callBack)
}
getJS=(req,res)=>{
  let {id} = req.query;
  const sql = 'select * from post where cate_id=?';
  const sqlArr = [id];
  const callback = (err,data) =>{
    if(err) {
      console.log('连接出错了');
    }else{
      res.send({
        'list': data
      })
    }
  }
  dbconfig.sqlConnect(sql,sqlArr,callback)
}
module.exports = {
  getUser,getJS
}