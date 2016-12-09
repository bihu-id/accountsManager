registar=require("./../../registar")

contract('comfirm registar fun', function(accounts) {

    it("comfirm registar fun ", function () {

        return registar.comfirm("Xindi", LogicProxy, accounts[0],accounts[0])
    })
})