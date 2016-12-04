Funs=require("./../funs.js")
address=require("./../address.js")

contract('init', function(accounts) {

    var TxManagerporxy=address.TxManagerporxy;
    var TxManagerData=address.TxManagerData;

    it ("init",function(){
        var txManager=TxManager.at(TxManagerData)
        return txManager.init({from:accounts[18]}).then(function(tx){
            console.log(web3.eth.getTransactionReceipt(tx));
        })
    });

})