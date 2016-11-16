contract('account test', function(accounts) {
    var logic_porxy="0xa6f68cee34a1b6a3625b3e25b299ed8ffccd6ec2";
    var account_manager='0x179baa7db0b83c83963cf1f5df89b06d9ce218f4';
    var accountA="0x245bd827d549878ba8a5817e3c80acdefdd03210";

    var dataA;

    var funs=[
        {
            name : 'summary',
            sig : 0xb16a867c,
            resSize : 288,
            gas : 300000
        },
        {
            name : 'init',
            sig : 0x448ac35d,
            resSize : 32,
            gas : 300000
        }
    ]

    /*it("account manager summary:",function(){
        var accountManager=AccountManager.at(account_manager);
        accountManager.summary().then(function(res){
            for(var i=0;i<res.length;i++)
                console.log(res[i].toString());
        })
    })*/
    it("set logic address ", function(){

        //var porxy=LogicPorxy.at(logic_porxy);
        var porxy=LogicPorxy.deployed();
        //var accountLogic=Account.at(accountA);
        var accountLogic=Account.deployed();
        console.log("porxy",porxy.address);
        return porxy.setLogic(accountLogic.address,{from:accounts[0]}).then(function(tx){
            console.log("set logic address : ",tx);
        });

    });

    //console.log("funs :",funs,funs[0],funs[0].sig);
    it("register function ", function(){
        //var accountLogic=Account.deployed();
        //var porxy=LogicPorxy.at(logic_porxy);
        var porxy=LogicPorxy.deployed();
        console.log("porxy",porxy.address);
        for (var i=0;i<funs.length;i++) {
            console.log("register function : ", funs[i].sig);
            porxy.setfun(funs[i].sig, funs[i].resSize, funs[i].gas, {
                from: accounts[0],
                gas: 100000
            }).then(function (tx) {
                console.log("register function : ", tx);
            });
        }
    });

 /*   it("register function ", function(){
        //var accountLogic=Account.deployed();
        //var porxy=LogicPorxy.at(logic_porxy);
        var porxy=LogicPorxy.deployed();
        console.log("porxy",porxy.address);
        var i=1;
        return porxy.setfun(funs[i].sig,funs[i].resSize,funs[i].gas,{from:accounts[0],gas:100000}).then(function(tx){
            console.log("register function : ",tx);
        });

    });*/

    it("check register function ", function(){
        //var accountLogic=Account.deployed();
        //var porxy=LogicPorxy.at(logic_porxy);
        var porxy=LogicPorxy.deployed();
        console.log("porxy",porxy.address);
        for (var i=0;i<funs.length;i++) {
            //console.log("funs :",funs,funs[0],funs[0].sig)
            porxy.get(funs[i].sig).then(function(res){
                console.log(funs[i].name,'0x'+res[0].toString(16),res[1].toString(10),res[2].toString(10));
                //assert.equal('0x'+res[0].toString(16),accountLogic.address,"logic address wrong");
                //assert.equal(res[1],funs[i].resSize,"fun return size wrong");
                //assert.equal(res[2],funs[i].gas,"fun gas need wrong");
            });
        }
    });

    it("create account  ", function(){
        //var accountManager=AccountManager.at(account_manager);
        var accountManager=AccountManager.deployed();

        return accountManager.createAccount(0x101,100,100,{from:accounts[0],gas:10000000}).then(function(tx){
            console.log(tx);
        });
       
    });

    it("get account amounts ", function(){
        //var accountManager=AccountManager.at(account_manager);
        var accountManager=AccountManager.deployed();
        return accountManager.accountAmount().then(function(res){
            console.log("accountManager.accountAmount()",res.toString());

        });

    });
    it("get account data address ", function(){
        var accountManager=AccountManager.deployed();
        return accountManager.getAccountAddress(1).then(function(res){
            console.log("account address:",res)
            dataA=res;
        });
    });

    it("get account summary ", function(){
        var data=Account.at(dataA);
        data.summary().then(function(res){
            console.log("get summary of :",dataA);
            for(var i=0;i<res.length;i++)
                console.log(res[i].toString());
        });
    });
});