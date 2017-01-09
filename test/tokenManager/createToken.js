var getRpcStr=require("./../../getRpcServe.js")
var transaction=require("./../../wallet/utils/transation.js")

contract('create token', function(accounts) {

    var address=getRpcStr.get()
    var tokenmanager=address.TokenManagerData
    var accountManager=address.AccountCreatorData
    var txManager=address.TxManagerData

    //console.log(address)

    //console.log(txManager)

    it("create token ", function(){
         console.log("tokenManager:",tokenmanager)
         var accountmanager=AccountCreator.at(accountManager);
         return accountmanager.getAccountAddress(1).then(function (res1) {
             console.log("account:",res1.toString(16))
             var account = Account.at(res1);
             return account.summary().then(function (res) {

             //console.log( res1.toString(16),res[0].toString(16),res[1].toString(16),"   "+res[2].toString(10),"      "+res[3].toString(10),"        "+res[4].toString(10),"           "+res[5].toString(10),res[6].toString(16),res[7].toString(16),res[8].toString(10));
                console.log("use %s to create token ",res[8].toString(16))

                 //console.log(txManager)
                 var txManagerInstance=TxManager.at(txManager)
                 var resCreateToken=transaction.transactionRaw(web3,account,"createToken",["GGP",10000000,2,500000,0,"测试BBB1",0x10000bbb,tokenmanager],res[8].toString(16),5000000)

                 //console.log(resCreateToken)
                 
                 var hash='0x'+transaction.sha3(res.data)
                 //console.log("hash:",hash)
                 var resTxConfirm=transaction.transactionRaw(web3,txManagerInstance,"pass",[res1,hash],accounts[0],5000000)
                 
                 //console.log(resTxConfirm)
                 return transaction.broadCast(web3,resTxConfirm.serializedTx,function(err,hash){
                     if(err)
                         console.log(err)
                     else{
                         console.log("hash:",hash)
                         console.log("hash:",web3.eth.getTransaction(hash))
                         web3.eth.getTransactionReceipt(hash).then(function(res){
                             console.log(res)
                         })
                         //console.log(parseInt(web3.eth.getTransactionReceipt(hash).logs[0].data,16));
                         return transaction.broadCast(web3,resCreateToken.serializedTx,function(err,hash){
                             if(err)
                                 console.log(err)
                             else {
                                 console.log("hash:",web3.eth.getTransaction(hash))
                                 console.log(web3.eth.getTransactionReceipt(hash));
                                 //console.log(parseInt(web3.eth.getTransactionReceipt(hash).logs[0].data,16));
                             }
                         })
                    }
                 })
             })
             /*return account.createToken("GGP",10000000,2,500000,0,"测试BBB1",0x10000bbb,tokenmanager,{from:res[8].toString(16),gas:20000000}).then(function(tx){
                 console.log(tx);
                 console.log(web3.eth.getTransactionReceipt(tx));
                 //console.log(getTransactionReceipt(tx));
                 console.log(parseInt(web3.eth.getTransactionReceipt(tx).logs[0].data,16));
             });
             });*/
         });
     });

    /*it("get  token", function(){
        var tokenManager=TokenManager.at(tokenmanager);

        return tokenManager.getTokenAmounts().then(function(res) {
            console.log("token amount:", res.toString())

            tokenManager.getTokenSummary(res).then(function (res) {
                console.log("token summary:", res.toString())
                var token = Token.at(res[2]);
                token.summary().then(function (res) {
                    console.log(res.toString())
                    token.balanceOf(res[1]).then(function (res) {
                        console.log("balance :",res.toString())
                    })
                    //console.log( String.fromCgarCode(res[1]))
                    //console.log(Buffer(res[1],"ASCII"))
                })

            })
        })
    });*/

})