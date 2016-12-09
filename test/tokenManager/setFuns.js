registar=require("./../../registar")

contract('registar fun of TokenManager', function(accounts) {

    it("registar fun of TokenManager", function () {
        registar.register("TokenManager",LogicProxy,accounts[0])
    })

    it("comfirm registar fun ", function () {

        return registar.register("TokenManager", LogicProxy, accounts[0],accounts[0])
    })
})