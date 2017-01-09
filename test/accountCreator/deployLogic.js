var _deploy=require("./../../deploy.js")

contract('deploy AccountCreator logic', function(accounts) {

    it("deploy AccountCreator logic", function(){

        return _deploy.deploy("AccountCreator",null,AccountCreator)

    });
})