registar=require("./../../registar")

contract('get fun of account', function(accounts) {

    it("get fun of account", function () {

        return registar.get("Account", LogicPorxy)
    })
})