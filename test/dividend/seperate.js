//todo cannot use
var Contract=require("../../contract.js")
var tokenManager=new Contract("TokenManager","TokenManagerData")

var privateKey=new Buffer("f6b94a42c26a5cbbb918285612d6678d45120a3e26c8db1ca551726a4f81c98b",'hex'); //set subkey
tokenManager.at()

var proxy=Contract.getAddress("DividendTokenProxy")
tokenManager.changeTokenProxy(["0x34da1dbd6df014a367e05d5793c3da578d5ff842",proxy],privateKey).then(function(receipt,err){
    console.log(receipt)
})