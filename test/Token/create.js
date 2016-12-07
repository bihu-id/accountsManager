var address=require('./../address.js')
contract('create token', function(accounts) {

    var tokenmanager=address.tokonManagerdata
    var accountManager=address.accountManager
    

   /*it("create token directly", function(){
        var tokenManager=TokenManager.at(tokenmanager);
        return tokenManager.createToken("ABC12",10000000,2,500000,0,"测试AAA",0x10000aaa,{from:accounts[1],gas:10000000}).then(function(tx){
            console.log(web3.getTransactionReceipt(tx))
        })
    });*/

        it("create token by account ", function(){
        console.log("tokenManager:",tokenmanager)
        var accountmanager=AccountManager.at(accountManager);
        return accountmanager.getAccountAddress(1).then(function (res1) {
            console.log(res1.toString(16))
            var account = Account.at(res1);
            account.summary().then(function (res) {

                //console.log( res1.toString(16),res[0].toString(16),res[1].toString(16),"   "+res[2].toString(10),"      "+res[3].toString(10),"        "+res[4].toString(10),"           "+res[5].toString(10),res[6].toString(16),res[7].toString(16),res[8].toString(10));
                console.log("use %s to create token ",res[7].toString(16))
                return account.createToken("BBB3",10000000,2,500000,0,"测试BBB1",0x10000bbb,tokenmanager,{from:res[7].toString(16),gas:20000000}).then(function(tx){
                    console.log(tx);
                    console.log(web3.eth.getTransactionReceipt(tx));
                });
            });
        });
    });

    it("get  token", function(){
        var tokenManager=TokenManager.at(tokenmanager);

        return tokenManager.getTokenAmounts().then(function(res){
            console.log(res.toString())
            for(var i=1;i<=res;i++)
                tokenManager.getTokenSurmmary(i).then(function(res){
                    var token=Token.at(res[2]);
                    token.surmmay().then(function(res){
                        console.log(res.toString())
                        token.balanceOf(res[1]).then(function(res){
                            console.log(res.toString())
                        })
                        //console.log( String.fromCgarCode(res[1]))
                        //console.log(Buffer(res[1],"ASCII"))
                })
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