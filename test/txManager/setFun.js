Funs=require("./../funs.js")
address=require("./../address.js")

contract('deploy TxManager data', function(accounts) {

    var TxManagerporxy=address.TxManagerporxy;
    var TxManagerData=address.TxManagerData;
    var funs=Funs.TxManager
    it ("set function",function(){
        var porxy=LogicPorxy.at(TxManagerporxy)
        return TxManager.new().then(function(instance){
            return funs.forEach(function(fun){
                console.log(fun.name)
                return porxy.setfun(instance.address,fun.sig,fun.resSize,{from:accounts[0]}).then(function(tx){
                    console.log(web3.eth.getTransactionReceipt(tx));
                })
            })

        })
    });

})