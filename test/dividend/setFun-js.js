var transaction=require("../../wallet/utils/transation.js")
var codes=require("../byteCodes.js")
var Web3=require("../../getWeb3Instance.js")
var getRpcStr=require("../../getRpcServe.js")
var abis=require("../abis.js")
var Funs=require("../funs.js")
var Sleep=require("../../wallet/utils/sleep.js")

var privateKey=new Buffer("7326418279111ef3276318ee6dd12cd25a4b343bfab466eacc2def2197e24ade",'hex');

var contract="DividendToken"
var proxy="LogicProxy"
var to=getRpcStr.get()[contract+"Proxy"]
var logicAddress=getRpcStr.get()[contract+"Logic"]
console.log(logicAddress)
var abi=abis[proxy]

var fun=Funs[contract]
var keys=Object.keys(fun)

var sleep=new Sleep(1000)
keys.forEach(function(k){
    var f=fun[k]
    sleep.go(function(){
        res=transaction.call(web3, abi, to, "get", [f.sig]);
        var currentLogic="0x"+res[0].toString(16)
        var currentSize=parseInt(res[1].toString(),10)
        console.log(currentLogic,currentSize,f.name)
        if(currentLogic!=logicAddress||currentSize!=f.resSize)
            transaction.transaction(web3,abi,to,"setfun",[logicAddress, f.sig, f.resSize],privateKey,300000,function(err,hash){
                if (err)
                    console.log(err)

                setTimeout(function(){
                    var receipt=web3.eth.getTransactionReceipt(hash)
                    console.log(receipt)

                },10000)
            })
    },2000)

})
sleep.go(function(){
    transaction.transaction(web3,abi,to,"requestConfirm",[0],privateKey,300000,function(err,hash){
        console.log(err)
        if (!err)
            console.log(hash); // "0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385"

        setTimeout(function(){
            var receipt=web3.eth.getTransactionReceipt(hash)
            console.log(receipt)

        },10000)
    })
},20000)

sleep.go(function(){
    transaction.transaction(web3,abi,to,"confirm",[0],privateKey,300000,function(err,hash){
        console.log(err)
        if (!err)
            console.log(hash); // "0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385"

        setTimeout(function(){
            var receipt=web3.eth.getTransactionReceipt(hash)
            console.log(receipt)

        },10000)
    })
},10000)


sleep.go(function() {
    keys.forEach(function (k) {
        var f = fun[k]
        var res = transaction.call(web3, abi, to, "get", [f.sig])
        console.log(res[0].toString(16),res[1].toString(),f.name)
    })
},5000)

