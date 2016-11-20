address=require("./address.js")
contract('check function', function(accounts) {

    var xindeporxy = address.xindeporxy
    var xindelogic = address.xindelogic
    var xindedata = address.xindedata
    var accountManager = address.accountManager
    var accountlogic = address.accountlogic
    var accountporxy = address.accountporxy


    var XindeFuns=[
        {
            name : 'ResetMeReject',
            sig : 0x02a6e12f,
            resSize : 32,
            gas : 300000
        },
        {
            name : 'comfirm',
            sig : 0x6db1e2f0,
            resSize : 32,
            gas : 4000000
        },
        {
            name : 'freeze',
            sig : 0x8d1fdf2f,
            resSize : 32,
            gas : 300000
        },
        {
            name : 'getOperation',
            sig : 0x202e3924,
            resSize : 32*20,
            gas : 300000
        },
        {
            name : 'getOperationAmounts',
            sig : 0xedc3ed39,
            resSize : 64,
            gas : 300000
        },
        {
            name : 'getWaitOperationNos',
            sig : 0xee20c380,
            resSize : 32*30,
            gas : 600000
        },
        {
            name : 'getOperation_resetMe',
            sig : 0x084c32fa,
            resSize : 32*20,
            gas : 300000
        },
        {
            name : 'getOperationAmounts_resetMe',
            sig : 0x0a2fc8b2,
            resSize : 64,
            gas : 300000
        },
        {
            name : 'reSet',
            sig : 0xf8e4feba,
            resSize : 32,
            gas : 300000
        },
        {
            name : 'getRole',
            sig : 0x6288a66c,
            resSize : 32,
            gas : 300000
        },
        {
            name : 'init',
            sig : 0xe1c7392a,
            resSize : 32*18,
            gas : 300000
        },
        {
            name : 'reject',
            sig : 0xa0ff66ba,
            resSize : 32,
            gas : 300000
        },
        {
            name : 'resetMe',
            sig : 0x3c4421c1,
            resSize : 32*2,
            gas : 600000
        },
        {
            name : 'resetMeC',
            sig : 0x49c00854,
            resSize : 32*3,
            gas : 300000
        },
        {
            name : 'revokeCA',
            sig : 0x6be2f0e6,
            resSize : 32,
            gas : 300000
        },
        {
            name : 'setCA',
            sig : 0xa0ff66ba,
            resSize : 32,
            gas : 300000
        },
        {
            name : 'setIdLevel',
            sig : 0x0f6621fd,
            resSize : 32,
            gas : 300000
        },
        {
            name : 'summary',
            sig : 0xb16a867c,
            resSize : 32*20,
            gas : 300000
        },
        {
            name : 'unfreeze',
            sig : 0x45c8b1a6,
            resSize : 32,
            gas : 300000
        }
        //bc645d96 test(address,uint8)
    ];
    var AccountFuns = [
        {
            name: 'freeze',
            sig: 0x62a5af3b,
            resSize: 32,
            gas: 300000
        },
        {
            name: 'getApprove',
            sig: 0xba236dcd,
            resSize: 32,
            gas: 300000
        },
        {
            name: 'getOwner',
            sig: 0x00afc90b,
            resSize: 32,
            gas: 300000
        },
        {
            name: 'init',
            sig: 0x448ac35d,
            resSize: 32,
            gas: 300000
        },
        {
            name: 'resetOwner',
            sig: 0xd26cb679,
            resSize: 32,
            gas: 300000
        },
        {
            name: 'revokeCA',
            sig: 0xe698fc31,
            resSize: 32,
            gas: 300000
        },
        {
            name: 'setCA',
            sig: 0x2cab3b98,
            resSize: 32,
            gas: 300000
        },
        {
            name: 'setIdLevel',
            sig: 0x777af46f,
            resSize: 32,
            gas: 300000
        },
        {
            name: 'summary',
            sig: 0xb16a867c,
            resSize: 32 * 20,
            gas: 300000
        },
        {
            name: 'unfreeze',
            sig: 0x6a28f000,
            resSize: 32,
            gas: 300000
        }
    ];

    it("deploy xinde logic",function(){

        return Xinde.new().then(function(instance){
            var porxy=LogicPorxy.at(xindeporxy)
            console.log(instance.address);
            return XindeFuns.forEach(function(fun){
                //console.log(xindelogic)
                porxy.setfun(instance.address,fun.sig,fun.resSize,fun.gas,{from:accounts[0],gas:500000}).then(function(tx){
                    console.log(tx)

                });})
        })
    });
    /*it("deploy account logic",function(){

        return Account.new().then(function(instance){
            var porxy=LogicPorxy.at(accountporxy)
            return AccountFuns.forEach(function(fun){
                porxy.setfun(instance.address,fun.sig,fun.resSize,fun.gas,{from:accounts[0],gas:500000}).then(function(tx){
                    //console.log(funs[i].name);
                });
            })
        })
    });*/

})