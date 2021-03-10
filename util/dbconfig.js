const  mysql  = require('mysql')
// 导入mysql中间件
module.exports = {
    // mysql设置
    config:{
        host:'localhost',
        port:'3306',
        user:'root',
        password:'123456',
        database:'api'
    },
    // 写一个连接mysql的函数
     sqlConnect:function (sql,sqlArr,callback) {
        // 创建mysql连接池
        var pool = mysql.createPool(this.config)
        // 连接池开始连接
        pool.getConnection((err,conn)=>{
            console.log('开始连接');
            if(err){
                console.log('连接失败');
                return
            }
            conn.query(sql,sqlArr,callback);
            // 释放连接
            conn.release()
        })
    }
}