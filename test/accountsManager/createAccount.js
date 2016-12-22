var getRpcStr=require("./../../getRpcServe.js")

contract('create account', function(accounts) {

    var address=getRpcStr.get()
    var accountManager = address.AccountManagerData


    var accountA;

    it("create account  ", function(){
        //var accountManager=AccountManager.at(account_manager);
        var accountmanager=AccountManager.at(accountManager);

        return accountmanager.createAccount(accounts[25],100,100,{from:accounts[22],gas:10000000}).then(function(tx){
            console.log("create account use owner :",accounts[22]);
            console.log(web3.eth.getTransactionReceipt(tx));
        });

    });

    it("get account amounts ", function(){
        var accountmanager=AccountManager.at(accountManager);
        return accountmanager.accountAmount().then(function(res){
            console.log("accountManager.accountAmount()",res.toString());

        });

    });




    /*it("reset owner of account ",function(){
     var xinde=Xinde.at(xindedata)
     //function reSet (address _account,address[] _owners,uint32[] _weight,uint32 _Threshold);
     return xinde.reset(accountA,[accounts[6]],[50],50,{from:accounts[0]}).then(function(tx){
     console.log("reset account "+accountA.toString(16),"to :",accounts[6]);

     });
     })*/
    it("get account summary ", function(){
        var accountmanager=AccountManager.at(accountManager)
        accountmanager.accountAmount().then(function(res){
            console.log("accountManager.accountAmount()",res.toString());
            console.log("                  account               ","                  core                  ","                 TxCore                      ","status","level","ownerAmount","tx_threshold","  re_threshold","                     CA               ","               _owner                   ","weight");
            //0xc06df393ebc0e6c5ba5c4624ecfe242911d7f156 0xc06df393ebc0e6c5ba5c4624ecfe242911d7f156,0x0000000000000000000000000000000000010000,    0      ,0         ,1           ,100      ,0x0000000000000000000000000000000000000000,0xae119076b7273968cc2da5c164a692fa95b98d9c,100 :

            for(var i=res;i<=res;i++) {

                accountmanager.getAccountAddress(i).then(function (res1,i) {
                    var account = Account.at(res1);
                    account.summary().then(function (res,i) {

                        console.log( res1.toString(16),res[0].toString(16),res[1].toString(16),"   "+res[2].toString(10),"      "+res[3].toString(10),"        "+res[4].toString(10),"           "+res[5].toString(10),res[6].toString(10),res[7].toString(16),res[8].toString(16),res[9].toString(10));

                    });

                });
            }
        });
    })

})
