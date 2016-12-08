registar=require("./../../registar")

contract('registar fun of Xindi', function(accounts) {

    it("registar fun of Xindi", function () {

        return registar.register("Xindi", LogicPorxy, accounts)
    })
})