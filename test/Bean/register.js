var Contract=require("../../contract.js")
var getRpcStr=require("./../../getRpcServe.js")
var ethUtil = require('ethereumjs-util');

var Bean=new Contract("Bean","BeanLogic",6000)
console.log(Bean.addressKey)
var privateKey=new Buffer("7326418279111ef3276318ee6dd12cd25a4b343bfab466eacc2def2197e24ade",'hex');
var issuer="0x"+ethUtil.privateToAddress(privateKey).toString('hex')
var symbol="DOU1"

var TokenManager =new Contract("TokenManager","TokenManagerData",8000)
TokenManager.at();
var dataAddress=Contract.address('BeanData')

Bean.at('BeanData')
console.log(Bean.address)
Bean.init([issuer,symbol,0,20000000000,2,0,0,"测试分红豆","0xabcdf",TokenManager.address],privateKey).then(function(receipt,err){

    console.log(receipt)
    TokenManager.registerToken([symbol, dataAddress ],privateKey).then(function(receipt,err){
        console.log(receipt)
    })
 })