var Contract=require("../../contract.js")
var  SolidityEvent = require("web3/lib/web3/event.js");
var abls=require("../../anduiwallet/config/abls.js")
var dividendToken=new Contract("DividendToken","DividendTokenData",6000)
dividendToken.at()
var dou=new Contract("Bean","BeanData")
dou.at()
var executor=new Buffer("8b4070cb71853a283579b1cee99a54c09d4f29bb1d0659b6d16cd64f356d2d02",'hex')

var issuerPrivateKey=new Buffer("1a3e6d52c9362dad35e1ad8890bf3984100e26655b4787d9f06143eacc630a09",'hex')

var addresses=require("./../addresses.js")

var Sleep= require("../../anduiWallet/utils/sleep.js")

var keys=Object.keys(addresses)
var issuer="0x724f255161a5ef4aaf458e37cd1f61fc24b9895a"

var holders=[]
for(var i=0;i<15;i++)
    holders.push(keys[i])
holders.push(issuer)

console.log(holders)
var no=20
var balancesBean={}
var balancesToken={}

var sleep= new Sleep(1)

sleep.go(function() {
    var j=0
    for(var i=0;i<holders.length;i++){
        dou.balanceOf([holders[i]]).then(function(res,err){

            balancesBean[holders[j]]=parseInt(res[0].toString(),10)
            console.log(holders[j],res[0].toString())
            j++
        })

    }
},1)

sleep.go(function() {
    var j=0
    for (var i = 0; i < holders.length; i++) {
        dividendToken.balanceOf([holders[i]]).then(function (res, err) {

            balancesToken[holders[j]] =parseInt(res[0].toString(),10)
            console.log(holders[j],res[0].toString())
            j++
        })
    }
},6000)


sleep.go(function() {
    console.log("balancesBean:\n",balancesBean)
    console.log("balancesToken:\n",balancesToken)
    var days;
    var amounts;


    dividendToken.m_rate([]).then(function(res,err){
        var rate=parseInt(res.toString(),10)
        console.log(rate)
        var shouldDivs={}
        var keys=Object.keys(balancesToken)
        for(var i=0;i<keys.length;i++){
            var address=keys[i]
            shouldDivs[address]=balancesToken[address]*rate+balancesBean[address]
        }
        dividendToken.addAccountCall("0x724f255161a5ef4aaf458e37cd1f61fc24b9895a","transfer")
        dividendToken.call_transfer([holders[15],19],issuerPrivateKey).then(function(receipt,err){
            dividendToken.executeDividend([no,holders],executor,4800000).then(function(receipt,err){
                console.log(receipt)
                var data=receipt.logs[0].data.substring(130)
                /*var abl=abls["Bean"]["events"][receipt.logs[0].topics]
                 console.log(abl)
                 var decoder = new SolidityEvent(null, abl, receipt.logs[0].address);
                 var eventsOut=JSON.stringify(decoder.decode(receipt.logs),null,2);
                 console.log(eventsOut.toString())*/
                var go=true
                var datas=[]
                while(go){
                    datas.push(parseInt(data.substring(0,64),16))
                    data=data.substring(64)
                    if(data.length>64)
                        go=false
                }

                console.log(datas)
                var j=0
                for(var i=0;i<holders.length;i++) {

                    dou.balanceOf([holders[i]]).then(function(res,err){
                        var douBalances=parseInt(res.toString(),10)
                        console.log(holders[j],douBalances)
                        if(douBalances!=shouldDivs[holders[j++]])
                            throw ("dou balance error",holders[j++],douBalances,shouldDivs[holders[j++]])
                    })
                }
            })
        })

    })
    
},6000)

