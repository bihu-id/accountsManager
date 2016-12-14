registar=require("./../../registar")

contract('registar fun of TokenManager', function(accounts) {
    
    it("Confirm registar fun ", function () {

        return registar.confirm("TokenManager", LogicProxy, accounts[0],accounts[0])
    })
})