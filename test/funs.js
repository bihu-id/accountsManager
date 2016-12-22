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
            name: 'init(address,uint256,uint256,uint256,address,address)',
            sig: 0xefeec059,
            resSize: 32,
            register: true
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
            resSize: 704+32,
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
        confirm: {
            name: 'confirm()',
            sig: 0x7022b58e,
            resSize: 32,
            register: false
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
        getAccountNo: {
            name: 'getAccountNo(address)',
            sig: 0x16f7f1b4,
            resSize: 32,
            register: false
        },
        getKeys: {
            name: 'getKeys()',
            sig: 0x2150c518,
            resSize: 320,
            register: true
        },
        getOptions: {
            name: 'getOptions()',
            sig: 0xcc2ee196,
            resSize: 320,
            register: true
        },
        getOptionsWait: {
            name: 'getOptionsWait()',
            sig: 0x40bdce3c,
            resSize: 320,
            register: false
        },
        init: {
            name: 'init(uint256,uint256,uint256,uint256,uint256,uint256)',
            sig: 0x9db1e461,
            resSize: 32,
            register: true
        },
        requestConfirm: {
            name: 'requestConfirm()',
            sig: 0x0ef5f461,
            resSize: 32,
            register: false
        },
        resetCore: {
            name: 'resetCore(uint256)',
            sig: 0xe3f18df3,
            resSize: 32,
            register: false
        },
        resetKey: {
            name: 'resetKey(uint256,uint256)',
            sig: 0x1c1c0fbc,
            resSize: 32,
            register: false
        },
        resetOption: {
            name: 'resetOption(uint256,uint256)',
            sig: 0xa230f178,
            resSize: 32,
            register: false
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
        resetCore: {
            name: 'resetCore(uint256)',
            sig: 0xe3f18df3,
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
        confirm: {
            name: 'confirm(uint256,address)',
            sig: 0xbe5fb5d8,
            resSize: 32,
            register: false
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
        getFun: {
            name: 'getFun(uint256)',
            sig: 0x70c86863,
            resSize: 32,
            register: false
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
        getOperationAmounts_resetKey: {
            name: 'getOperationAmounts_resetKey()',
            sig: 0xd9c34a33,
            resSize: 32,
            register: false
        },
        getOperation_resetKey: {
            name: 'getOperation_resetKey(uint256)',
            sig: 0x0eeb3969,
            resSize: 32,
            register: false
        },
        getOptions: {
            name: 'getOptions()',
            sig: 0xcc2ee196,
            resSize: 320,
            register: false
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
            name: 'init(uint256,uint256,uint256,uint256,uint256)',
            sig: 0x9dabc978,
            resSize: 32,
            register: true
        },
        reject: {
            name: 'reject(uint256,address)',
            sig: 0x03ab52fd,
            resSize: 32,
            register: true
        },
        resetCore: {
            name: 'resetCore(uint256)',
            sig: 0xe3f18df3,
            resSize: 32,
            register: false
        },
        resetKey: {
            name: 'resetKey(uint256,address)',
            sig: 0x91e176e8,
            resSize: 32,
            register: false
        },
        resetKeyC: {
            name: 'resetKeyC(uint256,uint256,address)',
            sig: 0x68d99c0e,
            resSize: 32,
            register: false
        },
        resetKeyReject: {
            name: 'resetKeyReject(uint256,uint256,address)',
            sig: 0x994ccee0,
            resSize: 32,
            register: false
        },
        setFun: {
            name: 'setFun(uint256,uint256)',
            sig: 0xeccdaf45,
            resSize: 32,
            register: false
        },
        setOption: {
            name: 'setOption(uint256,uint256)',
            sig: 0x5754e959,
            resSize: 32,
            register: true
        },
        setSubKey: {
            name: 'setSubKey(address,uint256,address)',
            sig: 0xc26a668d,
            resSize: 32,
            register: false
        },
        summary: {
            name: 'summary()',
            sig: 0xb16a867c,
            resSize: 32,
            register: false
        },
        unfreeze: {
            name: 'unfreeze(address,address)',
            sig: 0x5adb6ddb,
            resSize: 32,
            register: true
        }
    },
    TxManager: {
        confirm: {
            name: 'confirm()',
            sig: 0x7022b58e,
            resSize: 32,
            register: false
        },
        getKeys: {
            name: 'getKeys()',
            sig: 0x2150c518,
            resSize: 32,
            register: false
        },
        getOptions: {
            name: 'getOptions()',
            sig: 0xcc2ee196,
            resSize: 32,
            register: false
        },
        getOptionsWait: {
            name: 'getOptionsWait()',
            sig: 0x40bdce3c,
            resSize: 32,
            register: false
        },
        init: {
            name: 'init(uint256,uint256,uint256,uint256)',
            sig: 0x7662850d,
            resSize: 32,
            register: true
        },
        pass: {
            name: 'pass(uint256,uint256,uint256)',
            sig: 0x20309fcf,
            resSize: 32,
            register: true
        },
        requestConfirm: {
            name: 'requestConfirm()',
            sig: 0x0ef5f461,
            resSize: 32,
            register: false
        },
        resetCore: {
            name: 'resetCore(uint256)',
            sig: 0xe3f18df3,
            resSize: 32,
            register: true
        },
        resetKey: {
            name: 'resetKey(uint256,uint256)',
            sig: 0x1c1c0fbc,
            resSize: 32,
            register: false
        },
        resetOption: {
            name: 'resetOption(uint256,uint256)',
            sig: 0xa230f178,
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
        confirm: {
            name: 'confirm(uint256,address)',
            sig: 0xbe5fb5d8,
            resSize: 32,
            register: false
        },
        freeze: {
            name: 'freeze(address)',
            sig: 0x8d1fdf2f,
            resSize: 32,
            register: true
        },
        getFun: {
            name: 'getFun(uint256)',
            sig: 0x70c86863,
            resSize: 64,
            register: true
        },
        getKeys: {
            name: 'getKeys()',
            sig: 0x2150c518,
            resSize: 704,
            register: true
        },
        getOperation: {
            name: 'getOperation(uint256)',
            sig: 0x202e3924,
            resSize: 512,
            register: true
        },
        getOperationAmounts: {
            name: 'getOperationAmounts()',
            sig: 0xedc3ed39,
            resSize: 64,
            register: true
        },
        getOperationAmounts_resetKey: {
            name: 'getOperationAmounts_resetKey()',
            sig: 0xd9c34a33,
            resSize: 32,
            register: false
        },
        getOperation_resetKey: {
            name: 'getOperation_resetKey(uint256)',
            sig: 0x0eeb3969,
            resSize: 128,
            register: false
        },
        getOptions: {
            name: 'getOptions()',
            sig: 0xcc2ee196,
            resSize: 128,
            register: true
        },
        getWaitOperationNos: {
            name: 'getWaitOperationNos(uint256,uint256,uint256)',
            sig: 0xee20c380,
            resSize: 960,
            register: true
        },
        init: {
            name: 'init()',
            sig: 0xe1c7392a,
            resSize: 32,
            register: true
        },
        reject: {
            name: 'reject(uint256,address)',
            sig: 0x03ab52fd,
            resSize: 32,
            register: true
        },
        resetAccountOwner: {
            name: 'resetAccountOwner(address,uint256,address[],uint256[])',
            sig: 0x09df09c5,
            resSize: 32,
            register: false
        },
        resetCore: {
            name: 'resetCore(uint256)',
            sig: 0xe3f18df3,
            resSize: 32,
            register: true
        },
        resetKey: {
            name: 'resetKey(uint256,address)',
            sig: 0x91e176e8,
            resSize: 32,
            register: false
        },
        resetKeyC: {
            name: 'resetKeyC(uint256,uint256,address)',
            sig: 0x68d99c0e,
            resSize: 32,
            register: false
        },
        resetKeyReject: {
            name: 'resetKeyReject(uint256,uint256,address)',
            sig: 0x994ccee0,
            resSize: 32,
            register: false
        },
        revokeCA: {
            name: 'revokeCA(address)',
            sig: 0x6be2f0e6,
            resSize: 32,
            register: true
        },
        setCA: {
            name: 'setCA(address,address)',
            sig: 0x9f394af0,
            resSize: 32,
            register: true
        },
        setFun: {
            name: 'setFun(uint256,uint256)',
            sig: 0xeccdaf45,
            resSize: 32,
            register: true
        },
        setIdLevel: {
            name: 'setIdLevel(address,uint256)',
            sig: 0x0f6621fd,
            resSize: 32,
            register: true
        },
        setOption: {
            name: 'setOption(uint256,uint256)',
            sig: 0x5754e959,
            resSize: 32,
            register: true
        },
        setSubKey: {
            name: 'setSubKey(address,uint256,address)',
            sig: 0xc26a668d,
            resSize: 32,
            register: true
        },
        unfreeze: {
            name: 'unfreeze(address)',
            sig: 0x45c8b1a6,
            resSize: 32,
            register: true
        }
    }
}
module.exports=funs;