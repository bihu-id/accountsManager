var Contract=require("../../contract.js")
var ethUtil = require('ethereumjs-util');
var privateKey=new Buffer("1a3e6d52c9362dad35e1ad8890bf3984100e26655b4787d9f06143eacc630a09",'hex');
var addresses=require("./../addresses.js")
var Sleep=require("../../wallet/utils/sleep")

token =new Contract("Token","DividendTokenData")
token.at()
token.addAccountCall("0x724f255161a5ef4aaf458e37cd1f61fc24b9895a","transfer")
var tos=[]
var amounts=[]
var totals=0
var keys=Object.keys(addresses)

var nonce=web3.eth.getTransactionCount(ethUtil.privateToAddress(privateKey).toString('hex'));
console.log(nonce )

var sleep=new Sleep(1)
var i=0

sleep.loop(400,function(){
    token.call_transfer([keys[i],i+100],privateKey,300000,nonce+i,true).then(function(receipt,err){

        console.log(i)
    })
    if(i++>10)
        sleep.endLoop()

})

