var Contract=require("../../contract.js")
var dividendToken=new Contract("DividendToken","DividendTokenData",6000)
dividendToken.at()

var executor=new Buffer("8b4070cb71853a283579b1cee99a54c09d4f29bb1d0659b6d16cd64f356d2d02",'hex')
no=6
dividendToken.endDividend([no],executor).then(function(receipt,err) {
    console.log(receipt)

})