Funs=require("./../funs.js")

contract('deploy TxManager data', function(accounts) {

    var TxManagerporxy;
    var TxManagerData;
    var funs=Funs.TxManager
    it("set porxy", function(){
        return LogicPorxy.new().then(function(instance){
            TxManagerporxy=instance.address;
            //console.log(xindeporxy)
            return Data.new(TxManagerporxy).then(function(instance){
                TxManagerData=instance.address;
                //console.log(xindelogic)
            });
        });
    });

    it ("console",function(){
        console.log('TxManagerporxy:'+'"'+TxManagerporxy+'",')
        console.log(' TxManagerData:'+'"'+ TxManagerData+'",')
    });

    it ("set function",function(){
        var porxy=LogicPorxy.at(TxManagerporxy)
        return TxManager.new().then(function(instance){
            var keys=Object.keys(funs)
            return keys.forEach(function(k){
                var fun =funs[k]
                return porxy.setfun(instance.address,fun.sig,fun.resSize,fun.gas,{from:accounts[0]}).then(function(tx){
                    console.log(tx);
                })
            })

        })
    });
    it ("get function",function(){
        var porxy=LogicPorxy.at(TxManagerporxy)
        var keys=Object.keys(funs)
        return keys.forEach(function(k){
            var fun =funs[k]
            return porxy.get(fun.sig).then(function(res){
                console.log(res.toString());
            })
        })
    });

})