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
        return t_test.set("0x0047231a4beb9eb7dd980094ab3ff47f44c671ce",0,{from:accounts[0]}).then(function(tx){
            console.log(tx)
        })
    })

    it("get",function(){
        var t_test =Test.at(test);
        return t_test.get.call().then(function(res){
            console.log(res)
        })
    })

})