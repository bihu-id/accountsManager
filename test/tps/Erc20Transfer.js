var Contract=require("../../contract.js")
var addresses=require("./addresses.js")
var Sleep=require("../../anduiWallet/utils/sleep")
var ethUtil = require('ethereumjs-util');

var addressesKeys=Object.keys(addresses)
var contract=new Contract("Erc20Token","Erc20Token",4000)
var sleep= new Sleep(2)
var privateKey=new Buffer("a2a61f667873ff4567a72bb6f3b7c712c280e202befa205dd606209d24c545f3",'hex');
var a=ethUtil.privateToAddress(privateKey).toString('hex')
var nonce=web3.eth.getTransactionCount(a.toString('hex'))

var gas=100000
var gasPrice=web3.eth.gasPrice.toString(16)
var sleep= new Sleep(1)
sleep.loop(1,function() {

    var to=addressesKeys[nonce%900]
    contract.transfer([to,2],privateKey,gas,gasPrice,nonce++,true).then(function(receipt,err){

    })

})
