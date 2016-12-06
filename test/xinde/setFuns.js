address=require("./../address.js")
funs=require("./../funs.js")
contract('set xindi funs', function(accounts) {

    var xindeporxy = address.xindeporxy
    var xindedata = address.xindedata

    var XindiFuns=funs.Xindi;

    it("deploy xinde logic",function(){

        return Xindi.new().then(function(instance){
            var porxy=LogicPorxy.at(xindeporxy)
            console.log("xindi logic:",instance.address);
            var addr=instance.address;
            //addr='0x37f550f3a596ae16a297d6a305e90e66551ebb9e'
            var keys=Object.keys(XindiFuns)
            return keys.forEach(function(k){
                //console.log(xindelogic)
                var fun=XindiFuns[k];
                porxy.setfun(addr,fun.sig,fun.resSize,{from:accounts[0],gas:150000}).then(function(tx){
                    console.log(tx)
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
})