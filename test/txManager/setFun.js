registar=require("./../../registar")

contract('registar fun of TxManager', function(accounts) {

    it("registar fun of TxManager", function () {

        return registar.register("TxManager", LogicProxy, accounts)
    })
})