registar=require("./../../registar")

contract('registar fun of Xindi', function(accounts) {

    it("registar fun of Xindi", function () {

        return registar.register("Xindi", LogicProxy, accounts[0])
    })

    /*it("comfirm registar fun ", function () {

        return registar.register("Xindi", LogicProxy, accounts[0],accounts[0])
    })*/
})