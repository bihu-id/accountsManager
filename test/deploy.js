var _deploy=require("./../deploy.js")

contract('deploy xindi data', function(accounts) {

    it("set xindi porxy", function () {
        return _deploy.deployData("Xindi", LogicPorxy, Data)

    })

    it("set xindi Logic", function () {
        return _deploy.deployData("Xindi", Xindi)

    })

    it("deploy txManger data", function(){

        return _deploy.deployData("TxManager",LogicPorxy,Data)

    })

    it("deploy txManger Logic", function(){

        return _deploy.deploy("TxManager",TxManager)

    })

    it("set TokenManager porxy and data", function(){

        return _deploy.deployData("TokenManager",LogicPorxy,Data)

    })
    
    it("deploy TokenManager logic", function(){

        return _deploy.deploy("TokenManager",AccountManager)

    })

    it("deploy Token logic", function(){

        return _deploy.deploy("Token",AccountManager)

    })

    it("set accountManager porxy and data", function(){

        return _deploy.deployData("AccountManager",LogicPorxy,Data)

    })

    it("deploy AccountManager logic", function(){

        return _deploy.deploy("AccountManager",AccountManager)

    })

    it("deploy Account logic", function(){

        return _deploy.deploy("Account",Account)

    })
    

})