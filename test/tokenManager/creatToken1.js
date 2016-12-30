var abis=require("./../abis.js")
var getRpcStr=require("./../../getRpcServe.js")
var transaction=require("./../../wallet/utils/transation.js")

var web3=require("./../../getWeb3Instance.js")
var address=getRpcStr.get()
var tokenmanager=address.TokenManagerData
var accountManager=address.AccountManagerData
var txManager=address.TxManagerData


var accounts=web3.eth.accounts
function toAddress( res){
    return '0x'+res.substring(26)
}
console.log("tokenManager:",tokenmanager)

var abi=abis["AccountManager"]

var res1=transaction.call(web3,abi,accountManager,"getAccountAddress",[1])

var accountAddress=res1[0]
console.log("account:",accountAddress)


abi=abis["Account"]
var res=transaction.call(web3,abi,accountAddress,"summary",[])

console.log(res.toString())
var accountOwner=res[8].toString(16)

//console.log( res1.toString(16),res[0].toString(16),res[1].toString(16),"   "+res[2].toString(10),"      "+res[3].toString(10),"        "+res[4].toString(10),"           "+res[5].toString(10),res[6].toString(16),res[7].toString(16),res[8].toString(10));
console.log("use %s to create token ",accountOwner)


var resCreateToken=transaction.transactionRaw(web3,abi,accountAddress,"createToken",["GGP",10000000,2,500000,0,"测试BBB1",0x10000bbb,tokenmanager],accountOwner,5000000)

//console.log(resCreateToken)
console.log("data:",resCreateToken.data.substring(2))
var hash='0x'+transaction.sha3(resCreateToken.data)
console.log("hash:",hash)
var resTxConfirm=transaction.transactionRaw(web3,abis["TxManager"],txManager,"pass",[res1,hash],accounts[0],5000000)

//console.log(resTxConfirm)
transaction.broadCast(web3,resTxConfirm.serializedTx,function(err,hash){
    if(err)
        console.log(err)
    else{
        console.log("txhash:",hash)
        setTimeout(function(){
            var res=web3.eth.getTransactionReceipt(hash)
            console.log(res)
            console.log(res.logs[0]?parseInt(res.logs[0].data,16):"")
        },5000)

        //console.log(parseInt(web3.eth.getTransactionReceipt(hash).logs[0].data,16));
        return transaction.broadCast(web3,resCreateToken.serializedTx,function(err,hash){
            if(err)
                console.log(err)
            else {
                console.log("txhash:",hash)
                setTimeout(function(){
                    var res=web3.eth.getTransactionReceipt(hash)
                    console.log(res)
                    console.log(res.logs[0]?parseInt(res.logs[0].data,16):"")
                },5000)
            }
        })
    }
})

    /*return account.createToken("GGP",10000000,2,500000,0,"测试BBB1",0x10000bbb,tokenmanager,{from:res[8].toString(16),gas:20000000}).then(function(tx){
     console.log(tx);
     console.log(web3.eth.getTransactionReceipt(tx));
     //console.log(getTransactionReceipt(tx));
     console.log(parseInt(web3.eth.getTransactionReceipt(tx).logs[0].data,16));
     });
     });*/

