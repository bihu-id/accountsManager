address=require("./../address.js")
funs=require("./funs.js")
contract('set xindi funs', function(accounts) {

    var xindeporxy = address.xindeporxy
    var xindedata = address.xindedata

    var XindiFuns = funs.Xindi;
    it("deploy xinde logic", function () {

        return Xindi.new().then(function (instance) {
            var porxy = LogicPorxy.at(xindeporxy)
            console.log("xindi logic:", instance.address);
            var addr = instance.address;
            //addr='0x06e115285a6793db09be46df83c021c100f8324b'
            return XindiFuns.forEach(function (fun) {
                //console.log(xindelogic)
                porxy.setfun(addr, fun.sig, fun.resSize, fun.gas, {from: accounts[0], gas: 150000}).then(function (tx) {
                    console.log(tx)
                })
            })
        });
    })
})