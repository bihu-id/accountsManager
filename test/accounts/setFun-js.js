var transaction=require("../../wallet/utils/transation.js")
var codes=require("../byteCodes.js")
var Web3=require("../../getWeb3Instance.js")
var getRpcStr=require("../../getRpcServe.js")
var abis=require("../abis.js")
var Funs=require("../funs.js")
var Sleep=require("../../wallet/utils/sleep.js")

var privateKey=new Buffer("f6b94a42c26a5cbbb918285612d6678d45120a3e26c8db1ca551726a4f81c98b",'hex');

var contract="Account"
var proxy="LogicProxy"
var to=getRpcStr.get()[contract+"Proxy"]
var logicAddress=getRpcStr.get()[contract+"Logic"]
var abi=abis[proxy]

var fun=Funs[contract]
var keys=Object.keys(fun)

var sleep=new Sleep(1000)
keys.forEach(function(k){
    var f=fun[k]
    sleep.go(function(){
        res=transaction.call(web3, abi, to, "get", [f.sig]);
        if(("0x"+res[0].toString(16))!=logicAddress||parseInt(res[1],10)!=fun.resSize)
            transaction.transaction(web3,abi,to,"setfun",[logicAddress, f.sig, f.resSize],privateKey,300000,function(err,hash){
                console.log(err)
                if (!err)
                    console.log(hash); // "0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385"

                setTimeout(function(){
                    var receipt=web3.eth.getTransactionReceipt(hash)
                    console.log(receipt)

                },10000)
            })
    },5000)

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
},10000)

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
        console.log(res)
    })
},5000)

