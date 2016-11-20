address=require("./../xinde/address.js")
contract('reset owner of account', function(accounts) {

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




    it("reset owner of account ", function(){
        var accountmanager=AccountManager.at(accountManager)
            //console.log("accountManager.accountAmount()",res.toString());
            //console.log("                  account               ","                  core                  ","                 TxCore                      ","status","level","ownerAmount","tx_threshold","                       CA               ","               _owner                   ","weight");
            //0xc06df393ebc0e6c5ba5c4624ecfe242911d7f156 0xc06df393ebc0e6c5ba5c4624ecfe242911d7f156,0x0000000000000000000000000000000000010000,    0      ,0         ,1           ,100      ,0x0000000000000000000000000000000000000000,0xae119076b7273968cc2da5c164a692fa95b98d9c,100 :
        var x=[1]
        console.log(x.length)
                accountmanager.getAccountAddress(1).then(function (res1) {
                    var account = Account.at(res1);
                    console.log("reset owner of",res1.toString(16))
                    var xinde=Xinde.at(xindedata)
                    return xinde.getRole(0).then(function(res){
                        console.log("use A1 key:",res.toString(16))
                        return xinde.reSet(res1,[accounts[20]],[50],50,{from:res}).then(function(tx){
                            console.log("reset account "+res1.toString(16),"to :",accounts[6]);
                        })

                });

        });

    });
    it("get waiting operation ", function(){
        var xinde=Xinde.at(xindedata)

        console.log("operation detail:")
        console.log("No", "account", "           data               ", "status")
        return xinde.getWaitOperationNos(1,10,1).then(function(res){
  
            res.forEach(function (r) {
                return xinde.getOperation(r).then(function (res) {
                    console.log(res[0].toString(10), res[1].toString(16), res[2].toString(16), res[3].toString(10))
                })
            })
        })
    })


})