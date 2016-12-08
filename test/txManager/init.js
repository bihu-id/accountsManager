var getRpcStr=require("./../../getRpcServe.js")
contract('init', function(accounts) {

    var address=getRpcStr.get()
    var TxManagerProxy=address.TxManagerProxy;
    var TxManagerData=address.TxManagerData;

    it ("init",function(){
        var instance=TxManager.at(TxManagerData)
        return instance.init({from:accounts[0]}).then(function(tx){
            console.log(web3.eth.getTransactionReceipt(tx));
        })
    });

})