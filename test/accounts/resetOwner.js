var getRpcStr=require("./../../getRpcServe.js")

contract('reset owner of account', function(accounts) {
    var address=getRpcStr.get()

    var xindidata = address.XindiData
    var accountManager = address.AccountCreatorData


    it("reset owner of account ", function(){
        var accountmanager=AccountCreator.at(accountManager)
            //console.log("accountManager.accountAmount()",res.toString());
            //console.log("                  account               ","                  core                  ","                 TxCore                      ","status","level","ownerAmount","tx_threshold","                       CA               ","               _owner                   ","weight");
            //0xc06df393ebc0e6c5ba5c4624ecfe242911d7f156 0xc06df393ebc0e6c5ba5c4624ecfe242911d7f156,0x0000000000000000000000000000000000010000,    0      ,0         ,1           ,100      ,0x0000000000000000000000000000000000000000,0xae119076b7273968cc2da5c164a692fa95b98d9c,100 :
            accountmanager.getAccountAddress(1).then(function (res1) {
                var account = Account.at(res1);
                console.log("reset owner of",res1.toString(16))
                var xindi=Xindi.at(xindidata)
                return xindi.getKeys().then(function(res){
                    console.log("use reset key:",res[6].toString(16))
                    return xindi.resetAccountOwner(res1,50,[accounts[20]],[50],{from:res[6]}).then(function(tx){
                        console.log("reset account "+res1.toString(16),"to :",accounts[6]);
                        console.log(web3.eth.getTransactionReceipt(tx));
                    })

            });

        });

    });
    it("get waiting operation ", function(){
        var xindi=Xindi.at(xindidata)

        console.log("operation detail:")
        console.log("No", "account", "           data               ", "status")
        return xindi.getWaitOperationNos(1,10,1).then(function(res){
  
            res.forEach(function (r) {
                return xindi.getOperation(r).then(function (res) {
                    console.log(res[0].toString(10), res[1].toString(16), res[2].toString(16), res[3].toString(10))
                })
            })
        })
    })


})