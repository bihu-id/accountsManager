contract('deploy token manager', function(accounts) {
    var txm;
    it("deploy token manager", function(){
         return TokenManager.new(accounts[13]).then(function(instance){
         tokenmanager=instance.address;
         console.log("tokenManager:",instance.address)
             txm=instance.address;
             console.log(accounts[0])
             console.log(accounts[13])
         return instance.setOption(accounts[13],accounts[1],3600,200,{from:accounts[0]}).then(function(tx){
            //console.log(getTransactionReceipt(tx));
            })
         });
     });
    it("summary " ,function(){
        var instance =TokenManager.at(txm);
        //console.log(instance);
        return instance.summary().then(function(res){
            console.log(res.toString(16))
        })
    })

    it("set token able  " ,function(){
        var instance =TokenManager.at(txm);
        //console.log(instance);
        return instance.setTokenAble(accounts[1],true,{from:accounts[12]}).then(function(tx){
            console.log(getTransactionReceipt(tx));
        })
    })

    /*it("set token able  " ,function(){
        var instance =TokenManager.at(txm);
        //console.log(instance);
        instance.setTokenAble(accounts[1],true,{from:accounts[13]}).then(function(tx){
            console.log(web3.eth.getTransactionReceipt(tx));
        })
    })*/

    it("get  token able  " ,function(){
        var instance =TokenManager.at(txm);
        //console.log(instance);
        return instance.getTokenAble(accounts[1]).then(function(res){
            console.log(res);
        })
    })
})