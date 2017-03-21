////seperate a standard token as a dividend token.
var Contract=require("../../contract.js")
var tokenManager=new Contract("TokenManager","TokenManagerData")

var privateKey=new Buffer("f6b94a42c26a5cbbb918285612d6678d45120a3e26c8db1ca551726a4f81c98b",'hex'); //set subkey
tokenManager.at()

var proxy=Contract.getAddress("DividendTokenProxy")
var toDividendTokenAddress="0xd4d1ebabaabb5204f48cec72962d8b6a291d01b9"
tokenManager.changeTokenProxy([toDividendTokenAddress,proxy],privateKey).then(function(receipt,err){
    console.log(receipt)
})