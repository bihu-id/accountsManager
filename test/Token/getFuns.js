address=require("./../address.js")
Funs=require("./../funs.js")
contract('get tokonManager funs', function(accounts) {

    var tokonManagerporxy = address.tokonManagerporxy
    var tokonManagerdata = address.tokonManagerdata

    var funs=Funs.TokenManager;

    it("deploy tokon Manager logic",function(){
        var porxy=LogicPorxy.at(tokonManagerporxy)
        console.log("   name  ","           address        ","return size")
        var keys=Object.keys(funs)
        return keys.forEach(function(k){
            //console.log(xindelogic)
            var fun=funs[k];
            return porxy.get.call(fun.sig).then(function(res){
                console.log("0x"+res[0].toString(16),res[1].toString(10)/32,fun.name)

            });
        })

    });
})