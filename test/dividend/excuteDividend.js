var Contract=require("../../contract.js")
var dividendToken=new Contract("DividendToken","DividendTokenData",6000)
dividendToken.at()
var dou=new Contract("Bean","BeanData")
dou.at()
var executor=new Buffer("8b4070cb71853a283579b1cee99a54c09d4f29bb1d0659b6d16cd64f356d2d02",'hex')

var addresses=require("./../addresses.js")

var Sleep= require("../../anduiWallet/utils/sleep.js")

var keys=Object.keys(addresses)
var holders=[]
for(var i=0;i<15;i++)
    holders.push(keys[i])
var no=6
var balancesBean={}
var balancesToken={}

var sleep= new Sleep(1)

sleep.go(function() {
    var j=0
    for(var i=0;i<10;i++){
        dou.balanceOf([keys[i]]).then(function(res,err){

            balancesBean[keys[j++]]=parseInt(res[0].toString(),10)
            console.log(keys[j],res[0].toString())
        })

    }
},1)

sleep.go(function() {
    var j=0
    for (var i = 0; i < 10; i++) {
        dividendToken.balanceOf([keys[i]]).then(function (res, err) {

            balancesToken[keys[j++]] =parseInt(res[0].toString(),10)
            console.log(keys[j],res[0].toString())
        })
    }
},10000)


sleep.go(function() {
    console.log("balancesBean:\n",balancesBean)
    console.log("balancesToken:\n",balancesToken)
    var days;
    var amounts;
    dividendToken.m_dividendHistory([no]).then(function(res,err){
        days=parseInt(res[2].toString(),10)
        amounts=parseInt(res[3].toString(),10)
        var shouldDivs={}
        var keys=Object.keys(balancesToken)
        for(var i=0;i<keys.length;i++){
            var address=keys[i]
            shouldDivs[address]=balancesToken[address]*(amounts/days/10000)+balancesBean[address]
        }
        console.log("shouldDivs:\n",shouldDivs)

        dividendToken.startDividend([no],executor).then(function(receipt,err){
            console.log(receipt)
            dividendToken.executeDividend([no,holders],executor,4800000).then(function(receipt,err){
                console.log(receipt)
                keys.forEach(function(address){
                    dou.balanceOf([address]).then(function(res,err){

                        console.log(address,res.toString())
                    })
                })
            })
        })

    })
},10000)
