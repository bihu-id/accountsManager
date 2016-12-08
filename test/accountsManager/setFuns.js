registar=require("./../../registar")

contract('registar fun of accountManager', function(accounts) {

    it("registar fun of accountManager", function () {

        return registar.register("AccountManager",LogicPorxy,accounts)
    })

    /*it("registar fun of accountManager", function () {

        return AccountManager.new().then(function (instance) {
            var porxy = LogicPorxy.at(accountManagerporxy)
            var addr = instance.address;
            addr='0xa0a587c2fdb519931363978e5e56ea4b964613ca'
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
            console.log("account logic:",addr)
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
    })*/
})