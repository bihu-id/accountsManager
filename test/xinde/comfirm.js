
address=require("./../address.js")
contract('comfirm reset me', function(accounts) {

    var xindeporxy = address.xindeporxy
    var xindelogic = address.xindelogic
    var xindedata = address.xindedata
    var accountManager = address.accountManager
    var accountlogic = address.accountlogic
    var accountporxy = address.accountporxy
    it("get all waiting operation resetMe", function () {
        var xinde = Xindi.at(xindedata);
        return xinde.getWaitOperationNos(1, 14, 2).then(function (res) {
            console.log("wait comfirm operations :", res.toString(10))
            console.log("operation detail:")
            console.log("No", "role", "           new address               ", "status")
            res.forEach(function (w) {
                return xinde.getOperation_resetMe(w).then(function (res) {
                    console.log(res[0].toString(10), res[1].toString(10), res[2].toString(16), res[3].toString(10))

                })
            })
        })
    })

    it ("comfirm resetMe",function() {
        var xinde = Xindi.at(xindedata);

        return xinde.getWaitOperationNos(1,14 ,2).then(function (res) {
            console.log( "wait comfirm operations :",res.toString(10))
            res.forEach(function(r){
                return xinde.getOperation_resetMe(r).then(function (res) {
                    //console.log( "operation detail:")
                    //console.log("No","role","           new address               ","status")
                    //console.log(res[0].toString(10),res[1].toString(10),res[2].toString(16) ,res[3].toString(10))
                    console.log("try comfirm next operation :")

                        if(res[3]==0) {
                            console.log("No", "role", "           new address               ", "status")
                            console.log(res[0].toString(10), res[1].toString(10), res[2].toString(16), res[3].toString(10))
                            return xinde.resetMeC(res[2], res[1], res[0], {from: accounts[0]}).then(function (tx) {
                                console.log(web3.eth.getTransactionReceipt(tx));
                            })
                        }


                })
            })
        })
    })

})