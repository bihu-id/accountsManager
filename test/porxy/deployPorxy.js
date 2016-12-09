contract('deployproxy', function(accounts) {

    for(var i=0;i<4;i++)
        console.log("%v : %s",i,accounts[i])

    var proxy;

    var keyT=accounts[2]
    var keyTC=accounts[3]

    it("deploy porxy", function(){
        return LogicProxy.new().then(function(instance){
            proxy=instance.address;
            //instance=LogicProxy.at("0xe47cd36a96eef34f4c8c52c35f1d44a2825312bf")
            console.log(proxy)
            instance.getKeys().then(function(res){
                res.forEach(function(key){
                    console.log(key.toString(16))
                })
            })
        });
    });

    it("set key", function(){
        var instance =LogicProxy.at(proxy)
        
        //instance.resetKey(2,accounts[2],{from:accounts[0]})
        instance.resetKey(3,accounts[3],{from:accounts[0]}).then(function(tx){

            instance.getKeys().then(function(res){
                console.log("keys:")
                res.forEach(function(key){
                    console.log(key.toString(16))
                })
            })

            instance.getWaitKeys().then(function(res){
                console.log("wait keys:")
                res.forEach(function(key){
                    console.log(key.toString(16))
                })
            })

            return instance.requestComfirm(0,{from:accounts[0]}).then(function(tx){
                instance.comfirm(0,{from:accounts[0]}).then(function(tx){
                    instance.getKeys().then(function(res){
                        console.log("keys ater reset:")
                        res.forEach(function(key){
                            console.log(key.toString(16))
                        })
                    })
                })
            })
        })
    });

    it("set key", function(){
        var instance =LogicProxy.at(proxy)

        instance.resetKey(2,accounts[2],{from:accounts[0]}).then(function(tx){

            instance.getKeys().then(function(res){
                console.log("keys:")
                res.forEach(function(key){
                    console.log(key.toString(16))
                })
            })

            instance.getWaitKeys().then(function(res){
                console.log("wait keys:")
                res.forEach(function(key){
                    console.log(key.toString(16))
                })
            })

            return instance.requestComfirm(0,{from:accounts[0]}).then(function(tx){
                instance.comfirm(0,{from:accounts[0]}).then(function(tx){
                    instance.getKeys().then(function(res){
                        console.log("keys ater reset:")
                        res.forEach(function(key){
                            console.log(key.toString(16))
                        })
                    })
                })
            })
        })
    });
})