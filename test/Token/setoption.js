contract('deploy token manager', function(accounts) {
    var txm="0x1de4706461195a5f181d9b9226634c2986340182"
    it("set option", function(){

        var instance =TokenManager.at(txm);
        return instance.setOption(accounts[13],accounts[1],7200,200,{from:accounts[0]}).then(function(tx){
            console.log(web3.eth.getTransactionReceipt(tx));
        })

    });
    /*
    it("summary " ,function(){
        var instance =TokenManager.at(txm);
        //console.log(instance);
        return instance.summary().then(function(res){
            console.log(res.toString(16))
        })
    })*/
})