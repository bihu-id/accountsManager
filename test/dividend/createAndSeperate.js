//todo cannot use
var Contract=require("../../contract.js")
var dividendToken=new Contract("Data","DividendTokenData")
var privateKey=new Buffer("7326418279111ef3276318ee6dd12cd25a4b343bfab466eacc2def2197e24ade",'hex');

dividendToken.deploy(privateKey,[Contract.getAddress("DividendTokenLogic")]).then(function(dividend,err){
    dividendToken.save()
    privateKey=new Buffer("f6b94a42c26a5cbbb918285612d6678d45120a3e26c8db1ca551726a4f81c98b",'hex'); //set subkey
    var tokenManager=new Contract("TokenManager","TokenManagerData")
    tokenManager.at()
    var proxy=Contract.getAddress("DividendTokenProxy")
    console.log("change %s proxy to %s ",dividend.address,proxy)
    tokenManager.changeTokenProxy([dividend.address,proxy],privateKey).then(function(receipt,err){
        console.log(receipt)
    })
})

