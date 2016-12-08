registar=require("./../../registar")

contract('get fun of accountManager', function(accounts) {

    it("get fun of accountManager", function () {

        return registar.get("AccountManager", LogicPorxy)
    })
})