var getRpcStr=require("./../../getRpcServe.js")

contract('xindi summary', function(accounts) {

    var address=getRpcStr.get()
    var xindedata=address.XindiData
    console.log(address)
    
    it("get resetMe operation ", function(){
        console.log(xindedata)
        var xinde=Xindi.at(xindedata);
        xinde.getOperationAmounts_resetMe.call().then(function(res){
            console.log("wait resetMe amounts :",res.toString(10))
            amount=res[1];
        })
    })
    it ("get all waiting operation resetMe",function() {
        var xinde = Xindi.at(xindedata);

        return xinde.getWaitOperationNos(1,16 ,2).then(function (res) {
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

        var xindi=Xindi.at(xindedata);
        xindi.getKeys.call().then(function(res){
            console.log("keys:")
            for(var i=0;i<res.length;i++)
                console.log("%s :%s ","key"+i,res[i].toString(16))

        })
        xindi.getOptions.call().then(function(res){
            console.log("options:")

            console.log("key amounts:%s \n option amounts: %s ",parseInt(res[0],16) ,parseInt(res[1],16))

        })
    });
});