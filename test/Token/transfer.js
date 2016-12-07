var address=require('./../address.js')
contract('transfer', function(accounts) {

    var tokenmanager=address.tokonManagerdata
    var accountManager=address.accountManager


    /*it("create token directly", function(){
     var tokenManager=TokenManager.at(tokenmanager);
     return tokenManager.createToken("ABC12",10000000,2,500000,0,"测试AAA",0x10000aaa,{from:accounts[1],gas:10000000}).then(function(tx){
     console.log(web3.getTransactionReceipt(tx))
     })
     });*/

    it("transfer ", function(){
        var tokenManager=TokenManager.at(tokenmanager);


            tokenManager.getTokenSurmmary(1).then(function(res1){
                var token=Token.at(res1[2]);
                token.summary().then(function(res2){
                    console.log(res2.toString())
                    token.balanceOf(res2[1]).then(function(res3){
                        console.log(res3.toString())
                    })
                    var accountI=Account.at(res2[1]);
                    accountI.summary().then(function (res4) {
                        console.log("account :%s owner: %s",res2[1],res4[7].toString(16))
                        //console.log( res1.toString(16),res[0].toString(16),res[1].toString(16),"   "+res[2].toString(10),"      "+res[3].toString(10),"        "+res[4].toString(10),"           "+res[5].toString(10),res[6].toString(16),res[7].toString(16),res[8].toString(10));
                        console.log("use %s to transfer ",res4[7].toString(16))
                        return accountI.transferToken(res1[2],accounts[21],11234,{from:res4[7].toString(16),gas:20000000}).then(function(tx){
                            console.log(tx);
                            //console.log(web3.eth.getTransactionReceipt(tx));
                            token.balanceOf(accounts[21]).then(function(res3){
                                console.log(res3.toString())
                            })
                        });
                    });
                })
            })


    });
    /*
     it("create token by account ", function(tx){
     var tokenManager=TokenManager.at(tokenmanager);

     return tokenManager.getTokenAmounts().then(function(res){
     console.log(res.toString())})
     })*/
})