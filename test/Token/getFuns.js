registar=require("./../../registar")

contract('get fun of Token', function(accounts) {

    it("get fun of Token", function () {

        return registar.get("Token", LogicPorxy)
    })
})