var abis1=
{
    "Account": {
        "label": "账户管理合约",
        "fun": {
            "createToken": {
                "label": "创建资产",
                "inputs": {
                    "_symbol": {
                        "label": "代号",
                        "type": "bytes32"
                    },
                    "_maxSupply": {
                        "label": "最大供应量",
                        "type": "uint256"
                    },
                    "_precision": {
                        "label": "精度",
                        "type": "uint256"
                    },
                    "_currentSupply": {
                        "label": "当前供应量",
                        "type": "uint256"
                    },
                    "_closingTime": {
                        "label": "过期时间",
                        "type": "uint256"
                    },
                    "_description": {
                        "label": "描述",
                        "type": "string"
                    },
                    "_hash": {
                        "label": "资产法律文书哈希",
                        "type": "uint256"
                    },
                    "_tokenManager": {
                        "label": "资产管理合约地址",
                        "type": "uint256"
                    }
                },
                "outputs": {},
                "constant": false,
                "type": "function",
                "showLevel": 2
            },
            "setCA": {
                "label": "setCA",
                "inputs": {
                    "_CA": {
                        "label": "_CA",
                        "type": "address"
                    }
                },
                "outputs": {
                    "": {
                        "label": "",
                        "type": "bool"
                    }
                },
                "constant": false,
                "type": "function",
                "showLevel": 0
            },
            "freeze": {
                "label": "freeze",
                "inputs": {},
                "outputs": {
                    "": {
                        "label": "",
                        "type": "bool"
                    }
                },
                "constant": false,
                "type": "function",
                "showLevel": 0
            },
            "unfreeze": {
                "label": "unfreeze",
                "inputs": {},
                "outputs": {
                    "": {
                        "label": "",
                        "type": "bool"
                    }
                },
                "constant": false,
                "type": "function",
                "showLevel": 0
            },
            "setIdLevel": {
                "label": "setIdLevel",
                "inputs": {
                    "_level": {
                        "label": "_level",
                        "type": "uint256"
                    }
                },
                "outputs": {
                    "": {
                        "label": "",
                        "type": "bool"
                    }
                },
                "constant": false,
                "type": "function",
                "showLevel": 0
            },
            "destroyToken": {
                "label": " 销毁资产",
                "inputs": {
                    "tokenContract": {
                        "label": "资产合约地址",
                        "type": "address"
                    },
                    "_amount": {
                        "label": "数量",
                        "type": "uint256"
                    }
                },
                "outputs": {
                    "success": {
                        "label": "success",
                        "type": "bool"
                    }
                },
                "constant": false,
                "type": "function",
                "showLevel": 2
            },
            "resetAccountOwner": {
                "label": "resetAccountOwner",
                "inputs": {
                    "_Tx_threshold": {
                        "label": "_Tx_threshold",
                        "type": "uint256"
                    },
                    "_owners": {
                        "label": "_owners",
                        "type": "address[]"
                    },
                    "_weight": {
                        "label": "_weight",
                        "type": "uint256[]"
                    }
                },
                "outputs": {},
                "constant": false,
                "type": "function",
                "showLevel": 0
            },
            "summary": {
                "label": "账户详情",
                "inputs": {},
                "outputs": {
                    "_core": {
                        "label": "管理者",
                        "type": "address"
                    },
                    "_TxCore": {
                        "label": "交易确认管理者",
                        "type": "address"
                    },
                    "_status": {
                        "label": "状态",
                        "type": "uint256"
                    },
                    "_level": {
                        "label": "实名等级",
                        "type": "uint256"
                    },
                    "_ownerAmount": {
                        "label": "账户拥有者数",
                        "type": "uint256"
                    },
                    "_tx_threshold": {
                        "label": "交易生效阀值",
                        "type": "uint256"
                    },
                    "_Re_threshold": {
                        "label": "重置阀值",
                        "type": "uint256"
                    },
                    "_CA": {
                        "label": "CA地址",
                        "type": "address"
                    },
                    "_owner": {
                        "label": "拥有者",
                        "type": "address[]"
                    },
                    "_weight": {
                        "label": "权重",
                        "type": "uint256[]"
                    }
                },
                "constant": true,
                "type": "function",
                "showLevel": 2
            },
            "setPass": {
                "label": "setPass",
                "inputs": {
                    "_hash": {
                        "label": "_hash",
                        "type": "uint256"
                    },
                    "_other": {
                        "label": "_other",
                        "type": "uint256"
                    }
                },
                "outputs": {
                    "": {
                        "label": "",
                        "type": "bool"
                    }
                },
                "constant": false,
                "type": "function",
                "showLevel": 0
            },
            "getOwner": {
                "label": "查询拥有者",
                "inputs": {
                    "_no": {
                        "label": "序号",
                        "type": "uint256"
                    }
                },
                "outputs": {
                    "_owner": {
                        "label": "地址",
                        "type": "address"
                    },
                    "_weight": {
                        "label": "权重",
                        "type": "uint256"
                    }
                },
                "constant": false,
                "type": "function",
                "showLevel": 2
            },
            "resetCore": {
                "label": "resetCore",
                "inputs": {
                    "_newCore": {
                        "label": "_newCore",
                        "type": "uint256"
                    }
                },
                "outputs": {},
                "constant": false,
                "type": "function",
                "showLevel": 0
            },
            "revokeCA": {
                "label": "revokeCA",
                "inputs": {},
                "outputs": {
                    "": {
                        "label": "",
                        "type": "bool"
                    }
                },
                "constant": false,
                "type": "function",
                "showLevel": 0
            },
            "init": {
                "label": "init",
                "inputs": {
                    "_owner": {
                        "label": "_owner",
                        "type": "address"
                    },
                    "_weight": {
                        "label": "_weight",
                        "type": "uint256"
                    },
                    "_Tx_threshold": {
                        "label": "_Tx_threshold",
                        "type": "uint256"
                    },
                    "_Re_threshold": {
                        "label": "_Re_threshold",
                        "type": "uint256"
                    },
                    "_core": {
                        "label": "_core",
                        "type": "address"
                    },
                    "_coreTx": {
                        "label": "_coreTx",
                        "type": "address"
                    }
                },
                "outputs": {
                    "": {
                        "label": "",
                        "type": "bool"
                    }
                },
                "constant": false,
                "type": "function",
                "showLevel": 0
            },
            "transferToken": {
                "label": "发送资产",
                "inputs": {
                    "_tokenContract": {
                        "label": "资产地址",
                        "type": "address"
                    },
                    "_to": {
                        "label": "发送至",
                        "type": "address"
                    },
                    "_amount": {
                        "label": "数量",
                        "type": "uint256"
                    }
                },
                "outputs": {
                    "success": {
                        "label": "success",
                        "type": "bool"
                    }
                },
                "constant": false,
                "type": "function",
                "showLevel": 2
            },
            "issuerMoreToken": {
                "label": "增发资产",
                "inputs": {
                    "tokenContract": {
                        "label": "资产地址",
                        "type": "address"
                    },
                    "_amount": {
                        "label": "数量",
                        "type": "uint256"
                    }
                },
                "outputs": {
                    "success": {
                        "label": "success",
                        "type": "bool"
                    }
                },
                "constant": false,
                "type": "function",
                "showLevel": 2
            },
            "undefined": {},
            "ReSetAccountOwner": {
                "label": "ReSetAccountOwner",
                "inputs": {
                    "_Tx_threshold": {
                        "label": "_Tx_threshold",
                        "type": "uint256"
                    },
                    "_owners": {
                        "label": "_owners",
                        "type": "address[]"
                    },
                    "_weight": {
                        "label": "_weight",
                        "type": "uint256[]"
                    }
                },
                "type": "event",
                "showLevel": 0
            },
            "CreateAccount": {
                "label": "CreateAccount",
                "inputs": {
                    "_owner": {
                        "label": "_owner",
                        "type": "address"
                    },
                    "_weight": {
                        "label": "_weight",
                        "type": "uint256"
                    },
                    "_Tx_threshold": {
                        "label": "_Tx_threshold",
                        "type": "uint256"
                    },
                    "_core": {
                        "label": "_core",
                        "type": "address"
                    },
                    "_coreTx": {
                        "label": "_coreTx",
                        "type": "address"
                    }
                },
                "type": "event",
                "showLevel": 0
            },
            "Init": {
                "label": "Init",
                "inputs": {
                    "_res": {
                        "label": "_res",
                        "type": "uint256[]"
                    }
                },
                "type": "event",
                "showLevel": 0
            },
            "ResetCore": {
                "label": "ResetCore",
                "inputs": {
                    "_old": {
                        "label": "_old",
                        "type": "uint256"
                    },
                    "_new": {
                        "label": "_new",
                        "type": "uint256"
                    }
                },
                "type": "event",
                "showLevel": 0
            },
            "ResetOwner": {
                "label": "ResetOwner",
                "inputs": {
                    "_old": {
                        "label": "_old",
                        "type": "uint256"
                    },
                    "_new": {
                        "label": "_new",
                        "type": "uint256"
                    }
                },
                "type": "event",
                "showLevel": 0
            },
            "Success": {
                "label": "Success",
                "inputs": {
                    "_ok": {
                        "label": "_ok",
                        "type": "bool"
                    }
                },
                "type": "event",
                "showLevel": 0
            },
            "Err": {
                "label": "Err",
                "inputs": {
                    "_no": {
                        "label": "_no",
                        "type": "uint256"
                    }
                },
                "type": "event",
                "showLevel": 0
            }
        }
    },
    "AccountManager": {
        "label": "账户管理合约",
        "fun": {
            "requestConfirm": {
                "label": "requestConfirm",
                "inputs": {},
                "outputs": {},
                "constant": false,
                "type": "function",
                "showLevel": 1
            },
            "getAccountNo": {
                "label": "查询账户编号",
                "inputs": {
                    "_account": {
                        "label": "账户地址",
                        "type": "address"
                    }
                },
                "outputs": {
                    "_no": {
                        "label": "编号",
                        "type": "uint256"
                    }
                },
                "constant": true,
                "type": "function",
                "showLevel": 2
            },
            "resetKey": {
                "label": "resetKey",
                "inputs": {
                    "_role": {
                        "label": "_role",
                        "type": "uint256"
                    },
                    "_key": {
                        "label": "_key",
                        "type": "uint256"
                    }
                },
                "outputs": {},
                "constant": false,
                "type": "function",
                "showLevel":0
            },
            "getKeys": {
                "label": "查询Key",
                "inputs": {},
                "outputs": {
                    "": {
                        "label": "",
                        "type": "address[]"
                    }
                },
                "constant": true,
                "type": "function",
                "showLevel": 2
            },
            "getOptionsWait": {
                "label": "查询待批准的参数",
                "inputs": {},
                "outputs": {
                    "_res": {
                        "label": "参数数组",
                        "type": "uint256[]"
                    }
                },
                "constant": true,
                "type": "function",
                "showLevel": 2
            },
            "accountAmount": {
                "label": "查询账户总数",
                "inputs": {},
                "outputs": {
                    "": {
                        "label": "",
                        "type": "uint256"
                    }
                },
                "constant": true,
                "type": "function",
                "showLevel": 2
            },
            "confirm": {
                "label": "批准",
                "inputs": {},
                "outputs": {},
                "constant": false,
                "type": "function",
                "showLevel": 1
            },
            "init": {
                "label": "init",
                "inputs": {
                    "_core": {
                        "label": "_core",
                        "type": "uint256"
                    },
                    "_resetKey": {
                        "label": "_resetKey",
                        "type": "uint256"
                    },
                    "_resetKeyC": {
                        "label": "_resetKeyC",
                        "type": "uint256"
                    },
                    "_owner": {
                        "label": "_owner",
                        "type": "uint256"
                    },
                    "_TxCore": {
                        "label": "_TxCore",
                        "type": "uint256"
                    },
                    "_accountProxy": {
                        "label": "_accountProxy",
                        "type": "uint256"
                    }
                },
                "outputs": {},
                "constant": false,
                "type": "function",
                "showLevel": 0
            },
            "resetOption": {
                "label": "设置参数",
                "inputs": {
                    "_key": {
                        "label": "参数编号",
                        "type": "uint256"
                    },
                    "_value": {
                        "label": "值",
                        "type": "uint256"
                    }
                },
                "outputs": {},
                "constant": false,
                "type": "function",
                "showLevel": 2
            },
            "getOptions": {
                "label": "查询所有参数",
                "inputs": {},
                "outputs": {
                    "_res": {
                        "label": "参数",
                        "type": "uint256[]"
                    }
                },
                "constant": true,
                "type": "function",
                "showLevel": 2
            },
            "getAccountAddress": {
                "label": "查询账户地址",
                "inputs": {
                    "_no": {
                        "label": "编号",
                        "type": "uint256"
                    }
                },
                "outputs": {
                    "": {
                        "label": "",
                        "type": "address"
                    }
                },
                "constant": true,
                "type": "function",
                "showLevel": 2
            },
            "createAccount": {
                "label": "创建账户",
                "inputs": {
                    "_owner": {
                        "label": "拥有者",
                        "type": "address"
                    },
                    "_weight": {
                        "label": "权重",
                        "type": "uint32"
                    },
                    "_threshold": {
                        "label": "开启阀值",
                        "type": "uint32"
                    }
                },
                "outputs": {},
                "constant": false,
                "type": "function",
                "showLevel": 2
            },
            "resetCore": {
                "label": "resetCore",
                "inputs": {
                    "_newCore": {
                        "label": "_newCore",
                        "type": "uint256"
                    }
                },
                "outputs": {},
                "constant": false,
                "type": "function",
                "showLevel": 0
            },
            "undefined": {},
            "CreateAccountData": {
                "label": "CreateAccountData",
                "inputs": {
                    "": {
                        "label": "",
                        "type": "address"
                    }
                },
                "type": "event",
                "showLevel": 0
            },
            "AccountRecode": {
                "label": "AccountRecode",
                "inputs": {
                    "": {
                        "label": "",
                        "type": "address"
                    }
                },
                "type": "event",
                "showLevel": 0
            },
            "ResetOption": {
                "label": "ResetOption",
                "inputs": {
                    "_key": {
                        "label": "_key",
                        "type": "uint256"
                    },
                    "_value": {
                        "label": "_value",
                        "type": "uint256"
                    }
                },
                "type": "event",
                "showLevel": 0
            },
            "Init": {
                "label": "Init",
                "inputs": {
                    "_res": {
                        "label": "_res",
                        "type": "uint256[]"
                    }
                },
                "type": "event",
                "showLevel": 0
            },
            "ResetCore": {
                "label": "ResetCore",
                "inputs": {
                    "_old": {
                        "label": "_old",
                        "type": "uint256"
                    },
                    "_new": {
                        "label": "_new",
                        "type": "uint256"
                    }
                },
                "type": "event",
                "showLevel": 0
            },
            "ResetOwner": {
                "label": "ResetOwner",
                "inputs": {
                    "_old": {
                        "label": "_old",
                        "type": "uint256"
                    },
                    "_new": {
                        "label": "_new",
                        "type": "uint256"
                    }
                },
                "type": "event",
                "showLevel": 0
            },
            "Success": {
                "label": "Success",
                "inputs": {
                    "_ok": {
                        "label": "_ok",
                        "type": "bool"
                    }
                },
                "type": "event",
                "showLevel": 0
            },
            "Err": {
                "label": "Err",
                "inputs": {
                    "_no": {
                        "label": "_no",
                        "type": "uint256"
                    }
                },
                "type": "event",
                "showLevel": 0
            }
        }
    },
    "LogicProxy": {
        "label": "LogicProxy",
        "fun": {
            "resetKey": {
                "label": "resetKey",
                "inputs": {
                    "_no": {
                        "label": "_no",
                        "type": "uint256"
                    },
                    "_newKey": {
                        "label": "_newKey",
                        "type": "uint256"
                    }
                },
                "outputs": {},
                "constant": false,
                "type": "function",
                "showLevel": 0
            },
            "getKeys": {
                "label": "getKeys",
                "inputs": {},
                "outputs": {
                    "A": {
                        "label": "A",
                        "type": "address"
                    },
                    "AC": {
                        "label": "AC",
                        "type": "address"
                    },
                    "T": {
                        "label": "T",
                        "type": "address"
                    },
                    "TC": {
                        "label": "TC",
                        "type": "address"
                    }
                },
                "constant": true,
                "type": "function",
                "showLevel": 0
            },
            "setfun": {
                "label": "setfun",
                "inputs": {
                    "_logic": {
                        "label": "_logic",
                        "type": "uint256"
                    },
                    "_fun": {
                        "label": "_fun",
                        "type": "uint256"
                    },
                    "_resSize": {
                        "label": "_resSize",
                        "type": "uint256"
                    }
                },
                "outputs": {},
                "constant": false,
                "type": "function",
                "showLevel": 0
            },
            "getWaitKeys": {
                "label": "getWaitKeys",
                "inputs": {},
                "outputs": {
                    "A": {
                        "label": "A",
                        "type": "address"
                    },
                    "AC": {
                        "label": "AC",
                        "type": "address"
                    },
                    "T": {
                        "label": "T",
                        "type": "address"
                    },
                    "TC": {
                        "label": "TC",
                        "type": "address"
                    }
                },
                "constant": true,
                "type": "function",
                "showLevel": 0
            },
            "get": {
                "label": "get",
                "inputs": {
                    "_fun": {
                        "label": "_fun",
                        "type": "uint256"
                    }
                },
                "outputs": {
                    "": {
                        "label": "",
                        "type": "uint256"
                    }
                },
                "constant": true,
                "type": "function",
                "showLevel": 0
            },
            "requestConfirm": {
                "label": "requestConfirm",
                "inputs": {
                    "_type": {
                        "label": "_type",
                        "type": "uint256"
                    }
                },
                "outputs": {},
                "constant": false,
                "type": "function",
                "showLevel": 0
            },
            "confirm": {
                "label": "confirm",
                "inputs": {
                    "_type": {
                        "label": "_type",
                        "type": "uint256"
                    }
                },
                "outputs": {},
                "constant": false,
                "type": "function",
                "showLevel": 0
            },
            "getWait": {
                "label": "getWait",
                "inputs": {
                    "_fun": {
                        "label": "_fun",
                        "type": "uint256"
                    }
                },
                "outputs": {
                    "": {
                        "label": "",
                        "type": "uint256"
                    }
                },
                "constant": true,
                "type": "function",
                "showLevel": 0
            },
            "undefined": {},
            "SetFun": {
                "label": "SetFun",
                "inputs": {
                    "_fun": {
                        "label": "_fun",
                        "type": "uint256"
                    },
                    "_resSize": {
                        "label": "_resSize",
                        "type": "uint256"
                    }
                },
                "type": "event",
                "showLevel": 0
            },
            "Err": {
                "label": "Err",
                "inputs": {
                    "_no": {
                        "label": "_no",
                        "type": "uint256"
                    }
                },
                "type": "event",
                "showLevel": 0
            }
        }
    },
    "Token": {
        "label": "资产合约",
        "fun": {
            "approve": {
                "label": "批准/approve",
                "inputs": {
                    "_spender": {
                        "label": "花费者/_spender",
                        "type": "address"
                    },
                    "_amount": {
                        "label": "数量/_amount",
                        "type": "uint256"
                    }
                },
                "outputs": {
                    "success": {
                        "label": "success",
                        "type": "bool"
                    }
                },
                "constant": false,
                "type": "function",
                "showLevel": 2
            },
            "totalSupply": {
                "label": "总供应量/totalSupply",
                "inputs": {},
                "outputs": {
                    "supply": {
                        "label": "供应量/supply",
                        "type": "uint256"
                    }
                },
                "constant": true,
                "type": "function",
                "showLevel": 2
            },
            "transferFrom": {
                "label": "从发送/transferFrom",
                "inputs": {
                    "_from": {
                        "label": "从/_from",
                        "type": "address"
                    },
                    "_to": {
                        "label": "发送到/_to",
                        "type": "address"
                    },
                    "_amount": {
                        "label": "数量/_amount",
                        "type": "uint256"
                    }
                },
                "outputs": {
                    "success": {
                        "label": "success",
                        "type": "bool"
                    }
                },
                "constant": false,
                "type": "function",
                "showLevel": 2
            },
            "forceTransfer": {
                "label": "强制转移",
                "inputs": {
                    "_from": {
                        "label": "从",
                        "type": "address"
                    },
                    "_to": {
                        "label": "转移至",
                        "type": "address"
                    },
                    "_amount": {
                        "label": "数量",
                        "type": "uint256"
                    }
                },
                "outputs": {
                    "success": {
                        "label": "success",
                        "type": "bool"
                    }
                },
                "constant": false,
                "type": "function",
                "showLevel": 2
            },
            "unfreeze": {
                "label": "unfreeze",
                "inputs": {
                    "_account": {
                        "label": "_account",
                        "type": "address"
                    }
                },
                "outputs": {},
                "constant": false,
                "type": "function",
                "showLevel": 0
            },
            "accountStatus": {
                "label": "账户状态",
                "inputs": {
                    "_account": {
                        "label": "账户地址",
                        "type": "address"
                    }
                },
                "outputs": {
                    "_status": {
                        "label": "状态",
                        "type": "uint8"
                    }
                },
                "constant": true,
                "type": "function",
                "showLevel": 2
            },
            "unfreezeToken": {
                "label": "unfreezeToken",
                "inputs": {},
                "outputs": {},
                "constant": false,
                "type": "function",
                "showLevel": 0
            },
            "balanceOf": {
                "label": "查询余额",
                "inputs": {
                    "_owner": {
                        "label": "地址",
                        "type": "address"
                    }
                },
                "outputs": {
                    "balance": {
                        "label": "余额",
                        "type": "uint256"
                    }
                },
                "constant": true,
                "type": "function",
                "showLevel": 2
            },
            "freezeToken": {
                "label": "freezeToken",
                "inputs": {},
                "outputs": {},
                "constant": false,
                "type": "function",
                "showLevel": 0
            },
            "freeze": {
                "label": "freeze",
                "inputs": {
                    "_account": {
                        "label": "_account",
                        "type": "address"
                    }
                },
                "outputs": {},
                "constant": false,
                "type": "function",
                "showLevel": 0
            },
            "destroy": {
                "label": "destroy",
                "inputs": {
                    "_amounts": {
                        "label": "_amounts",
                        "type": "uint256"
                    }
                },
                "outputs": {},
                "constant": false,
                "type": "function",
                "showLevel": 0
            },
            "transfer": {
                "label": "发送",
                "inputs": {
                    "_to": {
                        "label": "发送至",
                        "type": "address"
                    },
                    "_amount": {
                        "label": "数量",
                        "type": "uint256"
                    }
                },
                "outputs": {
                    "success": {
                        "label": "success",
                        "type": "bool"
                    }
                },
                "constant": false,
                "type": "function",
                "showLevel": 2
            },
            "init": {
                "label": "init",
                "inputs": {
                    "_issuer": {
                        "label": "_issuer",
                        "type": "address"
                    },
                    "_symbol": {
                        "label": "_symbol",
                        "type": "bytes32"
                    },
                    "_id": {
                        "label": "_id",
                        "type": "uint256"
                    },
                    "_maxSupply": {
                        "label": "_maxSupply",
                        "type": "uint256"
                    },
                    "_precision": {
                        "label": "_precision",
                        "type": "uint256"
                    },
                    "_currentSupply": {
                        "label": "_currentSupply",
                        "type": "uint256"
                    },
                    "_closingTime": {
                        "label": "_closingTime",
                        "type": "uint256"
                    },
                    "_description": {
                        "label": "_description",
                        "type": "string"
                    },
                    "_hash": {
                        "label": "_hash",
                        "type": "uint256"
                    },
                    "_coreContract": {
                        "label": "_coreContract",
                        "type": "address"
                    }
                },
                "outputs": {
                    "": {
                        "label": "",
                        "type": "bool"
                    }
                },
                "constant": false,
                "type": "function",
                "showLevel": 0
            },
            "summary": {
                "label": "详情",
                "inputs": {},
                "outputs": {
                    "_id": {
                        "label": "资产编号",
                        "type": "uint256"
                    },
                    "_issuer": {
                        "label": "创建者",
                        "type": "address"
                    },
                    "_symbol": {
                        "label": "代号",
                        "type": "bytes32"
                    },
                    "_maxSupply": {
                        "label": "最大供应量",
                        "type": "uint256"
                    },
                    "_precision": {
                        "label": "精度",
                        "type": "uint256"
                    },
                    "_currentSupply": {
                        "label": "当前供应量",
                        "type": "uint256"
                    },
                    "_description": {
                        "label": "描述",
                        "type": "string"
                    },
                    "_registerTime": {
                        "label": "注册时间",
                        "type": "uint256"
                    },
                    "_closingTime": {
                        "label": "过期时间",
                        "type": "uint256"
                    },
                    "_coreContract": {
                        "label": "管理者",
                        "type": "address"
                    },
                    "_hash": {
                        "label": "资产法律文书哈希",
                        "type": "uint256"
                    },
                    "_status": {
                        "label": "状态",
                        "type": "uint8"
                    }
                },
                "constant": true,
                "type": "function",
                "showLevel": 2
            },
            "issueMore": {
                "label": "issueMore",
                "inputs": {
                    "_amounts": {
                        "label": "_amounts",
                        "type": "uint256"
                    }
                },
                "outputs": {},
                "constant": false,
                "type": "function",
                "showLevel": 0
            },
            "allowance": {
                "label": "allowance",
                "inputs": {
                    "owner": {
                        "label": "owner",
                        "type": "address"
                    },
                    "spender": {
                        "label": "spender",
                        "type": "address"
                    }
                },
                "outputs": {
                    "_allowance": {
                        "label": "_allowance",
                        "type": "uint256"
                    }
                },
                "constant": true,
                "type": "function",
                "showLevel": 0
            },
            "resetCore": {
                "label": "resetCore",
                "inputs": {
                    "_newCore": {
                        "label": "_newCore",
                        "type": "uint256"
                    }
                },
                "outputs": {},
                "constant": false,
                "type": "function",
                "showLevel": 0
            },
            "normal": {
                "label": "normal",
                "inputs": {},
                "outputs": {},
                "constant": false,
                "type": "function",
                "showLevel": 0
            },
            "undefined": {},
            "TokenCreate": {
                "label": "TokenCreate",
                "inputs": {
                    "_issuer": {
                        "label": "_issuer",
                        "type": "address"
                    },
                    "_symbol": {
                        "label": "_symbol",
                        "type": "bytes32"
                    },
                    "_id": {
                        "label": "_id",
                        "type": "uint256"
                    },
                    "_maxSupply": {
                        "label": "_maxSupply",
                        "type": "uint256"
                    },
                    "_precision": {
                        "label": "_precision",
                        "type": "uint256"
                    },
                    "_currentSupply": {
                        "label": "_currentSupply",
                        "type": "uint256"
                    },
                    "_closingTime": {
                        "label": "_closingTime",
                        "type": "uint256"
                    },
                    "_description": {
                        "label": "_description",
                        "type": "string"
                    },
                    "_hash": {
                        "label": "_hash",
                        "type": "uint256"
                    },
                    "_coreContract": {
                        "label": "_coreContract",
                        "type": "address"
                    }
                },
                "type": "event",
                "showLevel": 0
            },
            "ForceTransfer": {
                "label": "ForceTransfer",
                "inputs": {
                    "_id": {
                        "label": "_id",
                        "type": "uint256"
                    },
                    "_from": {
                        "label": "_from",
                        "type": "address"
                    },
                    "_to": {
                        "label": "_to",
                        "type": "address"
                    },
                    "_amount": {
                        "label": "_amount",
                        "type": "uint256"
                    }
                },
                "type": "event",
                "showLevel": 0
            },
            "IssueMore": {
                "label": "IssueMore",
                "inputs": {
                    "_issuer": {
                        "label": "_issuer",
                        "type": "address"
                    },
                    "_id": {
                        "label": "_id",
                        "type": "uint256"
                    },
                    "_amounts": {
                        "label": "_amounts",
                        "type": "uint256"
                    }
                },
                "type": "event",
                "showLevel": 0
            },
            "Destroy": {
                "label": "Destroy",
                "inputs": {
                    "_issuer": {
                        "label": "_issuer",
                        "type": "address"
                    },
                    "_id": {
                        "label": "_id",
                        "type": "uint256"
                    },
                    "_amounts": {
                        "label": "_amounts",
                        "type": "uint256"
                    }
                },
                "type": "event",
                "showLevel": 0
            },
            "Transfer": {
                "label": "Transfer",
                "inputs": {
                    "from": {
                        "label": "from",
                        "type": "address"
                    },
                    "to": {
                        "label": "to",
                        "type": "address"
                    },
                    "value": {
                        "label": "value",
                        "type": "uint256"
                    }
                },
                "type": "event",
                "showLevel": 0
            },
            "Approval": {
                "label": "Approval",
                "inputs": {
                    "owner": {
                        "label": "owner",
                        "type": "address"
                    },
                    "spender": {
                        "label": "spender",
                        "type": "address"
                    },
                    "value": {
                        "label": "value",
                        "type": "uint256"
                    }
                },
                "type": "event",
                "showLevel": 0
            },
            "Init": {
                "label": "Init",
                "inputs": {
                    "_res": {
                        "label": "_res",
                        "type": "uint256[]"
                    }
                },
                "type": "event",
                "showLevel": 0
            },
            "ResetCore": {
                "label": "ResetCore",
                "inputs": {
                    "_old": {
                        "label": "_old",
                        "type": "uint256"
                    },
                    "_new": {
                        "label": "_new",
                        "type": "uint256"
                    }
                },
                "type": "event",
                "showLevel": 0
            },
            "ResetOwner": {
                "label": "ResetOwner",
                "inputs": {
                    "_old": {
                        "label": "_old",
                        "type": "uint256"
                    },
                    "_new": {
                        "label": "_new",
                        "type": "uint256"
                    }
                },
                "type": "event",
                "showLevel": 0
            },
            "Success": {
                "label": "Success",
                "inputs": {
                    "_ok": {
                        "label": "_ok",
                        "type": "bool"
                    }
                },
                "type": "event",
                "showLevel": 0
            },
            "Err": {
                "label": "Err",
                "inputs": {
                    "_no": {
                        "label": "_no",
                        "type": "uint256"
                    }
                },
                "type": "event",
                "showLevel": 0
            }
        }
    },
    "TokenManager": {
        "label": "资产管理合约",
        "fun": {
            "reject": {
                "label": "reject",
                "inputs": {
                    "_no": {
                        "label": "_no",
                        "type": "uint256"
                    },
                    "_destination": {
                        "label": "_destination",
                        "type": "address"
                    }
                },
                "outputs": {
                    "": {
                        "label": "",
                        "type": "bool"
                    }
                },
                "constant": false,
                "type": "function",
                "showLevel": 0
            },
            "getOperation_resetKey": {
                "label": "getOperation_resetKey",
                "inputs": {
                    "_no": {
                        "label": "_no",
                        "type": "uint256"
                    }
                },
                "outputs": {
                    "r_no": {
                        "label": "r_no",
                        "type": "uint256"
                    },
                    "_role": {
                        "label": "_role",
                        "type": "uint256"
                    },
                    "_key": {
                        "label": "_key",
                        "type": "address"
                    },
                    "_status": {
                        "label": "_status",
                        "type": "uint8"
                    }
                },
                "constant": true,
                "type": "function",
                "showLevel": 0
            },
            "freeze": {
                "label": "freeze",
                "inputs": {
                    "_token": {
                        "label": "_token",
                        "type": "address"
                    },
                    "_account": {
                        "label": "_account",
                        "type": "address"
                    }
                },
                "outputs": {},
                "constant": false,
                "type": "function",
                "showLevel": 0
            },
            "getOperation": {
                "label": "getOperation",
                "inputs": {
                    "_no": {
                        "label": "_no",
                        "type": "uint256"
                    }
                },
                "outputs": {
                    "r_no": {
                        "label": "r_no",
                        "type": "uint256"
                    },
                    "_account": {
                        "label": "_account",
                        "type": "address"
                    },
                    "_type": {
                        "label": "_type",
                        "type": "uint256"
                    },
                    "_confirmKey": {
                        "label": "_confirmKey",
                        "type": "address"
                    },
                    "_status": {
                        "label": "_status",
                        "type": "uint8"
                    },
                    "_data": {
                        "label": "_data",
                        "type": "uint256[]"
                    }
                },
                "constant": true,
                "type": "function",
                "showLevel": 0
            },
            "getKeys": {
                "label": "getKeys",
                "inputs": {},
                "outputs": {
                    "_keys": {
                        "label": "_keys",
                        "type": "address[]"
                    }
                },
                "constant": true,
                "type": "function",
                "showLevel": 0
            },
            "createToken": {
                "label": "创建资产",
                "inputs": {
                    "_symbol": {
                        "label": "代号",
                        "type": "bytes32"
                    },
                    "_maxSupply": {
                        "label": "最大供应量",
                        "type": "uint256"
                    },
                    "_precision": {
                        "label": "精度",
                        "type": "uint256"
                    },
                    "_currentSupply": {
                        "label": "初始供应量",
                        "type": "uint256"
                    },
                    "_closingTime": {
                        "label": "过期时间",
                        "type": "uint256"
                    },
                    "_description": {
                        "label": "描述",
                        "type": "string"
                    },
                    "_hash": {
                        "label": "资产法律文书哈希",
                        "type": "uint256"
                    }
                },
                "outputs": {
                    "": {
                        "label": "",
                        "type": "bool"
                    }
                },
                "constant": false,
                "type": "function",
                "showLevel": 2
            },
            "setOption": {
                "label": "setOption",
                "inputs": {
                    "_keyNo": {
                        "label": "_keyNo",
                        "type": "uint256"
                    },
                    "_value": {
                        "label": "_value",
                        "type": "uint256"
                    }
                },
                "outputs": {},
                "constant": false,
                "type": "function",
                "showLevel": 0
            },
            "unfreeze": {
                "label": "unfreeze",
                "inputs": {
                    "_token": {
                        "label": "_token",
                        "type": "address"
                    },
                    "_account": {
                        "label": "_account",
                        "type": "address"
                    }
                },
                "outputs": {},
                "constant": false,
                "type": "function",
                "showLevel": 0
            },
            "getTokensSymbol": {
                "label": "查询资产代号",
                "inputs": {
                    "_start": {
                        "label": "开始",
                        "type": "uint256"
                    },
                    "_limit": {
                        "label": "数量",
                        "type": "uint256"
                    }
                },
                "outputs": {
                    "": {
                        "label": "",
                        "type": "bytes32[]"
                    }
                },
                "constant": true,
                "type": "function",
                "showLevel": 2
            },
            "getTokenAddress": {
                "label": "查询资产地址",
                "inputs": {
                    "_id": {
                        "label": "编号",
                        "type": "uint256"
                    }
                },
                "outputs": {
                    "": {
                        "label": "",
                        "type": "address"
                    }
                },
                "constant": true,
                "type": "function",
                "showLevel": 2
            },
            "resetKeyC": {
                "label": "resetKeyC",
                "inputs": {
                    "_no": {
                        "label": "_no",
                        "type": "uint256"
                    },
                    "_role": {
                        "label": "_role",
                        "type": "uint256"
                    },
                    "_keyAddress": {
                        "label": "_keyAddress",
                        "type": "address"
                    }
                },
                "outputs": {},
                "constant": false,
                "type": "function",
                "showLevel": 0
            },
            "getFun": {
                "label": "getFun",
                "inputs": {
                    "_fun": {
                        "label": "_fun",
                        "type": "uint256"
                    }
                },
                "outputs": {
                    "_sig": {
                        "label": "_sig",
                        "type": "bytes32"
                    }
                },
                "constant": true,
                "type": "function",
                "showLevel": 0
            },
            "resetKey": {
                "label": "resetKey",
                "inputs": {
                    "_role": {
                        "label": "_role",
                        "type": "uint256"
                    },
                    "_keyAddress": {
                        "label": "_keyAddress",
                        "type": "address"
                    }
                },
                "outputs": {},
                "constant": false,
                "type": "function",
                "showLevel": 0
            },
            "forceTransfer": {
                "label": "强制转移",
                "inputs": {
                    "_token": {
                        "label": "资产地址",
                        "type": "address"
                    },
                    "_from": {
                        "label": "从",
                        "type": "address"
                    },
                    "_to": {
                        "label": "转移至",
                        "type": "address"
                    },
                    "_value": {
                        "label": "数量",
                        "type": "uint256"
                    }
                },
                "outputs": {},
                "constant": false,
                "type": "function",
                "showLevel": 2
            },
            "resetKeyReject": {
                "label": "resetKeyReject",
                "inputs": {
                    "_no": {
                        "label": "_no",
                        "type": "uint256"
                    },
                    "_role": {
                        "label": "_role",
                        "type": "uint256"
                    },
                    "_keyAddress": {
                        "label": "_keyAddress",
                        "type": "address"
                    }
                },
                "outputs": {},
                "constant": false,
                "type": "function",
                "showLevel": 0
            },
            "init": {
                "label": "init",
                "inputs": {
                    "_core": {
                        "label": "_core",
                        "type": "uint256"
                    },
                    "_coreC": {
                        "label": "_coreC",
                        "type": "uint256"
                    },
                    "_xindi": {
                        "label": "_xindi",
                        "type": "uint256"
                    },
                    "_accountManager": {
                        "label": "_accountManager",
                        "type": "uint256"
                    },
                    "_tokenPorxy": {
                        "label": "_tokenPorxy",
                        "type": "uint256"
                    }
                },
                "outputs": {},
                "constant": false,
                "type": "function",
                "showLevel": 0
            },
            "summary": {
                "label": "合约详情",
                "inputs": {},
                "outputs": {
                    "_xindi": {
                        "label": "Xindi管理合约地址",
                        "type": "address"
                    },
                    "_accountManager": {
                        "label": "账户管理合约地址",
                        "type": "address"
                    },
                    "_tokenPorxy": {
                        "label": "资产代理合约地址",
                        "type": "address"
                    },
                    "_MinTerm": {
                        "label": "资产最小过期时间",
                        "type": "uint256"
                    },
                    "_tokenAmounts": {
                        "label": "资产数量",
                        "type": "uint256"
                    },
                    "_limit": {
                        "label": "最大遍历数量",
                        "type": "uint256"
                    }
                },
                "constant": true,
                "type": "function",
                "showLevel": 2
            },
            "getTokenSummary": {
                "label": "查询资产简介",
                "inputs": {
                    "_id": {
                        "label": "编号",
                        "type": "uint256"
                    }
                },
                "outputs": {
                    "r_ids": {
                        "label": "编号",
                        "type": "uint256"
                    },
                    "_owner": {
                        "label": "发行者",
                        "type": "address"
                    },
                    "_tokenAddress": {
                        "label": "资产合约地址",
                        "type": "address"
                    }
                },
                "constant": true,
                "type": "function",
                "showLevel": 2
            },
            "confirm": {
                "label": "confirm",
                "inputs": {
                    "_no": {
                        "label": "_no",
                        "type": "uint256"
                    },
                    "_destination": {
                        "label": "_destination",
                        "type": "address"
                    }
                },
                "outputs": {
                    "": {
                        "label": "",
                        "type": "bool"
                    }
                },
                "constant": false,
                "type": "function",
                "showLevel": 0
            },
            "setSubKey": {
                "label": "setSubKey",
                "inputs": {
                    "_subContract": {
                        "label": "_subContract",
                        "type": "address"
                    },
                    "_role": {
                        "label": "_role",
                        "type": "uint256"
                    },
                    "_key": {
                        "label": "_key",
                        "type": "address"
                    }
                },
                "outputs": {},
                "constant": false,
                "type": "function",
                "showLevel": 0
            },
            "getOptions": {
                "label": "getOptions",
                "inputs": {},
                "outputs": {
                    "_options": {
                        "label": "_options",
                        "type": "uint256[]"
                    }
                },
                "constant": true,
                "type": "function",
                "showLevel": 0
            },
            "getTokenAmounts": {
                "label": "查询资产总数",
                "inputs": {},
                "outputs": {
                    "": {
                        "label": "",
                        "type": "uint256"
                    }
                },
                "constant": true,
                "type": "function",
                "showLevel": 2
            },
            "getOperationAmounts_resetKey": {
                "label": "getOperationAmounts_resetKey",
                "inputs": {},
                "outputs": {
                    "_totalAmounts": {
                        "label": "_totalAmounts",
                        "type": "uint256"
                    },
                    "_waitAmounts": {
                        "label": "_waitAmounts",
                        "type": "uint256"
                    }
                },
                "constant": true,
                "type": "function",
                "showLevel": 0
            },
            "resetCore": {
                "label": "resetCore",
                "inputs": {
                    "_newCore": {
                        "label": "_newCore",
                        "type": "uint256"
                    }
                },
                "outputs": {},
                "constant": false,
                "type": "function",
                "showLevel": 0
            },
            "setFun": {
                "label": "setFun",
                "inputs": {
                    "_fun": {
                        "label": "_fun",
                        "type": "uint256"
                    },
                    "_sig": {
                        "label": "_sig",
                        "type": "uint256"
                    }
                },
                "outputs": {},
                "constant": false,
                "type": "function",
                "showLevel": 0
            },
            "getOperationAmounts": {
                "label": "getOperationAmounts",
                "inputs": {},
                "outputs": {
                    "_totalAmounts": {
                        "label": "_totalAmounts",
                        "type": "uint256"
                    },
                    "_waitAmounts": {
                        "label": "_waitAmounts",
                        "type": "uint256"
                    }
                },
                "constant": true,
                "type": "function",
                "showLevel": 0
            },
            "getWaitOperationNos": {
                "label": "getWaitOperationNos",
                "inputs": {
                    "_start": {
                        "label": "_start",
                        "type": "uint256"
                    },
                    "_limit": {
                        "label": "_limit",
                        "type": "uint256"
                    },
                    "_type": {
                        "label": "_type",
                        "type": "uint256"
                    }
                },
                "outputs": {
                    "": {
                        "label": "",
                        "type": "uint256[]"
                    }
                },
                "constant": true,
                "type": "function",
                "showLevel": 0
            },
            "undefined": {},
            "CreateTokenData": {
                "label": "CreateTokenData",
                "inputs": {
                    "_token": {
                        "label": "_token",
                        "type": "address"
                    }
                },
                "type": "event",
                "showLevel": 0
            },
            "CreateToken": {
                "label": "CreateToken",
                "inputs": {
                    "_issuer": {
                        "label": "_issuer",
                        "type": "address"
                    },
                    "_symbol": {
                        "label": "_symbol",
                        "type": "bytes32"
                    },
                    "_id": {
                        "label": "_id",
                        "type": "uint256"
                    },
                    "_maxSupply": {
                        "label": "_maxSupply",
                        "type": "uint256"
                    },
                    "_precision": {
                        "label": "_precision",
                        "type": "uint256"
                    },
                    "_currentSupply": {
                        "label": "_currentSupply",
                        "type": "uint256"
                    },
                    "_closingTime": {
                        "label": "_closingTime",
                        "type": "uint256"
                    },
                    "_description": {
                        "label": "_description",
                        "type": "string"
                    },
                    "_hash": {
                        "label": "_hash",
                        "type": "uint256"
                    }
                },
                "type": "event",
                "showLevel": 0
            },
            "Freeze": {
                "label": "Freeze",
                "inputs": {
                    "_Token": {
                        "label": "_Token",
                        "type": "address"
                    },
                    "_account": {
                        "label": "_account",
                        "type": "address"
                    }
                },
                "type": "event",
                "showLevel": 0
            },
            "Unfreeze": {
                "label": "Unfreeze",
                "inputs": {
                    "_Token": {
                        "label": "_Token",
                        "type": "address"
                    },
                    "_account": {
                        "label": "_account",
                        "type": "address"
                    }
                },
                "type": "event",
                "showLevel": 0
            },
            "ForceTransfer": {
                "label": "ForceTransfer",
                "inputs": {
                    "_token": {
                        "label": "_token",
                        "type": "address"
                    },
                    "_from": {
                        "label": "_from",
                        "type": "address"
                    },
                    "_to": {
                        "label": "_to",
                        "type": "address"
                    },
                    "_value": {
                        "label": "_value",
                        "type": "uint256"
                    }
                },
                "type": "event",
                "showLevel": 0
            },
            "ResetKey": {
                "label": "ResetKey",
                "inputs": {
                    "_no": {
                        "label": "_no",
                        "type": "uint256"
                    },
                    "_keyAddress": {
                        "label": "_keyAddress",
                        "type": "address"
                    },
                    "_role": {
                        "label": "_role",
                        "type": "uint256"
                    }
                },
                "type": "event",
                "showLevel": 0
            },
            "ResetKeyC": {
                "label": "ResetKeyC",
                "inputs": {
                    "_no": {
                        "label": "_no",
                        "type": "uint256"
                    },
                    "_keyAddress": {
                        "label": "_keyAddress",
                        "type": "address"
                    },
                    "_role": {
                        "label": "_role",
                        "type": "uint256"
                    }
                },
                "type": "event",
                "showLevel": 0
            },
            "ResetKeyReject": {
                "label": "ResetKeyReject",
                "inputs": {
                    "_no": {
                        "label": "_no",
                        "type": "uint256"
                    },
                    "_keyAddress": {
                        "label": "_keyAddress",
                        "type": "address"
                    },
                    "_role": {
                        "label": "_role",
                        "type": "uint256"
                    }
                },
                "type": "event",
                "showLevel": 0
            },
            "ConfirmOperation": {
                "label": "ConfirmOperation",
                "inputs": {
                    "_no": {
                        "label": "_no",
                        "type": "uint256"
                    }
                },
                "type": "event",
                "showLevel": 0
            },
            "Reject": {
                "label": "Reject",
                "inputs": {
                    "_no": {
                        "label": "_no",
                        "type": "uint256"
                    }
                },
                "type": "event",
                "showLevel": 0
            },
            "SetOption": {
                "label": "SetOption",
                "inputs": {
                    "_no": {
                        "label": "_no",
                        "type": "uint256"
                    },
                    "_value": {
                        "label": "_value",
                        "type": "uint256"
                    }
                },
                "type": "event",
                "showLevel": 0
            },
            "SetFun": {
                "label": "SetFun",
                "inputs": {
                    "_no": {
                        "label": "_no",
                        "type": "uint256"
                    },
                    "_sig": {
                        "label": "_sig",
                        "type": "uint256"
                    }
                },
                "type": "event",
                "showLevel": 0
            },
            "Init": {
                "label": "Init",
                "inputs": {
                    "_res": {
                        "label": "_res",
                        "type": "uint256[]"
                    }
                },
                "type": "event",
                "showLevel": 0
            },
            "ResetCore": {
                "label": "ResetCore",
                "inputs": {
                    "_old": {
                        "label": "_old",
                        "type": "uint256"
                    },
                    "_new": {
                        "label": "_new",
                        "type": "uint256"
                    }
                },
                "type": "event",
                "showLevel": 0
            },
            "ResetOwner": {
                "label": "ResetOwner",
                "inputs": {
                    "_old": {
                        "label": "_old",
                        "type": "uint256"
                    },
                    "_new": {
                        "label": "_new",
                        "type": "uint256"
                    }
                },
                "type": "event",
                "showLevel": 0
            },
            "Success": {
                "label": "Success",
                "inputs": {
                    "_ok": {
                        "label": "_ok",
                        "type": "bool"
                    }
                },
                "type": "event",
                "showLevel": 0
            },
            "Err": {
                "label": "Err",
                "inputs": {
                    "_no": {
                        "label": "_no",
                        "type": "uint256"
                    }
                },
                "type": "event",
                "showLevel": 0
            }
        }
    },
    "TxManager": {
        "label": "交易管理合约",
        "fun": {
            "requestConfirm": {
                "label": "requestConfirm",
                "inputs": {},
                "outputs": {},
                "constant": false,
                "type": "function",
                "showLevel": 0
            },
            "resetKey": {
                "label": "resetKey",
                "inputs": {
                    "_role": {
                        "label": "_role",
                        "type": "uint256"
                    },
                    "_key": {
                        "label": "_key",
                        "type": "uint256"
                    }
                },
                "outputs": {},
                "constant": false,
                "type": "function",
                "showLevel": 0
            },
            "pass": {
                "label": "pass",
                "inputs": {
                    "_account": {
                        "label": "_account",
                        "type": "uint256"
                    },
                    "_hash": {
                        "label": "_hash",
                        "type": "uint256"
                    },
                    "_other": {
                        "label": "_other",
                        "type": "uint256"
                    }
                },
                "outputs": {},
                "constant": false,
                "type": "function",
                "showLevel": 0
            },
            "getKeys": {
                "label": "getKeys",
                "inputs": {},
                "outputs": {
                    "": {
                        "label": "",
                        "type": "address[]"
                    }
                },
                "constant": true,
                "type": "function",
                "showLevel": 0
            },
            "getOptionsWait": {
                "label": "getOptionsWait",
                "inputs": {},
                "outputs": {
                    "_res": {
                        "label": "_res",
                        "type": "uint256[]"
                    }
                },
                "constant": true,
                "type": "function",
                "showLevel": 0
            },
            "confirm": {
                "label": "confirm",
                "inputs": {},
                "outputs": {},
                "constant": false,
                "type": "function",
                "showLevel": 0
            },
            "init": {
                "label": "init",
                "inputs": {},
                "outputs": {},
                "constant": false,
                "type": "function",
                "showLevel": 0
            },
            "resetOption": {
                "label": "resetOption",
                "inputs": {
                    "_key": {
                        "label": "_key",
                        "type": "uint256"
                    },
                    "_value": {
                        "label": "_value",
                        "type": "uint256"
                    }
                },
                "outputs": {},
                "constant": false,
                "type": "function",
                "showLevel": 0
            },
            "summary": {
                "label": "详情",
                "inputs": {},
                "outputs": {
                    "_owner": {
                        "label": "拥有者",
                        "type": "uint256"
                    },
                    "_core": {
                        "label": "管理者",
                        "type": "uint256"
                    }
                },
                "constant": true,
                "type": "function",
                "showLevel": 2
            },
            "getOptions": {
                "label": "getOptions",
                "inputs": {},
                "outputs": {
                    "_res": {
                        "label": "_res",
                        "type": "uint256[]"
                    }
                },
                "constant": true,
                "type": "function",
                "showLevel": 0
            },
            "resetCore": {
                "label": "resetCore",
                "inputs": {
                    "_newCore": {
                        "label": "_newCore",
                        "type": "uint256"
                    }
                },
                "outputs": {},
                "constant": false,
                "type": "function",
                "showLevel": 0
            },
            "undefined": {},
            "ResetOption": {
                "label": "ResetOption",
                "inputs": {
                    "_key": {
                        "label": "_key",
                        "type": "uint256"
                    },
                    "_value": {
                        "label": "_value",
                        "type": "uint256"
                    }
                },
                "type": "event",
                "showLevel": 0
            },
            "Init": {
                "label": "Init",
                "inputs": {
                    "_res": {
                        "label": "_res",
                        "type": "uint256[]"
                    }
                },
                "type": "event",
                "showLevel": 0
            },
            "ResetCore": {
                "label": "ResetCore",
                "inputs": {
                    "_old": {
                        "label": "_old",
                        "type": "uint256"
                    },
                    "_new": {
                        "label": "_new",
                        "type": "uint256"
                    }
                },
                "type": "event",
                "showLevel": 0
            },
            "ResetOwner": {
                "label": "ResetOwner",
                "inputs": {
                    "_old": {
                        "label": "_old",
                        "type": "uint256"
                    },
                    "_new": {
                        "label": "_new",
                        "type": "uint256"
                    }
                },
                "type": "event",
                "showLevel": 0
            },
            "Success": {
                "label": "Success",
                "inputs": {
                    "_ok": {
                        "label": "_ok",
                        "type": "bool"
                    }
                },
                "type": "event",
                "showLevel": 0
            },
            "Err": {
                "label": "Err",
                "inputs": {
                    "_no": {
                        "label": "_no",
                        "type": "uint256"
                    }
                },
                "type": "event",
                "showLevel": 0
            }
        }
    },
    "Xindi": {
        "label": "Xindi",
        "fun": {
            "reject": {
                "label": "拒绝操作",
                "inputs": {
                    "_no": {
                        "label": "编号",
                        "type": "uint256"
                    },
                    "_destination": {
                        "label": "目标地址",
                        "type": "address"
                    }
                },
                "outputs": {
                    "": {
                        "label": "",
                        "type": "bool"
                    }
                },
                "constant": false,
                "type": "function",
                "showLevel": 2
            },
            "resetAccountOwner": {
                "label": "重置账户",
                "inputs": {
                    "_account": {
                        "label": "账户地址",
                        "type": "address"
                    },
                    "_Threshold": {
                        "label": "阀值",
                        "type": "uint256"
                    },
                    "_owners": {
                        "label": "拥有者",
                        "type": "address[]"
                    },
                    "_weight": {
                        "label": "权重",
                        "type": "uint256[]"
                    }
                },
                "outputs": {},
                "constant": false,
                "type": "function",
                "showLevel": 2
            },
            "getOperation_resetKey": {
                "label": "查询重置Ke操作",
                "inputs": {
                    "_no": {
                        "label": "编号",
                        "type": "uint256"
                    }
                },
                "outputs": {
                    "r_no": {
                        "label": "编号",
                        "type": "uint256"
                    },
                    "_role": {
                        "label": "角色",
                        "type": "uint256"
                    },
                    "_key": {
                        "label": "新Key",
                        "type": "address"
                    },
                    "_status": {
                        "label": "状态",
                        "type": "uint8"
                    }
                },
                "constant": true,
                "type": "function",
                "showLevel": 2
            },
            "setIdLevel": {
                "label": "设置实名等级",
                "inputs": {
                    "_account": {
                        "label": "账户地址",
                        "type": "address"
                    },
                    "_level": {
                        "label": "等级",
                        "type": "uint256"
                    }
                },
                "outputs": {},
                "constant": false,
                "type": "function",
                "showLevel": 2
            },
            "getOperation": {
                "label": "查询操作",
                "inputs": {
                    "_no": {
                        "label": "编号",
                        "type": "uint256"
                    }
                },
                "outputs": {
                    "r_no": {
                        "label": "编号",
                        "type": "uint256"
                    },
                    "_account": {
                        "label": "操作地址",
                        "type": "address"
                    },
                    "_type": {
                        "label": "类型",
                        "type": "uint256"
                    },
                    "_confirmKey": {
                        "label": "需批准Key",
                        "type": "address"
                    },
                    "_status": {
                        "label": "状态",
                        "type": "uint8"
                    },
                    "_data": {
                        "label": "操作数据",
                        "type": "uint256[]"
                    }
                },
                "constant": true,
                "type": "function",
                "showLevel": 2
            },
            "getKeys": {
                "label": "查询全部Key",
                "inputs": {},
                "outputs": {
                    "_keys": {
                        "label": "Keys",
                        "type": "address[]"
                    }
                },
                "constant": true,
                "type": "function",
                "showLevel": 2
            },
            "unfreeze": {
                "label": "解冻账户",
                "inputs": {
                    "_account": {
                        "label": "账户地址",
                        "type": "address"
                    }
                },
                "outputs": {},
                "constant": false,
                "type": "function",
                "showLevel":2
            },
            "setOption": {
                "label": "设置参数",
                "inputs": {
                    "_keyNo": {
                        "label": "参数",
                        "type": "uint256"
                    },
                    "_value": {
                        "label": "值",
                        "type": "uint256"
                    }
                },
                "outputs": {},
                "constant": false,
                "type": "function",
                "showLevel": 1
            },
            "resetKeyC": {
                "label": "批准重置Key",
                "inputs": {
                    "_no": {
                        "label": "编号",
                        "type": "uint256"
                    },
                    "_role": {
                        "label": "角色",
                        "type": "uint256"
                    },
                    "_keyAddress": {
                        "label": "新Key",
                        "type": "address"
                    }
                },
                "outputs": {},
                "constant": false,
                "type": "function",
                "showLevel": 2
            },
            "revokeCA": {
                "label": "撤销CA",
                "inputs": {
                    "_account": {
                        "label": "账户",
                        "type": "address"
                    }
                },
                "outputs": {},
                "constant": false,
                "type": "function",
                "showLevel": 2
            },
            "getFun": {
                "label": "getFun",
                "inputs": {
                    "_fun": {
                        "label": "_fun",
                        "type": "uint256"
                    }
                },
                "outputs": {
                    "_sig": {
                        "label": "_sig",
                        "type": "bytes32"
                    }
                },
                "constant": true,
                "type": "function",
                "showLevel": 0
            },
            "freeze": {
                "label": "冻结账户",
                "inputs": {
                    "_account": {
                        "label": "账户地址",
                        "type": "address"
                    }
                },
                "outputs": {},
                "constant": false,
                "type": "function",
                "showLevel": 2
            },
            "resetKey": {
                "label": "重置Key",
                "inputs": {
                    "_role": {
                        "label": "角色",
                        "type": "uint256"
                    },
                    "_keyAddress": {
                        "label": "新地址",
                        "type": "address"
                    }
                },
                "outputs": {},
                "constant": false,
                "type": "function",
                "showLevel": 2
            },
            "resetKeyReject": {
                "label": "拒绝重置Key",
                "inputs": {
                    "_no": {
                        "label": "编号",
                        "type": "uint256"
                    },
                    "_role": {
                        "label": "角色",
                        "type": "uint256"
                    },
                    "_keyAddress": {
                        "label": "新地址",
                        "type": "address"
                    }
                },
                "outputs": {},
                "constant": false,
                "type": "function",
                "showLevel": 2
            },
            "setCA": {
                "label": "设置CA  ",
                "inputs": {
                    "_account": {
                        "label": "账户地址",
                        "type": "address"
                    },
                    "_CA": {
                        "label": "CA地址",
                        "type": "address"
                    }
                },
                "outputs": {},
                "constant": false,
                "type": "function",
                "showLevel": 2
            },
            "confirm": {
                "label": "批准操作",
                "inputs": {
                    "_no": {
                        "label": "编号",
                        "type": "uint256"
                    },
                    "_destination": {
                        "label": "目标地址",
                        "type": "address"
                    }
                },
                "outputs": {
                    "": {
                        "label": "",
                        "type": "bool"
                    }
                },
                "constant": false,
                "type": "function",
                "showLevel": 2
            },
            "setSubKey": {
                "label": "设置子管理合约Key",
                "inputs": {
                    "_subContract": {
                        "label": "子管理合约地址",
                        "type": "address"
                    },
                    "_role": {
                        "label": "角色",
                        "type": "uint256"
                    },
                    "_key": {
                        "label": "新Key",
                        "type": "address"
                    }
                },
                "outputs": {},
                "constant": false,
                "type": "function",
                "showLevel": 1
            },
            "getOptions": {
                "label": "查询参数",
                "inputs": {},
                "outputs": {
                    "_options": {
                        "label": "全部参数",
                        "type": "uint256[]"
                    }
                },
                "constant": true,
                "type": "function",
                "showLevel": 2
            },
            "getOperationAmounts_resetKey": {
                "label": "查询重置Key总数",
                "inputs": {},
                "outputs": {
                    "_totalAmounts": {
                        "label": "总操作数",
                        "type": "uint256"
                    },
                    "_waitAmounts": {
                        "label": "待批准的操作数",
                        "type": "uint256"
                    }
                },
                "constant": true,
                "type": "function",
                "showLevel": 2
            },
            "init": {
                "label": "init",
                "inputs": {},
                "outputs": {},
                "constant": false,
                "type": "function",
                "showLevel": 0
            },
            "resetCore": {
                "label": "resetCore",
                "inputs": {
                    "_newCore": {
                        "label": "_newCore",
                        "type": "uint256"
                    }
                },
                "outputs": {},
                "constant": false,
                "type": "function",
                "showLevel": 0
            },
            "setFun": {
                "label": "setFun",
                "inputs": {
                    "_fun": {
                        "label": "_fun",
                        "type": "uint256"
                    },
                    "_sig": {
                        "label": "_sig",
                        "type": "uint256"
                    }
                },
                "outputs": {},
                "constant": false,
                "type": "function",
                "showLevel": 0
            },
            "getOperationAmounts": {
                "label": "查询操作总数",
                "inputs": {},
                "outputs": {
                    "_totalAmounts": {
                        "label": "总操作数",
                        "type": "uint256"
                    },
                    "_waitAmounts": {
                        "label": "待批准的操作数",
                        "type": "uint256"
                    }
                },
                "constant": true,
                "type": "function",
                "showLevel": 2
            },
            "getWaitOperationNos": {
                "label": "查询待批准的操作编号",
                "inputs": {
                    "_start": {
                        "label": "开始",
                        "type": "uint256"
                    },
                    "_limit": {
                        "label": "最大",
                        "type": "uint256"
                    },
                    "_type": {
                        "label": "类型",
                        "type": "uint256"
                    }
                },
                "outputs": {
                    "": {
                        "label": "",
                        "type": "uint256[]"
                    }
                },
                "constant": true,
                "type": "function",
                "showLevel": 2
            },
            "undefined": {},
            "ResetAccountOwner": {
                "label": "ResetAccountOwner",
                "inputs": {
                    "_account": {
                        "label": "_account",
                        "type": "address"
                    },
                    "_Threshold": {
                        "label": "_Threshold",
                        "type": "uint256"
                    },
                    "_owners": {
                        "label": "_owners",
                        "type": "address[]"
                    },
                    "_weight": {
                        "label": "_weight",
                        "type": "uint256[]"
                    }
                },
                "type": "event",
                "showLevel": 0
            },
            "SetIdLevel": {
                "label": "SetIdLevel",
                "inputs": {
                    "_account": {
                        "label": "_account",
                        "type": "address"
                    },
                    "level": {
                        "label": "level",
                        "type": "uint256"
                    }
                },
                "type": "event",
                "showLevel": 0
            },
            "SetCA": {
                "label": "SetCA",
                "inputs": {
                    "_account": {
                        "label": "_account",
                        "type": "address"
                    },
                    "_CA": {
                        "label": "_CA",
                        "type": "address"
                    }
                },
                "type": "event",
                "showLevel": 0
            },
            "RevokeCA": {
                "label": "RevokeCA",
                "inputs": {
                    "_account": {
                        "label": "_account",
                        "type": "address"
                    }
                },
                "type": "event",
                "showLevel": 0
            },
            "Freeze": {
                "label": "Freeze",
                "inputs": {
                    "_account": {
                        "label": "_account",
                        "type": "address"
                    }
                },
                "type": "event",
                "showLevel": 0
            },
            "Unfreeze": {
                "label": "Unfreeze",
                "inputs": {
                    "_account": {
                        "label": "_account",
                        "type": "address"
                    }
                },
                "type": "event",
                "showLevel": 0
            },
            "ResetKey": {
                "label": "ResetKey",
                "inputs": {
                    "_no": {
                        "label": "_no",
                        "type": "uint256"
                    },
                    "_keyAddress": {
                        "label": "_keyAddress",
                        "type": "address"
                    },
                    "_role": {
                        "label": "_role",
                        "type": "uint256"
                    }
                },
                "type": "event",
                "showLevel": 0
            },
            "ResetKeyC": {
                "label": "ResetKeyC",
                "inputs": {
                    "_no": {
                        "label": "_no",
                        "type": "uint256"
                    },
                    "_keyAddress": {
                        "label": "_keyAddress",
                        "type": "address"
                    },
                    "_role": {
                        "label": "_role",
                        "type": "uint256"
                    }
                },
                "type": "event",
                "showLevel": 0
            },
            "ResetKeyReject": {
                "label": "ResetKeyReject",
                "inputs": {
                    "_no": {
                        "label": "_no",
                        "type": "uint256"
                    },
                    "_keyAddress": {
                        "label": "_keyAddress",
                        "type": "address"
                    },
                    "_role": {
                        "label": "_role",
                        "type": "uint256"
                    }
                },
                "type": "event",
                "showLevel": 0
            },
            "ConfirmOperation": {
                "label": "ConfirmOperation",
                "inputs": {
                    "_no": {
                        "label": "_no",
                        "type": "uint256"
                    }
                },
                "type": "event",
                "showLevel": 0
            },
            "Reject": {
                "label": "Reject",
                "inputs": {
                    "_no": {
                        "label": "_no",
                        "type": "uint256"
                    }
                },
                "type": "event",
                "showLevel": 0
            },
            "SetOption": {
                "label": "SetOption",
                "inputs": {
                    "_no": {
                        "label": "_no",
                        "type": "uint256"
                    },
                    "_value": {
                        "label": "_value",
                        "type": "uint256"
                    }
                },
                "type": "event",
                "showLevel": 0
            },
            "SetFun": {
                "label": "SetFun",
                "inputs": {
                    "_no": {
                        "label": "_no",
                        "type": "uint256"
                    },
                    "_sig": {
                        "label": "_sig",
                        "type": "uint256"
                    }
                },
                "type": "event",
                "showLevel": 0
            },
            "Init": {
                "label": "Init",
                "inputs": {
                    "_res": {
                        "label": "_res",
                        "type": "uint256[]"
                    }
                },
                "type": "event",
                "showLevel": 0
            },
            "ResetCore": {
                "label": "ResetCore",
                "inputs": {
                    "_old": {
                        "label": "_old",
                        "type": "uint256"
                    },
                    "_new": {
                        "label": "_new",
                        "type": "uint256"
                    }
                },
                "type": "event",
                "showLevel": 0
            },
            "ResetOwner": {
                "label": "ResetOwner",
                "inputs": {
                    "_old": {
                        "label": "_old",
                        "type": "uint256"
                    },
                    "_new": {
                        "label": "_new",
                        "type": "uint256"
                    }
                },
                "type": "event",
                "showLevel": 0
            },
            "Success": {
                "label": "Success",
                "inputs": {
                    "_ok": {
                        "label": "_ok",
                        "type": "bool"
                    }
                },
                "type": "event",
                "showLevel": 0
            },
            "Err": {
                "label": "Err",
                "inputs": {
                    "_no": {
                        "label": "_no",
                        "type": "uint256"
                    }
                },
                "type": "event",
                "showLevel": 0
            }
        }
    }
}
module.exports=abis1;