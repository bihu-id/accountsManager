////seperate a standard token as a dividend token.
var Contract=require("../../contract.js")
var tokenManager=new Contract("TokenManager","TokenManagerData")

var privateKey=new Buffer("f6b94a42c26a5cbbb918285612d6678d45120a3e26c8db1ca551726a4f81c98b",'hex'); //set subkey
tokenManager.at()

var proxy=Contract.getAddress("DividendTokenProxy")
var toDividendTokenAddress="0x87b80a7b0cf1523f33e3c7b08e0bc51ffef0f885"
tokenManager.changeTokenProxy([toDividendTokenAddress,proxy],privateKey).then(function(receipt,err){
    console.log(receipt)
})