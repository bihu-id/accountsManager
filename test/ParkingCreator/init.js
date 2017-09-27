var Contract=require("../../contract.js")
var ethUtil = require('ethereumjs-util');

var privateKey=new Buffer("7326418279111ef3276318ee6dd12cd25a4b343bfab466eacc2def2197e24ade",'hex');

var address="0x"+ethUtil.privateToAddress(privateKey).toString('hex')
    
var creator=new Contract("ParkingCreator","ParkingCreatorData",5000)
console.log(Contract.getAddress("TokenManagerData"),Contract.getAddress("ParkingProxy"))
creator.init([address,address,address,address,Contract.getAddress("TokenManagerData"),Contract.getAddress("ParkingProxy")],privateKey).then(function(receipt,err){
    console.log(receipt)
})