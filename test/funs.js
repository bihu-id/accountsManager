var funs=
{
    Account: {
        createToken: {
            name: 'createToken(bytes32,uint256,uint256,uint256,uint256,string,uint256,uint256)',
            sig: 0x13512d89,
            resSize: 32,
            register: true
        },
        destroyToken: {
            name: 'destroyToken(address,uint256)',
            sig: 0x9b1ad792,
            resSize: 32,
            register: true
        },
        freeze: {
            name: 'freeze()',
            sig: 0x62a5af3b,
            resSize: 32,
            register: false
        },
        getOwner: {
            name: 'getOwner(uint256)',
            sig: 0xc41a360a,
            resSize: 64,
            register: true
        },
        init: {
            name: 'init(address,uint256,uint256,address,address)',
            sig: 0x01c580e4,
            resSize: 32,
            register: false
        },
        issuerMoreToken: {
            name: 'issuerMoreToken(address,uint256)',
            sig: 0xfb9f28b5,
            resSize: 32,
            register: true
        },
        resetAccountOwner: {
            name: 'resetAccountOwner(uint256,address[],uint256[])',
            sig: 0xa9704520,
            resSize: 32,
            register: false
        },
        resetCore: {
            name: 'resetCore(uint256)',
            sig: 0xe3f18df3,
            resSize: 32,
            register: false
        },
        resetOwner: {
            name: 'resetOwner(uint256)',
            sig: 0x959725d1,
            resSize: 32,
            register: false
        },
        revokeCA: {
            name: 'revokeCA()',
            sig: 0xe698fc31,
            resSize: 32,
            register: false
        },
        setCA: {
            name: 'setCA(address)',
            sig: 0x2cab3b98,
            resSize: 32,
            register: false
        },
        setIdLevel: {
            name: 'setIdLevel(uint256)',
            sig: 0x7a033648,
            resSize: 32,
            register: false
        },
        setPass: {
            name: 'setPass(uint256,uint256)',
            sig: 0xb487b66c,
            resSize: 32,
            register: false
        },
        summary: {
            name: 'summary()',
            sig: 0xb16a867c,
            resSize: 672,
            register: true
        },
        transferToken: {
            name: 'transferToken(address,address,uint256)',
            sig: 0xf5537ede,
            resSize: 32,
            register: true
        },
        unfreeze: {
            name: 'unfreeze()',
            sig: 0x6a28f000,
            resSize: 32,
            register: false
        }
    },
    AccountManager: {
        accountAmount: {
            name: 'accountAmount()',
            sig: 0x41748782,
            resSize: 32,
            register: true
        },
        createAccount: {
            name: 'createAccount(address,uint32,uint32)',
            sig: 0xe27d0cd8,
            resSize: 32,
            register: true
        },
        getAccountAddress: {
            name: 'getAccountAddress(uint256)',
            sig: 0xdb4cf8e6,
            resSize: 32,
            register: true
        },
        init: {
            name: 'init(address,address,address,address)',
            sig: 0x06552ff3,
            resSize: 32,
            register: true
        },
        resetCore: {
            name: 'resetCore(uint256)',
            sig: 0xe3f18df3,
            resSize: 32,
            register: false
        },
        resetOwner: {
            name: 'resetOwner(uint256)',
            sig: 0x959725d1,
            resSize: 32,
            register: false
        },
        setOption: {
            name: 'setOption(address,address)',
            sig: 0xe5623f0c,
            resSize: 32,
            register: true
        },
        summary: {
            name: 'summary()',
            sig: 0xb16a867c,
            resSize: 160,
            register: true
        }
    },
    LogicProxy: {
        comfirm: {
            name: 'comfirm(uint256)',
            sig: 0x4753395a,
            resSize: 32,
            register: true
        },
        get: {
            name: 'get(uint256)',
            sig: 0x9507d39a,
            resSize: 32,
            register: true
        },
        getKeys: {
            name: 'getKeys()',
            sig: 0x2150c518,
            resSize: 32,
            register: true
        },
        getWait: {
            name: 'getWait(uint256)',
            sig: 0xe8a96387,
            resSize: 32,
            register: true
        },
        getWaitKeys: {
            name: 'getWaitKeys()',
            sig: 0x74f818b2,
            resSize: 32,
            register: true
        },
        requestComfirm: {
            name: 'requestComfirm(uint256)',
            sig: 0xee9d40b3,
            resSize: 32,
            register: true
        },
        resetKey: {
            name: 'resetKey(uint256,uint256)',
            sig: 0x1c1c0fbc,
            resSize: 32,
            register: true
        },
        setfun: {
            name: 'setfun(uint256,uint256,uint256)',
            sig: 0x5b63f551,
            resSize: 32,
            register: true
        }
    },
    Token: {
        accountStatus: {
            name: 'accountStatus(address)',
            sig: 0x61242bdd,
            resSize: 32,
            register: true
        },
        allowance: {
            name: 'allowance(address,address)',
            sig: 0xdd62ed3e,
            resSize: 32,
            register: true
        },
        approve: {
            name: 'approve(address,uint256)',
            sig: 0x095ea7b3,
            resSize: 32,
            register: true
        },
        balanceOf: {
            name: 'balanceOf(address)',
            sig: 0x70a08231,
            resSize: 32,
            register: true
        },
        destroy: {
            name: 'destroy(uint256)',
            sig: 0x9d118770,
            resSize: 32,
            register: false
        },
        forceTransfer: {
            name: 'forceTransfer(address,address,uint256)',
            sig: 0x33bebb77,
            resSize: 32,
            register: false
        },
        freeze: {
            name: 'freeze(address)',
            sig: 0x8d1fdf2f,
            resSize: 32,
            register: false
        },
        freezeToken: {
            name: 'freezeToken()',
            sig: 0x8ccbd6da,
            resSize: 32,
            register: false
        },
        init: {
            name: 'init(address,bytes32,uint256,uint256,uint256,uint256,uint256,string,uint256,address)',
            sig: 0xae368bca,
            resSize: 32,
            register: false
        },
        issueMore: {
            name: 'issueMore(uint256)',
            sig: 0xb7cd32c2,
            resSize: 32,
            register: false
        },
        normal: {
            name: 'normal()',
            sig: 0xfd255aef,
            resSize: 32,
            register: false
        },
        resetCore: {
            name: 'resetCore(uint256)',
            sig: 0xe3f18df3,
            resSize: 32,
            register: false
        },
        resetOwner: {
            name: 'resetOwner(uint256)',
            sig: 0x959725d1,
            resSize: 32,
            register: false
        },
        summary: {
            name: 'summary()',
            sig: 0xb16a867c,
            resSize: 640,
            register: false
        },
        totalSupply: {
            name: 'totalSupply()',
            sig: 0x18160ddd,
            resSize: 32,
            register: false
        },
        transfer: {
            name: 'transfer(address,uint256)',
            sig: 0xa9059cbb,
            resSize: 32,
            register: false
        },
        transferFrom: {
            name: 'transferFrom(address,address,uint256)',
            sig: 0x23b872dd,
            resSize: 32,
            register: false
        },
        unfreeze: {
            name: 'unfreeze(address)',
            sig: 0x45c8b1a6,
            resSize: 32,
            register: false
        },
        unfreezeToken: {
            name: 'unfreezeToken()',
            sig: 0x6c64a678,
            resSize: 32,
            register: false
        }
    },
    TokenManager: {
        comfirm: {
            name: 'comfirm(address,uint256)',
            sig: 0x6db1e2f0,
            resSize: 32,
            register: true
        },
        createToken: {
            name: 'createToken(bytes32,uint256,uint256,uint256,uint256,string,uint256)',
            sig: 0x4e0732c8,
            resSize: 32,
            register: true
        },
        forceTransfer: {
            name: 'forceTransfer(address,address,address,uint256)',
            sig: 0x98b73188,
            resSize: 32,
            register: true
        },
        freeze: {
            name: 'freeze(address,address)',
            sig: 0x15748250,
            resSize: 32,
            register: true
        },
        getKeys: {
            name: 'getKeys()',
            sig: 0x2150c518,
            resSize: 256,
            register: true
        },
        getOperation: {
            name: 'getOperation(uint256)',
            sig: 0x202e3924,
            resSize: 256,
            register: true
        },
        getOperationAmounts: {
            name: 'getOperationAmounts()',
            sig: 0xedc3ed39,
            resSize: 64,
            register: true
        },
        getOperationAmounts_resetMe: {
            name: 'getOperationAmounts_resetMe()',
            sig: 0x0a2fc8b2,
            resSize: 64,
            register: true
        },
        getOperation_resetMe: {
            name: 'getOperation_resetMe(uint256)',
            sig: 0x084c32fa,
            resSize: 128,
            register: true
        },
        getOption: {
            name: 'getOption()',
            sig: 0x92ed2df6,
            resSize: 160,
            register: true
        },
        getTokenAddress: {
            name: 'getTokenAddress(uint256)',
            sig: 0x67ccdf38,
            resSize: 32,
            register: true
        },
        getTokenAmounts: {
            name: 'getTokenAmounts()',
            sig: 0xd73cc4df,
            resSize: 32,
            register: true
        },
        getTokenSummary: {
            name: 'getTokenSummary(uint256)',
            sig: 0xbcafaf1f,
            resSize: 96,
            register: true
        },
        getTokensSymbol: {
            name: 'getTokensSymbol(uint256,uint256)',
            sig: 0x5b769783,
            resSize: 960,
            register: true
        },
        getWaitOperationNos: {
            name: 'getWaitOperationNos(uint256,uint256,uint256)',
            sig: 0xee20c380,
            resSize: 960,
            register: true
        },
        init: {
            name: 'init(address,address)',
            sig: 0xf09a4016,
            resSize: 32,
            register: true
        },
        reject: {
            name: 'reject(address,uint256)',
            sig: 0xa0ff66ba,
            resSize: 32,
            register: true
        },
        resetCore: {
            name: 'resetCore(uint256)',
            sig: 0xe3f18df3,
            resSize: 32,
            register: false
        },
        resetMe: {
            name: 'resetMe(address,uint256)',
            sig: 0xbc59f17b,
            resSize: 32,
            register: true
        },
        resetMeC: {
            name: 'resetMeC(address,uint256,uint256)',
            sig: 0xda8c6514,
            resSize: 32,
            register: true
        },
        resetMeReject: {
            name: 'resetMeReject(address,uint256)',
            sig: 0x2950a5d8,
            resSize: 32,
            register: true
        },
        resetOwner: {
            name: 'resetOwner(uint256)',
            sig: 0x959725d1,
            resSize: 32,
            register: false
        },
        setFunGas: {
            name: 'setFunGas(uint256,uint256)',
            sig: 0xc29cdaac,
            resSize: 32,
            register: false
        },
        setFunSig: {
            name: 'setFunSig(uint8,uint256)',
            sig: 0x4a0dd4a3,
            resSize: 32,
            register: true
        },
        setOption: {
            name: 'setOption(address,address,address,uint256,uint256)',
            sig: 0x058e87e7,
            resSize: 32,
            register: true
        },
        unfreeze: {
            name: 'unfreeze(address,address)',
            sig: 0x5adb6ddb,
            resSize: 32,
            register: true
        }
    },
    TxManager: {
        init: {
            name: 'init()',
            sig: 0xe1c7392a,
            resSize: 32,
            register: true
        },
        pass: {
            name: 'pass(uint256,uint256,uint256)',
            sig: 0x20309fcf,
            resSize: 32,
            register: true
        },
        resetCore: {
            name: 'resetCore(uint256)',
            sig: 0xe3f18df3,
            resSize: 32,
            register: true
        },
        resetOwner: {
            name: 'resetOwner(uint256)',
            sig: 0x959725d1,
            resSize: 32,
            register: false
        },
        summary: {
            name: 'summary()',
            sig: 0xb16a867c,
            resSize: 32,
            register: false
        }
    },
    Xindi: {
        comfirm: {
            name: 'comfirm(address,uint256)',
            sig: 0x6db1e2f0,
            resSize: 32,
            register: false
        },
        freeze: {
            name: 'freeze(address)',
            sig: 0x8d1fdf2f,
            resSize: 32,
            register: false
        },
        getFun: {
            name: 'getFun(uint256)',
            sig: 0x70c86863,
            resSize: 64,
            register: false
        },
        getOperation: {
            name: 'getOperation(uint256)',
            sig: 0x202e3924,
            resSize: 480,
            register: false
        },
        getOperationAmounts: {
            name: 'getOperationAmounts()',
            sig: 0xedc3ed39,
            resSize: 64,
            register: false
        },
        getOperationAmounts_resetMe: {
            name: 'getOperationAmounts_resetMe()',
            sig: 0x0a2fc8b2,
            resSize: 64,
            register: false
        },
        getOperation_resetMe: {
            name: 'getOperation_resetMe(uint256)',
            sig: 0x084c32fa,
            resSize: 128,
            register: false
        },
        getRole: {
            name: 'getRole(uint8)',
            sig: 0x6288a66c,
            resSize: 32,
            register: false
        },
        getWaitOperationNos: {
            name: 'getWaitOperationNos(uint256,uint256,uint256)',
            sig: 0xee20c380,
            resSize: 960,
            register: false
        },
        init: {
            name: 'init(address)',
            sig: 0x19ab453c,
            resSize: 32,
            register: false
        },
        reSet: {
            name: 'reSet(address,address[],uint256[],uint256)',
            sig: 0xf74753a3,
            resSize: 32,
            register: false
        },
        reject: {
            name: 'reject(address,uint256)',
            sig: 0xa0ff66ba,
            resSize: 32,
            register: false
        },
        resetCore: {
            name: 'resetCore(uint256)',
            sig: 0xe3f18df3,
            resSize: 32,
            register: false
        },
        resetMe: {
            name: 'resetMe(address,uint256)',
            sig: 0xbc59f17b,
            resSize: 32,
            register: false
        },
        resetMeC: {
            name: 'resetMeC(address,uint256,uint256)',
            sig: 0xda8c6514,
            resSize: 32,
            register: false
        },
        resetMeReject: {
            name: 'resetMeReject(address,uint256)',
            sig: 0x2950a5d8,
            resSize: 32,
            register: false
        },
        resetOwner: {
            name: 'resetOwner(uint256)',
            sig: 0x959725d1,
            resSize: 32,
            register: false
        },
        revokeCA: {
            name: 'revokeCA(address)',
            sig: 0x6be2f0e6,
            resSize: 32,
            register: false
        },
        setCA: {
            name: 'setCA(address,address)',
            sig: 0x9f394af0,
            resSize: 32,
            register: false
        },
        setFun: {
            name: 'setFun(uint256,uint32)',
            sig: 0x1f92d29e,
            resSize: 32,
            register: false
        },
        setIdLevel: {
            name: 'setIdLevel(address,uint256)',
            sig: 0x0f6621fd,
            resSize: 32,
            register: false
        },
        summary: {
            name: 'summary()',
            sig: 0xb16a867c,
            resSize: 576,
            register: false
        },
        unfreeze: {
            name: 'unfreeze(address)',
            sig: 0x45c8b1a6,
            resSize: 32,
            register: false
        }
    }
}
module.exports=funs;