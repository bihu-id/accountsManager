var getRpcStr=require("./../../getRpcServe.js")

contract("account summary ",function(accounts){
    var address=getRpcStr.get()

    var accountManager = address.AccountManagerData

    it("get account summary ", function(){
        var accountmanager=AccountCreator.at(accountManager)
        accountmanager.accountAmount().then(function(res){
            console.log("accountManager.accountAmount()",res.toString());
            console.log("                  account               ","                  core                  ","                 TxCore                      ","status","level","ownerAmount","tx_threshold","                       CA               ","               _owner                   ","weight");
            //0xc06df393ebc0e6c5ba5c4624ecfe242911d7f156 0xc06df393ebc0e6c5ba5c4624ecfe242911d7f156,0x0000000000000000000000000000000000010000,    0      ,0         ,1           ,100      ,0x0000000000000000000000000000000000000000,0xae119076b7273968cc2da5c164a692fa95b98d9c,100 :

            for(var i=1;i<=res;i++) {

                accountmanager.getAccountAddress(i).then(function (res1) {
                    var account = Account.at(res1);
                    account.summary().then(function (res) {

                        console.log( res1.toString(16),res[0].toString(16),res[1].toString(16),"   "+res[2].toString(10),"      "+res[3].toString(10),"        "+res[4].toString(10),"           "+res[5].toString(10),res[6].toString(16),res[7].toString(16),res[8].toString(10));

                    });

                });
            }
        });
    })
});