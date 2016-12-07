var funs=
{
    Account: {
        createToken: {
            name: 'createToken(bytes32,uint256,uint256,uint256,uint256,string,uint256,uint256)',
            sig: 0x13512d89,
            resSize: 32
        },
        destroyToken: {
            name: 'destroyToken(address,uint256)',
            sig: 0x9b1ad792,
            resSize: 32
        },
        freeze: {
            name: 'freeze()',
            sig: 0x62a5af3b,
            resSize: 32
        },
        getOwner: {
            name: 'getOwner(uint256)',
            sig: 0xc41a360a,
            resSize: 64
        },
        init: {
            name: 'init(address,uint256,uint256,address,address)',
            sig: 0x01c580e4,
            resSize: 32
        },
        issuerMoreToken: {
            name: 'issuerMoreToken(address,uint256)',
            sig: 0xfb9f28b5,
            resSize: 32
        },
        resetAccountOwner: {
            name: 'resetAccountOwner(uint256,address[],uint256[])',
            sig: 0xa9704520,
            resSize: 32
        },
        resetCore: {
            name: 'resetCore(uint256)',
            sig: 0xe3f18df3,
            resSize: 32
        },
        resetOwner: {
            name: 'resetOwner(uint256)',
            sig: 0x959725d1,
            resSize: 32
        },
        revokeCA: {
            name: 'revokeCA()',
            sig: 0xe698fc31,
            resSize: 32
        },
        setCA: {
            name: 'setCA(address)',
            sig: 0x2cab3b98,
            resSize: 32
        },
        setIdLevel: {
            name: 'setIdLevel(uint256)',
            sig: 0x7a033648,
            resSize: 32
        },
        setPass: {
            name: 'setPass(uint256,uint256)',
            sig: 0xb487b66c,
            resSize: 32
        },
        summary: {
            name: 'summary()',
            sig: 0xb16a867c,
            resSize: 672
        },
        transferToken: {
            name: 'transferToken(address,address,uint256)',
            sig: 0xf5537ede,
            resSize: 32
        },
        unfreeze: {
            name: 'unfreeze()',
            sig: 0x6a28f000,
            resSize: 32
        }
    },
    AccountManager: {
        accountAmount: {
            name: 'accountAmount()',
            sig: 0x41748782,
            resSize: 32
        },
        createAccount: {
            name: 'createAccount(address,uint32,uint32)',
            sig: 0xe27d0cd8,
            resSize: 32
        },
        getAccountAddress: {
            name: 'getAccountAddress(uint256)',
            sig: 0xdb4cf8e6,
            resSize: 32
        },
        init: {
            name: 'init(address,address,address,address)',
            sig: 0x06552ff3,
            resSize: 32
        },
        resetCore: {
            name: 'resetCore(uint256)',
            sig: 0xe3f18df3,
            resSize: 32
        },
        resetOwner: {
            name: 'resetOwner(uint256)',
            sig: 0x959725d1,
            resSize: 32
        },
        setOption: {
            name: 'setOption(address,address,address,uint256)',
            sig: 0x58f12900,
            resSize: 32
        },
        summary: {
            name: 'summary()',
            sig: 0xb16a867c,
            resSize: 160
        }
    },
    Token: {
        accountStatus: {
            name: 'accountStatus(address)',
            sig: 0x61242bdd,
            resSize: 32
        },
        allowance: {
            name: 'allowance(address,address)',
            sig: 0xdd62ed3e,
            resSize: 32
        },
        approve: {
            name: 'approve(address,uint256)',
            sig: 0x095ea7b3,
            resSize: 32
        },
        balanceOf: {
            name: 'balanceOf(address)',
            sig: 0x70a08231,
            resSize: 32
        },
        destroy: {
            name: 'destroy(uint256)',
            sig: 0x9d118770,
            resSize: 32
        },
        forceTransfer: {
            name: 'forceTransfer(address,address,uint256)',
            sig: 0x33bebb77,
            resSize: 32
        },
        freeze: {
            name: 'freeze(address)',
            sig: 0x8d1fdf2f,
            resSize: 32
        },
        freezeToken: {
            name: 'freezeToken()',
            sig: 0x8ccbd6da,
            resSize: 32
        },
        ifCoreL: {
            name: 'ifCoreL()',
            sig: 0xfc56182f,
            resSize: 32
        },
        ifEnd: {
            name: 'ifEnd()',
            sig: 0xd748703c,
            resSize: 32
        },
        ifFreeze: {
            name: 'ifFreeze()',
            sig: 0xc29b8986,
            resSize: 32
        },
        ifIssuer: {
            name: 'ifIssuer()',
            sig: 0x18595eca,
            resSize: 32
        },
        init: {
            name: 'init(address,bytes32,uint256,uint256,uint256,uint256,uint256,string,uint256,address)',
            sig: 0xae368bca,
            resSize: 32
        },
        issueMore: {
            name: 'issueMore(uint256)',
            sig: 0xb7cd32c2,
            resSize: 32
        },
        normal: {
            name: 'normal()',
            sig: 0xfd255aef,
            resSize: 32
        },
        resetCore: {
            name: 'resetCore(uint256)',
            sig: 0xe3f18df3,
            resSize: 32
        },
        resetOwner: {
            name: 'resetOwner(uint256)',
            sig: 0x959725d1,
            resSize: 32
        },
        surmmay: {
            name: 'surmmay()',
            sig: 0x096e9e2e,
            resSize: 384
        },
        totalSupply: {
            name: 'totalSupply()',
            sig: 0x18160ddd,
            resSize: 32
        },
        transfer: {
            name: 'transfer(address,uint256)',
            sig: 0xa9059cbb,
            resSize: 32
        },
        transferFrom: {
            name: 'transferFrom(address,address,uint256)',
            sig: 0x23b872dd,
            resSize: 32
        },
        unfreeze: {
            name: 'unfreeze(address)',
            sig: 0x45c8b1a6,
            resSize: 32
        },
        unfreezeToken: {
            name: 'unfreezeToken()',
            sig: 0x6c64a678,
            resSize: 32
        }
    },
    TokenManager: {
        comfirm: {
            name: 'comfirm(address,uint256)',
            sig: 0x6db1e2f0,
            resSize: 32
        },
        createToken: {
            name: 'createToken(bytes32,uint256,uint256,uint256,uint256,string,uint256)',
            sig: 0x4e0732c8,
            resSize: 32
        },
        forceTransfer: {
            name: 'forceTransfer(address,address,address,uint256)',
            sig: 0x98b73188,
            resSize: 32
        },
        freeze: {
            name: 'freeze(address,address)',
            sig: 0x15748250,
            resSize: 32
        },
        getKeys: {
            name: 'getKeys()',
            sig: 0x2150c518,
            resSize: 256
        },
        getOperation: {
            name: 'getOperation(uint256)',
            sig: 0x202e3924,
            resSize: 256
        },
        getOperationAmounts: {
            name: 'getOperationAmounts()',
            sig: 0xedc3ed39,
            resSize: 64
        },
        getOperationAmounts_resetMe: {
            name: 'getOperationAmounts_resetMe()',
            sig: 0x0a2fc8b2,
            resSize: 64
        },
        getOperation_resetMe: {
            name: 'getOperation_resetMe(uint256)',
            sig: 0x084c32fa,
            resSize: 128
        },
        getOption: {
            name: 'getOption()',
            sig: 0x92ed2df6,
            resSize: 160
        },
        getTokenAddress: {
            name: 'getTokenAddress(uint256)',
            sig: 0x67ccdf38,
            resSize: 32
        },
        getTokenAmounts: {
            name: 'getTokenAmounts()',
            sig: 0xd73cc4df,
            resSize: 32
        },
        getTokenSurmmary: {
            name: 'getTokenSurmmary(uint256)',
            sig: 0x4156581a,
            resSize: 96
        },
        getTokensSymbol: {
            name: 'getTokensSymbol(uint256,uint256)',
            sig: 0x5b769783,
            resSize: 960
        },
        getWaitOperationNos: {
            name: 'getWaitOperationNos(uint256,uint256,uint256)',
            sig: 0xee20c380,
            resSize: 960
        },
        init: {
            name: 'init(address,address)',
            sig: 0xf09a4016,
            resSize: 32
        },
        reject: {
            name: 'reject(address,uint256)',
            sig: 0xa0ff66ba,
            resSize: 32
        },
        resetCore: {
            name: 'resetCore(uint256)',
            sig: 0xe3f18df3,
            resSize: 32
        },
        resetMe: {
            name: 'resetMe(address,uint256)',
            sig: 0xbc59f17b,
            resSize: 32
        },
        resetMeC: {
            name: 'resetMeC(address,uint256,uint256)',
            sig: 0xda8c6514,
            resSize: 32
        },
        resetMeReject: {
            name: 'resetMeReject(address,uint256)',
            sig: 0x2950a5d8,
            resSize: 32
        },
        resetOwner: {
            name: 'resetOwner(uint256)',
            sig: 0x959725d1,
            resSize: 32
        },
        setFunGas: {
            name: 'setFunGas(uint256,uint256)',
            sig: 0xc29cdaac,
            resSize: 32
        },
        setFunSig: {
            name: 'setFunSig(uint8,uint256)',
            sig: 0x4a0dd4a3,
            resSize: 32
        },
        setOption: {
            name: 'setOption(address,address,address,uint256,uint256)',
            sig: 0x058e87e7,
            resSize: 32
        },
        unfreeze: {
            name: 'unfreeze(address,address)',
            sig: 0x5adb6ddb,
            resSize: 32
        }
    },
    TxManager: {
        init: {
            name: 'init()',
            sig: 0xe1c7392a,
            resSize: 32
        },
        pass: {
            name: 'pass(uint256,uint256,uint256)',
            sig: 0x20309fcf,
            resSize: 32
        },
        resetCore: {
            name: 'resetCore(uint256)',
            sig: 0xe3f18df3,
            resSize: 32
        },
        resetOwner: {
            name: 'resetOwner(uint256)',
            sig: 0x959725d1,
            resSize: 32
        },
        summary: {
            name: 'summary()',
            sig: 0xb16a867c,
            resSize: 32
        }
    },
    Xindi: {
        comfirm: {
            name: 'comfirm(address,uint256)',
            sig: 0x6db1e2f0,
            resSize: 32
        },
        freeze: {
            name: 'freeze(address)',
            sig: 0x8d1fdf2f,
            resSize: 32
        },
        getFun: {
            name: 'getFun(uint256)',
            sig: 0x70c86863,
            resSize: 64
        },
        getOperation: {
            name: 'getOperation(uint256)',
            sig: 0x202e3924,
            resSize: 480
        },
        getOperationAmounts: {
            name: 'getOperationAmounts()',
            sig: 0xedc3ed39,
            resSize: 64
        },
        getOperationAmounts_resetMe: {
            name: 'getOperationAmounts_resetMe()',
            sig: 0x0a2fc8b2,
            resSize: 64
        },
        getOperation_resetMe: {
            name: 'getOperation_resetMe(uint256)',
            sig: 0x084c32fa,
            resSize: 128
        },
        getRole: {
            name: 'getRole(uint8)',
            sig: 0x6288a66c,
            resSize: 32
        },
        getWaitOperationNos: {
            name: 'getWaitOperationNos(uint256,uint256,uint256)',
            sig: 0xee20c380,
            resSize: 960
        },
        init: {
            name: 'init()',
            sig: 0xe1c7392a,
            resSize: 32
        },
        reSet: {
            name: 'reSet(address,address[],uint256[],uint256)',
            sig: 0xf74753a3,
            resSize: 32
        },
        reject: {
            name: 'reject(address,uint256)',
            sig: 0xa0ff66ba,
            resSize: 32
        },
        resetCore: {
            name: 'resetCore(uint256)',
            sig: 0xe3f18df3,
            resSize: 32
        },
        resetMe: {
            name: 'resetMe(address,uint256)',
            sig: 0xbc59f17b,
            resSize: 32
        },
        resetMeC: {
            name: 'resetMeC(address,uint256,uint256)',
            sig: 0xda8c6514,
            resSize: 32
        },
        resetMeReject: {
            name: 'resetMeReject(address,uint256)',
            sig: 0x2950a5d8,
            resSize: 32
        },
        resetOwner: {
            name: 'resetOwner(uint256)',
            sig: 0x959725d1,
            resSize: 32
        },
        revokeCA: {
            name: 'revokeCA(address)',
            sig: 0x6be2f0e6,
            resSize: 32
        },
        setCA: {
            name: 'setCA(address,address)',
            sig: 0x9f394af0,
            resSize: 32
        },
        setFun: {
            name: 'setFun(uint256,uint32)',
            sig: 0x1f92d29e,
            resSize: 32
        },
        setIdLevel: {
            name: 'setIdLevel(address,uint256)',
            sig: 0x0f6621fd,
            resSize: 32
        },
        summary: {
            name: 'summary()',
            sig: 0xb16a867c,
            resSize: 576
        },
        unfreeze: {
            name: 'unfreeze(address)',
            sig: 0x45c8b1a6,
            resSize: 32
        }
    }
}
module.exports=funs;