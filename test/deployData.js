funs=require("./../funs.js")

contract('deployData', function(accounts) {

    var xindeporxy;
    var xindelogic;
    var xindedata;

    var accountlogic;
    var accountporxy;

    /*var accountManagerporxy;
    var accountManagerlogic;
    var accountManagerdata;*/
    var accountManager;
/*
 02a6e12f ResetMeReject(address,uint256)
 6db1e2f0 comfirm(address,uint256)
 8d1fdf2f freeze(address)
 202e3924 getOperation(uint256)
 edc3ed39 getOperationAmounts()
 0a2fc8b2 getOperationAmounts_resetMe()
 084c32fa getOperation_resetMe(uint256)
 6288a66c getRole(uint8)
 ee20c380 getWaitOperationNos(uint256,uint256,uint256)
 e1c7392a init()
 f8e4feba reSet(address,address[],uint32[],uint32)
 a0ff66ba reject(address,uint256)
 3c4421c1 resetMe(address,uint8)
 49c00854 resetMeC(address,uint8,uint256)
 6be2f0e6 revokeCA(address)
 9f394af0 setCA(address,address)
 0f6621fd setIdLevel(address,uint256)
 b16a867c summary()
 45c8b1a6 unfreeze(address)
 */
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
            gas : 300000
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
    var AccountFuns=[
        {
            name : 'freeze',
            sig : 0x62a5af3b,
            resSize : 32,
            gas : 300000
        },
        {
            name : 'getApprove',
            sig : 0xba236dcd,
            resSize : 32,
            gas : 300000
        },
        {
            name : 'getOwner',
            sig : 0xc41a360a,
            resSize : 32,
            gas : 300000
        },
        {
            name : 'init',
            sig : 0x448ac35d,
            resSize : 32,
            gas : 300000
        },
        {
            name : 'resetOwner',
            sig : 0xd26cb679,
            resSize : 32,
            gas : 300000
        },
        {
            name : 'revokeCA',
            sig : 0xe698fc31,
            resSize : 32,
            gas : 300000
        },
        {
            name : 'setCA',
            sig : 0x2cab3b98,
            resSize : 32,
            gas : 300000
        },
        {
            name : 'setIdLevel',
            sig : 0x777af46f,
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
            sig : 0x6a28f000,
            resSize : 32,
            gas : 300000
        }
    ];

/*784b452a checkOwner(address[],uint32[],uint32)
 62a5af3b freeze()
 ba236dcd getApprove(address[])
 c41a360a getOwner(uint256)
 448ac35d init(address,uint32,uint32,address,address)
 d26cb679 resetOwner(address[],uint32[],uint32)
 e698fc31 revokeCA()
 2cab3b98 setCA(address)
 777af46f setIdLevel(uint32)
 f86cd7ad setPass(uint256)
 b16a867c summary()
 6a28f000 unfreeze()*/
    

    it("set porxy", function(){
        return LogicPorxy.new().then(function(instance){
            xindeporxy=instance.address;
            //console.log(xindeporxy)
            return Data.new(xindeporxy).then(function(instance){
                xindedata=instance.address;
                //console.log(xindelogic)
            });
        });
    });

    it("deploy xinde logic",function(){

        return Xinde.new().then(function(instance){
            xindelogic=instance.address;
        })
    })

    it("deploy account porxy",function(){

        return LogicPorxy.new().then(function(instance){
            accountporxy=instance.address;
        })
    })

    /*it("set account manager porxy", function(){
        return LogicPorxy.new().then(function(instance){
            accountManagerporxy=instance.address;
            //console.log(xindeporxy)
            return Data.new(accountManagerporxy).then(function(instance){
                accountManagerdata=instance.address;
                //console.log(xindelogic)
            });
        });
    });*/

    it("deploy account manager ",function(){

        return AccountManager.new(accounts[0],xindedata,0x10000,accountporxy).then(function(instance){
            accountManager=instance.address;

        })
    })

    it("deploy account logic",function(){

        return Account.new().then(function(instance){
            accountlogic=instance.address;
        })
    })

    it ("console",function(){
        console.log('xindeporxy:'+'"'+xindeporxy+'",')
        console.log('xindelogic:'+'"'+xindelogic+'",')
        console.log('xindedata:'+'"'+xindedata+'",')

        /*console.log('var accountManagerporxy='+'"'+accountManagerporxy+'"')
        console.log('var accountManagerlogic='+'"'+accountManagerlogic+'"')
        console.log('var accountManagerdata='+'"'+accountManagerdata+'"')*/

        console.log('accountManager:'+'"'+accountManager+'",')

        console.log('accountlogic:'+'"'+accountlogic+'",')
        console.log('accountporxy:'+'"'+accountporxy+'"')
    })



    it("register xinde function ", function(){
        var porxy=LogicPorxy.at(xindeporxy)
        
        return XindeFuns.forEach(function(fun){
            //console.log(xindelogic)
            porxy.setfun(xindelogic,fun.sig,fun.resSize,fun.gas,{from:accounts[0],gas:500000}).then(function(tx){
                console.log(tx)

            });})
    });

    it("register account function ", function(){
        var porxy=LogicPorxy.at(accountporxy)
        return AccountFuns.forEach(function(fun){
            porxy.setfun(accountlogic,fun.sig,fun.resSize,fun.gas,{from:accounts[0],gas:500000}).then(function(tx){
                //console.log(funs[i].name);
            });
        })
    });
    
    /*it("check xinde register function ", function(){
        var porxy=LogicPorxy.at(xindeporxy)
        return XindeFuns.forEach(function(fun) {

            porxy.get.call(fun.sig).then(function(res){
                console.log(fun.name)
                console.log('0x'+res[0].toString(16),res[1].toString(10),res[2].toString(10));
            });
        })
    });

    it("check account register function ", function(){
        var porxy=LogicPorxy.at(accountporxy)
        return AccountFuns.forEach(function(fun) {

            porxy.get.call(fun.sig).then(function(res){
                console.log('0x'+res[0].toString(16),res[1].toString(10),res[2].toString(10));
            });
        })
    });*/

    it("xinde init", function(){

        var xinde=Xinde.at(xindedata);
        return xinde.init({from:accounts[0],gas:10000000}).then(function(tx){
            //console.log(xinde.getTransactionReceipt(tx));
        })
    });

});