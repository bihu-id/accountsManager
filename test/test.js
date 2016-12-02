contract(' test', function(accounts) {
    var test;
    it("deploy",function(){
        return Test.new().then(function(instance){
            //console.log(instance.address)
            test=instance.address;
        })
    })
    it("set",function(){
        var t_test =Test.at(test);
        return t_test.Data(1000,{from:accounts[0]}).then(function(tx){
            console.log(tx);
        })
    })

    /*it("get",function(){
        var t_test =Test.at(test);
        return t_test.get.call().then(function(res){
            console.log("res:",res.toString(10))
        })
    })

/*
    it("set",function(){
        var t_test =Test.at(test);
        return t_test.set(2,2,{from:accounts[0]}).then(function(tx){
            console.log(web3.eth.getTransactionReceipt(tx));
        })
    })

    it("get",function(){
        var t_test =Test.at(test);
        return t_test.get.call().then(function(res){
            console.log(res.toString(10))
        })
    })

    it("getm",function(){
        var t_test =Test.at(test);
        return t_test.getm.call(3).then(function(res){
            console.log(res.toString(10))
        })
    })

    it("getm",function(){
        var t_test =Test.at(test);
        return t_test.getm.call(1).then(function(res){
            console.log(res.toString(10))
        })
    })
    it("getm",function(){
        var t_test =Test.at(test);
        return t_test.getm.call(2).then(function(res){
            console.log(res.toString(10))
        })
    })*/

})