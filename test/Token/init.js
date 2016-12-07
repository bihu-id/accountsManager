address=require("./../address.js")
contract('init tokenManager', function(accounts) {

    var tokenManager=address.tokonManagerdata
    var xindi=address.xindedata
    var tokenporxy=address.tokenporxy
    it("tokenManager init", function(){

        var instance=TokenManager.at(tokenManager);
        return instance.init(xindi,tokenporxy,{from:accounts[0],gas:10000000}).then(function(tx){
            console.log(web3.eth.getTransactionReceipt(tx));
        })
    });

})