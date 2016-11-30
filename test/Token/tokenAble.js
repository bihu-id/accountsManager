contract('create token', function(accounts) {

    var tokenmanager="0x4c46815ee7584c6a842b98f81e5cf5e687a60ed0";

    it("get  token able  " ,function(){
        var instance =TokenManager.at(tokenmanager);
        //console.log(instance);
        instance.getTokenAble(accounts[1]).then(function(res){
            console.log(res);
        })
        instance.getTokenAble(accounts[0]).then(function(res){
            console.log(res);
        })
    })

    it("create token with tokenAble account", function(){
        var tokenManager=TokenManager.at(tokenmanager);

        var id=100
        return tokenManager.createToken("AA1",id,10000000,2,500000,0,"测试AAA",0x10000000,{from:accounts[1],gas:10000000}).then(function(tx){
            console.log(getTransactionReceipt(tx));
        })
    });

    it("create token with non-tokenAble account", function(){
        var tokenManager=TokenManager.at(tokenmanager);

        var id=200
        return tokenManager.createToken("BB1",id,10000000,2,500000,0,"测试AAA",0x10000000,{from:accounts[0],gas:10000000}).then(function(tx){
            console.log(getTransactionReceipt(tx));
        })
    });
})
/*
test result:
 Contract: create token
 ✓ get  token able  
 [ '0x002e5f0adafd1af13f332f7f233282429e092a3c', true ]
 [ '0x00011acc6b31f530408f5c8e7912af7261908694', false ]
 1) create token with tokenAble account

 Events emitted during test:
 ---------------------------

 TokenCreate(_issuer: 0x002e5f0adafd1af13f332f7f233282429e092a3c, _symbol: AA1, _id: 100, _maxSupply: 10000000, _precision: 2, _currentSupply: 500000, _closingTime: 0, _description: 测AAA, _hash: 268435456, _coreContract: 0x002e5f0adafd1af13f332f7f233282429e092a3c)
 CreateToken(_issuer: 0x002e5f0adafd1af13f332f7f233282429e092a3c, _symbol: AA1, _id: 100, _maxSupply: 10000000, _precision: 2, _currentSupply: 500000, _closingTime: 0, _description: 测AAA, _hash: 268435456)

 ---------------------------
 2) create token with non-tokenAble account

 Events emitted during test:
 ---------------------------

 Err(_no: 60030001)

 ---------------------------


 1 passing (9s)

 */