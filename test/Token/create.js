contract('create token', function(accounts) {

    var tokenmanager="0x4c46815ee7584c6a842b98f81e5cf5e687a60ed0";

    /*it("create token", function(){
        var tokenManager=TokenManager.at(tokenmanager);

        var id=1
        return tokenManager.createToken("AAA",id,10000000,2,500000,0,"测试AAA",0x10000000,{from:accounts[1],gas:10000000}).then(function(tx){
            console.log(getTransactionReceipt(tx));
        })
    });
    it("create token", function(){
        var tokenManager=TokenManager.at(tokenmanager);

        var id=1*2^48+2
        return tokenManager.createToken("BBB",id,10000000,2,500000,0,"测试BBB",0x10000000,{from:accounts[1],gas:10000000}).then(function(tx){
            console.log(tx);
        })
    });*/

    it("get  token", function(){
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
        return tokenManager.getTokenIds(1,10).then(function(res){
            res.forEach(function(r){
                return tokenManager.getTokenSurmmary(r).then(function(res){
                    var token=Token.at(res[2]);
                    return token.surmmay().then(function(res){
                        console.log(res.toString())
                })
            })
        })

    });
    })

})