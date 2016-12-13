var getRpcStr=require("./../../getRpcServe.js")
contract('init xindi', function(accounts) {

    var address=getRpcStr.get()
    var xindedata=address.XindiData
    var AccountManagerData=address.AccountManagerData
    it("xinde init", function(){

        var instance=Xindi.at(xindedata);
        return instance.init(AccountManagerData,{from:accounts[0],gas:10000000}).then(function(tx){
            console.log(web3.eth.getTransactionReceipt(tx));
        })
    });

})