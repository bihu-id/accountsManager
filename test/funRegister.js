contract('account test', function(accounts) {
    var logic_porxy = "0x854a30c85cf1829eef0edf2e49cddd1738fd2e0b";
    var account_manager = '0x4b5091e909bc649f3f4200bf60dc409d9aec6921';
    var account_a='0x772f713ca8afc23c78dc68a87d01605534275de9';

    var funs = [
        {
            name: 'summary',
            sig: 0xb16a867c,
            resSize: 288,
            gas: 100000
        },
        {
            name: 'init',
            sig: 0x448ac35d,
            resSize: 32,
            gas: 100000
        }
    ]

    it("set logic address ", function () {
        //var accountLogic = Account.deployed();
        var account=Account.at(account_a);
        var porxy=LogicPorxy.at(logic_porxy);
        //var porxy = LogicPorxy.deployed();
        return porxy.setLogic(account.address, {from: accounts[0]}).then(function (tx) {
            console.log("set logic address : ", tx);
        });
    });


    it("register function ", function () {
        //var accountLogic = Account.deployed();
        //var porxy = LogicPorxy.deployed();

        var account=Account.at(account_a);
        var porxy=LogicPorxy.at(logic_porxy);

        var i = 0;
        return porxy.setfun(0xb16a867c, 288, 100000, {
            from: accounts[0],
            gas: 500000
        }).then(function (tx) {
            console.log("register function : ", tx);
        });

    });

/*    it("register function ", function () {
        var accountLogic = Account.deployed();
        //var porxy=LogicPorxy.at(logic_porxy);
        var porxy = LogicPorxy.deployed();
        var i = 1;
        return porxy.setfun(funs[i].sig, funs[i].resSize, funs[i].gas, {
            from: accounts[0],
            gas: 50000
        }).then(function (tx) {
            console.log("register function : ", tx);
        });

    });*/

    it("check register function ", function(){
        //var accountLogic=Account.deployed();
        //var porxy=LogicPorxy.deployed();

        var account=Account.at(account_a);
        var porxy=LogicPorxy.at(logic_porxy);
        for (var i=0;i<funs.length;i++) {
            //console.log("funs :",funs,funs[0],funs[0].sig)
            porxy.get(funs[i].sig).then(function(res){
                console.log('0x'+res[0].toString(16),res[1].toString(10),res[2].toString(10));
                //assert.equal('0x'+res[0].toString(16),accountLogic.address,"logic address wrong");
                //assert.equal(res[1],funs[i].resSize,"fun return size wrong");
                //assert.equal(res[2],funs[i].gas,"fun gas need wrong");
            });
        }
        return ;
    });
})