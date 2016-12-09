registar=require("./../../registar")

contract('registar fun of accountManager', function(accounts) {

    it("registar fun of accountManager", function () {

        return registar.register("AccountManager",LogicProxy,accounts[0])
    })

    it("comfirm registar fun ", function () {

        return registar.register("AccountManager", LogicProxy, accounts[0],accounts[0])
    })
    
})