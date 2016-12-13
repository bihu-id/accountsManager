var abis=
{
    "Account": [
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_owner",
                    "type": "address"
                },
                {
                    "name": "_weight",
                    "type": "uint256"
                },
                {
                    "name": "_Tx_threshold",
                    "type": "uint256"
                },
                {
                    "name": "_core",
                    "type": "address"
                },
                {
                    "name": "_coreTx",
                    "type": "address"
                }
            ],
            "name": "init",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_symbol",
                    "type": "bytes32"
                },
                {
                    "name": "_maxSupply",
                    "type": "uint256"
                },
                {
                    "name": "_precision",
                    "type": "uint256"
                },
                {
                    "name": "_currentSupply",
                    "type": "uint256"
                },
                {
                    "name": "_closingTime",
                    "type": "uint256"
                },
                {
                    "name": "_description",
                    "type": "string"
                },
                {
                    "name": "_hash",
                    "type": "uint256"
                },
                {
                    "name": "_tokenManager",
                    "type": "uint256"
                }
            ],
            "name": "createToken",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_CA",
                    "type": "address"
                }
            ],
            "name": "setCA",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "freeze",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "unfreeze",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_level",
                    "type": "uint256"
                }
            ],
            "name": "setIdLevel",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "tokenContract",
                    "type": "address"
                },
                {
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "destroyToken",
            "outputs": [
                {
                    "name": "success",
                    "type": "bool"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_Tx_threshold",
                    "type": "uint256"
                },
                {
                    "name": "_owners",
                    "type": "address[]"
                },
                {
                    "name": "_weight",
                    "type": "uint256[]"
                }
            ],
            "name": "resetAccountOwner",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "summary",
            "outputs": [
                {
                    "name": "_core",
                    "type": "address"
                },
                {
                    "name": "_TxCore",
                    "type": "address"
                },
                {
                    "name": "_status",
                    "type": "uint256"
                },
                {
                    "name": "_level",
                    "type": "uint256"
                },
                {
                    "name": "_ownerAmount",
                    "type": "uint256"
                },
                {
                    "name": "_tx_threshold",
                    "type": "uint256"
                },
                {
                    "name": "_CA",
                    "type": "address"
                },
                {
                    "name": "_owner",
                    "type": "address[]"
                },
                {
                    "name": "_weight",
                    "type": "uint256[]"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_hash",
                    "type": "uint256"
                },
                {
                    "name": "_other",
                    "type": "uint256"
                }
            ],
            "name": "setPass",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_no",
                    "type": "uint256"
                }
            ],
            "name": "getOwner",
            "outputs": [
                {
                    "name": "_owner",
                    "type": "address"
                },
                {
                    "name": "_weight",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_newCore",
                    "type": "uint256"
                }
            ],
            "name": "resetCore",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "revokeCA",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "tokenContract",
                    "type": "address"
                },
                {
                    "name": "_to",
                    "type": "address"
                },
                {
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "transferToken",
            "outputs": [
                {
                    "name": "success",
                    "type": "bool"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "tokenContract",
                    "type": "address"
                },
                {
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "issuerMoreToken",
            "outputs": [
                {
                    "name": "success",
                    "type": "bool"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "inputs": [],
            "payable": false,
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_owners",
                    "type": "address[]"
                },
                {
                    "indexed": false,
                    "name": "_weight",
                    "type": "uint256[]"
                },
                {
                    "indexed": false,
                    "name": "_Tx_threshold",
                    "type": "uint256"
                }
            ],
            "name": "ReSetAccountOwner",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_owner",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "_weight",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "_Tx_threshold",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "_core",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "_coreTx",
                    "type": "address"
                }
            ],
            "name": "CreateAccount",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_res",
                    "type": "uint256[]"
                }
            ],
            "name": "Init",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_old",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "_new",
                    "type": "uint256"
                }
            ],
            "name": "ResetCore",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_old",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "_new",
                    "type": "uint256"
                }
            ],
            "name": "ResetOwner",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_ok",
                    "type": "bool"
                }
            ],
            "name": "Success",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_no",
                    "type": "uint256"
                }
            ],
            "name": "Err",
            "type": "event"
        }
    ],
    "AccountManager": [
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_core",
                    "type": "address"
                },
                {
                    "name": "_owner",
                    "type": "address"
                },
                {
                    "name": "_TxCore",
                    "type": "address"
                },
                {
                    "name": "_accountProxy",
                    "type": "address"
                }
            ],
            "name": "init",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_account",
                    "type": "address"
                }
            ],
            "name": "getAccountNo",
            "outputs": [
                {
                    "name": "_no",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_role",
                    "type": "uint256"
                },
                {
                    "name": "_key",
                    "type": "uint256"
                }
            ],
            "name": "resetKey",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getKeys",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                },
                {
                    "name": "",
                    "type": "address"
                },
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "BaseInit",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getOptionsWait",
            "outputs": [
                {
                    "name": "_res",
                    "type": "uint256[]"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "accountAmount",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_key",
                    "type": "uint256"
                },
                {
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "resetOption",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getOptions",
            "outputs": [
                {
                    "name": "_res",
                    "type": "uint256[]"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "requestComfirm",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_no",
                    "type": "uint256"
                }
            ],
            "name": "getAccountAddress",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "comfirm",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_owner",
                    "type": "address"
                },
                {
                    "name": "_weight",
                    "type": "uint32"
                },
                {
                    "name": "_threshold",
                    "type": "uint32"
                }
            ],
            "name": "createAccount",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_newCore",
                    "type": "uint256"
                }
            ],
            "name": "resetCore",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "inputs": [],
            "payable": false,
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "CreateAccountData",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "AccountRecode",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_key",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "ResetOption",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_res",
                    "type": "uint256[]"
                }
            ],
            "name": "Init",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_old",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "_new",
                    "type": "uint256"
                }
            ],
            "name": "ResetCore",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_old",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "_new",
                    "type": "uint256"
                }
            ],
            "name": "ResetOwner",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_ok",
                    "type": "bool"
                }
            ],
            "name": "Success",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_no",
                    "type": "uint256"
                }
            ],
            "name": "Err",
            "type": "event"
        }
    ],
    "LogicProxy": [
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_no",
                    "type": "uint256"
                },
                {
                    "name": "_newKey",
                    "type": "uint256"
                }
            ],
            "name": "resetKey",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getKeys",
            "outputs": [
                {
                    "name": "A",
                    "type": "address"
                },
                {
                    "name": "AC",
                    "type": "address"
                },
                {
                    "name": "T",
                    "type": "address"
                },
                {
                    "name": "TC",
                    "type": "address"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_type",
                    "type": "uint256"
                }
            ],
            "name": "comfirm",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_logic",
                    "type": "uint256"
                },
                {
                    "name": "_fun",
                    "type": "uint256"
                },
                {
                    "name": "_resSize",
                    "type": "uint256"
                }
            ],
            "name": "setfun",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getWaitKeys",
            "outputs": [
                {
                    "name": "A",
                    "type": "address"
                },
                {
                    "name": "AC",
                    "type": "address"
                },
                {
                    "name": "T",
                    "type": "address"
                },
                {
                    "name": "TC",
                    "type": "address"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_fun",
                    "type": "uint256"
                }
            ],
            "name": "get",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                },
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_fun",
                    "type": "uint256"
                }
            ],
            "name": "getWait",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                },
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_type",
                    "type": "uint256"
                }
            ],
            "name": "requestComfirm",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "inputs": [],
            "payable": false,
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_fun",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "_resSize",
                    "type": "uint256"
                }
            ],
            "name": "SetFun",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_no",
                    "type": "uint256"
                }
            ],
            "name": "Err",
            "type": "event"
        }
    ],
    "Token": [
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_spender",
                    "type": "address"
                },
                {
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [
                {
                    "name": "success",
                    "type": "bool"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "totalSupply",
            "outputs": [
                {
                    "name": "supply",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_from",
                    "type": "address"
                },
                {
                    "name": "_to",
                    "type": "address"
                },
                {
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [
                {
                    "name": "success",
                    "type": "bool"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_from",
                    "type": "address"
                },
                {
                    "name": "_to",
                    "type": "address"
                },
                {
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "forceTransfer",
            "outputs": [
                {
                    "name": "success",
                    "type": "bool"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_account",
                    "type": "address"
                }
            ],
            "name": "unfreeze",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_account",
                    "type": "address"
                }
            ],
            "name": "accountStatus",
            "outputs": [
                {
                    "name": "_status",
                    "type": "uint8"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "unfreezeToken",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_owner",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
            "outputs": [
                {
                    "name": "balance",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "freezeToken",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_account",
                    "type": "address"
                }
            ],
            "name": "freeze",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_amounts",
                    "type": "uint256"
                }
            ],
            "name": "destroy",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_to",
                    "type": "address"
                },
                {
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "transfer",
            "outputs": [
                {
                    "name": "success",
                    "type": "bool"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_issuer",
                    "type": "address"
                },
                {
                    "name": "_symbol",
                    "type": "bytes32"
                },
                {
                    "name": "_id",
                    "type": "uint256"
                },
                {
                    "name": "_maxSupply",
                    "type": "uint256"
                },
                {
                    "name": "_precision",
                    "type": "uint256"
                },
                {
                    "name": "_currentSupply",
                    "type": "uint256"
                },
                {
                    "name": "_closingTime",
                    "type": "uint256"
                },
                {
                    "name": "_description",
                    "type": "string"
                },
                {
                    "name": "_hash",
                    "type": "uint256"
                },
                {
                    "name": "_coreContract",
                    "type": "address"
                }
            ],
            "name": "init",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "summary",
            "outputs": [
                {
                    "name": "_id",
                    "type": "uint256"
                },
                {
                    "name": "_issuer",
                    "type": "address"
                },
                {
                    "name": "_symbol",
                    "type": "bytes32"
                },
                {
                    "name": "_maxSupply",
                    "type": "uint256"
                },
                {
                    "name": "_precision",
                    "type": "uint256"
                },
                {
                    "name": "_currentSupply",
                    "type": "uint256"
                },
                {
                    "name": "_description",
                    "type": "string"
                },
                {
                    "name": "_registerTime",
                    "type": "uint256"
                },
                {
                    "name": "_closingTime",
                    "type": "uint256"
                },
                {
                    "name": "_coreContract",
                    "type": "address"
                },
                {
                    "name": "_hash",
                    "type": "uint256"
                },
                {
                    "name": "_status",
                    "type": "uint8"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_amounts",
                    "type": "uint256"
                }
            ],
            "name": "issueMore",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "owner",
                    "type": "address"
                },
                {
                    "name": "spender",
                    "type": "address"
                }
            ],
            "name": "allowance",
            "outputs": [
                {
                    "name": "_allowance",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_newCore",
                    "type": "uint256"
                }
            ],
            "name": "resetCore",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "normal",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "inputs": [],
            "payable": false,
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_issuer",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "_symbol",
                    "type": "bytes32"
                },
                {
                    "indexed": false,
                    "name": "_id",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "_maxSupply",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "_precision",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "_currentSupply",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "_closingTime",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "_description",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "name": "_hash",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "_coreContract",
                    "type": "address"
                }
            ],
            "name": "TokenCreate",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_id",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "_from",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "_to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "ForceTransfer",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_issuer",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "_id",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "_amounts",
                    "type": "uint256"
                }
            ],
            "name": "IssueMore",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_issuer",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "_id",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "_amounts",
                    "type": "uint256"
                }
            ],
            "name": "Destroy",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "spender",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_res",
                    "type": "uint256[]"
                }
            ],
            "name": "Init",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_old",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "_new",
                    "type": "uint256"
                }
            ],
            "name": "ResetCore",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_old",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "_new",
                    "type": "uint256"
                }
            ],
            "name": "ResetOwner",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_ok",
                    "type": "bool"
                }
            ],
            "name": "Success",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_no",
                    "type": "uint256"
                }
            ],
            "name": "Err",
            "type": "event"
        }
    ],
    "TokenManager": [
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_xindi",
                    "type": "address"
                },
                {
                    "name": "_accountManager",
                    "type": "address"
                },
                {
                    "name": "_tokenPorxy",
                    "type": "address"
                },
                {
                    "name": "_MinTerm",
                    "type": "uint256"
                },
                {
                    "name": "_limit",
                    "type": "uint256"
                }
            ],
            "name": "setOption",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_no",
                    "type": "uint256"
                }
            ],
            "name": "getOperation_resetMe",
            "outputs": [
                {
                    "name": "r_no",
                    "type": "uint256"
                },
                {
                    "name": "_role",
                    "type": "uint256"
                },
                {
                    "name": "_key",
                    "type": "address"
                },
                {
                    "name": "_status",
                    "type": "uint8"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getOperationAmounts_resetMe",
            "outputs": [
                {
                    "name": "_totalAmounts",
                    "type": "uint256"
                },
                {
                    "name": "_waitAmounts",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_token",
                    "type": "address"
                },
                {
                    "name": "_account",
                    "type": "address"
                }
            ],
            "name": "freeze",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_xindi",
                    "type": "address"
                },
                {
                    "name": "_accountManager",
                    "type": "address"
                },
                {
                    "name": "_tokenPorxy",
                    "type": "address"
                }
            ],
            "name": "init",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_no",
                    "type": "uint256"
                }
            ],
            "name": "getOperation",
            "outputs": [
                {
                    "name": "r_no",
                    "type": "uint256"
                },
                {
                    "name": "_account",
                    "type": "address"
                },
                {
                    "name": "_type",
                    "type": "uint256"
                },
                {
                    "name": "_status",
                    "type": "uint8"
                },
                {
                    "name": "_data",
                    "type": "uint256[]"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getKeys",
            "outputs": [
                {
                    "name": "_keys",
                    "type": "address[]"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_no",
                    "type": "uint256"
                },
                {
                    "name": "_role",
                    "type": "uint256"
                },
                {
                    "name": "_keyAddress",
                    "type": "address"
                }
            ],
            "name": "resetMeReject",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_symbol",
                    "type": "bytes32"
                },
                {
                    "name": "_maxSupply",
                    "type": "uint256"
                },
                {
                    "name": "_precision",
                    "type": "uint256"
                },
                {
                    "name": "_currentSupply",
                    "type": "uint256"
                },
                {
                    "name": "_closingTime",
                    "type": "uint256"
                },
                {
                    "name": "_description",
                    "type": "string"
                },
                {
                    "name": "_hash",
                    "type": "uint256"
                }
            ],
            "name": "createToken",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_role",
                    "type": "uint256"
                },
                {
                    "name": "_keyAddress",
                    "type": "address"
                }
            ],
            "name": "resetMe",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_keyNo",
                    "type": "uint256"
                },
                {
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "setOption",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_token",
                    "type": "address"
                },
                {
                    "name": "_account",
                    "type": "address"
                }
            ],
            "name": "unfreeze",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_start",
                    "type": "uint256"
                },
                {
                    "name": "_limit",
                    "type": "uint256"
                }
            ],
            "name": "getTokensSymbol",
            "outputs": [
                {
                    "name": "",
                    "type": "bytes32[]"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_id",
                    "type": "uint256"
                }
            ],
            "name": "getTokenAddress",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_account",
                    "type": "address"
                },
                {
                    "name": "_no",
                    "type": "uint256"
                }
            ],
            "name": "comfirm",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_fun",
                    "type": "uint256"
                }
            ],
            "name": "getFun",
            "outputs": [
                {
                    "name": "_sig",
                    "type": "bytes32"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getOption",
            "outputs": [
                {
                    "name": "_xindi",
                    "type": "address"
                },
                {
                    "name": "_accountManager",
                    "type": "address"
                },
                {
                    "name": "_tokenPorxy",
                    "type": "address"
                },
                {
                    "name": "_MinTerm",
                    "type": "uint256"
                },
                {
                    "name": "_tokenAmounts",
                    "type": "uint256"
                },
                {
                    "name": "_limit",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_token",
                    "type": "address"
                },
                {
                    "name": "_from",
                    "type": "address"
                },
                {
                    "name": "_to",
                    "type": "address"
                },
                {
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "forceTransfer",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_account",
                    "type": "address"
                },
                {
                    "name": "_no",
                    "type": "uint256"
                }
            ],
            "name": "reject",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_id",
                    "type": "uint256"
                }
            ],
            "name": "getTokenSummary",
            "outputs": [
                {
                    "name": "r_ids",
                    "type": "uint256"
                },
                {
                    "name": "_owner",
                    "type": "address"
                },
                {
                    "name": "_tokenAddress",
                    "type": "address"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_no",
                    "type": "uint256"
                },
                {
                    "name": "_role",
                    "type": "uint256"
                },
                {
                    "name": "_keyAddress",
                    "type": "address"
                }
            ],
            "name": "resetMeC",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getOptions",
            "outputs": [
                {
                    "name": "_options",
                    "type": "address[]"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getTokenAmounts",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_newCore",
                    "type": "uint256"
                }
            ],
            "name": "resetCore",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_fun",
                    "type": "uint256"
                },
                {
                    "name": "_sig",
                    "type": "uint256"
                }
            ],
            "name": "setFun",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getOperationAmounts",
            "outputs": [
                {
                    "name": "_totalAmounts",
                    "type": "uint256"
                },
                {
                    "name": "_waitAmounts",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_start",
                    "type": "uint256"
                },
                {
                    "name": "_limit",
                    "type": "uint256"
                },
                {
                    "name": "_type",
                    "type": "uint256"
                }
            ],
            "name": "getWaitOperationNos",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256[]"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "inputs": [],
            "payable": false,
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_xindi",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "_accountManager",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "_MinTerm",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "_limit",
                    "type": "uint256"
                }
            ],
            "name": "SetOption",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_issuer",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "_symbol",
                    "type": "bytes32"
                },
                {
                    "indexed": false,
                    "name": "_id",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "_maxSupply",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "_precision",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "_currentSupply",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "_closingTime",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "_description",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "name": "_hash",
                    "type": "uint256"
                }
            ],
            "name": "CreateToken",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_no",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "_keyAddress",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "_role",
                    "type": "uint8"
                }
            ],
            "name": "ResetMe",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_no",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "_keyAddress",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "_role",
                    "type": "uint8"
                }
            ],
            "name": "ResetMeC",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_no",
                    "type": "uint256"
                }
            ],
            "name": "ConfirmOperation",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_Token",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "_account",
                    "type": "address"
                }
            ],
            "name": "Freeze",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_Token",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "_account",
                    "type": "address"
                }
            ],
            "name": "Unfreeze",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_token",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "_from",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "_to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "ForceTransfer",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_no",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "_keyAddress",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "_role",
                    "type": "uint256"
                }
            ],
            "name": "ResetMeReject",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_no",
                    "type": "uint256"
                }
            ],
            "name": "Reject",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_res",
                    "type": "uint256[]"
                }
            ],
            "name": "Init",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_old",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "_new",
                    "type": "uint256"
                }
            ],
            "name": "ResetCore",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_old",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "_new",
                    "type": "uint256"
                }
            ],
            "name": "ResetOwner",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_ok",
                    "type": "bool"
                }
            ],
            "name": "Success",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_no",
                    "type": "uint256"
                }
            ],
            "name": "Err",
            "type": "event"
        }
    ],
    "TxManager": [
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_role",
                    "type": "uint256"
                },
                {
                    "name": "_key",
                    "type": "uint256"
                }
            ],
            "name": "resetKey",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_account",
                    "type": "uint256"
                },
                {
                    "name": "_hash",
                    "type": "uint256"
                },
                {
                    "name": "_other",
                    "type": "uint256"
                }
            ],
            "name": "pass",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getKeys",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                },
                {
                    "name": "",
                    "type": "address"
                },
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "BaseInit",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getOptionsWait",
            "outputs": [
                {
                    "name": "_res",
                    "type": "uint256[]"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_key",
                    "type": "uint256"
                },
                {
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "resetOption",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "summary",
            "outputs": [
                {
                    "name": "_owner",
                    "type": "uint256"
                },
                {
                    "name": "_core",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getOptions",
            "outputs": [
                {
                    "name": "_res",
                    "type": "uint256[]"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "requestComfirm",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "comfirm",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "init",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_newCore",
                    "type": "uint256"
                }
            ],
            "name": "resetCore",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "inputs": [],
            "payable": false,
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_key",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "ResetOption",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_res",
                    "type": "uint256[]"
                }
            ],
            "name": "Init",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_old",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "_new",
                    "type": "uint256"
                }
            ],
            "name": "ResetCore",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_old",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "_new",
                    "type": "uint256"
                }
            ],
            "name": "ResetOwner",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_ok",
                    "type": "bool"
                }
            ],
            "name": "Success",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_no",
                    "type": "uint256"
                }
            ],
            "name": "Err",
            "type": "event"
        }
    ],
    "Xindi": [
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_no",
                    "type": "uint256"
                }
            ],
            "name": "getOperation_resetMe",
            "outputs": [
                {
                    "name": "r_no",
                    "type": "uint256"
                },
                {
                    "name": "_role",
                    "type": "uint256"
                },
                {
                    "name": "_key",
                    "type": "address"
                },
                {
                    "name": "_status",
                    "type": "uint8"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getOperationAmounts_resetMe",
            "outputs": [
                {
                    "name": "_totalAmounts",
                    "type": "uint256"
                },
                {
                    "name": "_waitAmounts",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_account",
                    "type": "address"
                },
                {
                    "name": "_level",
                    "type": "uint256"
                }
            ],
            "name": "setIdLevel",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_no",
                    "type": "uint256"
                }
            ],
            "name": "getOperation",
            "outputs": [
                {
                    "name": "r_no",
                    "type": "uint256"
                },
                {
                    "name": "_account",
                    "type": "address"
                },
                {
                    "name": "_type",
                    "type": "uint256"
                },
                {
                    "name": "_status",
                    "type": "uint8"
                },
                {
                    "name": "_data",
                    "type": "uint256[]"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getKeys",
            "outputs": [
                {
                    "name": "_keys",
                    "type": "address[]"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_account",
                    "type": "address"
                }
            ],
            "name": "unfreeze",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_no",
                    "type": "uint256"
                },
                {
                    "name": "_role",
                    "type": "uint256"
                },
                {
                    "name": "_keyAddress",
                    "type": "address"
                }
            ],
            "name": "resetMeReject",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_role",
                    "type": "uint256"
                },
                {
                    "name": "_keyAddress",
                    "type": "address"
                }
            ],
            "name": "resetMe",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_keyNo",
                    "type": "uint256"
                },
                {
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "setOption",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_account",
                    "type": "address"
                }
            ],
            "name": "revokeCA",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_account",
                    "type": "address"
                },
                {
                    "name": "_no",
                    "type": "uint256"
                }
            ],
            "name": "comfirm",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_fun",
                    "type": "uint256"
                }
            ],
            "name": "getFun",
            "outputs": [
                {
                    "name": "_sig",
                    "type": "bytes32"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_account",
                    "type": "address"
                }
            ],
            "name": "freeze",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_account",
                    "type": "address"
                },
                {
                    "name": "_CA",
                    "type": "address"
                }
            ],
            "name": "setCA",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_account",
                    "type": "address"
                },
                {
                    "name": "_no",
                    "type": "uint256"
                }
            ],
            "name": "reject",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_subContract",
                    "type": "address"
                },
                {
                    "name": "_role",
                    "type": "uint256"
                },
                {
                    "name": "_key",
                    "type": "address"
                }
            ],
            "name": "setSubKey",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_no",
                    "type": "uint256"
                },
                {
                    "name": "_role",
                    "type": "uint256"
                },
                {
                    "name": "_keyAddress",
                    "type": "address"
                }
            ],
            "name": "resetMeC",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getOptions",
            "outputs": [
                {
                    "name": "_options",
                    "type": "address[]"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "init",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_newCore",
                    "type": "uint256"
                }
            ],
            "name": "resetCore",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_fun",
                    "type": "uint256"
                },
                {
                    "name": "_sig",
                    "type": "uint256"
                }
            ],
            "name": "setFun",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getOperationAmounts",
            "outputs": [
                {
                    "name": "_totalAmounts",
                    "type": "uint256"
                },
                {
                    "name": "_waitAmounts",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_start",
                    "type": "uint256"
                },
                {
                    "name": "_limit",
                    "type": "uint256"
                },
                {
                    "name": "_type",
                    "type": "uint256"
                }
            ],
            "name": "getWaitOperationNos",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256[]"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_account",
                    "type": "address"
                },
                {
                    "name": "_owners",
                    "type": "address[]"
                },
                {
                    "name": "_weight",
                    "type": "uint256[]"
                },
                {
                    "name": "_Threshold",
                    "type": "uint256"
                }
            ],
            "name": "reSet",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "inputs": [],
            "payable": false,
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_account",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "_owners",
                    "type": "address[]"
                },
                {
                    "indexed": false,
                    "name": "_weight",
                    "type": "uint256[]"
                },
                {
                    "indexed": false,
                    "name": "_Threshold",
                    "type": "uint256[]"
                }
            ],
            "name": "Reset",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_account",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "level",
                    "type": "uint256"
                }
            ],
            "name": "SetIdLevel",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_account",
                    "type": "address"
                }
            ],
            "name": "Freeze",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_account",
                    "type": "address"
                }
            ],
            "name": "Unfreeze",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_no",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "_keyAddress",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "_role",
                    "type": "uint256"
                }
            ],
            "name": "ResetMe",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_no",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "_keyAddress",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "_role",
                    "type": "uint256"
                }
            ],
            "name": "ResetMeC",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_no",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "_keyAddress",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "_role",
                    "type": "uint256"
                }
            ],
            "name": "ResetMeReject",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_no",
                    "type": "uint256"
                }
            ],
            "name": "ConfirmOperation",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_no",
                    "type": "uint256"
                }
            ],
            "name": "Reject",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_res",
                    "type": "uint256[]"
                }
            ],
            "name": "Init",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_old",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "_new",
                    "type": "uint256"
                }
            ],
            "name": "ResetCore",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_old",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "_new",
                    "type": "uint256"
                }
            ],
            "name": "ResetOwner",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_ok",
                    "type": "bool"
                }
            ],
            "name": "Success",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_no",
                    "type": "uint256"
                }
            ],
            "name": "Err",
            "type": "event"
        }
    ]
}
module.exports=abis;