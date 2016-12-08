address=require("./../../address.js")
contract('init TokenManager', function(accounts) {

    var address=getRpcStr.get()
    var TokenManagerData=address.TokenManagerData
    var XindiData=address.XindiData
    var TokenPorxy=address.TokenPorxy
    it("tokenManager init", function(){

        var instance=TokenManager.at(TokenManagerData);
        return instance.init(XindiData,TokenPorxy,{from:accounts[0],gas:10000000}).then(function(tx){
            console.log(web3.eth.getTransactionReceipt(tx));
        })
    });

})