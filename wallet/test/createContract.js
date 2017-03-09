var Web3=require("../../getWeb3Instance.js")
var Transaction=require('../utils/transation.js')

var byteCodes=require("../../test/byteCodes.js")
var abis=require("../../test/abis.js")

var privateKey=new Buffer("7326418279111ef3276318ee6dd12cd25a4b343bfab466eacc2def2197e24ade",'hex');
Transaction.createContractWithArgs(web3,'0x'+byteCodes.Test,abis.Test,privateKey,300000,function(err,hash){
    if(err)
        console.log(err)
    else
    {
        setTimeout(function(){
            var receipt=web3.eth.getTransactionReceipt(hash)
            console.log(receipt)
        },5000)
    }
})

