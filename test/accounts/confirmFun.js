registar=require("./../../registar")

contract('registar fun of account', function(accounts) {

    it("Confirm registar fun ", function () {

        return registar.confirm("Account", LogicProxy, accounts[0],accounts[0])
    })
})