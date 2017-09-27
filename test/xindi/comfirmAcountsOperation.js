var getRpcStr=require("./../../getRpcServe.js")

contract('reset owner of account', function(accounts) {

    var address=getRpcStr.get()
    var xindidata = address.XindiData

    it("get waiting accounts operation and Confirm ", function(){
        var xindi=Xindi.at(xindidata)
        xindi.getOperationAmounts().then(function(res){
            console.log(res.toString())
        })
    })


    it("get waiting accounts operation and Confirm ", function(){
        var xindi=Xindi.at(xindidata)

        console.log("operation detail:")
        console.log("No", "account", "           data               ", "status")
        return xindi.getWaitOperationNos(1,10,1).then(function(res0){
            console.log("wait operation amount %d",res0.toString())

            res0.forEach(function (r) {
                return xindi.getOperation(r).then(function (res) {
                    console.log(res.toString())
                    console.log("reset account owner use %s",accounts[1])
                    //console.log(res[0].toString(10), res[1].toString(16), res[2].toString(16),res[3].toString(10), res[4][0].toString(10),'0x'+res[4][1].toString(16),res[4][2].toString(10))
                    return xindi.confirm(res[0],res[1],{from:accounts[7],gas:3000000}).then(function(tx){
                        console.log(web3.eth.getTransactionReceipt(tx))
                    })
                })
            })
        })
    })
    
})