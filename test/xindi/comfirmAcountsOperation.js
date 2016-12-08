var getRpcStr=require("./../../getRpcServe.js")

contract('reset owner of account', function(accounts) {

    var address=getRpcStr.get()
    var xindedata = address.XindiData

    it("get waiting accounts operation and comfirm ", function(){
        var xinde=Xindi.at(xindedata)
        xinde.getOperationAmounts().then(function(res){
            console.log(res.toString())
        })
    })


    it("get waiting accounts operation and comfirm ", function(){
        var xinde=Xindi.at(xindedata)

        console.log("operation detail:")
        console.log("No", "account", "           data               ", "status")
        return xinde.getWaitOperationNos(1,10,1).then(function(res0){
            console.log("wait operationa amount %d",res0.toString())

            res0.forEach(function (r) {
                return xinde.getOperation(r).then(function (res) {
                    console.log("reset account owner use %s",accounts[1])
                    console.log(res[0].toString(10), res[1].toString(16), res[2].toString(16),res[3].toString(10), res[4][0].toString(10),'0x'+res[4][1].toString(16),res[4][2].toString(10))
                    return xinde.comfirm(res[1],res[0],{from:accounts[1],gas:4000000}).then(function(tx){
                        console.log(web3.eth.getTransactionReceipt(tx))
                    })
                })
            })
        })
    })
    
})