var _deploy=require("./../../deploy.js")

contract('deploy xindi data', function(accounts) {

    it("set accountManager porxy and data", function(){

        return _deploy.deployData("AccountManager",LogicProxy,Data)

    });
})



