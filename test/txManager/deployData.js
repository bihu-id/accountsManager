var _deploy=require("./../../deploy.js")

contract('deploy txManger data', function(accounts) {

    it("deploy txManger data", function(){

        return _deploy.deployData("TxManager",LogicProxy,Data)

    });
})
