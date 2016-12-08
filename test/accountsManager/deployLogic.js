var _deploy=require("./../../deploy.js")

contract('deploy AccountManager logic', function(accounts) {

    it("deploy AccountManager logic", function(){

        return _deploy.deploy("AccountManager",LogicPorxy,AccountManager)

    });
})