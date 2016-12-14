var getRpcStr=require("./../../getRpcServe.js")

contract('Confirm reset me', function(accounts) {

    var address=getRpcStr.get()

    var xindedata = address.XindiData

    it("get all waiting operation resetMe", function () {
        var xinde = Xindi.at(xindedata);
        return xinde.getWaitOperationNos(1, 20, 2).then(function (res) {
            console.log("wait Confirm operations :", res.toString(10))
            console.log("operation detail:")
            console.log("No", "role", "           new address               ", "status")
            res.forEach(function (w) {
                return xinde.getOperation_resetMe(w).then(function (res) {
                    console.log(res[0].toString(10), res[1].toString(10), res[2].toString(16), res[3].toString(10))

                })
            })
        })
    })

    it ("Confirm resetMe",function() {
        var xinde = Xindi.at(xindedata);

        return xinde.getWaitOperationNos(1,20 ,2).then(function (res) {
            console.log( "wait Confirm operations :",res.toString(10))
            res.forEach(function(r){
                return xinde.getOperation_resetMe(r).then(function (res) {
                    //console.log( "operation detail:")
                    //console.log("No","role","           new address               ","status")
                    //console.log(res[0].toString(10),res[1].toString(10),res[2].toString(16) ,res[3].toString(10))
                    console.log("try Confirm next operation :")

                        if(res[3]==0) {
                            console.log("No", "role", "           new address               ", "status")
                            console.log(res[0].toString(10), res[1].toString(10), res[2].toString(16), res[3].toString(10))
                            return xinde.resetMeC(res[0], res[1], res[2], {from: accounts[0]}).then(function (tx) {
                                console.log(web3.eth.getTransactionReceipt(tx));
                            })
                        }


                })
            })
        })
    })

})