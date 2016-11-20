address=require("./address.js")
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

    it("get waiting accounts operation and comfirm ", function(){
        var xinde=Xinde.at(xindedata)
        xinde.getOperationAmounts().then(function(res){
            console.log(res.toString())
        })
    })


    it("get waiting accounts operation and comfirm ", function(){
        var xinde=Xinde.at(xindedata)

        console.log("operation detail:")
        console.log("No", "account", "           data               ", "status")
        return xinde.getWaitOperationNos(1,10,1).then(function(res){
            console.log("wait operationa amount %d",res.toString())

            res.forEach(function (r) {
                return xinde.getOperation(r).then(function (res) {
                    console.log(res[0].toString(10), res[1].toString(16), res[2].toString(16),res[3].toString(10), res[4][0].toString(10),'0x'+res[4][1].toString(16),res[4][2].toString(10))
                    return xinde.comfirm(res[1],res[0],{from:accounts[1]}).then(function(tx){
                        console.log(tx)
                    })
                })
            })
        })
    })
    
})