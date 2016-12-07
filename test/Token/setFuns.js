address=require("./../address.js")
Funs=require("./../funs.js")
contract('set tokenmanager fun', function(accounts) {

    var tokonManagerporxy = address.tokonManagerporxy
    var tokonManagerdata = address.tokonManagerdata

    var token=address.token
    var funs=Funs.TokenManager;
    var funs2=Funs.Token;

    it("set tokenmanager fun ",function() {

        return TokenManager.new().then(function (instance) {
            var porxy = LogicPorxy.at(tokonManagerporxy)
            console.log("tokonManager logic:", instance.address);
            var addr = instance.address;
            //addr='0x37f550f3a596ae16a297d6a305e90e66551ebb9e'
            var keys = Object.keys(funs)
            return keys.forEach(function (k) {

                var fun = funs[k];
                porxy.setfun(addr, fun.sig, fun.resSize, {from: accounts[0], gas: 150000}).then(function (tx) {
                    console.log(tx)
                })
            })
        });
    })
    it("set token fun ",function(){

        return Token.new().then(function(instance){
            var porxy=LogicPorxy.at(token)
            console.log("tokon logic:",instance.address);
            var addr=instance.address;
            //addr='0x37f550f3a596ae16a297d6a305e90e66551ebb9e'
            var keys=Object.keys(funs2)
            return keys.forEach(function(k){

                var fun=funs2[k];
                porxy.setfun(addr,fun.sig,fun.resSize,{from:accounts[0],gas:150000}).then(function(tx){
                    console.log(tx)
                })
            })
        });

    })
})