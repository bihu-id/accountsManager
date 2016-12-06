var funs=
{
    Account: {
        destroyToken: {
            name: 'destroyToken(address,uint256)',
            sig: 0x9b1ad792,
            resSize: 32,
            gas: 600000
        },
        freeze: {
            name: 'freeze()',
            sig: 0x62a5af3b,
            resSize: 32,
            gas: 190910
        },
        getOwner: {
            name: 'getOwner(uint256)',
            sig: 0xc41a360a,
            resSize: 32*2,
            gas: 151744
        },
        init: {
            name: 'init(address,uint256,uint256,address,address)',
            sig: 0x01c580e4,
            resSize: 32,
            gas: 600000
        },
        issuerMoreToken: {
            name: 'issuerMoreToken(address,uint256)',
            sig: 0xfb9f28b5,
            resSize: 32,
            gas: 600000
        },
        resetAccountOwner: {
            name: 'resetAccountOwner(uint256,address[],uint256[])',
            sig: 0xa9704520,
            resSize: 32,
            gas: 1000000
        },
        resetCore: {
            name: 'resetCore(uint256)',
            sig: 0xe3f18df3,
            resSize: 32,
            gas: 193840
        },
        resetOwner: {
            name: 'resetOwner(uint256)',
            sig: 0x959725d1,
            resSize: 32,
            gas: 193620
        },
        revokeCA: {
            name: 'revokeCA()',
            sig: 0xe698fc31,
            resSize: 32,
            gas: 231656
        },
        setCA: {
            name: 'setCA(address)',
            sig: 0x2cab3b98,
            resSize: 32,
            gas: 231322
        },
        setIdLevel: {
            name: 'setIdLevel(uint256)',
            sig: 0x7a033648,
            resSize: 32,
            gas: 190900
        },
        setPass: {
            name: 'setPass(uint256)',
            sig: 0xf86cd7ad,
            resSize: 32,
            gas: 600000
        },
        summary: {
            name: 'summary()',
            sig: 0xb16a867c,
            resSize: 32*21,
            gas: 1000000
        },
        transferToken: {
            name: 'transferToken(address,address,uint256)',
            sig: 0xf5537ede,
            resSize: 32,
            gas: 600000
        },
        unfreeze: {
            name: 'unfreeze()',
            sig: 0x6a28f000,
            resSize: 32,
            gas: 190942
        }
    },
    AccountManager: {
        accountAmount: {
            name: 'accountAmount()',
            sig: 0x41748782,
            resSize: 32,
            gas: 150518
        },
        createAccount: {
            name: 'createAccount(address,uint32,uint32)',
            sig: 0xe27d0cd8,
            resSize: 32,
            gas: 2000000
        },
        getAccountAddress: {
            name: 'getAccountAddress(uint256)',
            sig: 0xdb4cf8e6,
            resSize: 32,
            gas: 150994
        },
        init: {
            name: 'init(address,address,address,address)',
            sig: 0x06552ff3,
            resSize: 32,
            gas: 600000
        },
        resetCore: {
            name: 'resetCore(uint256)',
            sig: 0xe3f18df3,
            resSize: 32,
            gas: 193684
        },
        resetOwner: {
            name: 'resetOwner(uint256)',
            sig: 0x959725d1,
            resSize: 32,
            gas: 193508
        },
        setOption: {
            name: 'setOption(address,address,address,uint256)',
            sig: 0x58f12900,
            resSize: 32,
            gas: 313698
        },
        summary: {
            name: 'summary()',
            sig: 0xb16a867c,
            resSize: 32*5,
            gas: 151490
        }
    },
    Token: {
        accountStatus: {
            name: 'accountStatus(address)',
            sig: 0x61242bdd,
            resSize: 32,
            gas: 151124
        },
        allowance: {
            name: 'allowance(address,address)',
            sig: 0xdd62ed3e,
            resSize: 32,
            gas: 151668
        },
        approve: {
            name: 'approve(address,uint256)',
            sig: 0x095ea7b3,
            resSize: 32,
            gas: 600000
        },
        balanceOf: {
            name: 'balanceOf(address)',
            sig: 0x70a08231,
            resSize: 32,
            gas: 151100
        },
        destroy: {
            name: 'destroy(uint256)',
            sig: 0x9d118770,
            resSize: 32,
            gas: 235422
        },
        forceTransfer: {
            name: 'forceTransfer(address,address,uint256)',
            sig: 0x33bebb77,
            resSize: 32,
            gas: 600000
        },
        freeze: {
            name: 'freeze(address)',
            sig: 0x8d1fdf2f,
            resSize: 32,
            gas: 191286
        },
        freezeToken: {
            name: 'freezeToken()',
            sig: 0x8ccbd6da,
            resSize: 32,
            gas: 191148
        },
        ifCore: {
            name: 'ifCore()',
            sig: 0xdbd0a575,
            resSize: 32,
            gas: 151258
        },
        ifEnd: {
            name: 'ifEnd()',
            sig: 0xd748703c,
            resSize: 32,
            gas: 151126
        },
        ifFreeze: {
            name: 'ifFreeze()',
            sig: 0xc29b8986,
            resSize: 32,
            gas: 151290
        },
        ifIssuer: {
            name: 'ifIssuer()',
            sig: 0x18595eca,
            resSize: 32,
            gas: 150642
        },
        issueMore: {
            name: 'issueMore(uint256)',
            sig: 0xb7cd32c2,
            resSize: 32,
            gas: 235404
        },
        normal: {
            name: 'normal()',
            sig: 0xfd255aef,
            resSize: 32,
            gas: 151310
        },
        surmmay: {
            name: 'surmmay()',
            sig: 0x096e9e2e,
            resSize: 384,
            gas: 600000
        },
        totalSupply: {
            name: 'totalSupply()',
            sig: 0x18160ddd,
            resSize: 32,
            gas: 150562
        },
        transfer: {
            name: 'transfer(address,uint256)',
            sig: 0xa9059cbb,
            resSize: 32,
            gas: 600000
        },
        transferFrom: {
            name: 'transferFrom(address,address,uint256)',
            sig: 0x23b872dd,
            resSize: 32,
            gas: 600000
        },
        unfreeze: {
            name: 'unfreeze(address)',
            sig: 0x45c8b1a6,
            resSize: 32,
            gas: 161054
        },
        unfreezeToken: {
            name: 'unfreezeToken()',
            sig: 0x6c64a678,
            resSize: 32,
            gas: 191048
        }
    },
    TokenManager: {
        comfirm: {
            name: 'comfirm(address,uint256)',
            sig: 0x6db1e2f0,
            resSize: 32,
            gas: 2000000
        },
        createToken: {
            name: 'createToken(bytes32,uint256,uint256,uint256,uint256,string,uint256)',
            sig: 0x4e0732c8,
            resSize: 32,
            gas: 2000000
        },
        forceTransfer: {
            name: 'forceTransfer(address,address,address,uint256)',
            sig: 0x98b73188,
            resSize: 32,
            gas: 600000
        },
        freeze: {
            name: 'freeze(address,address)',
            sig: 0x15748250,
            resSize: 32,
            gas: 600000
        },
        getKeys: {
            name: 'getKeys()',
            sig: 0x2150c518,
            resSize: 256,
            gas: 600000
        },
        getOperation: {
            name: 'getOperation(uint256)',
            sig: 0x202e3924,
            resSize: 256,
            gas: 600000
        },
        getOperationAmounts: {
            name: 'getOperationAmounts()',
            sig: 0xedc3ed39,
            resSize: 64,
            gas: 151646
        },
        getOperationAmounts_resetMe: {
            name: 'getOperationAmounts_resetMe()',
            sig: 0x0a2fc8b2,
            resSize: 64,
            gas: 150678
        },
        getOperation_resetMe: {
            name: 'getOperation_resetMe(uint256)',
            sig: 0x084c32fa,
            resSize: 128,
            gas: 151198
        },
        getOption: {
            name: 'getOption()',
            sig: 0x92ed2df6,
            resSize: 160,
            gas: 151938
        },
        getTokenAddress: {
            name: 'getTokenAddress(uint256)',
            sig: 0x67ccdf38,
            resSize: 32,
            gas: 151314
        },
        getTokenSurmmary: {
            name: 'getTokenSurmmary(uint256)',
            sig: 0x4156581a,
            resSize: 96,
            gas: 151456
        },
        getTokensSymbol: {
            name: 'getTokensSymbol(uint256,uint256)',
            sig: 0x5b769783,
            resSize: 960,
            gas: 1000000
        },
        getWaitOperationNos: {
            name: 'getWaitOperationNos(uint256,uint256,uint256)',
            sig: 0xee20c380,
            resSize: 960,
            gas: 1000000
        },
        init: {
            name: 'init(address)',
            sig: 0x19ab453c,
            resSize: 32,
            gas: 600000
        },
        reject: {
            name: 'reject(address,uint256)',
            sig: 0xa0ff66ba,
            resSize: 32,
            gas: 600000
        },
        resetCore: {
            name: 'resetCore(uint256)',
            sig: 0xe3f18df3,
            resSize: 32,
            gas: 194344
        },
        resetMe: {
            name: 'resetMe(address,uint256)',
            sig: 0xbc59f17b,
            resSize: 32,
            gas: 153634
        },
        resetMeC: {
            name: 'resetMeC(address,uint256,uint256)',
            sig: 0xda8c6514,
            resSize: 32,
            gas: 600000
        },
        resetMeReject: {
            name: 'resetMeReject(address,uint256)',
            sig: 0x2950a5d8,
            resSize: 32,
            gas: 600000
        },
        resetOwner: {
            name: 'resetOwner(uint256)',
            sig: 0x959725d1,
            resSize: 32,
            gas: 194080
        },
        setFunGas: {
            name: 'setFunGas(uint256,uint256)',
            sig: 0xc29cdaac,
            resSize: 32,
            gas: 194296
        },
        setFunSig: {
            name: 'setFunSig(uint8,uint256)',
            sig: 0x4a0dd4a3,
            resSize: 32,
            gas: 191144
        },
        setOption: {
            name: 'setOption(address,address,uint256,uint256)',
            sig: 0x8b1055ef,
            resSize: 32,
            gas: 315634
        },
        unfreeze: {
            name: 'unfreeze(address,address)',
            sig: 0x5adb6ddb,
            resSize: 32,
            gas: 600000
        }
    },
    TxManager: {
        init: {
            name: 'init()',
            sig: 0xe1c7392a,
            resSize: 32,
            gas: 600000
        },
        pass: {
            name: 'pass(uint256,uint256)',
            sig: 0x0573ea94,
            resSize: 32,
            gas: 600000
        },
        resetCore: {
            name: 'resetCore(uint256)',
            sig: 0xe3f18df3,
            resSize: 32,
            gas: 193516
        },
        resetOwner: {
            name: 'resetOwner(uint256)',
            sig: 0x959725d1,
            resSize: 32,
            gas: 193384
        },
        summary: {
            name: 'summary()',
            sig: 0xb16a867c,
            resSize: 32,
            gas: 150686
        }
    },
    Xindi: {
        comfirm: {
            name: 'comfirm(address,uint256)',
            sig: 0x6db1e2f0,
            resSize: 32,
            gas: 200000
        },
        freeze: {
            name: 'freeze(address)',
            sig: 0x8d1fdf2f,
            resSize: 32,
            gas: 600000
        },
        getFun: {
            name: 'getFun(uint256)',
            sig: 0x70c86863,
            resSize: 64,
            gas: 151252
        },
        getOperation: {
            name: 'getOperation(uint256)',
            sig: 0x202e3924,
            resSize: 480,
            gas: 1000000
        },
        getOperationAmounts: {
            name: 'getOperationAmounts()',
            sig: 0xedc3ed39,
            resSize: 64,
            gas: 151558
        },
        getOperationAmounts_resetMe: {
            name: 'getOperationAmounts_resetMe()',
            sig: 0x0a2fc8b2,
            resSize: 64,
            gas: 150678
        },
        getOperation_resetMe: {
            name: 'getOperation_resetMe(uint256)',
            sig: 0x084c32fa,
            resSize: 128,
            gas: 151198
        },
        getRole: {
            name: 'getRole(uint8)',
            sig: 0x6288a66c,
            resSize: 32,
            gas: 151134
        },
        getWaitOperationNos: {
            name: 'getWaitOperationNos(uint256,uint256,uint256)',
            sig: 0xee20c380,
            resSize: 960,
            gas: 1000000
        },
        init: {
            name: 'init()',
            sig: 0xe1c7392a,
            resSize: 32,
            gas: 600000
        },
        reSet: {
            name: 'reSet(address,address[],uint256[],uint256)',
            sig: 0xf74753a3,
            resSize: 32,
            gas: 600000
        },
        reject: {
            name: 'reject(address,uint256)',
            sig: 0xa0ff66ba,
            resSize: 32,
            gas: 600000
        },
        resetCore: {
            name: 'resetCore(uint256)',
            sig: 0xe3f18df3,
            resSize: 32,
            gas: 194256
        },
        resetMe: {
            name: 'resetMe(address,uint256)',
            sig: 0xbc59f17b,
            resSize: 32,
            gas: 356464
        },
        resetMeC: {
            name: 'resetMeC(address,uint256,uint256)',
            sig: 0xda8c6514,
            resSize: 32,
            gas: 600000
        },
        resetMeReject: {
            name: 'resetMeReject(address,uint256)',
            sig: 0x2950a5d8,
            resSize: 32,
            gas: 600000
        },
        resetOwner: {
            name: 'resetOwner(uint256)',
            sig: 0x959725d1,
            resSize: 32,
            gas: 193860
        },
        revokeCA: {
            name: 'revokeCA(address)',
            sig: 0x6be2f0e6,
            resSize: 32,
            gas: 600000
        },
        setCA: {
            name: 'setCA(address,address)',
            sig: 0x9f394af0,
            resSize: 32,
            gas: 600000
        },
        setFun: {
            name: 'setFun(uint256,uint32,uint224)',
            sig: 0xa25b37b3,
            resSize: 32,
            gas: 191634
        },
        setIdLevel: {
            name: 'setIdLevel(address,uint256)',
            sig: 0x0f6621fd,
            resSize: 32,
            gas: 600000
        },
        summary: {
            name: 'summary()',
            sig: 0xb16a867c,
            resSize: 576,
            gas: 600000
        },
        unfreeze: {
            name: 'unfreeze(address)',
            sig: 0x45c8b1a6,
            resSize: 32,
            gas: 600000
        }
    }
}
module.exports=funs;