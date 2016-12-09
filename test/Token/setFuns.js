registar=require("./../../registar")

contract('registar fun of Token', function(accounts) {

    it("registar fun of Token", function () {
        registar.register("Token",LogicProxy,accounts[0])
    })

    it("comfirm registar fun ", function () {

        return registar.register("Token", LogicProxy, accounts[0],accounts[0])
    })
})