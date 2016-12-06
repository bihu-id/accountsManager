address=require("./../address.js")
funs=require("./../funs.js")
contract('get xindi funs', function(accounts) {

    var xindeporxy = address.xindeporxy
    var xindedata = address.xindedata

    var XindiFuns=funs.Xindi;
    it("deploy xinde logic",function(){
        var porxy=LogicPorxy.at(xindeporxy)
        console.log("   name  ","           address        ","return size")
        var keys=Object.keys(XindiFuns)
        return keys.forEach(function(k){
            //console.log(xindelogic)
            var fun=XindiFuns[k];
            return porxy.get.call(fun.sig).then(function(res){
                console.log("0x"+res[0].toString(16),res[1].toString(10)/32,fun.name)

            });
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