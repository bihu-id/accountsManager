var Contract=require("../../contract.js")
var ethUtil = require('ethereumjs-util');
var privateKey=new Buffer("7326418279111ef3276318ee6dd12cd25a4b343bfab466eacc2def2197e24ade",'hex');

var proxyAddress=Contract.getAddress("BeanProxy")
var Bean=new Contract("Bean","BeanLogic",6000)
var Data=new Contract("Data","BeanData",6000)
var issuer="0x"+ethUtil.privateToAddress(privateKey).toString('hex')
var symbol="DOU20"
var TokenManager =new Contract("TokenManager","TokenManagerData",6000)
TokenManager.at();
console.log("deploy BeanData with Proxy :" ,proxyAddress)
console.log(Contract.getAddress("TokenManagerData"))
Data.deploy(privateKey,[proxyAddress]).then(function(BeanData,err){
    Data.save()
    console.log("BeanData:",BeanData.address)
    Bean.setAddress(BeanData.address)
    Bean.initBean([issuer,symbol,0,20000000000000,2,100,0,"测试分红豆","0xabcdf",Contract.getAddress("TokenManagerData"),"0x34da1dbd6df014a367e05d5793c3da578d5ff842"],privateKey).then(function(receipt,err){

        console.log("Bean.init:",receipt)
        TokenManager.registerToken([symbol,BeanData.address ],privateKey).then(function(receipt,err){
         console.log(receipt)
         })
    })
})