var _deploy=require("./../../deploy.js")

contract('deploy TokenManager logic', function(accounts) {

    it("deploy TokenManager logic", function(){

        return _deploy.deploy("TokenManager",AccountManager)

    });

})