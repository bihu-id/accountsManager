//test end dividend execute  unfinished , and restart again

var Contract=require("../../contract.js")
var  SolidityEvent = require("web3/lib/web3/event.js");
var abls=require("../../anduiwallet/config/abls.js")
var dividendToken=new Contract("DividendToken","DividendTokenData",4000)
dividendToken.at()
var dou=new Contract("Bean","BeanData")
dou.at()
var executor=new Buffer("8b4070cb71853a283579b1cee99a54c09d4f29bb1d0659b6d16cd64f356d2d02",'hex')
var executor_address="0xea8d6135722727ff5e5ff7d7116cd765b6b1e826"

var issuerPrivateKey=new Buffer("1a3e6d52c9362dad35e1ad8890bf3984100e26655b4787d9f06143eacc630a09",'hex')

var addresses=require("./../addresses.js")

var Sleep= require("../../anduiWallet/utils/sleep.js")
var sleep=new Sleep(1)

var douAddress_=Contract.getAddress("BeanData")

var keys=Object.keys(addresses)
var addressKeys=keys
var issuer="0x724f255161a5ef4aaf458e37cd1f61fc24b9895a"
var holders=[]

var no=6;
var balancesBean={}
var balancesToken={}

var holders=[]
var tos=[]
sleep.go(function() {
    var j=0
    for(var i=20;i<30;i++){
        holders.push(keys[i])
        tos.push(10000*i)
        dou.balanceOf([keys[i]]).then(function(res,err){

            balancesBean[keys[j]]=parseInt(res[0].toString(),10)
            //console.log(keys[j],res[0].toString())
            j++
        })

    }

},1)

sleep.go(function() {
    console.log(balancesBean)
    console.log(tos)
    dividendToken.reissueDividend([6, 6, holders, tos], executor).then(function (receipt, err) {
        console.log(receipt)
        var j=0
        for(var i=0;i<15;i++){
            dou.balanceOf([keys[i]]).then(function(res,err){

                balancesBean[keys[j]]=parseInt(res[0].toString(),10)
                //console.log(keys[j],res[0].toString())
                j++
            })

        }
    })
},6000)

