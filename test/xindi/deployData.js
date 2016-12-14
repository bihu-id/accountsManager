
var _deploy=require("./../../deploy.js")
contract('deploy xindi data', function(accounts) {

    it("set xindi porxy", function () {
        _deploy.deployData("Xindi", LogicProxy, Data)

    })
})