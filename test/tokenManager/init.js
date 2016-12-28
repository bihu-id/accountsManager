var getRpcStr=require("./../../getRpcServe.js")
contract('init TokenManager', function(accounts) {

    var address=getRpcStr.get()
    var TokenManagerData=address.TokenManagerData
    var XindiData=address.XindiData
    var TokenProxy=address.TokenProxy
    var AccountManger=address.AccountManagerData
    it("tokenManager init", function(){

        var instance=TokenManager.at(TokenManagerData);
        return instance.init(accounts[0],accounts[0],XindiData,AccountManger,TokenProxy,{from:accounts[0],gas:10000000}).then(function(tx){
            console.log(web3.eth.getTransactionReceipt(tx));
            console.log(parseInt(web3.eth.getTransactionReceipt(tx).logs[0].data,16))
        })
    });

})