const dbconfig = require("../../util/dbconfig");
function rand(min, max) {
  // 返回一个四位的数
  return Math.floor(Math.random() * (max - min)) + min;
}
validatePhoneCode = [];


// 是否发送过验证码
let sendCOde = phone =>{
  for(let item of validatePhoneCode){
    if(phone == item.phone){
      return true
    }
  }
  return false
}

let findCodeAndPhone = (phone,code)=>{
  for(var item of validatePhoneCode){
    if(phone==item.phone&&code==item.code){
      return 'login'
    }
  }
  return 'error'
}

Code = (req, res) => {
  let {phone} = req.query;
  // return 后  后面的语句就不执行了
  if(sendCOde(phone)){
    res.send({
      'code':400,
      'msg':'已经发送给验证码，请稍后再发'
    })
    return
  }
  let code = rand(1000, 9999);
  validatePhoneCode.push({
    'phone':phone,
    'code':code
  })
  console.log(validatePhoneCode);
  res.send({
    code: 200,
    msg: "发送成功",
  });
  console.log(code);
};
codePhoneLogin = (req,res)=>{
  let {phone,code} = req.query;
  if(sendCOde(phone)){
    let status = findCodeAndPhone(phone,code);
    if(status == 'login'){
      res.send({
        'code':200,
        'msg':'登陆成功'
      })
    }
    else{
      res.send({
        'code':200,
        'msg':'登陆失败'
      })
    }
  }
}
module.exports = {
  Code,codePhoneLogin
};
