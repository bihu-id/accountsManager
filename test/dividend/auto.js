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
var issuer="0x724f255161a5ef4aaf458e37cd1f61fc24b9895a"
var holders=[]
for(var i=0;i<2;i++)
    holders.push(keys[i])
//holders.push(issuer)

console.log(holders)
var no=20
var balancesBean={}
var balancesToken={}


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

function checkErr(receipt,no,str){
    var errStr=receipt.logs[0].data
    var errNo=parseInt(errStr,16)
    if(errNo!=no){
        console.log(str,errStr,errNo)
        throw("")
    }
}
//set dividend use other key rather issuer of account,   , should error 60060002
sleep.go(function(){
    var start=Date.parse(new Date())/1000
    dividendToken.setDividend([douAddress_,start,30,200000000,executor_address],executor).then(function(receipt,err){

        checkErr(receipt,60060002,"set dividend access test fail")

    })
},100)

//set dividend use  issuer of account,   , should event dividend no
var no
sleep.go(function(){
    var tokenissuer="0x724f255161a5ef4aaf458e37cd1f61fc24b9895a"
    var privateKey_account=new Buffer("1a3e6d52c9362dad35e1ad8890bf3984100e26655b4787d9f06143eacc630a09",'hex');
    dividendToken.addAccountCall(tokenissuer,"setDividend")
    dividendToken.at()
    var start=Date.parse(new Date())/1000
    dividendToken.call_setDividend([douAddress_,start,30,200000000,executor_address],privateKey_account).then(function(receipt,err){

        no=parseInt(receipt.logs[0].data.toString().substring(0,66),16)
        console.log("no:",no,receipt.logs[0].data.toString().substring(0,66))
        if(no<0)
            throw("set dividend  test fail")
    })
},4000)
// executeDividend before start
sleep.go(function(){
    dividendToken.executeDividend([no,holders],issuerPrivateKey,4800000).then(function(receipt,err){

        checkErr(receipt,60060001,"executeDividend before start test fail")

    })
},4000)

//start dividend use other key rather than executor
sleep.go(function(){
    dividendToken.startDividend([no],issuerPrivateKey).then(function(receipt,err) {

        checkErr(receipt,60060001,"start dividend access test fail")
})
},4000)

//start dividend use  executor
sleep.go(function(){
    console.log("start dividend use  executor")
    dividendToken.startDividend([no],executor).then(function(receipt,err) {
        var errNo =parseInt(receipt.logs[0].data,10)
        dividendToken.m_AuxStatus([]).then(function(res,err){
            if(parseInt(res.toString(),16)!=2)
                console.log(res.toString())
        })
    })
},4000)

sleep.go(function() {
    var j=0
    for (var i = 0; i < holders.length; i++) {
        dividendToken.balanceOf([holders[i]]).then(function (res, err) {

            balancesToken[holders[j]] =parseInt(res[0].toString(),10)
            //console.log(holders[j],res[0].toString())
            j++
        })
    }
},6000)
// executeDividend use other key rather than executor
sleep.go(function(){
    console.log("executeDividend use other key rather than executor:\n")
    dividendToken.executeDividend([no,holders],issuerPrivateKey,4800000).then(function(receipt,err){

        checkErr(receipt,60060001,"executeDividend access test fail")

    })
},4000)

// executeDividend executor
sleep.go(function(){
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
                console.log("executeDividend receipt1:\n",receipt)
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
                    if(data.length<64)
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
                dividendToken.executeDividend([no,holders],executor,4800000).then(function(receipt,err){
                    console.log("executeDividend receipt2:\n",receipt)
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
                        if(data.length<64)
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

    })
},6000)

//end
sleep.go(function(){
    console.log("end use other key rather than executor")
    dividendToken.endDividend([no],issuerPrivateKey).then(function(receipt,err) {

        checkErr(receipt,60060001,"endDividend access test fail")

    })
},12000)

//end
sleep.go(function(){
    console.log("end use executor key ")
    dividendToken.endDividend([no],executor).then(function(receipt,err) {
        var _no=parseInt(receipt.logs[0].data.toString(),16)
        if(_no!=no)
            throw("endDividend event test fail")

    })
},12000)