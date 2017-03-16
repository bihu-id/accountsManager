//todo cannot use
var Contract=require("../../contract.js")
var tokenManager=new Contract("TokenManager","TokenManagerData")

var privateKey=new Buffer("f6b94a42c26a5cbbb918285612d6678d45120a3e26c8db1ca551726a4f81c98b",'hex'); //set subkey
tokenManager.at()

var proxy=Contract.getAddress("DividendTokenProxy")
var tokenAddress="0x3be17f3896e7bf24f5b28e9c257de45fb4a892cf"
tokenManager.changeTokenProxy([tokenAddress,proxy],privateKey).then(function(receipt,err){
    console.log(receipt)
})