var _deploy=require("./../../deploy.js")

contract('deploy Account logic', function(accounts) {


    it("deploy Account logic", function(){

        return _deploy.deploy("Account",Account)

    });
})