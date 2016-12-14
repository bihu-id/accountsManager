registar=require("./../../registar")

contract('registar fun of Token', function(accounts) {

    it("Confirm registar fun ", function () {

        return registar.confirm("Token", LogicProxy, accounts[0],accounts[0])
    })
})