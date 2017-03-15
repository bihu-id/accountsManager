var Contract=require("../../contract.js")
var ethUtil = require('ethereumjs-util');
var privateKey=new Buffer("7326418279111ef3276318ee6dd12cd25a4b343bfab466eacc2def2197e24ade",'hex');
var addresses=require("./../addresses.js")

var proxyAddress=Contract.getAddress("BeanProxy")
var Bean=new Contract("Bean","BeanLogic",6000)

Bean.setAddress(Contract.getAddress("BeanData"))

var holders=[]
var amounts=[]
var totals=0
var keys=Object.keys(addresses)
for(var i=500;i<650;i++){
    holders.push(keys[i])
    var amount=i*100
    amounts.push(amount)
    totals+=amount
}
//console.log(holders,amounts )
Bean.transfers([holders,amounts,totals],privateKey,4600000).then(function(receipt,err){

    console.log(receipt)
    //console.log(holders)

    for(var i=0;i<holders.length;i++) {
        var holder=holders[i]
        //console.log(holder)
        Bean.balanceOf([holder]).then(function (res, err) {
            console.log(res.toString())
        })
    }
})
