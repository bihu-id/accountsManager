var getRpcStr=require("./../../getRpcServe.js")
contract('init xindi', function(accounts) {

    var address=getRpcStr.get()
    var xindedata=address.XindiData

    it("xinde init", function(){

        var instance=Xindi.at(xindedata);
        return instance.init({from:accounts[0],gas:10000000}).then(function(tx){
            console.log(web3.eth.getTransactionReceipt(tx));
        })
    });

})