var abis1=
{
    "Account": {
        "label": "账户合约",
        "address": "",
        "fun": {
            "createToken": {
                "label": "创建资产",
                "inputs": {
                    "_symbol": {
                        "label": "代号",
                        "type": "bytes32",
                        "select": {}
                    },
                    "_maxSupply": {
                        "label": "最大供应量",
                        "type": "uint256",
                        "select": {}
                    },
                    "_precision": {
                        "label": "精度",
                        "type": "uint256",
                        "select": {}
                    },
                    "_currentSupply": {
                        "label": "当前供应量",
                        "type": "uint256",
                        "select": {}
                    },
                    "_closingTime": {
                        "label": "过期时间",
                        "type": "uint256",
                        "select": {}
                    },
                    "_description": {
                        "label": "描述",
                        "type": "string",
                        "select": {}
                    },
                    "_hash": {
                        "label": "资产法律文书哈希",
                        "type": "uint256",
                        "select": {}
                    },
                    "_tokenManager": {
                        "label": "资产管理合约地址",
                        "type": "uint256",
                        "select": {}
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
                        "type": "address",
                        "select": {}
                    }
                },
                "outputs": {
                    "success": {
                        "label": "success",
                        "type": "bool",
                        "select": {}
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
                    "success": {
                        "label": "success",
                        "type": "bool",
                        "select": {}
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
                    "success": {
                        "label": "success",
                        "type": "bool",
                        "select": {}
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
                        "type": "uint256",
                        "select": {}
                    }
                },
                "outputs": {
                    "success": {
                        "label": "success",
                        "type": "bool",
                        "select": {}
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
                        "type": "address",
                        "select": {}
                    },
                    "_amount": {
                        "label": "数量",
                        "type": "uint256",
                        "select": {}
                    }
                },
                "outputs": {
                    "success": {
                        "label": "结果",
                        "type": "bool",
                        "select": {}
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
                        "type": "uint256",
                        "select": {}
                    },
                    "_owners": {
                        "label": "_owners",
                        "type": "address[]",
                        "select": {}
                    },
                    "_weight": {
                        "label": "_weight",
                        "type": "uint256[]",
                        "select": {}
                    }
                },
                "outputs": {
                    "success": {
                        "label": "success",
                        "type": "bool",
                        "select": {}
                    }
                },
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
                        "type": "address",
                        "select": {}
                    },
                    "_TxCore": {
                        "label": "交易确认管理者",
                        "type": "address",
                        "select": {}
                    },
                    "_status": {
                        "label": "状态",
                        "type": "uint256",
                        "select": {
                            "0": "正常",
                            "1": "冻结"
                        }
                    },
                    "_level": {
                        "label": "实名等级",
                        "type": "uint256",
                        "select": {}
                    },
                    "_ownerAmount": {
                        "label": "账户拥有者数",
                        "type": "uint256",
                        "select": {}
                    },
                    "_tx_threshold": {
                        "label": "交易生效阀值",
                        "type": "uint256",
                        "select": {}
                    },
                    "_Re_threshold": {
                        "label": "重置阀值",
                        "type": "uint256",
                        "select": {}
                    },
                    "_CA": {
                        "label": "CA地址",
                        "type": "address",
                        "select": {}
                    },
                    "_owner": {
                        "label": "拥有者",
                        "type": "address[]",
                        "select": {}
                    },
                    "_weight": {
                        "label": "权重",
                        "type": "uint256[]",
                        "select": {}
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
                        "type": "uint256",
                        "select": {}
                    },
                    "_other": {
                        "label": "_other",
                        "type": "uint256",
                        "select": {}
                    }
                },
                "outputs": {
                    "success": {
                        "label": "success",
                        "type": "bool",
                        "select": {}
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
                        "type": "uint256",
                        "select": {}
                    }
                },
                "outputs": {
                    "_owner": {
                        "label": "地址",
                        "type": "address",
                        "select": {}
                    },
                    "_weight": {
                        "label": "权重",
                        "type": "uint256",
                        "select": {}
                    }
                },
                "constant": true,
                "type": "function",
                "showLevel": 2
            },
            "resetCore": {
                "label": "resetCore",
                "inputs": {
                    "_newCore": {
                        "label": "_newCore",
                        "type": "uint256",
                        "select": {}
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
                    "success": {
                        "label": "success",
                        "type": "bool",
                        "select": {}
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
                        "type": "address",
                        "select": {}
                    },
                    "_weight": {
                        "label": "_weight",
                        "type": "uint256",
                        "select": {}
                    },
                    "_Tx_threshold": {
                        "label": "_Tx_threshold",
                        "type": "uint256",
                        "select": {}
                    },
                    "_Re_threshold": {
                        "label": "_Re_threshold",
                        "type": "uint256",
                        "select": {}
                    },
                    "_core": {
                        "label": "_core",
                        "type": "address",
                        "select": {}
                    },
                    "_coreTx": {
                        "label": "_coreTx",
                        "type": "address",
                        "select": {}
                    }
                },
                "outputs": {
                    "success": {
                        "label": "success",
                        "type": "bool",
                        "select": {}
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
                        "type": "address",
                        "select": {}
                    },
                    "_to": {
                        "label": "发送至",
                        "type": "address",
                        "select": {}
                    },
                    "_amount": {
                        "label": "数量",
                        "type": "uint256",
                        "select": {}
                    }
                },
                "outputs": {
                    "success": {
                        "label": "success",
                        "type": "bool",
                        "select": {}
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
                        "type": "address",
                        "select": {}
                    },
                    "_amount": {
                        "label": "数量",
                        "type": "uint256",
                        "select": {}
                    }
                },
                "outputs": {
                    "success": {
                        "label": "success",
                        "type": "bool",
                        "select": {}
                    }
                },
                "constant": false,
                "type": "function",
                "showLevel": 2
            },
            "ReSetAccountOwner": {
                "label": "ReSetAccountOwner",
                "inputs": {
                    "_Tx_threshold": {
                        "label": "_Tx_threshold",
                        "type": "uint256",
                        "select": {}
                    },
                    "_owners": {
                        "label": "_owners",
                        "type": "address[]",
                        "select": {}
                    },
                    "_weight": {
                        "label": "_weight",
                        "type": "uint256[]",
                        "select": {}
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
                        "type": "address",
                        "select": {}
                    },
                    "_weight": {
                        "label": "_weight",
                        "type": "uint256",
                        "select": {}
                    },
                    "_Tx_threshold": {
                        "label": "_Tx_threshold",
                        "type": "uint256",
                        "select": {}
                    },
                    "_core": {
                        "label": "_core",
                        "type": "address",
                        "select": {}
                    },
                    "_coreTx": {
                        "label": "_coreTx",
                        "type": "address",
                        "select": {}
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
                        "type": "uint256[]",
                        "select": {}
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
                        "type": "uint256",
                        "select": {}
                    },
                    "_new": {
                        "label": "_new",
                        "type": "uint256",
                        "select": {}
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
                        "type": "uint256",
                        "select": {}
                    },
                    "_new": {
                        "label": "_new",
                        "type": "uint256",
                        "select": {}
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
                        "type": "bool",
                        "select": {}
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
                        "type": "uint256",
                        "select": {}
                    }
                },
                "type": "event",
                "showLevel": 0
            }
        }
    },
    "AccountManager": {
        "label": "账户管理合约",
        "address": "",
        "fun": {
            "requestConfirm": {
                "label": "请求批准参数设置",
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
                        "type": "address",
                        "select": {}
                    }
                },
                "outputs": {
                    "_no": {
                        "label": "编号",
                        "type": "uint256",
                        "select": {}
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
                        "type": "uint256",
                        "select": {}
                    },
                    "_key": {
                        "label": "_key",
                        "type": "uint256",
                        "select": {}
                    }
                },
                "outputs": {},
                "constant": false,
                "type": "function",
                "showLevel": 0
            },
            "getKeys": {
                "label": "查询Key",
                "inputs": {},
                "outputs": {
                    "_keys": {
                        "label": "Keys",
                        "type": "address[]",
                        "select": {}
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
                        "type": "uint256[]",
                        "select": {}
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
                    "_amount": {
                        "label": "账户总数",
                        "type": "uint256",
                        "select": {}
                    }
                },
                "constant": true,
                "type": "function",
                "showLevel": 2
            },
            "confirm": {
                "label": "批准参数修改",
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
                        "type": "uint256",
                        "select": {}
                    },
                    "_resetKey": {
                        "label": "_resetKey",
                        "type": "uint256",
                        "select": {}
                    },
                    "_resetKeyC": {
                        "label": "_resetKeyC",
                        "type": "uint256",
                        "select": {}
                    },
                    "_owner": {
                        "label": "_owner",
                        "type": "uint256",
                        "select": {}
                    },
                    "_TxCore": {
                        "label": "_TxCore",
                        "type": "uint256",
                        "select": {}
                    },
                    "_accountProxy": {
                        "label": "_accountProxy",
                        "type": "uint256",
                        "select": {}
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
                        "type": "uint256",
                        "select": {}
                    },
                    "_value": {
                        "label": "值",
                        "type": "uint256",
                        "select": {}
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
                        "type": "uint256[]",
                        "select": {}
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
                        "type": "uint256",
                        "select": {}
                    }
                },
                "outputs": {
                    "_account": {
                        "label": "账号地址",
                        "type": "address",
                        "select": {}
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
                        "type": "address",
                        "select": {}
                    },
                    "_weight": {
                        "label": "权重",
                        "type": "uint32",
                        "select": {}
                    },
                    "_threshold": {
                        "label": "开启阀值",
                        "type": "uint32",
                        "select": {}
                    }
                },
                "outputs": {
                    "success": {
                        "label": "success",
                        "type": "bool",
                        "select": {}
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
                        "type": "uint256",
                        "select": {}
                    }
                },
                "outputs": {},
                "constant": false,
                "type": "function",
                "showLevel": 0
            },
            "CreateAccountData": {
                "label": "CreateAccountData",
                "inputs": {
                    "_accountAddress": {
                        "label": "_accountAddress",
                        "type": "address",
                        "select": {}
                    }
                },
                "type": "event",
                "showLevel": 0
            },
            "AccountRecode": {
                "label": "AccountRecode",
                "inputs": {
                    "_no": {
                        "label": "_no",
                        "type": "uint256",
                        "select": {}
                    },
                    "_account": {
                        "label": "_account",
                        "type": "address",
                        "select": {}
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
                        "type": "uint256",
                        "select": {}
                    },
                    "_value": {
                        "label": "_value",
                        "type": "uint256",
                        "select": {}
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
                        "type": "uint256[]",
                        "select": {}
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
                        "type": "uint256",
                        "select": {}
                    },
                    "_new": {
                        "label": "_new",
                        "type": "uint256",
                        "select": {}
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
                        "type": "uint256",
                        "select": {}
                    },
                    "_new": {
                        "label": "_new",
                        "type": "uint256",
                        "select": {}
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
                        "type": "bool",
                        "select": {}
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
                        "type": "uint256",
                        "select": {}
                    }
                },
                "type": "event",
                "showLevel": 0
            }
        }
    },
    "Token": {
        "label": "资产合约",
        "address": "",
        "fun": {
            "approve": {
                "label": "批准/approve",
                "inputs": {
                    "_spender": {
                        "label": "花费者/_spender",
                        "type": "address",
                        "select": {}
                    },
                    "_amount": {
                        "label": "数量/_amount",
                        "type": "uint256",
                        "select": {}
                    }
                },
                "outputs": {
                    "success": {
                        "label": "success",
                        "type": "bool",
                        "select": {}
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
                        "type": "uint256",
                        "select": {}
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
                        "type": "address",
                        "select": {}
                    },
                    "_to": {
                        "label": "发送到/_to",
                        "type": "address",
                        "select": {}
                    },
                    "_amount": {
                        "label": "数量/_amount",
                        "type": "uint256",
                        "select": {}
                    }
                },
                "outputs": {
                    "success": {
                        "label": "success",
                        "type": "bool",
                        "select": {}
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
                        "type": "address",
                        "select": {}
                    },
                    "_to": {
                        "label": "转移至",
                        "type": "address",
                        "select": {}
                    },
                    "_amount": {
                        "label": "数量",
                        "type": "uint256",
                        "select": {}
                    }
                },
                "outputs": {
                    "success": {
                        "label": "success",
                        "type": "bool",
                        "select": {}
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
                        "type": "address",
                        "select": {}
                    }
                },
                "outputs": {
                    "success": {
                        "label": "success",
                        "type": "bool",
                        "select": {}
                    }
                },
                "constant": false,
                "type": "function",
                "showLevel": 0
            },
            "accountStatus": {
                "label": "账户状态",
                "inputs": {
                    "_account": {
                        "label": "账户地址",
                        "type": "address",
                        "select": {}
                    }
                },
                "outputs": {
                    "_status": {
                        "label": "状态",
                        "type": "uint8",
                        "select": {
                            "0": "正常",
                            "1": "冻结"
                        }
                    }
                },
                "constant": true,
                "type": "function",
                "showLevel": 2
            },
            "unfreezeToken": {
                "label": "unfreezeToken",
                "inputs": {},
                "outputs": {
                    "success": {
                        "label": "success",
                        "type": "bool",
                        "select": {}
                    }
                },
                "constant": false,
                "type": "function",
                "showLevel": 0
            },
            "balanceOf": {
                "label": "查询余额",
                "inputs": {
                    "_owner": {
                        "label": "地址",
                        "type": "address",
                        "select": {}
                    }
                },
                "outputs": {
                    "balance": {
                        "label": "余额",
                        "type": "uint256",
                        "select": {}
                    }
                },
                "constant": true,
                "type": "function",
                "showLevel": 2
            },
            "freezeToken": {
                "label": "freezeToken",
                "inputs": {},
                "outputs": {
                    "success": {
                        "label": "success",
                        "type": "bool",
                        "select": {}
                    }
                },
                "constant": false,
                "type": "function",
                "showLevel": 0
            },
            "freeze": {
                "label": "freeze",
                "inputs": {
                    "_account": {
                        "label": "_account",
                        "type": "address",
                        "select": {}
                    }
                },
                "outputs": {
                    "success": {
                        "label": "success",
                        "type": "bool",
                        "select": {}
                    }
                },
                "constant": false,
                "type": "function",
                "showLevel": 0
            },
            "destroy": {
                "label": "destroy",
                "inputs": {
                    "_amounts": {
                        "label": "_amounts",
                        "type": "uint256",
                        "select": {}
                    }
                },
                "outputs": {
                    "success": {
                        "label": "success",
                        "type": "bool",
                        "select": {}
                    }
                },
                "constant": false,
                "type": "function",
                "showLevel": 0
            },
            "transfer": {
                "label": "发送",
                "inputs": {
                    "_to": {
                        "label": "发送至",
                        "type": "address",
                        "select": {}
                    },
                    "_amount": {
                        "label": "数量",
                        "type": "uint256",
                        "select": {}
                    }
                },
                "outputs": {
                    "success": {
                        "label": "success",
                        "type": "bool",
                        "select": {}
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
                        "type": "address",
                        "select": {}
                    },
                    "_symbol": {
                        "label": "_symbol",
                        "type": "bytes32",
                        "select": {}
                    },
                    "_id": {
                        "label": "_id",
                        "type": "uint256",
                        "select": {}
                    },
                    "_maxSupply": {
                        "label": "_maxSupply",
                        "type": "uint256",
                        "select": {}
                    },
                    "_precision": {
                        "label": "_precision",
                        "type": "uint256",
                        "select": {}
                    },
                    "_currentSupply": {
                        "label": "_currentSupply",
                        "type": "uint256",
                        "select": {}
                    },
                    "_closingTime": {
                        "label": "_closingTime",
                        "type": "uint256",
                        "select": {}
                    },
                    "_description": {
                        "label": "_description",
                        "type": "string",
                        "select": {}
                    },
                    "_hash": {
                        "label": "_hash",
                        "type": "uint256",
                        "select": {}
                    },
                    "_coreContract": {
                        "label": "_coreContract",
                        "type": "address",
                        "select": {}
                    }
                },
                "outputs": {
                    "success": {
                        "label": "success",
                        "type": "bool",
                        "select": {}
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
                        "type": "uint256",
                        "select": {}
                    },
                    "_issuer": {
                        "label": "创建者",
                        "type": "address",
                        "select": {}
                    },
                    "_symbol": {
                        "label": "代号",
                        "type": "bytes32",
                        "select": {}
                    },
                    "_maxSupply": {
                        "label": "最大供应量",
                        "type": "uint256",
                        "select": {}
                    },
                    "_precision": {
                        "label": "精度",
                        "type": "uint256",
                        "select": {}
                    },
                    "_currentSupply": {
                        "label": "当前供应量",
                        "type": "uint256",
                        "select": {}
                    },
                    "_description": {
                        "label": "描述",
                        "type": "string",
                        "select": {}
                    },
                    "_registerTime": {
                        "label": "注册时间",
                        "type": "uint256",
                        "select": {}
                    },
                    "_closingTime": {
                        "label": "过期时间",
                        "type": "uint256",
                        "select": {}
                    },
                    "_coreContract": {
                        "label": "管理者",
                        "type": "address",
                        "select": {}
                    },
                    "_hash": {
                        "label": "资产法律文书哈希",
                        "type": "uint256",
                        "select": {}
                    },
                    "_status": {
                        "label": "状态",
                        "type": "uint8",
                        "select": {
                            "0": "正常",
                            "1": "冻结"
                        }
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
                        "type": "uint256",
                        "select": {}
                    }
                },
                "outputs": {
                    "success": {
                        "label": "success",
                        "type": "bool",
                        "select": {}
                    }
                },
                "constant": false,
                "type": "function",
                "showLevel": 0
            },
            "allowance": {
                "label": "allowance",
                "inputs": {
                    "owner": {
                        "label": "owner",
                        "type": "address",
                        "select": {}
                    },
                    "spender": {
                        "label": "spender",
                        "type": "address",
                        "select": {}
                    }
                },
                "outputs": {
                    "_allowance": {
                        "label": "_allowance",
                        "type": "uint256",
                        "select": {}
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
                        "type": "uint256",
                        "select": {}
                    }
                },
                "outputs": {},
                "constant": false,
                "type": "function",
                "showLevel": 0
            },
            "TokenCreate": {
                "label": "TokenCreate",
                "inputs": {
                    "_issuer": {
                        "label": "_issuer",
                        "type": "address",
                        "select": {}
                    },
                    "_symbol": {
                        "label": "_symbol",
                        "type": "bytes32",
                        "select": {}
                    },
                    "_id": {
                        "label": "_id",
                        "type": "uint256",
                        "select": {}
                    },
                    "_maxSupply": {
                        "label": "_maxSupply",
                        "type": "uint256",
                        "select": {}
                    },
                    "_precision": {
                        "label": "_precision",
                        "type": "uint256",
                        "select": {}
                    },
                    "_currentSupply": {
                        "label": "_currentSupply",
                        "type": "uint256",
                        "select": {}
                    },
                    "_closingTime": {
                        "label": "_closingTime",
                        "type": "uint256",
                        "select": {}
                    },
                    "_description": {
                        "label": "_description",
                        "type": "string",
                        "select": {}
                    },
                    "_hash": {
                        "label": "_hash",
                        "type": "uint256",
                        "select": {}
                    },
                    "_coreContract": {
                        "label": "_coreContract",
                        "type": "address",
                        "select": {}
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
                        "type": "uint256",
                        "select": {}
                    },
                    "_from": {
                        "label": "_from",
                        "type": "address",
                        "select": {}
                    },
                    "_to": {
                        "label": "_to",
                        "type": "address",
                        "select": {}
                    },
                    "_amount": {
                        "label": "_amount",
                        "type": "uint256",
                        "select": {}
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
                        "type": "address",
                        "select": {}
                    },
                    "_id": {
                        "label": "_id",
                        "type": "uint256",
                        "select": {}
                    },
                    "_amounts": {
                        "label": "_amounts",
                        "type": "uint256",
                        "select": {}
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
                        "type": "address",
                        "select": {}
                    },
                    "_id": {
                        "label": "_id",
                        "type": "uint256",
                        "select": {}
                    },
                    "_amounts": {
                        "label": "_amounts",
                        "type": "uint256",
                        "select": {}
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
                        "type": "address",
                        "select": {}
                    },
                    "to": {
                        "label": "to",
                        "type": "address",
                        "select": {}
                    },
                    "value": {
                        "label": "value",
                        "type": "uint256",
                        "select": {}
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
                        "type": "address",
                        "select": {}
                    },
                    "spender": {
                        "label": "spender",
                        "type": "address",
                        "select": {}
                    },
                    "value": {
                        "label": "value",
                        "type": "uint256",
                        "select": {}
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
                        "type": "uint256[]",
                        "select": {}
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
                        "type": "uint256",
                        "select": {}
                    },
                    "_new": {
                        "label": "_new",
                        "type": "uint256",
                        "select": {}
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
                        "type": "uint256",
                        "select": {}
                    },
                    "_new": {
                        "label": "_new",
                        "type": "uint256",
                        "select": {}
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
                        "type": "bool",
                        "select": {}
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
                        "type": "uint256",
                        "select": {}
                    }
                },
                "type": "event",
                "showLevel": 0
            }
        }
    },
    "TokenManager": {
        "label": "资产管理合约",
        "address": "",
        "fun": {
            "reject": {
                "label": "拒绝操作",
                "inputs": {
                    "_no": {
                        "label": "编号",
                        "type": "uint256",
                        "select": {}
                    },
                    "_destination": {
                        "label": "目标地址",
                        "type": "address",
                        "select": {}
                    }
                },
                "outputs": {
                    "success": {
                        "label": "success",
                        "type": "bool",
                        "select": {}
                    }
                },
                "constant": false,
                "type": "function",
                "showLevel": 2
            },
            "getOperation_resetKey": {
                "label": "getOperation_resetKey",
                "inputs": {
                    "_no": {
                        "label": "_no",
                        "type": "uint256",
                        "select": {}
                    }
                },
                "outputs": {
                    "r_no": {
                        "label": "r_no",
                        "type": "uint256",
                        "select": {}
                    },
                    "_role": {
                        "label": "_role",
                        "type": "uint256",
                        "select": {}
                    },
                    "_key": {
                        "label": "_key",
                        "type": "address",
                        "select": {}
                    },
                    "_status": {
                        "label": "_status",
                        "type": "uint8",
                        "select": {}
                    }
                },
                "constant": true,
                "type": "function",
                "showLevel": 0
            },
            "freeze": {
                "label": "冻结账户持有资产",
                "inputs": {
                    "_token": {
                        "label": "资产地址",
                        "type": "address",
                        "select": {}
                    },
                    "_account": {
                        "label": "账户",
                        "type": "address",
                        "select": {}
                    }
                },
                "outputs": {
                    "success": {
                        "label": "success",
                        "type": "bool",
                        "select": {}
                    }
                },
                "constant": false,
                "type": "function",
                "showLevel": 2
            },
            "getOperation": {
                "label": "getOperation",
                "inputs": {
                    "_no": {
                        "label": "_no",
                        "type": "uint256",
                        "select": {}
                    }
                },
                "outputs": {
                    "r_no": {
                        "label": "r_no",
                        "type": "uint256",
                        "select": {}
                    },
                    "_account": {
                        "label": "_account",
                        "type": "address",
                        "select": {}
                    },
                    "_type": {
                        "label": "_type",
                        "type": "uint256",
                        "select": {}
                    },
                    "_confirmKey": {
                        "label": "_confirmKey",
                        "type": "address",
                        "select": {}
                    },
                    "_status": {
                        "label": "_status",
                        "type": "uint8",
                        "select": {}
                    },
                    "_data": {
                        "label": "_data",
                        "type": "uint256[]",
                        "select": {}
                    }
                },
                "constant": true,
                "type": "function",
                "showLevel": 1
            },
            "getKeys": {
                "label": "getKeys",
                "inputs": {},
                "outputs": {
                    "_keys": {
                        "label": "_keys",
                        "type": "address[]",
                        "select": {}
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
                        "type": "bytes32",
                        "select": {}
                    },
                    "_maxSupply": {
                        "label": "最大供应量",
                        "type": "uint256",
                        "select": {}
                    },
                    "_precision": {
                        "label": "精度",
                        "type": "uint256",
                        "select": {}
                    },
                    "_currentSupply": {
                        "label": "初始供应量",
                        "type": "uint256",
                        "select": {}
                    },
                    "_closingTime": {
                        "label": "过期时间",
                        "type": "uint256",
                        "select": {}
                    },
                    "_description": {
                        "label": "描述",
                        "type": "string",
                        "select": {}
                    },
                    "_hash": {
                        "label": "资产法律文书哈希",
                        "type": "uint256",
                        "select": {}
                    }
                },
                "outputs": {
                    "success": {
                        "label": "success",
                        "type": "bool",
                        "select": {}
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
                        "type": "uint256",
                        "select": {}
                    },
                    "_value": {
                        "label": "_value",
                        "type": "uint256",
                        "select": {}
                    }
                },
                "outputs": {
                    "success": {
                        "label": "success",
                        "type": "bool",
                        "select": {}
                    }
                },
                "constant": false,
                "type": "function",
                "showLevel": 0
            },
            "unfreeze": {
                "label": "解冻账户持有资产",
                "inputs": {
                    "_token": {
                        "label": "资产地址",
                        "type": "address",
                        "select": {}
                    },
                    "_account": {
                        "label": "账户",
                        "type": "address",
                        "select": {}
                    }
                },
                "outputs": {
                    "success": {
                        "label": "success",
                        "type": "bool",
                        "select": {}
                    }
                },
                "constant": false,
                "type": "function",
                "showLevel": 2
            },
            "getTokensSymbol": {
                "label": "查询资产代号",
                "inputs": {
                    "_start": {
                        "label": "开始",
                        "type": "uint256",
                        "select": {}
                    },
                    "_limit": {
                        "label": "数量",
                        "type": "uint256",
                        "select": {}
                    }
                },
                "outputs": {
                    "_symbols": {
                        "label": "_symbols",
                        "type": "bytes32[]",
                        "select": {}
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
                        "type": "uint256",
                        "select": {}
                    }
                },
                "outputs": {
                    "_tokenAddress": {
                        "label": "资产地址",
                        "type": "address",
                        "select": {}
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
                        "type": "uint256",
                        "select": {}
                    },
                    "_role": {
                        "label": "_role",
                        "type": "uint256",
                        "select": {}
                    },
                    "_keyAddress": {
                        "label": "_keyAddress",
                        "type": "address",
                        "select": {}
                    }
                },
                "outputs": {
                    "success": {
                        "label": "success",
                        "type": "bool",
                        "select": {}
                    }
                },
                "constant": false,
                "type": "function",
                "showLevel": 0
            },
            "getFun": {
                "label": "getFun",
                "inputs": {
                    "_fun": {
                        "label": "_fun",
                        "type": "uint256",
                        "select": {}
                    }
                },
                "outputs": {
                    "_sig": {
                        "label": "_sig",
                        "type": "bytes32",
                        "select": {}
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
                        "type": "uint256",
                        "select": {}
                    },
                    "_keyAddress": {
                        "label": "_keyAddress",
                        "type": "address",
                        "select": {}
                    }
                },
                "outputs": {
                    "success": {
                        "label": "success",
                        "type": "bool",
                        "select": {}
                    }
                },
                "constant": false,
                "type": "function",
                "showLevel": 0
            },
            "forceTransfer": {
                "label": "强制转移",
                "inputs": {
                    "_token": {
                        "label": "资产地址",
                        "type": "address",
                        "select": {}
                    },
                    "_from": {
                        "label": "从",
                        "type": "address",
                        "select": {}
                    },
                    "_to": {
                        "label": "转移至",
                        "type": "address",
                        "select": {}
                    },
                    "_value": {
                        "label": "数量",
                        "type": "uint256",
                        "select": {}
                    }
                },
                "outputs": {
                    "success": {
                        "label": "success",
                        "type": "bool",
                        "select": {}
                    }
                },
                "constant": false,
                "type": "function",
                "showLevel": 2
            },
            "resetKeyReject": {
                "label": "resetKeyReject",
                "inputs": {
                    "_no": {
                        "label": "_no",
                        "type": "uint256",
                        "select": {}
                    },
                    "_role": {
                        "label": "_role",
                        "type": "uint256",
                        "select": {}
                    },
                    "_keyAddress": {
                        "label": "_keyAddress",
                        "type": "address",
                        "select": {}
                    }
                },
                "outputs": {
                    "success": {
                        "label": "success",
                        "type": "bool",
                        "select": {}
                    }
                },
                "constant": false,
                "type": "function",
                "showLevel": 0
            },
            "init": {
                "label": "init",
                "inputs": {
                    "_core": {
                        "label": "_core",
                        "type": "uint256",
                        "select": {}
                    },
                    "_coreC": {
                        "label": "_coreC",
                        "type": "uint256",
                        "select": {}
                    },
                    "_xindi": {
                        "label": "_xindi",
                        "type": "uint256",
                        "select": {}
                    },
                    "_accountManager": {
                        "label": "_accountManager",
                        "type": "uint256",
                        "select": {}
                    },
                    "_tokenPorxy": {
                        "label": "_tokenPorxy",
                        "type": "uint256",
                        "select": {}
                    }
                },
                "outputs": {
                    "success": {
                        "label": "success",
                        "type": "bool",
                        "select": {}
                    }
                },
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
                        "type": "address",
                        "select": {}
                    },
                    "_accountManager": {
                        "label": "账户管理合约地址",
                        "type": "address",
                        "select": {}
                    },
                    "_tokenPorxy": {
                        "label": "资产代理合约地址",
                        "type": "address",
                        "select": {}
                    },
                    "_MinTerm": {
                        "label": "资产最小过期时间",
                        "type": "uint256",
                        "select": {}
                    },
                    "_tokenAmounts": {
                        "label": "资产数量",
                        "type": "uint256",
                        "select": {}
                    },
                    "_limit": {
                        "label": "最大遍历数量",
                        "type": "uint256",
                        "select": {}
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
                        "type": "uint256",
                        "select": {}
                    }
                },
                "outputs": {
                    "r_ids": {
                        "label": "编号",
                        "type": "uint256",
                        "select": {}
                    },
                    "_owner": {
                        "label": "发行者",
                        "type": "address",
                        "select": {}
                    },
                    "_tokenAddress": {
                        "label": "资产合约地址",
                        "type": "address",
                        "select": {}
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
                        "type": "uint256",
                        "select": {}
                    },
                    "_destination": {
                        "label": "_destination",
                        "type": "address",
                        "select": {}
                    }
                },
                "outputs": {
                    "success": {
                        "label": "success",
                        "type": "bool",
                        "select": {}
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
                        "type": "address",
                        "select": {}
                    },
                    "_role": {
                        "label": "_role",
                        "type": "uint256",
                        "select": {}
                    },
                    "_key": {
                        "label": "_key",
                        "type": "address",
                        "select": {}
                    }
                },
                "outputs": {
                    "success": {
                        "label": "success",
                        "type": "bool",
                        "select": {}
                    }
                },
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
                        "type": "uint256[]",
                        "select": {}
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
                    "_amount": {
                        "label": "资产总数",
                        "type": "uint256",
                        "select": {}
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
                        "type": "uint256",
                        "select": {}
                    },
                    "_waitAmounts": {
                        "label": "_waitAmounts",
                        "type": "uint256",
                        "select": {}
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
                        "type": "uint256",
                        "select": {}
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
                        "type": "uint256",
                        "select": {}
                    },
                    "_sig": {
                        "label": "_sig",
                        "type": "uint256",
                        "select": {}
                    }
                },
                "outputs": {
                    "success": {
                        "label": "success",
                        "type": "bool",
                        "select": {}
                    }
                },
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
                        "type": "uint256",
                        "select": {}
                    },
                    "_waitAmounts": {
                        "label": "_waitAmounts",
                        "type": "uint256",
                        "select": {}
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
                        "type": "uint256",
                        "select": {}
                    },
                    "_limit": {
                        "label": "_limit",
                        "type": "uint256",
                        "select": {}
                    },
                    "_type": {
                        "label": "_type",
                        "type": "uint256",
                        "select": {}
                    }
                },
                "outputs": {
                    "_nos": {
                        "label": "_nos",
                        "type": "uint256[]",
                        "select": {}
                    }
                },
                "constant": true,
                "type": "function",
                "showLevel": 0
            },
            "CreateTokenData": {
                "label": "CreateTokenData",
                "inputs": {
                    "_token": {
                        "label": "_token",
                        "type": "address",
                        "select": {}
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
                        "type": "address",
                        "select": {}
                    },
                    "_symbol": {
                        "label": "_symbol",
                        "type": "bytes32",
                        "select": {}
                    },
                    "_id": {
                        "label": "_id",
                        "type": "uint256",
                        "select": {}
                    },
                    "_maxSupply": {
                        "label": "_maxSupply",
                        "type": "uint256",
                        "select": {}
                    },
                    "_precision": {
                        "label": "_precision",
                        "type": "uint256",
                        "select": {}
                    },
                    "_currentSupply": {
                        "label": "_currentSupply",
                        "type": "uint256",
                        "select": {}
                    },
                    "_closingTime": {
                        "label": "_closingTime",
                        "type": "uint256",
                        "select": {}
                    },
                    "_description": {
                        "label": "_description",
                        "type": "string",
                        "select": {}
                    },
                    "_hash": {
                        "label": "_hash",
                        "type": "uint256",
                        "select": {}
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
                        "type": "address",
                        "select": {}
                    },
                    "_account": {
                        "label": "_account",
                        "type": "address",
                        "select": {}
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
                        "type": "address",
                        "select": {}
                    },
                    "_account": {
                        "label": "_account",
                        "type": "address",
                        "select": {}
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
                        "type": "address",
                        "select": {}
                    },
                    "_from": {
                        "label": "_from",
                        "type": "address",
                        "select": {}
                    },
                    "_to": {
                        "label": "_to",
                        "type": "address",
                        "select": {}
                    },
                    "_value": {
                        "label": "_value",
                        "type": "uint256",
                        "select": {}
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
                        "type": "uint256",
                        "select": {}
                    },
                    "_keyAddress": {
                        "label": "_keyAddress",
                        "type": "address",
                        "select": {}
                    },
                    "_role": {
                        "label": "_role",
                        "type": "uint256",
                        "select": {}
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
                        "type": "uint256",
                        "select": {}
                    },
                    "_keyAddress": {
                        "label": "_keyAddress",
                        "type": "address",
                        "select": {}
                    },
                    "_role": {
                        "label": "_role",
                        "type": "uint256",
                        "select": {}
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
                        "type": "uint256",
                        "select": {}
                    },
                    "_keyAddress": {
                        "label": "_keyAddress",
                        "type": "address",
                        "select": {}
                    },
                    "_role": {
                        "label": "_role",
                        "type": "uint256",
                        "select": {}
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
                        "type": "uint256",
                        "select": {}
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
                        "type": "uint256",
                        "select": {}
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
                        "type": "uint256",
                        "select": {}
                    },
                    "_value": {
                        "label": "_value",
                        "type": "uint256",
                        "select": {}
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
                        "type": "uint256",
                        "select": {}
                    },
                    "_sig": {
                        "label": "_sig",
                        "type": "uint256",
                        "select": {}
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
                        "type": "uint256[]",
                        "select": {}
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
                        "type": "uint256",
                        "select": {}
                    },
                    "_new": {
                        "label": "_new",
                        "type": "uint256",
                        "select": {}
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
                        "type": "uint256",
                        "select": {}
                    },
                    "_new": {
                        "label": "_new",
                        "type": "uint256",
                        "select": {}
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
                        "type": "bool",
                        "select": {}
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
                        "type": "uint256",
                        "select": {}
                    }
                },
                "type": "event",
                "showLevel": 0
            }
        }
    },
    "TxManager": {
        "label": "交易管理合约",
        "address": "",
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
                        "type": "uint256",
                        "select": {}
                    },
                    "_key": {
                        "label": "_key",
                        "type": "uint256",
                        "select": {}
                    }
                },
                "outputs": {},
                "constant": false,
                "type": "function",
                "showLevel": 0
            },
            "pass": {
                "label": "放行交易",
                "inputs": {
                    "_account": {
                        "label": "交易账户",
                        "type": "uint256",
                        "select": {}
                    },
                    "_hash": {
                        "label": "数据哈希",
                        "type": "uint256",
                        "select": {}
                    },
                    "_other": {
                        "label": "其他",
                        "type": "uint256",
                        "select": {}
                    }
                },
                "outputs": {},
                "constant": false,
                "type": "function",
                "showLevel": 2
            },
            "getKeys": {
                "label": "getKeys",
                "inputs": {},
                "outputs": {
                    "_keys": {
                        "label": "_keys",
                        "type": "address[]",
                        "select": {}
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
                        "type": "uint256[]",
                        "select": {}
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
                        "type": "uint256",
                        "select": {}
                    },
                    "_value": {
                        "label": "_value",
                        "type": "uint256",
                        "select": {}
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
                        "type": "uint256",
                        "select": {}
                    },
                    "_core": {
                        "label": "管理者",
                        "type": "uint256",
                        "select": {}
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
                        "type": "uint256[]",
                        "select": {}
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
                        "type": "uint256",
                        "select": {}
                    }
                },
                "outputs": {},
                "constant": false,
                "type": "function",
                "showLevel": 0
            },
            "ResetOption": {
                "label": "ResetOption",
                "inputs": {
                    "_key": {
                        "label": "_key",
                        "type": "uint256",
                        "select": {}
                    },
                    "_value": {
                        "label": "_value",
                        "type": "uint256",
                        "select": {}
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
                        "type": "uint256[]",
                        "select": {}
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
                        "type": "uint256",
                        "select": {}
                    },
                    "_new": {
                        "label": "_new",
                        "type": "uint256",
                        "select": {}
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
                        "type": "uint256",
                        "select": {}
                    },
                    "_new": {
                        "label": "_new",
                        "type": "uint256",
                        "select": {}
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
                        "type": "bool",
                        "select": {}
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
                        "type": "uint256",
                        "select": {}
                    }
                },
                "type": "event",
                "showLevel": 0
            }
        }
    },
    "Xindi": {
        "label": "Xindi",
        "address": "",
        "fun": {
            "reject": {
                "label": "拒绝操作",
                "inputs": {
                    "_no": {
                        "label": "编号",
                        "type": "uint256",
                        "select": {}
                    },
                    "_destination": {
                        "label": "目标地址",
                        "type": "address",
                        "select": {}
                    }
                },
                "outputs": {
                    "success": {
                        "label": "success",
                        "type": "bool",
                        "select": {}
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
                        "type": "address",
                        "select": {}
                    },
                    "_Threshold": {
                        "label": "阀值",
                        "type": "uint256",
                        "select": {}
                    },
                    "_owners": {
                        "label": "拥有者",
                        "type": "address[]",
                        "select": {}
                    },
                    "_weight": {
                        "label": "权重",
                        "type": "uint256[]",
                        "select": {}
                    }
                },
                "outputs": {
                    "success": {
                        "label": "success",
                        "type": "bool",
                        "select": {}
                    }
                },
                "constant": false,
                "type": "function",
                "showLevel": 2
            },
            "getOperation_resetKey": {
                "label": "查询重置Key操作",
                "inputs": {
                    "_no": {
                        "label": "编号",
                        "type": "uint256",
                        "select": {}
                    }
                },
                "outputs": {
                    "r_no": {
                        "label": "编号",
                        "type": "uint256",
                        "select": {}
                    },
                    "_role": {
                        "label": "角色",
                        "type": "uint256",
                        "select": {
                            "0": "重置所有keys",
                            "1": "重置所有keys批准",
                            "2": "设置子管理合约key",
                            "3": "设置子管理合约key批准",
                            "4": "设置合约参数",
                            "5": "设置合约参数批准",
                            "6": "重置用户",
                            "7": "重置用户批准",
                            "8": "实名认证",
                            "9": "实名认证批准",
                            "10": "设置CA",
                            "11": "设置CA批准",
                            "12": "撤销CA",
                            "13": "撤销CA批准",
                            "14": "冻结账户",
                            "15": "冻结账户批准",
                            "16": "解冻账户",
                            "17": "解冻账户批准",
                            "18": "强制转移",
                            "19": "强制转移批准"
                        }
                    },
                    "_key": {
                        "label": "新Key",
                        "type": "address",
                        "select": {}
                    },
                    "_status": {
                        "label": "状态",
                        "type": "uint8",
                        "select": {}
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
                        "type": "address",
                        "select": {}
                    },
                    "_level": {
                        "label": "等级",
                        "type": "uint256",
                        "select": {}
                    }
                },
                "outputs": {
                    "success": {
                        "label": "success",
                        "type": "bool",
                        "select": {}
                    }
                },
                "constant": false,
                "type": "function",
                "showLevel": 2
            },
            "getOperation": {
                "label": "查询操作",
                "inputs": {
                    "_no": {
                        "label": "编号",
                        "type": "uint256",
                        "select": {}
                    }
                },
                "outputs": {
                    "r_no": {
                        "label": "编号",
                        "type": "uint256",
                        "select": {}
                    },
                    "_account": {
                        "label": "操作地址",
                        "type": "address",
                        "select": {}
                    },
                    "_type": {
                        "label": "类型",
                        "type": "uint256",
                        "select": {}
                    },
                    "_confirmKey": {
                        "label": "需批准Key",
                        "type": "address",
                        "select": {}
                    },
                    "_status": {
                        "label": "状态",
                        "type": "uint8",
                        "select": {
                            "0": "等待批准",
                            "1": "已经批准",
                            "2": "已经拒绝"
                        }
                    },
                    "_data": {
                        "label": "操作数据",
                        "type": "uint256[]",
                        "select": {}
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
                        "type": "address[]",
                        "select": {
                            "0": "重置所有keys",
                            "1": "重置所有keys批准",
                            "2": "设置子管理合约key",
                            "3": "设置子管理合约key批准",
                            "4": "设置合约参数",
                            "5": "设置合约参数批准",
                            "6": "重置用户",
                            "7": "重置用户批准",
                            "8": "实名认证",
                            "9": "实名认证批准",
                            "10": "设置CA",
                            "11": "设置CA批准",
                            "12": "撤销CA",
                            "13": "撤销CA批准",
                            "14": "冻结账户",
                            "15": "冻结账户批准",
                            "16": "解冻账户",
                            "17": "解冻账户批准",
                            "18": "强制转移",
                            "19": "强制转移批准"
                        }
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
                        "type": "address",
                        "select": {}
                    }
                },
                "outputs": {
                    "success": {
                        "label": "success",
                        "type": "bool",
                        "select": {}
                    }
                },
                "constant": false,
                "type": "function",
                "showLevel": 2
            },
            "setOption": {
                "label": "设置参数",
                "inputs": {
                    "_keyNo": {
                        "label": "参数",
                        "type": "uint256",
                        "select": {}
                    },
                    "_value": {
                        "label": "值",
                        "type": "uint256",
                        "select": {}
                    }
                },
                "outputs": {
                    "success": {
                        "label": "success",
                        "type": "bool",
                        "select": {}
                    }
                },
                "constant": false,
                "type": "function",
                "showLevel": 1
            },
            "resetKeyC": {
                "label": "批准重置Key",
                "inputs": {
                    "_no": {
                        "label": "编号",
                        "type": "uint256",
                        "select": {}
                    },
                    "_role": {
                        "label": "角色",
                        "type": "uint256",
                        "select": {}
                    },
                    "_keyAddress": {
                        "label": "新Key",
                        "type": "address",
                        "select": {}
                    }
                },
                "outputs": {
                    "success": {
                        "label": "success",
                        "type": "bool",
                        "select": {}
                    }
                },
                "constant": false,
                "type": "function",
                "showLevel": 2
            },
            "revokeCA": {
                "label": "撤销CA",
                "inputs": {
                    "_account": {
                        "label": "账户",
                        "type": "address",
                        "select": {}
                    }
                },
                "outputs": {
                    "success": {
                        "label": "success",
                        "type": "bool",
                        "select": {}
                    }
                },
                "constant": false,
                "type": "function",
                "showLevel": 2
            },
            "getFun": {
                "label": "getFun",
                "inputs": {
                    "_fun": {
                        "label": "_fun",
                        "type": "uint256",
                        "select": {}
                    }
                },
                "outputs": {
                    "_sig": {
                        "label": "_sig",
                        "type": "bytes32",
                        "select": {}
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
                        "type": "address",
                        "select": {}
                    }
                },
                "outputs": {
                    "success": {
                        "label": "success",
                        "type": "bool",
                        "select": {}
                    }
                },
                "constant": false,
                "type": "function",
                "showLevel": 2
            },
            "resetKey": {
                "label": "重置Key",
                "inputs": {
                    "_role": {
                        "label": "角色",
                        "type": "uint256",
                        "select": {
                            "0": "重置所有keys",
                            "1": "重置所有keys批准",
                            "2": "设置子管理合约key",
                            "3": "设置子管理合约key批准",
                            "4": "设置合约参数",
                            "5": "设置合约参数批准",
                            "6": "重置用户",
                            "7": "重置用户批准",
                            "8": "实名认证",
                            "9": "实名认证批准",
                            "10": "设置CA",
                            "11": "设置CA批准",
                            "12": "撤销CA",
                            "13": "撤销CA批准",
                            "14": "冻结账户",
                            "15": "冻结账户批准",
                            "16": "解冻账户",
                            "17": "解冻账户批准",
                            "18": "强制转移",
                            "19": "强制转移批准"
                        }
                    },
                    "_keyAddress": {
                        "label": "新地址",
                        "type": "address",
                        "select": {}
                    }
                },
                "outputs": {
                    "success": {
                        "label": "success",
                        "type": "bool",
                        "select": {}
                    }
                },
                "constant": false,
                "type": "function",
                "showLevel": 2
            },
            "resetKeyReject": {
                "label": "拒绝重置Key",
                "inputs": {
                    "_no": {
                        "label": "编号",
                        "type": "uint256",
                        "select": {}
                    },
                    "_role": {
                        "label": "角色",
                        "type": "uint256",
                        "select": {
                            "0": "重置所有keys",
                            "1": "重置所有keys批准",
                            "2": "设置子管理合约key",
                            "3": "设置子管理合约key批准",
                            "4": "设置合约参数",
                            "5": "设置合约参数批准",
                            "6": "重置用户",
                            "7": "重置用户批准",
                            "8": "实名认证",
                            "9": "实名认证批准",
                            "10": "设置CA",
                            "11": "设置CA批准",
                            "12": "撤销CA",
                            "13": "撤销CA批准",
                            "14": "冻结账户",
                            "15": "冻结账户批准",
                            "16": "解冻账户",
                            "17": "解冻账户批准",
                            "18": "强制转移",
                            "19": "强制转移批准"
                        }
                    },
                    "_keyAddress": {
                        "label": "新地址",
                        "type": "address",
                        "select": {}
                    }
                },
                "outputs": {
                    "success": {
                        "label": "success",
                        "type": "bool",
                        "select": {}
                    }
                },
                "constant": false,
                "type": "function",
                "showLevel": 2
            },
            "setCA": {
                "label": "设置CA  ",
                "inputs": {
                    "_account": {
                        "label": "账户地址",
                        "type": "address",
                        "select": {}
                    },
                    "_CA": {
                        "label": "CA地址",
                        "type": "address",
                        "select": {}
                    }
                },
                "outputs": {
                    "success": {
                        "label": "success",
                        "type": "bool",
                        "select": {}
                    }
                },
                "constant": false,
                "type": "function",
                "showLevel": 2
            },
            "confirm": {
                "label": "批准操作",
                "inputs": {
                    "_no": {
                        "label": "编号",
                        "type": "uint256",
                        "select": {}
                    },
                    "_destination": {
                        "label": "目标地址",
                        "type": "address",
                        "select": {}
                    }
                },
                "outputs": {
                    "success": {
                        "label": "success",
                        "type": "bool",
                        "select": {}
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
                        "type": "address",
                        "select": {}
                    },
                    "_role": {
                        "label": "角色",
                        "type": "uint256",
                        "select": {}
                    },
                    "_key": {
                        "label": "新Key",
                        "type": "address",
                        "select": {}
                    }
                },
                "outputs": {
                    "success": {
                        "label": "success",
                        "type": "bool",
                        "select": {}
                    }
                },
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
                        "type": "uint256[]",
                        "select": {}
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
                        "type": "uint256",
                        "select": {}
                    },
                    "_waitAmounts": {
                        "label": "待批准的操作数",
                        "type": "uint256",
                        "select": {}
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
                        "type": "uint256",
                        "select": {}
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
                        "type": "uint256",
                        "select": {}
                    },
                    "_sig": {
                        "label": "_sig",
                        "type": "uint256",
                        "select": {}
                    }
                },
                "outputs": {
                    "success": {
                        "label": "success",
                        "type": "bool",
                        "select": {}
                    }
                },
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
                        "type": "uint256",
                        "select": {}
                    },
                    "_waitAmounts": {
                        "label": "待批准的操作数",
                        "type": "uint256",
                        "select": {}
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
                        "type": "uint256",
                        "select": {}
                    },
                    "_limit": {
                        "label": "最大",
                        "type": "uint256",
                        "select": {}
                    },
                    "_type": {
                        "label": "类型",
                        "type": "uint256",
                        "select": {}
                    }
                },
                "outputs": {
                    "_nos": {
                        "label": "_nos",
                        "type": "uint256[]",
                        "select": {}
                    }
                },
                "constant": true,
                "type": "function",
                "showLevel": 2
            },
            "ResetAccountOwner": {
                "label": "ResetAccountOwner",
                "inputs": {
                    "_account": {
                        "label": "_account",
                        "type": "address",
                        "select": {}
                    },
                    "_Threshold": {
                        "label": "_Threshold",
                        "type": "uint256",
                        "select": {}
                    },
                    "_owners": {
                        "label": "_owners",
                        "type": "address[]",
                        "select": {}
                    },
                    "_weight": {
                        "label": "_weight",
                        "type": "uint256[]",
                        "select": {}
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
                        "type": "address",
                        "select": {}
                    },
                    "level": {
                        "label": "level",
                        "type": "uint256",
                        "select": {}
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
                        "type": "address",
                        "select": {}
                    },
                    "_CA": {
                        "label": "_CA",
                        "type": "address",
                        "select": {}
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
                        "type": "address",
                        "select": {}
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
                        "type": "address",
                        "select": {}
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
                        "type": "address",
                        "select": {}
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
                        "type": "uint256",
                        "select": {}
                    },
                    "_keyAddress": {
                        "label": "_keyAddress",
                        "type": "address",
                        "select": {}
                    },
                    "_role": {
                        "label": "_role",
                        "type": "uint256",
                        "select": {}
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
                        "type": "uint256",
                        "select": {}
                    },
                    "_keyAddress": {
                        "label": "_keyAddress",
                        "type": "address",
                        "select": {}
                    },
                    "_role": {
                        "label": "_role",
                        "type": "uint256",
                        "select": {}
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
                        "type": "uint256",
                        "select": {}
                    },
                    "_keyAddress": {
                        "label": "_keyAddress",
                        "type": "address",
                        "select": {}
                    },
                    "_role": {
                        "label": "_role",
                        "type": "uint256",
                        "select": {}
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
                        "type": "uint256",
                        "select": {}
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
                        "type": "uint256",
                        "select": {}
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
                        "type": "uint256",
                        "select": {}
                    },
                    "_value": {
                        "label": "_value",
                        "type": "uint256",
                        "select": {}
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
                        "type": "uint256",
                        "select": {}
                    },
                    "_sig": {
                        "label": "_sig",
                        "type": "uint256",
                        "select": {}
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
                        "type": "uint256[]",
                        "select": {}
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
                        "type": "uint256",
                        "select": {}
                    },
                    "_new": {
                        "label": "_new",
                        "type": "uint256",
                        "select": {}
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
                        "type": "uint256",
                        "select": {}
                    },
                    "_new": {
                        "label": "_new",
                        "type": "uint256",
                        "select": {}
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
                        "type": "bool",
                        "select": {}
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
                        "type": "uint256",
                        "select": {}
                    }
                },
                "type": "event",
                "showLevel": 0
            }
        }
    }
}
module.exports=abis1;