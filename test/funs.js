var funs={
    /*
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
     bc59f17b resetMe(address,uint256)
     da8c6514 resetMeC(address,uint256,uint256)
     2950a5d8 resetMeReject(address,uint256)
     6be2f0e6 revokeCA(address)
     9f394af0 setCA(address,address)
     0f6621fd setIdLevel(address,uint256)
     b16a867c summary()
     45c8b1a6 unfreeze(address)
     */
    Xindi:[
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
        name : 'getOperationAmounts_resetMe',
        sig : 0x0a2fc8b2,
        resSize : 64,
        gas : 300000
    },
    {
        name : 'getOperation_resetMe',
        sig : 0x084c32fa,
        resSize : 32*20,
        gas : 300000
    },
    {
        name : 'getRole',
        sig : 0x6288a66c,
        resSize : 32,
        gas : 300000
    },
    {
        name : 'getWaitOperationNos',
        sig : 0xee20c380,
        resSize : 32*30,
        gas : 600000
    },
    {
        name : 'init',
        sig : 0xe1c7392a,
        resSize : 32*18,
        gas : 300000
    },
    {
        name : 'reSet',
        sig : 0xf8e4feba,
        resSize : 32,
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
        sig : 0xbc59f17b,
        resSize : 32*2,
        gas : 600000
    },
    {
        name : 'resetMeC',
        sig : 0xda8c6514,
        resSize : 32*3,
        gas : 300000
    },
    {
        name : 'resetMeReject',
        sig : 0x2950a5d8,
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
        sig : 0x9f394af0,
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
    },
    {
        name : 'summary1',
        sig : 0xde5efd14,
        resSize : 32*20,
        gas : 300000
    },
    //bc645d96 test(address,uint8)
],
    Accounts:[
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
    ],
    /*
    41748782 accountAmount()
    e27d0cd8 createAccount(address,uint32,uint32)
    db4cf8e6 getAccountAddress(uint256)
    51b0b767 resetCore(address)
    73cc802a resetOwner(address)
    b16a867c summary()
    */
    AccountsManager:[
        {
            name : 'accountAmount',
            sig : 0x41748782,
            resSize : 32,
            gas : 300000
        },
        {
            name : 'createAccount',
            sig : 0xe27d0cd8,
            resSize : 32,
            gas : 3000000
        },
        {
            name : 'getAccountAddress',
            sig : 0xdb4cf8e6,
            resSize : 32,
            gas : 300000
        },
        {
            name : 'resetCore',
            sig : 0xdb4cf8e6,
            resSize : 32,
            gas : 300000
        },
    ]
}

module.exports=funs;