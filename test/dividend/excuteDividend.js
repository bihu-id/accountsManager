var Contract=require("../../contract.js")
var dividendToken=new Contract("DividendToken","DividendTokenData",6000)
dividendToken.at()
var executor=new Buffer("8b4070cb71853a283579b1cee99a54c09d4f29bb1d0659b6d16cd64f356d2d02",'hex')

var addresses=require("./../addresses.js")
var keys=Object.keys(addresses)
var holders=[]
for(var i=0;i<11;i++)
    holders.push(keys[i])
var no=2
dividendToken.startDividend([no],executor).then(function(receipt,err){

    dividendToken.executeDividend([no,holders],executor,4800000).then(function(receipt,err){
        console.log(receipt)
        dou =new Contract("Bean","BeanData")
        dou.at()
        var keys=Object.keys(addresses)

        for(var i=0;i<10;i++){
            dou.balanceOf([keys[i]]).then(function(res,err){

                console.log("balance:",res.toString())
            })
        }
    })
})

