contract('account test', function(accounts) {

    var xindeporxy="0x72b852199cb94501f6fd571b0fa6f01287c1437b"
    var xindelogic="0xd2d5443a1714b1daa5f6982668b05cfae2ab3376"
    var xindedata="0x4e64a33ea9d6b9691592c1de8680e02fcc960794"
    var accountManager="0xe6eba0ff1526e51645ec3f036b9590af4a827951"
    var accountlogic="0x5075d5f544412929faf74b9bfea8b99af38ecaee"
    var accountporxy="0x55ed613bfda3ba320881d671c0c89a4a7053b14b"


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
});