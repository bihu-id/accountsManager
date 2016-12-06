address=require("./../address.js")
funs=require("./../funs.js")
contract('set account and accountManager funs', function(accounts) {

    var accountManagerporxy=address.accountManagerporxy;
    var accountManager=address.accountManager;

    var accountPorxy=address.accountPorxy
    var Funs = funs.AccountManager;
    var FunsAccount = funs.Account;
    it("deploy AccountManager logic", function () {

        return AccountManager.new().then(function (instance) {
            var porxy = LogicPorxy.at(accountManagerporxy)
            var addr = instance.address;
            //addr='0x06e115285a6793db09be46df83c021c100f8324b'
            var keys=Object.keys(Funs)
            return keys.forEach(function (k) {
                //console.log(xindelogic)
                var fun=Funs[k]
                porxy.setfun(addr, fun.sig, fun.resSize, {from: accounts[0], gas: 150000}).then(function (tx) {
                    console.log(tx)
                })
            })
        });
    })

    it("set account fun", function () {

        return Account.new().then(function (instance) {
            var porxy = LogicPorxy.at(accountPorxy)
            var addr = instance.address;
            //addr='0x06e115285a6793db09be46df83c021c100f8324b'
            var keys=Object.keys(FunsAccount)
            return keys.forEach(function (k) {
                //console.log(xindelogic)
                var fun=FunsAccount[k]
                porxy.setfun(addr, fun.sig, fun.resSize, {from: accounts[0], gas: 150000}).then(function (tx) {
                    console.log(tx)
                })
            })
        });
    })
})