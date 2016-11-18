address=require("./address.js")
contract('check function', function(accounts) {

    /*var xindeporxy="0xd3d0ba368c5cdeba40302ac3576d02a67a9d73e5"
     var xindelogic="0xfc7a9bf56a73a47fc6b3bc4276c67b92269ba2cd"
     var xindedata="0xadad94ba7073b245cf5e6df985889af5cdd5bb36"
     var accountManager="0xb4ae67f0c948ce1b65e85583a8f71c7c3a73b152"
     var accountlogic="0x1579ae66a887ad8417103b457cd0446bbec8432e"
     var accountporxy="0xcd0bcaa76ec79ba7f27a2a1aef1271f009c996ed"*/

    var xindeporxy=address.xindeporxy
    var xindelogic=address.xindelogic
    var xindedata=address.xindedata
    var accountManager=address.accountManager
    var accountlogic=address.accountlogic
    var accountporxy=address.accountporxy
    
    it("get resetMe operation ", function(){

        var xinde=Xinde.at(xindedata);
        xinde.getOperationAmounts_resetMe.call().then(function(res){
            console.log("wait resetMe amounts :",res.toString(10))
            amount=res[1];
        })
    })

    it ("get all waiting operation resetMe",function() {
        var xinde = Xinde.at(xindedata);

        return xinde.getWaitOperationNos(1,5 ,2).then(function (res) {
            console.log( "wait comfirm operations :",res.toString(10))
            res.forEach(function(w){
                return xinde.getOperation_resetMe(w).then(function (res) {
                    console.log( "operation detail:")
                    console.log("No","role","           new address               ","status")
                    console.log(res[0].toString(10),res[1].toString(10),res[2].toString(16) ,res[3].toString(10))

                })
            })
        })
    })
    it("xinde summary", function(){

        var xinde=Xinde.at(xindedata);
        return xinde.summary.call().then(function(res){
            console.log("keys:")
            for(var i=0;i<res.length;i++)
                console.log("%s :%s ","key"+i,res[i].toString(16))

        })
    });
});