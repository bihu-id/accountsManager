var _deploy=require("./../../deploy.js")

contract('deploy Token logic', function(accounts) {

    it("deploy Token logic", function(){

        return _deploy.deploy("Token",LogicPorxy,AccountManager)

    });

})