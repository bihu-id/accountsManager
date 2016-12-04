address=require("./address.js")
funs=require("./funs.js")
contract('set xindi funs', function(accounts) {

    var xindeporxy = address.xindeporxy
    var xindedata = address.xindedata

    var XindiFuns=funs.Xindi;
    it("deploy xinde logic",function(){

        return Xinde.new().then(function(instance){
            var porxy=LogicPorxy.at(xindeporxy)
            console.log("xindi logic:",instance.address);
            return XindiFuns.forEach(function(fun){
                //console.log(xindelogic)
                porxy.setfun(instance.address,fun.sig,fun.resSize,fun.gas,{from:accounts[0],gas:500000}).then(function(tx){
                    console.log(fun.name)
                    console.log(web3.eth.getTransactionReceipt(tx))

                });
            })
        })
    });
    /*it("deploy account logic",function(){

     return Account.new().then(function(instance){
     var porxy=LogicPorxy.at(accountporxy)
     return AccountFuns.forEach(function(fun){
     porxy.setfun(instance.address,fun.sig,fun.resSize,fun.gas,{from:accounts[0],gas:500000}).then(function(tx){
     //console.log(funs[i].name);
     });
     })
     })
     });*/

})