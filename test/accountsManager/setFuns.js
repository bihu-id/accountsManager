registar=require("./../../registar")

contract('registar fun of accountManager', function(accounts) {

    it("registar fun of accountManager", function () {

        return registar.register("AccountCreator",LogicProxy,accounts[0])
    })
    
})