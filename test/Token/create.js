contract('create token', function(accounts) {

    var tokenmanager="0xac6ac72d7306633a530a26c3374014aeb7f38ae8";
    /*it("deploy token manager", function(){
        return TokenManager.new().then(function(instance){
            //xindeporxy=instance.address;
            tokenmanager=instance.address;
            console.log("tokenManager:",instance.address)
            return instance.setOption(3600,accounts[0],200,{from:accounts[0]}).then(function(tx){
                console.log(tx);
            })
        });
    });*/

    it("create token", function(){
        var tokenManager=TokenManager.at(tokenmanager);
        /*function createToken(
            address _issuer,
            string _symbol,
            uint _id,
            uint _maxSupply,
            uint _precision,
            uint _currentSupply,
            uint  _closingTime,
            string _description,
            uint  _hash)*/
        var id=1*2^48+666
        return tokenManager.createToken(0x1111,"BBB",id,10000000,2,500000,1000000,"测试",0x10000000,{from:accounts[0],gas:10000000}).then(function(tx){
            console.log(tx);
        })
    });

})