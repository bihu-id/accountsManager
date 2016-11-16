contract('account create', function(accounts) {
    var logic_porxy="0xd15d39dd8753014d1a1b435176af32c61d69d566"
    var account_manager='0x2b11c0de219e37117ab018f26b6d13a26f0e6039'
    var accountA='0x5c3cc297e96cc5dc3f4e60a758f9923995bdd900'


    it("create account  ", function(){
        var account=Account.deployed();

        return account.init(0x101,100,100,0x10,0x11,{from:accounts[0],gas:1000000}).then(function(tx){
            console.log(tx);
        });
        
    });

    it("account summary ", function(){
        //var accountManager=AccountManager.at(account_manager);
        var account=Account.deployed();
        return account.summary().then(function(res){
            for(var i=0;i<res.length;i++)
                console.log(res[i].toString());
        })
    });
})
