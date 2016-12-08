
var _deploy=require("./../../deploy.js")
contract('deploy xindi Logic', function(accounts) {

    it("set xindi Logic", function () {
        _deploy.deployData("Xindi", Xindi)

    })
})