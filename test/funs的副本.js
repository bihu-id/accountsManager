var funs=
{
    Account: {
        approvalCall: {
            name: 'approvalCall(address)',
            sig: 0xd5cd3a7f,
            resSize: 32,
            register: false
        },
        changeOwner: {
            name: 'changeOwner(address,address)',
            sig: 0xf00d4b5d,
            resSize: 32,
            register: false
        },
        createToken: {
            name: 'createToken(bytes32,uint256,uint256,uint256,uint256,string,uint256,uint256)',
            sig: 0x13512d89,
            resSize: 32,
            register: false
        },
        destroyToken: {
            name: 'destroyToken(address,uint256)',
            sig: 0x9b1ad792,
            resSize: 32,
            register: false
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
            resSize: 32,
            register: false
        },
        init: {
            name: 'init(address,uint256,uint256,uint256,address,address)',
            sig: 0xefeec059,
            resSize: 32,
            register: false
        },
        issueMoreToken: {
            name: 'issueMoreToken(address,uint256)',
            sig: 0x4a851484,
            resSize: 32,
            register: false
        },
        resetAccountOwner: {
            name: 'resetAccountOwner(uint256,address[],uint256[])',
            sig: 0xa9704520,
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
            name: 'setPass(uint256)',
            sig: 0xf86cd7ad,
            resSize: 32,
            register: false
        },
        summary: {
            name: 'summary()',
            sig: 0xb16a867c,
            resSize: 32,
            register: false
        },
        transferToken: {
            name: 'transferToken(address,address,uint256)',
            sig: 0xf5537ede,
            resSize: 32,
            register: false
        },
        transferTokenReceipt: {
            name: 'transferTokenReceipt(address,address,uint256)',
            sig: 0x6df218b8,
            resSize: 32,
            register: false
        },
        unfreeze: {
            name: 'unfreeze()',
            sig: 0x6a28f000,
            resSize: 32,
            register: false
        },
        version: {
            name: 'version()',
            sig: 0x54fd4d50,
            resSize: 32,
            register: false
        }
    },
    AccountCreator: {
        accountAmount: {
            name: 'accountAmount()',
            sig: 0x41748782,
            resSize: 32,
            register: false
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
            register: false
        },
        getAccountAddress: {
            name: 'getAccountAddress(uint256)',
            sig: 0xdb4cf8e6,
            resSize: 32,
            register: false
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
            name: 'init(uint256,uint256,uint256,uint256,uint256,uint256)',
            sig: 0x9db1e461,
            resSize: 32,
            register: false
        },
        requestConfirm: {
            name: 'requestConfirm()',
            sig: 0x0ef5f461,
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
        },
        version: {
            name: 'version()',
            sig: 0x54fd4d50,
            resSize: 32,
            register: false
        }
    },
    Bean: {
        accountStatus: {
            name: 'accountStatus(address)',
            sig: 0x61242bdd,
            resSize: 32,
            register: false
        },
        allowance: {
            name: 'allowance(address,address)',
            sig: 0xdd62ed3e,
            resSize: 32,
            register: false
        },
        approve: {
            name: 'approve(address,uint256)',
            sig: 0x095ea7b3,
            resSize: 32,
            register: false
        },
        balanceOf: {
            name: 'balanceOf(address)',
            sig: 0x70a08231,
            resSize: 32,
            register: false
        },
        changeLogicProxy: {
            name: 'changeLogicProxy(uint256)',
            sig: 0x524c982a,
            resSize: 32,
            register: false
        },
        destroy: {
            name: 'destroy(uint256)',
            sig: 0x9d118770,
            resSize: 32,
            register: false
        },
        dividends: {
            name: 'dividends(address[],uint256[],uint256)',
            sig: 0xb49b8b95,
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
        getInitor: {
            name: 'getInitor()',
            sig: 0x644641bd,
            resSize: 32,
            register: false
        },
        getProxy: {
            name: 'getProxy()',
            sig: 0x933a9ce8,
            resSize: 32,
            register: false
        },
        init: {
            name: 'init(address,bytes32,uint256,uint256,uint256,uint256,uint256,string,uint256,address)',
            sig: 0xae368bca,
            resSize: 32,
            register: false
        },
        initBean: {
            name: 'initBean(address,bytes32,uint256,uint256,uint256,uint256,uint256,string,uint256,address,address)',
            sig: 0xca3952b9,
            resSize: 32,
            register: false
        },
        issueMore: {
            name: 'issueMore(uint256)',
            sig: 0xb7cd32c2,
            resSize: 32,
            register: false
        },
        m_relatedToken: {
            name: 'm_relatedToken()',
            sig: 0x2c42b917,
            resSize: 32,
            register: false
        },
        setId: {
            name: 'setId(uint256)',
            sig: 0xd0e0ba95,
            resSize: 32,
            register: false
        },
        setRelatedToken: {
            name: 'setRelatedToken(address)',
            sig: 0x5bf306bd,
            resSize: 32,
            register: false
        },
        summary: {
            name: 'summary()',
            sig: 0xb16a867c,
            resSize: 32,
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
        transferOrigin: {
            name: 'transferOrigin(address,uint256)',
            sig: 0x9063e860,
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
        },
        version: {
            name: 'version()',
            sig: 0x54fd4d50,
            resSize: 32,
            register: false
        }
    },
    Data: {},
    DividendToken: {
        accountStatus: {
            name: 'accountStatus(address)',
            sig: 0x61242bdd,
            resSize: 32,
            register: false
        },
        allowance: {
            name: 'allowance(address,address)',
            sig: 0xdd62ed3e,
            resSize: 32,
            register: false
        },
        approve: {
            name: 'approve(address,uint256)',
            sig: 0x095ea7b3,
            resSize: 32,
            register: false
        },
        balanceOf: {
            name: 'balanceOf(address)',
            sig: 0x70a08231,
            resSize: 32,
            register: false
        },
        changeLogicProxy: {
            name: 'changeLogicProxy(uint256)',
            sig: 0x524c982a,
            resSize: 32,
            register: false
        },
        destroy: {
            name: 'destroy(uint256)',
            sig: 0x9d118770,
            resSize: 32,
            register: false
        },
        endDividend: {
            name: 'endDividend(uint256)',
            sig: 0xdfd7422c,
            resSize: 32,
            register: false
        },
        executeDividend: {
            name: 'executeDividend(uint256,address[])',
            sig: 0x1f45a4c1,
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
        getDividend: {
            name: 'getDividend(uint256)',
            sig: 0x0ecfcaa4,
            resSize: 32,
            register: false
        },
        getImplement: {
            name: 'getImplement(uint256,uint256)',
            sig: 0x6d4dc7f8,
            resSize: 32,
            register: false
        },
        getInitor: {
            name: 'getInitor()',
            sig: 0x644641bd,
            resSize: 32,
            register: false
        },
        getProxy: {
            name: 'getProxy()',
            sig: 0x933a9ce8,
            resSize: 32,
            register: false
        },
        getRate: {
            name: 'getRate(uint256)',
            sig: 0x57764094,
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
        m_AuxStatus: {
            name: 'm_AuxStatus()',
            sig: 0xa9f082b6,
            resSize: 32,
            register: false
        },
        m_AuxTime: {
            name: 'm_AuxTime()',
            sig: 0xae974aa6,
            resSize: 32,
            register: false
        },
        m_dividendAmount: {
            name: 'm_dividendAmount()',
            sig: 0xcca3b262,
            resSize: 32,
            register: false
        },
        m_rate: {
            name: 'm_rate()',
            sig: 0xa273789a,
            resSize: 32,
            register: false
        },
        maintenance: {
            name: 'maintenance(uint256[])',
            sig: 0xc8bd7396,
            resSize: 32,
            register: false
        },
        reissueDividend: {
            name: 'reissueDividend(uint256,uint256,uint256,address[],uint256[])',
            sig: 0xbdb05c30,
            resSize: 32,
            register: false
        },
        revokeDividend: {
            name: 'revokeDividend(uint256)',
            sig: 0xa9de6137,
            resSize: 32,
            register: false
        },
        setDividend: {
            name: 'setDividend(address,uint256,uint256,uint256,uint256,address)',
            sig: 0x28e76b7c,
            resSize: 32,
            register: false
        },
        startDividend: {
            name: 'startDividend(uint256)',
            sig: 0x3fd5d2f8,
            resSize: 32,
            register: false
        },
        summary: {
            name: 'summary()',
            sig: 0xb16a867c,
            resSize: 32,
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
        transferOrigin: {
            name: 'transferOrigin(address,uint256)',
            sig: 0x9063e860,
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
        },
        version: {
            name: 'version()',
            sig: 0x54fd4d50,
            resSize: 32,
            register: false
        }
    },
    Erc20Token: {
        allowance: {
            name: 'allowance(address,address)',
            sig: 0xdd62ed3e,
            resSize: 32,
            register: false
        },
        approve: {
            name: 'approve(address,uint256)',
            sig: 0x095ea7b3,
            resSize: 32,
            register: false
        },
        balanceOf: {
            name: 'balanceOf(address)',
            sig: 0x70a08231,
            resSize: 32,
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
        }
    },
    KeepManager: {
        set: {
            name: 'set(uint256,uint256,uint256)',
            sig: 0x43b0e8df,
            resSize: 32,
            register: false
        }
    },
    LogicProxy: {
        confirm: {
            name: 'confirm(uint256)',
            sig: 0xba0179b5,
            resSize: 32,
            register: false
        },
        get: {
            name: 'get(uint256)',
            sig: 0x9507d39a,
            resSize: 32,
            register: false
        },
        getKeys: {
            name: 'getKeys()',
            sig: 0x2150c518,
            resSize: 32,
            register: false
        },
        getWait: {
            name: 'getWait(uint256)',
            sig: 0xe8a96387,
            resSize: 32,
            register: false
        },
        getWaitKeys: {
            name: 'getWaitKeys()',
            sig: 0x74f818b2,
            resSize: 32,
            register: false
        },
        requestConfirm: {
            name: 'requestConfirm(uint256)',
            sig: 0xb585b95b,
            resSize: 32,
            register: false
        },
        resetKey: {
            name: 'resetKey(uint256,uint256)',
            sig: 0x1c1c0fbc,
            resSize: 32,
            register: false
        },
        setfun: {
            name: 'setfun(uint256,uint256,uint256)',
            sig: 0x5b63f551,
            resSize: 32,
            register: false
        }
    },
    NullContract: {
        x: {
            name: 'x(uint256[])',
            sig: 0xcef69066,
            resSize: 32,
            register: false
        }
    },
    Parking: {
        accountStatus: {
            name: 'accountStatus(address)',
            sig: 0x61242bdd,
            resSize: 32,
            register: false
        },
        allowance: {
            name: 'allowance(address,address)',
            sig: 0xdd62ed3e,
            resSize: 32,
            register: false
        },
        approve: {
            name: 'approve(address,uint256)',
            sig: 0x095ea7b3,
            resSize: 32,
            register: false
        },
        balanceOf: {
            name: 'balanceOf(address)',
            sig: 0x70a08231,
            resSize: 32,
            register: false
        },
        changeLogicProxy: {
            name: 'changeLogicProxy(uint256)',
            sig: 0x524c982a,
            resSize: 32,
            register: false
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
        getInitor: {
            name: 'getInitor()',
            sig: 0x644641bd,
            resSize: 32,
            register: false
        },
        getProxy: {
            name: 'getProxy()',
            sig: 0x933a9ce8,
            resSize: 32,
            register: false
        },
        init: {
            name: 'init(address,bytes32,uint256,uint256,uint256,uint256,uint256,string,uint256,address)',
            sig: 0xae368bca,
            resSize: 32,
            register: false
        },
        initB: {
            name: 'initB(address,bytes32,uint256,uint256,string,uint256,address)',
            sig: 0x2da0f19e,
            resSize: 32,
            register: false
        },
        initParking: {
            name: 'initParking(address,uint256,address,string,uint256)',
            sig: 0x8c0af604,
            resSize: 32,
            register: false
        },
        issueMore: {
            name: 'issueMore(uint256)',
            sig: 0xb7cd32c2,
            resSize: 32,
            register: false
        },
        summary: {
            name: 'summary()',
            sig: 0xb16a867c,
            resSize: 32,
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
        transferOrigin: {
            name: 'transferOrigin(address,uint256)',
            sig: 0x9063e860,
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
        },
        version: {
            name: 'version()',
            sig: 0x54fd4d50,
            resSize: 32,
            register: false
        }
    },
    ParkingCreator: {
        confirm: {
            name: 'confirm()',
            sig: 0x7022b58e,
            resSize: 32,
            register: false
        },
        createParking: {
            name: 'createParking(uint256,address,string,uint256,uint256,uint256)',
            sig: 0xdf5049c0,
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
            name: 'init(uint256,uint256,uint256,uint256,uint256,uint256)',
            sig: 0x9db1e461,
            resSize: 32,
            register: false
        },
        requestConfirm: {
            name: 'requestConfirm()',
            sig: 0x0ef5f461,
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
        },
        version: {
            name: 'version()',
            sig: 0x54fd4d50,
            resSize: 32,
            register: false
        }
    },
    ParkingLock: {
        balanceOf: {
            name: 'balanceOf(address)',
            sig: 0x70a08231,
            resSize: 32,
            register: false
        },
        check: {
            name: 'check()',
            sig: 0x919840ad,
            resSize: 32,
            register: false
        },
        isRented: {
            name: 'isRented()',
            sig: 0xa6304952,
            resSize: 32,
            register: false
        },
        issuer: {
            name: 'issuer()',
            sig: 0x1d143848,
            resSize: 32,
            register: false
        },
        owner: {
            name: 'owner()',
            sig: 0x8da5cb5b,
            resSize: 32,
            register: false
        },
        parkSummary: {
            name: 'parkSummary()',
            sig: 0xf1aa1755,
            resSize: 32,
            register: false
        },
        price: {
            name: 'price()',
            sig: 0xa035b1fe,
            resSize: 32,
            register: false
        },
        rent: {
            name: 'rent(address,address,uint256,uint256)',
            sig: 0x622275f0,
            resSize: 32,
            register: false
        },
        rentTime: {
            name: 'rentTime()',
            sig: 0xe3bbfd3f,
            resSize: 32,
            register: false
        },
        returnLock: {
            name: 'returnLock()',
            sig: 0x944e2ba9,
            resSize: 32,
            register: false
        },
        returnTime: {
            name: 'returnTime()',
            sig: 0x98568366,
            resSize: 32,
            register: false
        },
        setPrice: {
            name: 'setPrice(uint256)',
            sig: 0x91b7f5ed,
            resSize: 32,
            register: false
        },
        summary: {
            name: 'summary()',
            sig: 0xb16a867c,
            resSize: 32,
            register: false
        },
        transfer: {
            name: 'transfer(address,uint256)',
            sig: 0xa9059cbb,
            resSize: 32,
            register: false
        },
        user: {
            name: 'user()',
            sig: 0x4f8632ba,
            resSize: 32,
            register: false
        }
    },
    Test: {
        get: {
            name: 'get()',
            sig: 0x6d4ce63c,
            resSize: 32,
            register: false
        },
        set: {
            name: 'set(uint256)',
            sig: 0x60fe47b1,
            resSize: 32,
            register: false
        }
    },
    Token: {
        accountStatus: {
            name: 'accountStatus(address)',
            sig: 0x61242bdd,
            resSize: 32,
            register: false
        },
        allowance: {
            name: 'allowance(address,address)',
            sig: 0xdd62ed3e,
            resSize: 32,
            register: false
        },
        approve: {
            name: 'approve(address,uint256)',
            sig: 0x095ea7b3,
            resSize: 32,
            register: false
        },
        balanceOf: {
            name: 'balanceOf(address)',
            sig: 0x70a08231,
            resSize: 32,
            register: false
        },
        changeLogicProxy: {
            name: 'changeLogicProxy(uint256)',
            sig: 0x524c982a,
            resSize: 32,
            register: false
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
        getInitor: {
            name: 'getInitor()',
            sig: 0x644641bd,
            resSize: 32,
            register: false
        },
        getProxy: {
            name: 'getProxy()',
            sig: 0x933a9ce8,
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
        summary: {
            name: 'summary()',
            sig: 0xb16a867c,
            resSize: 32,
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
        transferOrigin: {
            name: 'transferOrigin(address,uint256)',
            sig: 0x9063e860,
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
        },
        version: {
            name: 'version()',
            sig: 0x54fd4d50,
            resSize: 32,
            register: false
        }
    },
    TokenManager: {
        changeTokenProxy: {
            name: 'changeTokenProxy(address,address)',
            sig: 0x1dd67026,
            resSize: 32,
            register: false
        },
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
            register: false
        },
        forceTransfer: {
            name: 'forceTransfer(address,address,address,uint256)',
            sig: 0x98b73188,
            resSize: 32,
            register: false
        },
        freeze: {
            name: 'freeze(address,address)',
            sig: 0x15748250,
            resSize: 32,
            register: false
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
            resSize: 32,
            register: false
        },
        getOperation: {
            name: 'getOperation(uint256)',
            sig: 0x202e3924,
            resSize: 32,
            register: false
        },
        getOperationAmounts: {
            name: 'getOperationAmounts()',
            sig: 0xedc3ed39,
            resSize: 32,
            register: false
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
            resSize: 32,
            register: false
        },
        getTokenAddress: {
            name: 'getTokenAddress(uint256)',
            sig: 0x67ccdf38,
            resSize: 32,
            register: false
        },
        getTokenAmounts: {
            name: 'getTokenAmounts()',
            sig: 0xd73cc4df,
            resSize: 32,
            register: false
        },
        getTokenId: {
            name: 'getTokenId(bytes32)',
            sig: 0xc9cb65e1,
            resSize: 32,
            register: false
        },
        getTokenSummary: {
            name: 'getTokenSummary(uint256)',
            sig: 0xbcafaf1f,
            resSize: 32,
            register: false
        },
        getTokensSymbol: {
            name: 'getTokensSymbol(uint256,uint256)',
            sig: 0x5b769783,
            resSize: 32,
            register: false
        },
        getWaitOperationNos: {
            name: 'getWaitOperationNos(uint256,uint256,uint256)',
            sig: 0xee20c380,
            resSize: 32,
            register: false
        },
        init: {
            name: 'init(uint256,uint256,uint256,uint256,uint256)',
            sig: 0x9dabc978,
            resSize: 32,
            register: false
        },
        registerToken: {
            name: 'registerToken(bytes32,address)',
            sig: 0x2ded0fb5,
            resSize: 32,
            register: false
        },
        reject: {
            name: 'reject(uint256,address)',
            sig: 0x03ab52fd,
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
        setDouRelatedToken: {
            name: 'setDouRelatedToken(address,address)',
            sig: 0xffb3302d,
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
            register: false
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
        txVersion: {
            name: 'txVersion()',
            sig: 0x37e92803,
            resSize: 32,
            register: false
        },
        unfreeze: {
            name: 'unfreeze(address,address)',
            sig: 0x5adb6ddb,
            resSize: 32,
            register: false
        },
        version: {
            name: 'version()',
            sig: 0x54fd4d50,
            resSize: 32,
            register: false
        }
    },
    TxManager: {
        getKeys: {
            name: 'getKeys()',
            sig: 0x2150c518,
            resSize: 32,
            register: false
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
            resSize: 32,
            register: false
        },
        getWaitOperationNos: {
            name: 'getWaitOperationNos(uint256,uint256,uint256)',
            sig: 0xee20c380,
            resSize: 32,
            register: false
        },
        init: {
            name: 'init(uint256,uint256,uint256,uint256)',
            sig: 0x7662850d,
            resSize: 32,
            register: false
        },
        pass: {
            name: 'pass(uint256,uint256)',
            sig: 0x0573ea94,
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
        summary: {
            name: 'summary()',
            sig: 0xb16a867c,
            resSize: 32,
            register: false
        },
        version: {
            name: 'version()',
            sig: 0x54fd4d50,
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