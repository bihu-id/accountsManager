var Contract=require("../../contract.js")
var ethUtil = require('ethereumjs-util');
var privateKey=new Buffer("1a3e6d52c9362dad35e1ad8890bf3984100e26655b4787d9f06143eacc630a09",'hex');
var addresses=require("./../addresses.js")
token =new Contract("Token","")
token.setAddress("0x34da1dbd6df014a367e05d5793c3da578d5ff842")
console.log(token.address)
var tos=[]
var amounts=[]
var totals=0
var keys=Object.keys(addresses)

for(var i=0;i<200;i++){
    token.balanceOf([keys[i]]).then(function(res,err){

        console.log("balance:",res.toString())
    })
}
