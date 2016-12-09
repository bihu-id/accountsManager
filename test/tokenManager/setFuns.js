registar=require("./../../registar")

contract('registar fun of TokenManager', function(accounts) {

    it("registar fun of TokenManager", function () {
        registar.register("TokenManager",LogicProxy,accounts)
    })
})