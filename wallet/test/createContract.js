var transaction=require("../utils/transation.js")
var codes=require("../../test/byteCodes.js")
var Web3=require("../../getWeb3Instance.js")

var privateKey=new Buffer("7326418279111ef3276318ee6dd12cd25a4b343bfab466eacc2def2197e24ade",'hex');

transaction.createContract(web3,"0x"+codes.ParkingLock,privateKey,3000000,function(err,hash){
    console.log(err)
    if (!err)
        console.log(hash); // "0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385"

    setTimeout(function(){console.log("tx:",web3.eth.getTransactionReceipt(hash))}, 5000)
})