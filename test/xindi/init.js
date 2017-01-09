var getRpcStr=require("./../../getRpcServe.js")
contract('init xindi', function(accounts) {

    var address=getRpcStr.get()
    var xindedata=address.XindiData
    var AccountCreatorData=address.AccountCreatorData
    it("xinde init", function(){
        //console.log("xindi:",xindedata)
        var instance=Xindi.at(xindedata);
        //console.log(instance.abi)
        return instance.init({from:accounts[0],gas:3000000}).then(function(tx){
            console.log(web3.eth.getTransactionReceipt(tx));
        })
    });

})