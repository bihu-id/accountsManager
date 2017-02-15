var getRpcStr=require("./../../getRpcServe.js")
var transaction=require("./../../wallet/utils/transation.js")
var Sleep=require("./../../sleep.js")
var web3=require("./../../getWeb3Instance.js")
var abis=require("./../abis.js")
var ethUtil = require('ethereumjs-util')

var address=getRpcStr.get()
var tokenmanager=address.TokenManagerData
var accountCreator=address.AccountCreatorData

var sleep=new Sleep(1)
console.log("tokenManager:",tokenmanager)

var accountAbi=abis["Account"]
var tokeManagerAbi=abis["TokenManager"]
var tokeAbi=abis["Token"]
var keepManagerAbi=abis["KeepManager"]
var account="0x2edd75d3d3acbeb7f6ded54215139dd44d5642a5"
var accountOwner="0xd8efd7373ff2cdb8b01b144fad392b89b2c1c4ae"
var accountOwnerPrivateKey="0xca2964db1ba92eca47c46e7e0bce2c58447e69586e7120973b122d53e3a1e160"

console.log(accountOwnerPrivateKey.length)
var accountCreatorPrivateKey=""

var accountCreatorAbi=abis["AccountCreator"]

var corePrivateKey='0x5bf719a713fdf24d6d1935dccbe20ff8945cc62674d9476a71af962c61392b02'

var basePrivateKey="0x5d8947c193b87b9ce60525b4c0be371893ab1038760c6f13cf2cdbb6d96c"
var j=0
for(var i=0;i<200;i++){

    var keepContract="0x0000000000000000000000000000000000000005"
    var keep="0x2e8956fbce3be7eeb40362d3b09803269d236e44"

    sleep.go(function(){
        j++
        var accountPrivateKey=basePrivateKey+(1000+j).toString()
        var owner=accountOwner;

        //create account
        transaction.transaction(web3,accountCreatorAbi,accountCreator,"createAccount",[owner,20,20],accountCreatorPrivateKey,3000000,function(err,hash){

        })

        var tokenSymbol="FFFFF"+j.toString(10)
        var initBalance=5000000+j*100
        var resCreateToken=transaction.transactionRaw(web3,accountAbi,account,"createToken",[tokenSymbol,10000000,2,initBalance,0,"测试BBB1",0x10000bbb,tokenmanager],accountOwnerPrivateKey,3000000)

        var hash='0x'+transaction.sha3(resCreateToken.data)

        transaction.broadCast(web3,resCreateToken.serializedTx,function(err,hash){
            if(err)
                console.log(err)
            else{
                setTimeout(function(){

                    var tokenAmounts=transaction.call(web3,tokeManagerAbi,tokenmanager,"getTokenAmounts",[])
                    var tokenAddress=transaction.call(web3,tokeManagerAbi,tokenmanager,"getTokenSummary",[tokenAmounts])[2].toString()
                    var balance=transaction.call(web3,tokeAbi,tokenAddress,"balanceOf",[account])
                    console.log(balance.toString())
                    if(balance!=initBalance){
                        console.log(balance.toString(),initBalance.toString())
                        console.log("hash:",hash)
                        throw ("token balance error")}
                },5000)
            }
        })
        
        if(j%22==12){
            var resDelKeep=transaction.transactionRaw(web3,keepManagerAbi,keepContract,"set",[2,keep,effectNo],corePrivateKey,500000)
            transaction.broadCast(web3,resDelKeep.serializedTx,function(err,hash){
                setTimeout(function(){console.log("del keep :" ,web3.eth.getTransaction(hash).blockNumber.toString())},4000)
            })

        }
        if(j%30==1){
            var resAddKeep=transaction.transactionRaw(web3,keepManagerAbi,keepContract,"set",[1,keep,effectNo],corePrivateKey,500000)
            transaction.broadCast(web3,resAddKeep.serializedTx,function(err,hash){
                setTimeout(function(){console.log("add keep :" ,web3.eth.getTransaction(hash).blockNumber.toString())},4000)
            })
        }
    },6000)


}

