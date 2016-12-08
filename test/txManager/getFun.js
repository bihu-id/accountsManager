registar=require("./../../registar")

contract('get fun of TxManager', function(accounts) {

    it("get fun of TxManager", function () {

        return registar.get("TxManager", LogicPorxy)
    })
})