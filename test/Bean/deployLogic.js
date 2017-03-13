var Contract=require("../../contract.js")
var getRpcStr=require("./../../getRpcServe.js")
var ethUtil = require('ethereumjs-util');

var LogicProxy=new contract("LogicProxy","BeanProxy",8000)
LogicProxy.deploy(privateKey).then(function(proxy,err){

    LogicProxy.save()
    
})


