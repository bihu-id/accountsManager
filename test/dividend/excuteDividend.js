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
for(var i=0;i<5;i++)
    holders.push(keys[i])
//holders.push(issuer)

console.log(holders)
var no;
var balancesBean={}
var balancesToken={}

var miss=true;

sleep.go(function() {
    var j=0
    for(var i=0;i<15;i++){
        dou.balanceOf([keys[i]]).then(function(res,err){

            balancesBean[keys[j]]=parseInt(res[0].toString(),10)
            //console.log(keys[j],res[0].toString())
            j++
        })

    }

    dou.balanceOf([issuer]).then(function (res, err) {

        balancesBean[issuer] =parseInt(res[0].toString(),10)

    })
},1)

function checkErr(receipt,no,str){
    var errStr=receipt.logs[0].data
    var errNo=parseInt(errStr,16)
    if(errNo!=no){
        console.log(receipt,str)
        throw("")
    }
}


//set dividend use  issuer of account,   , should event dividend no
var no=6
var dayNo;

//start dividend use  executor
sleep.go(function(){
    console.log("start dividend use  executor:\n\n")
    dividendToken.startDividend([no],executor).then(function(receipt,err) {
        console.log(receipt)

        dividendToken.m_AuxStatus([]).then(function(res,err){
            if(parseInt(res.toString(),16)!=2)
                console.log(res.toString())
        })
    })
},5000)

sleep.go(function() {
    var j=0
    for (var i = 0; i <15; i++) {
        dividendToken.balanceOf([keys[i]]).then(function (res, err) {

            balancesToken[keys[j]] =parseInt(res[0].toString(),10)
            //console.log(holders[j],res[0].toString())
            j++
        })
    }
    dividendToken.balanceOf([issuer]).then(function (res, err) {

        balancesToken[issuer] =parseInt(res[0].toString(),10)

    })

},6000)

// executeDividend executor
sleep.go(function() {
    dividendToken.getRate([no]).then(function (res, err) {
        var rate = parseInt(res.toString(), 10)
        console.log(rate)
        var shouldDivs = {}
        var keys = Object.keys(balancesToken)
        for (var i = 0; i < keys.length; i++) {
            var address = keys[i]
            shouldDivs[address] = balancesToken[address] * rate + balancesBean[address]
        }

        console.log("shouldDivs:\n", shouldDivs)
        var priKey = new Buffer(addresses[holders[0]].substring(2), 'hex')
        console.log(addresses[holders[0]].substring(2))
        dividendToken.addAccountCall("0x724f255161a5ef4aaf458e37cd1f61fc24b9895a","transfer")
        for(var i=0;i<10;i++)
            dividendToken.call_transfer([keys[i], 19+i], issuerPrivateKey).then(function (receipt, err){
                console.log(receipt)
            })
        dividendToken.transfer([addressKeys[3], 19], priKey).then(function (receipt, err) {

            sleep.go(function () {
                dividendToken.executeDividend([no, holders], executor, 2000000).then(function (receipt1, err) {
                    console.log("executeDividend receipt1:\n", receipt1)
                    var data = receipt1.logs[0].data.substring(130)
                    /*var abl=abls["Bean"]["events"][receipt.logs[0].topics]
                     console.log(abl)
                     var decoder = new SolidityEvent(null, abl, receipt.logs[0].address);
                     var eventsOut=JSON.stringify(decoder.decode(receipt.logs),null,2);
                     console.log(eventsOut.toString())*/
                    var go = true
                    var datas = []
                    while (go) {
                        datas.push(parseInt(data.substring(0, 64), 16))
                        data = data.substring(64)
                        if (data.length < 64)
                            go = false
                    }

                    console.log(datas)
                    var j = 0
                    for (var i = 0; i < holders.length; i++) {

                        dou.balanceOf([holders[i]]).then(function (res, err) {
                            var douBalances = parseInt(res.toString(), 10)
                            console.log(holders[j], douBalances)
                            if (douBalances != shouldDivs[holders[j++]]) {
                                console.log(holders[j++], douBalances, shouldDivs[holders[j++]])
                                throw ("dou balance error")
                            }
                        })
                    }
                })
            }, 6000)
            if(!miss) {
                sleep.go(function () {
                    var otherHolder = [issuer]
                    shouldDivs[otherHolder[0]] = balancesBean[otherHolder[0]] + rate * balancesToken[otherHolder[0]]
                    dividendToken.executeDividend([no, otherHolder], executor, 2000000).then(function (receipt2, err) {
                        console.log("executeDividend receipt2:\n", receipt2)
                        var data = receipt2.logs[0].data.substring(130)
                        /*var abl=abls["Bean"]["events"][receipt.logs[0].topics]
                         console.log(abl)
                         var decoder = new SolidityEvent(null, abl, receipt.logs[0].address);
                         var eventsOut=JSON.stringify(decoder.decode(receipt.logs),null,2);
                         console.log(eventsOut.toString())*/
                        var go = true
                        var datas = []
                        while (go) {
                            datas.push(parseInt(data.substring(0, 64), 16))
                            data = data.substring(64)
                            if (data.length < 64)
                                go = false
                        }

                        console.log(datas)
                        var j = 0

                        var holder = otherHolder[0]

                        dou.balanceOf([holder]).then(function (res, err) {
                            var douBalances = parseInt(res.toString(), 10)
                            console.log(holder, douBalances)
                            if (douBalances != shouldDivs[holder]) {
                                console.log(holder, douBalances, shouldDivs[holder])
                                throw ("dou balance2 error")
                            }

                        })

                    })
                }, 6000)
                sleep.go(function () {
                    var otherHolders = []
                    for (var i = 0; i < 15; i++) {
                        shouldDivs[addressKeys[i]] = rate * balancesToken[addressKeys[i]] + balancesBean[addressKeys[i]]
                        otherHolders.push(addressKeys[i])
                    }
                    console.log("otherHolders", otherHolders)
                    dividendToken.executeDividend([no, otherHolders], executor, 2000000).then(function (receipt, err) {
                        console.log("executeDividend receipt3:\n", receipt)
                        var data = receipt.logs[0].data.substring(130)
                        /*var abl=abls["Bean"]["events"][receipt.logs[0].topics]
                         console.log(abl)
                         var decoder = new SolidityEvent(null, abl, receipt.logs[0].address);
                         var eventsOut=JSON.stringify(decoder.decode(receipt.logs),null,2);
                         console.log(eventsOut.toString())*/
                        var go = true
                        var datas = []
                        while (go) {
                            datas.push(parseInt(data.substring(0, 64), 16))
                            data = data.substring(64)
                            if (data.length < 64)
                                go = false
                        }

                        console.log(datas)
                        var j = 0
                        for (var i = 0; i < holders.length; i++) {

                            dou.balanceOf([holders[i]]).then(function (res, err) {
                                var douBalances = parseInt(res.toString(), 10)
                                console.log(holders[j], douBalances)
                                if (douBalances != shouldDivs[holders[j++]])
                                    throw ("dou balance error", holders[j++], douBalances, shouldDivs[holders[j++]])
                            })
                        }
                    })
                }, 6000)
            }
            sleep.go(function () {
                console.log("end use executor key ")
                dividendToken.endDividend([no], executor).then(function (receipt, err) {
                    var _no = parseInt(receipt.logs[0].data.toString(), 16)
                    if (_no != no)
                        throw("endDividend event test fail")

                })
            }, 6000)
        })

    })
},6000)



