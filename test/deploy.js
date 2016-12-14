var _deploy=require("./../deploy.js")
var getRpcStr=require("./../getRpcServe.js")

contract('deploy xindi data', function(accounts) {

    var rpcAddress=getRpcStr.get()
    it("set xindi data and proxy", function () {
        return _deploy.deployDataWS("Xindi", LogicProxy, Data ,function(rpcA){
            Object.keys(rpcA).forEach(function(k){
                    rpcAddress[k]=rpcA[k]
            })
        })
    })

    it("set xindi Logic", function () {
        return _deploy.deployWS("Xindi",null, Xindi,function(rpcA){
            Object.keys(rpcA).forEach(function(k){
                rpcAddress[k]=rpcA[k]
            })
        })

    })

    it("deploy txManger data", function(){

        return _deploy.deployDataWS("TxManager",LogicProxy,Data,function(rpcA){
            Object.keys(rpcA).forEach(function(k){
                rpcAddress[k]=rpcA[k]
            })
        })

    })

    it("deploy txManger Logic", function(){

        return _deploy.deployWS("TxManager",null,TxManager,function(rpcA){
            Object.keys(rpcA).forEach(function(k){
                rpcAddress[k]=rpcA[k]
            })
        })

    })

    it("set TokenManager porxy and data", function(){

        return _deploy.deployDataWS("TokenManager",LogicProxy,Data,function(rpcA){
            Object.keys(rpcA).forEach(function(k){
                rpcAddress[k]=rpcA[k]
            })
        })

    })
    
    it("deploy TokenManager logic", function(){

        return _deploy.deployWS("TokenManager",null,TokenManager,function(rpcA){
            Object.keys(rpcA).forEach(function(k){
                rpcAddress[k]=rpcA[k]
            })
        })

    })

    it("deploy Token logic", function(){

        return _deploy.deployWS("Token",LogicProxy,Token,function(rpcA){
            Object.keys(rpcA).forEach(function(k){
                rpcAddress[k]=rpcA[k]
            })
        })

    })

    it("set accountManager porxy and data", function(){

        return _deploy.deployDataWS("AccountManager",LogicProxy,Data,function(rpcA){
            Object.keys(rpcA).forEach(function(k){
                rpcAddress[k]=rpcA[k]
            })
        })

    })

    it("deploy AccountManager logic", function(){

        return _deploy.deployWS("AccountManager",null,AccountManager,function(rpcA){
            Object.keys(rpcA).forEach(function(k){
                rpcAddress[k]=rpcA[k]
            })
        })

    })

    it("deploy Account logic", function(){

        return _deploy.deployWS("Account",LogicProxy,Account,function(rpcA){
            Object.keys(rpcA).forEach(function(k){
                rpcAddress[k]=rpcA[k]
            })
        })

    })

    it ("save ",function(){
        setTimeout(function(){getRpcStr.save(rpcAddress)},20000)
    })

})