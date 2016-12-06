address=require("./../address.js")
funs=require("./../funs.js")
contract('get account funs', function(accounts) {

    var accountManagerporxy = address.accountManagerporxy
    var accountPorxy = address.accountPorxy

    var Funs=funs.Account;
    it("get account  fun",function(){
        var porxy=LogicPorxy.at(accountPorxy)
        console.log("   name  ","           address        ","return size","gas needed")
        var keys=Object.keys(Funs)
        return keys.forEach(function(k){
            //console.log(xindelogic)
            var fun=Funs[k];
            return porxy.get.call(fun.sig).then(function(res){
                console.log("0x"+res[0].toString(16),res[1].toString(10)/32,res[2].toString(10),fun.name)

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