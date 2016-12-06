address=require("./../address.js")
contract('create account', function(accounts) {

    /*var xindeporxy="0xd3d0ba368c5cdeba40302ac3576d02a67a9d73e5"
     var xindelogic="0xfc7a9bf56a73a47fc6b3bc4276c67b92269ba2cd"
     var xindedata="0xadad94ba7073b245cf5e6df985889af5cdd5bb36"
     var accountManager="0xb4ae67f0c948ce1b65e85583a8f71c7c3a73b152"
     var accountlogic="0x1579ae66a887ad8417103b457cd0446bbec8432e"
     var accountporxy="0xcd0bcaa76ec79ba7f27a2a1aef1271f009c996ed"*/

    var xindeporxy = address.xindeporxy
    var xindelogic = address.xindelogic
    var xindedata = address.xindedata
    var accountManager = address.accountManager
    var accountlogic = address.accountlogic
    var accountporxy = address.accountporxy

    var accountA;

    it("create account  ", function(){
        //var accountManager=AccountManager.at(account_manager);
        var accountmanager=AccountManager.at(accountManager);

        return accountmanager.createAccount(accounts[25],100,100,{from:accounts[20],gas:10000000}).then(function(tx){
            console.log("create account use owner :",accounts[25]);
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

})
