address=require("./../address.js")

contract('deploy TxManager data', function(accounts) {

    var TxManagerporxy=address.TxManagerporxy;
    var TxManagerData=address.TxManagerData;

    /*it ("change owner and core",function(){
        var txManager=TxManager.at(TxManagerData)

        txManager.resetOwner(accounts[20],{from:accounts[18]}).then(function(tx){
            console.log(web3.eth.getTransactionReceipt(tx));
        })
    });*/

    it ("summay ",function(){
        var txManager=TxManager.at(TxManagerData)

        return txManager.summary.call().then(function(res){
            console.log(res[0].toString(16),res[1].toString(16));
        })


    });

})