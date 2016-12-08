var _deploy=require("./../../deploy.js")

contract('deploy txManger Logic', function(accounts) {

    it("deploy txManger Logic", function(){

        return _deploy.deploy("TxManager",null,TxManager)

    });
})
