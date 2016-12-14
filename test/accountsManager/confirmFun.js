registar=require("./../../registar")

contract('registar fun of accountManager', function(accounts) {

    it("Confirm registar fun ", function () {

        return registar.confirm("AccountManager", LogicProxy, accounts[0],accounts[0])
    })

})