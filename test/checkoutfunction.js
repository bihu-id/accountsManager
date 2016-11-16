contract('check function', function(accounts) {
    var XindeFuns=[
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

    var xindeporxy="0x798344d58737dbbc91af60d48f0e01c875342f80"
    var xindelogic="0x37e768fc948865eb78a286feeacf11bf3c190436"
    var xindedata="0xd5ebac036f77055bc6394e113c391272ad095301"
    var accountManager="0x3cca51d914baa0fa80ac28b86f656edee2e7e46f"
    var accountlogic="0xfef1297ea81b5ea0ff11411753076d2f4d1f7890"
    var accountporxy="0xa098d18ae5de1452617d0d82ba738a2326433eeb"


    it("check xinde register function ", function(){
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
    });

    it("xinde summary", function(){

        var xinde=Xinde.at(xindedata);
        return xinde.summary.call().then(function(res){
            console.log(res)
        })
    });

    it ("set reset key ",function(accounts){

        var xinde=Xinde.at(xindedata);
        return xinde.resetMe(accounts[1],1,{from:accounts[0]}).then(function(res){
            console.log(res)
        })
    });
})