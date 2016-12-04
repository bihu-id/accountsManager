address=require("./../address.js")
funs=require("./funs.js")
contract('set xindi funs', function(accounts) {

    var accountManagerporxy=address.accountManagerporxy;
    var accountManager=address.accountManager;
    var xindi=xindedata;

    var Funs = funs.accountManager;
    it("deploy AccountManager logic", function () {

        return AccountManager.new(accounts[0],xindi,0x10000,accountporxy).then(function (instance) {
            var porxy = LogicPorxy.at(accountManagerporxy)
            var addr = instance.address;
            //addr='0x06e115285a6793db09be46df83c021c100f8324b'
            return Funs.forEach(function (fun) {
                //console.log(xindelogic)
                porxy.setfun(addr, fun.sig, fun.resSize, fun.gas, {from: accounts[0], gas: 150000}).then(function (tx) {
                    console.log(tx)
                })
            })
        });
    })
})