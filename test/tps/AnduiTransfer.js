var Contract=require("../../contract.js")
var token=new Contract(Token,"testToken")
var Sleep=require("../../anduiWallet/utils/sleep")
var addresses=require("./addresses.js")
var addressesKeys=Object.keys(addresses)
var ethUtil = require('ethereumjs-util');

var issuer=""

var privateKey=new Buffer("f197239116b1d313f053d679f075eb17f378e9cff581199d480e9c83e85c1aff",'hex');
var a=ethUtil.privateToAddress(privateKey).toString('hex')
var nonce=web3.eth.getTransactionCount(a.toString('hex'))    
    
token.addAccountCall(issuer,"transfer")


var gas=300000
Sleep.loop(10,function() {

    var to=addressesKeys[nonce%900]
    token.call_transfer([to, 10], privateKey, gas, nonce + i).then(function (receipt, err) {
        console.log("transfer :", receipt)
    })
})