var Web3=require("../../getWeb3Instance.js")
var Transaction=require('../utils/transation.js')

var byteCodes=require("../../test/byteCodes.js")
var abis=require("../../test/abis.js")

var abi=abis.Test
var to="0x3060e3015a7cf4b2a406e81ed8a36e6294c6758c"
var privateKey=new Buffer("57b4bef42f68ad2117a1487ad12f73d24ca51d7316ed738907a608c6d6b7bc91",'hex');
var balanceBefore=web3.fromWei(web3.eth.getBalance(to),'ether').toString()

var sendvalue=1111;
//console.log(balanceBefore)
Transaction.transaction(web3,abi,to,"set",[2000],privateKey,22000,function(err,hash){
    if(err)
        console.log(err)
    else
    {
        setTimeout(function(){
            var receipt=web3.eth.getTransactionReceipt(hash)
            console.log(receipt)
            console.log(Transaction.call(web3,abi,to,"get",[]).toString())

            var balanceAfter=web3.fromWei(web3.eth.getBalance(to),'ether').toString()
            console.log("sendvalue:",sendvalue)
            console.log("balanceBefore:",balanceBefore,"balanceAfter:",balanceAfter)
        },6000)
    }
},sendvalue)