registar=require("./../../registar")

contract('registar fun of account', function(accounts) {

    it("registar fun of account", function () {

        return registar.register("Account", LogicPorxy, accounts)
    })
})