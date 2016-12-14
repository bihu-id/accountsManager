registar=require("./../../registar")

contract('registar fun of TxManager', function(accounts) {

    it("registar fun of TxManager", function () {

        return registar.register("TxManager", LogicProxy, accounts[0])
    })

    it("Confirm registar fun ", function () {

        return registar.register("TxManager", LogicProxy, accounts[0],accounts[0])
    })
    
})