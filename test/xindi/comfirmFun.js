registar=require("./../../registar")

contract('Confirm registar fun', function(accounts) {

    it("Confirm registar fun ", function () {

        return registar.confirm("Xindi", LogicProxy, accounts[0],accounts[0])
    })
})