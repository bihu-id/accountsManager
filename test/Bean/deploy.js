var Contract=require("../../contract.js")
var getRpcStr=require("./../../getRpcServe.js")
var ethUtil = require('ethereumjs-util');

var Bean=new Contract("Bean","BeanLogic",6000)
console.log(Bean.addressKey)
var privateKey=new Buffer("7326418279111ef3276318ee6dd12cd25a4b343bfab466eacc2def2197e24ade",'hex');
var issuer="0x"+ethUtil.privateToAddress(privateKey).toString('hex')
var symbol="DOU"
Bean.deploy(privateKey).then(function(beanLogic,err){
    //console.log(Bean)
    Bean.save()
    //console.log(Bean)
    var proxyAddress=Contract.address("BeanProxy")

    var Data=new Contract("Data","BeanData",8000)

    Data.deploy(privateKey,[proxyAddress]).then(function(BeanData,err){
        Data.save()
        Bean.at(BeanData.address)
        console.log("init Bean")
        //setFun
        /*Bean.init([issuer,"DOU",0,20000000000,2,0,0,"测试分红豆","0xabcdf",TokenManager.address],privateKey).then(function(receipt,err){

            TokenManager.registerToken([symbol, BeanData.address ],privateKey).then(function(receipt,err){
                console.log(receipt)
            })
        })*/

    })


})
