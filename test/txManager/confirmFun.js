registar=require("./../../registar")

contract('registar fun of TxManager', function(accounts) {
    
    it("Confirm registar fun ", function () {

        return registar.confirm("TxManager", LogicProxy, accounts[0],accounts[0])
    })

})
