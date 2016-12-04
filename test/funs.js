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
    /*
     9b1ad792 destroyToken(address,uint256)
     62a5af3b freeze()
     c41a360a getOwner(uint256)
     448ac35d init(address,uint32,uint32,address,address)
     fb9f28b5 issuerMoreToken(address,uint256)
     00afc90b resetOwner(uint32,address[],uint32[])
     e698fc31 revokeCA()
     2cab3b98 setCA(address)
     777af46f setIdLevel(uint32)
     f86cd7ad setPass(uint256)
     b16a867c summary()
     f5537ede transferToken(address,address,uint256)
     6a28f000 unfreeze()
     */
    Accounts:[
        {
            name : 'destroyToken',
            sig : 0x9b1ad792,
            resSize : 32,
            gas : 3000000
        },
        {
            name : 'freeze',
            sig : 0x62a5af3b,
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
            name : 'issuerMoreToken',
            sig : 0xfb9f28b5,
            resSize : 32,
            gas : 3000000
        },
        {
            name : 'resetOwner',
            sig : 0x00afc90b,
            resSize : 32,
            gas : 300000
        },
        {
            name : 'revokeCA',
            sig : 0xe698fc31,
            resSize : 32,
            gas : 3000000
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
            name : 'transferToken',
            sig : 0xf5537ede,
            resSize : 32,
            gas : 3000000
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
            sig : 0x51b0b767,
            resSize : 32,
            gas : 300000
        },
        {
            name : 'resetOwner',
            sig : 0x73cc802a,
            resSize : 32,
            gas : 300000
        },
        {
            name : 'summary',
            sig : 0xb16a867c,
            resSize : 32*3,
            gas : 300000
        }
    ],
    /*
    0573ea94 pass(uint256,uint256)
     e3f18df3 resetCore(uint256)
     959725d1 resetOwner(uint256)
     b16a867c summary()
    */
    TxManager:[
        {
            name : 'pass',
            sig : 0x0573ea94,
            resSize : 32,
            gas : 300000
        },
        {
            name : 'resetCore',
            sig : 0xe3f18df3,
            resSize : 32,
            gas : 300000
        },
        {
            name : 'resetOwner',
            sig : 0x959725d1,
            resSize : 32,
            gas : 300000
        },
        {
            name : 'init',
            sig : 0xe1c7392a,
            resSize : 32,
            gas : 300000
        },
        {
            name : 'summary',
            sig : 0xb16a867c,
            resSize : 64,
            gas : 300000
        }
    ]
}

module.exports=funs;