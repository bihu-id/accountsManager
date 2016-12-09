registar=require("./../../registar")

contract('registar fun of account', function(accounts) {

    it("registar fun of account", function () {

        return registar.register("Account", LogicProxy, accounts[0])
    })
    it("comfirm registar fun ", function () {

        return registar.register("Account", LogicProxy, accounts[0],accounts[0])
    })
})