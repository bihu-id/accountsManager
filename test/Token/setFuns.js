registar=require("./../../registar")

contract('registar fun of Token', function(accounts) {

    it("registar fun of Token", function () {
        registar.register("Token",LogicProxy,accounts)
    })
})