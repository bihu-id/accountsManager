contract('xinde contract', function(accounts) {

    /*6db1e2f0 comfirm(address,uint256)
    8d1fdf2f freeze(address)
    202e3924 getOperation(uint256)
    edc3ed39 getOperationAmounts()
    6288a66c getRole(uint8)
    e1c7392a init()
    f8e4feba reSet(address,address[],uint32[],uint32)
    a0ff66ba reject(address,uint256)
    3c4421c1 resetMe(address,uint8)
    6be2f0e6 revokeCA(address)
    9f394af0 setCA(address,address)
    0f6621fd setIdLevel(address,uint256)
    b16a867c summary()
    45c8b1a6 unfreeze(address)*/
    var xindeporxy;
    var xindelogic;
    var funs=[
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
            resSize : 32,
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
            resSize : 32,
            gas : 300000
        },
        {
            name : 'unfreeze',
            sig : 0x45c8b1a6,
            resSize : 32,
            gas : 300000
        }
    ]
    it("set porxy", function(){
        LogicPorxy.new().then(function(instance){
            xindeporxy=instance.address;
            console.log(xindeporxy)
            Xinde.at(Data.new(xindeporxy)).then(function(instance){
                xinde=instance.address;
                console.log(xinde)
            });
        });
    });
    porxy.setLogic(xinde.address,{from:accounts[0]}).then(function(tx){
        //console.log(porxy.contract._eth.getTransactionReceipt(tx));
    });
    it("register function ", function(){
        
        for(var i=0;funs.length;i++)
        {   console.log(funs[i].name);
            porxy.setfun(funs[i].sig,funs[i].resSize,funs[i].gas,{from:accounts[0]}).then(function(tx){
            //console.log(funs[i].name);
        });}

    });

    
    var t_tx;
    it("xinde init", function(){
        //var accountManager=AccountManager.at(account_manager);
        var data=Data.deployed();
        console.log(data.address);
        var xinde=Xinde.at(data.address);
        return xinde.init({from:accounts[0],gas:10000000}).then(function(tx){
            //console.log(xinde.contract._eth.getTransactionReceipt(tx));
            t_tx=tx;
            //console.log(xinde.getTransactionReceipt(tx));
        })
    });


   it("xinde summary",function(){
        var data=Data.deployed();
        var xinde=Xinde.at(data.address);
        return xinde.summary().then(function(res){
            //console.log(xinde.contract._eth.getTransactionReceipt(tx));

            console.log(res);
        })
    })

})
/*6db1e2f0 comfirm(address,uint256)
 8d1fdf2f freeze(address)
 202e3924 getOperation(uint256)
 edc3ed39 getOperationAmounts()
 6288a66c getRole(uint8)
 e1c7392a init()
 f8e4feba reSet(address,address[],uint32[],uint32)
 a0ff66ba reject(address,uint256)
 3c4421c1 resetMe(address,uint8)
 6be2f0e6 revokeCA(address)
 9f394af0 setCA(address,address)
 0f6621fd setIdLevel(address,uint256)
 b16a867c summary()
 45c8b1a6 unfreeze(address)*/