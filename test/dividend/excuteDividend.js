var Contract=require("../../contract.js")
var dividendToken=new Contract("DividendToken","DividendTokenData",6000)
dividendToken.setAddress("0x34da1dbd6df014a367e05d5793c3da578d5ff842")
var executor=new Buffer("8b4070cb71853a283579b1cee99a54c09d4f29bb1d0659b6d16cd64f356d2d02",'hex')

var addresses=require("./../addresses.js")
var keys=Object.keys(addresses)
var holders=[]
for(var i=0;i<35;i++)
    holders.push(keys[i])
var no=9
dividendToken.startDividend([no],executor).then(function(receipt,err){
    console.log(receipt)
    dividendToken.executeDividend([no,holders],executor,4800000).then(function(receipt,err){
        console.log(receipt)
    })
})
