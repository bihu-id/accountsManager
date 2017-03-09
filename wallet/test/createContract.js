var Web3=require("../../getWeb3Instance.js")
var Transaction=require('../utils/transation.js')

var byteCodes=require("../../test/byteCodes.js")
var abis=require("../../test/abis.js")

var abi=abis.Test
var privateKey=new Buffer("57b4bef42f68ad2117a1487ad12f73d24ca51d7316ed738907a608c6d6b7bc91",'hex');
Transaction.createContractWithArgs(web3,'0x'+byteCodes.Test,abi,[100],privateKey,300000,function(err,hash){
    if(err)
        console.log(err)
    else
    {
        setTimeout(function(){
            var receipt=web3.eth.getTransactionReceipt(hash)
            console.log(receipt)
            console.log(Transaction.call(web3,abi,receipt.contractAddress,"get",[]).toString())
        },5000)
    }
})

