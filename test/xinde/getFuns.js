registar=require("./../../registar")

contract('get fun of Xindi', function(accounts) {

    it("get fun of Xindi", function () {

        return registar.get("Xindi", LogicPorxy)
    })
})