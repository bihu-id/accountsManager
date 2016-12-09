registar=require("./../../registar")

contract('get fun of TokenManager', function(accounts) {

    it("get fun of TokenManager", function () {

        return registar.get("TokenManager", LogicProxy)
    })
})