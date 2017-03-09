var abis1=
{
    "Account": {
        "label": "账户合约",
        "address": "",
        "events": {
            "0x12044b8a5393cb69b5ab881382412834a346eb26c8e7e06f0145fe64eb861c72": {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "",
                        "type": "uint256",
                        "lable": ""
                    },
                    {
                        "indexed": false,
                        "name": "",
                        "type": "uint256",
                        "lable": ""
                    }
                ],
                "name": "Pass",
                "type": "event",
                "label": ""
            },
            "0x7cd5190a74e34511da6836647848ec841d0389e70f1c77ee2b8190a0ffd3c656": {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_Tx_threshold",
                        "type": "uint256",
                        "lable": "_Tx_threshold"
                    },
                    {
                        "indexed": false,
                        "name": "_owners",
                        "type": "address[]",
                        "lable": "_owners"
                    },
                    {
                        "indexed": false,
                        "name": "_weight",
                        "type": "uint256[]",
                        "lable": "_weight"
                    }
                ],
                "name": "ReSetAccountOwner",
                "type": "event",
                "label": "替换账户私钥"
            },
            "0x1277d52ae6f0181323e5f873531b1a84bf1528e8cea2a8fe82e154dced9d275a": {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_owner",
                        "type": "address",
                        "lable": "_owner"
                    },
                    {
                        "indexed": false,
                        "name": "_weight",
                        "type": "uint256",
                        "lable": "_weight"
                    },
                    {
                        "indexed": false,
                        "name": "_Tx_threshold",
                        "type": "uint256",
                        "lable": "_Tx_threshold"
                    },
                    {
                        "indexed": false,
                        "name": "_core",
                        "type": "address",
                        "lable": "_core"
                    },
                    {
                        "indexed": false,
                        "name": "_coreTx",
                        "type": "address",
                        "lable": "_coreTx"
                    }
                ],
                "name": "CreateAccount",
                "type": "event",
                "label": "创建账户"
            },
            "0xb1e01ba6fb808bfa2dbb48923c5594fbab3dddabdef1bd70e5c3ac580cf8ae0e": {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_res",
                        "type": "uint256[]",
                        "lable": "_res"
                    }
                ],
                "name": "Init",
                "type": "event",
                "label": "初始化"
            },
            "0x3ac9b587e27a1067ec6749df4d47ffae1b4f0a16cc1f7084f75958f8decf59d0": {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_old",
                        "type": "uint256",
                        "lable": "_old"
                    },
                    {
                        "indexed": false,
                        "name": "_new",
                        "type": "uint256",
                        "lable": "_new"
                    }
                ],
                "name": "ResetCore",
                "type": "event",
                "label": ""
            },
            "0xaf9e16246f41f72d8678fe46c8dca4ee61a7ec2c1aaa66099e13f2ec95c65a22": {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_old",
                        "type": "uint256",
                        "lable": "_old"
                    },
                    {
                        "indexed": false,
                        "name": "_new",
                        "type": "uint256",
                        "lable": "_new"
                    }
                ],
                "name": "ResetOwner",
                "type": "event",
                "label": ""
            },
            "0x468ec5066d1b4739c21f88aeade8bcf919780aba332693c4a02d50da9bb2a25c": {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_no",
                        "type": "uint256",
                        "lable": "_no"
                    }
                ],
                "name": "Alert",
                "type": "event",
                "label": ""
            }
        },
        "funs": {
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
            "issueMoreToken": {
                "label": "增发资产",
                "inputs": {
                    "tokenContract": {
                        "label": "资产地址",
                        "type": "address",
                        "select": {}
                    },
                    "_amount": {
                        "label": "数量(包含精度)",
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
            "changeLogicProxy": {
                "label": "changeLogicProxy",
                "inputs": {
                    "_newAddress": {
                        "label": "_newAddress",
                        "type": "uint256",
                        "select": {}
                    }
                },
                "outputs": {},
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
            "transferTokenReceipt": {
                "label": "transferTokenReceipt",
                "inputs": {
                    "_tokenContract": {
                        "label": "_tokenContract",
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
                "label": "重置账户私钥",
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
            "changeOwner": {
                "label": "changeOwner",
                "inputs": {
                    "_contract": {
                        "label": "_contract",
                        "type": "address",
                        "select": {}
                    },
                    "_to": {
                        "label": "_to",
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
            "setPass": {
                "label": "setPass",
                "inputs": {
                    "_hash": {
                        "label": "_hash",
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
            }
        }
    },
    "AccountCreator": {
        "label": "账户创建者",
        "address": "",
        "events": {
            "0xcbacf70fb7ddabb7c2de8b7dff0f79495cc5a791cc87d9c6c87444dd486ec57d": {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_accountAddress",
                        "type": "address",
                        "lable": "_accountAddress"
                    }
                ],
                "name": "CreateAccountData",
                "type": "event",
                "label": ""
            },
            "0xe74ed25be83dd0db3945acd12f6b932b2f030358493cc20f2632abf93e87c476": {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_no",
                        "type": "uint256",
                        "lable": "_no"
                    },
                    {
                        "indexed": false,
                        "name": "_account",
                        "type": "address",
                        "lable": "_account"
                    }
                ],
                "name": "AccountRecode",
                "type": "event",
                "label": ""
            },
            "0xdc2532ba16f1e858286fa0d0e6b0ebb1e0a48b7ecf0d64fb0dd3b635d03aa97c": {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_key",
                        "type": "uint256",
                        "lable": "_key"
                    },
                    {
                        "indexed": false,
                        "name": "_value",
                        "type": "uint256",
                        "lable": "_value"
                    }
                ],
                "name": "ResetOption",
                "type": "event",
                "label": ""
            },
            "0xb1e01ba6fb808bfa2dbb48923c5594fbab3dddabdef1bd70e5c3ac580cf8ae0e": {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_res",
                        "type": "uint256[]",
                        "lable": "_res"
                    }
                ],
                "name": "Init",
                "type": "event",
                "label": ""
            },
            "0x3ac9b587e27a1067ec6749df4d47ffae1b4f0a16cc1f7084f75958f8decf59d0": {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_old",
                        "type": "uint256",
                        "lable": "_old"
                    },
                    {
                        "indexed": false,
                        "name": "_new",
                        "type": "uint256",
                        "lable": "_new"
                    }
                ],
                "name": "ResetCore",
                "type": "event",
                "label": ""
            },
            "0xaf9e16246f41f72d8678fe46c8dca4ee61a7ec2c1aaa66099e13f2ec95c65a22": {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_old",
                        "type": "uint256",
                        "lable": "_old"
                    },
                    {
                        "indexed": false,
                        "name": "_new",
                        "type": "uint256",
                        "lable": "_new"
                    }
                ],
                "name": "ResetOwner",
                "type": "event",
                "label": ""
            },
            "0x468ec5066d1b4739c21f88aeade8bcf919780aba332693c4a02d50da9bb2a25c": {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_no",
                        "type": "uint256",
                        "lable": "_no"
                    }
                ],
                "name": "Alert",
                "type": "event",
                "label": ""
            }
        },
        "funs": {
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
                        "select": {
                            "0": "核心合约地址",
                            "1": "重置参数Key",
                            "2": "重置参数Key批准",
                            "3": "创建账户Key"
                        }
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
            "changeLogicProxy": {
                "label": "changeLogicProxy",
                "inputs": {
                    "_newAddress": {
                        "label": "_newAddress",
                        "type": "uint256",
                        "select": {}
                    }
                },
                "outputs": {},
                "constant": false,
                "type": "function",
                "showLevel": 0
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
            }
        }
    },
    "KeepManager": {
        "label": "KeepManager",
        "address": "",
        "events": {},
        "funs": {
            "set": {
                "label": "set",
                "inputs": {
                    "_type": {
                        "label": "_type",
                        "type": "uint256",
                        "select": {}
                    },
                    "_address": {
                        "label": "_address",
                        "type": "uint256",
                        "select": {}
                    },
                    "blockno": {
                        "label": "blockno",
                        "type": "uint256",
                        "select": {}
                    }
                },
                "outputs": {},
                "constant": false,
                "type": "function",
                "showLevel": 0
            }
        }
    },
    "LogicProxy": {
        "label": "逻辑代理合约",
        "address": "",
        "events": {
            "0x029c68b8827890cdeb3a3e183173c1b8127a6b905bd9df3f2206cf46af173a61": {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_fun",
                        "type": "uint256",
                        "lable": "_fun"
                    },
                    {
                        "indexed": false,
                        "name": "_resSize",
                        "type": "uint256",
                        "lable": "_resSize"
                    }
                ],
                "name": "SetFun",
                "type": "event",
                "label": "SetFun"
            },
            "0x468ec5066d1b4739c21f88aeade8bcf919780aba332693c4a02d50da9bb2a25c": {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_no",
                        "type": "uint256",
                        "lable": "_no"
                    }
                ],
                "name": "Alert",
                "type": "event",
                "label": "Alert"
            }
        },
        "funs": {
            "resetKey": {
                "label": "重置Key",
                "inputs": {
                    "_no": {
                        "label": "角色",
                        "type": "uint256",
                        "select": {}
                    },
                    "_newKey": {
                        "label": "新Key",
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
            "getKeys": {
                "label": "查询Key",
                "inputs": {},
                "outputs": {
                    "A": {
                        "label": "逻辑升级Key",
                        "type": "address",
                        "select": {}
                    },
                    "AC": {
                        "label": "逻辑升级批准Key",
                        "type": "address",
                        "select": {}
                    },
                    "T": {
                        "label": "重置Key",
                        "type": "address",
                        "select": {}
                    },
                    "TC": {
                        "label": "重置批准Key",
                        "type": "address",
                        "select": {}
                    }
                },
                "constant": true,
                "type": "function",
                "showLevel": 2
            },
            "setfun": {
                "label": "setfun",
                "inputs": {
                    "_logic": {
                        "label": "_logic",
                        "type": "uint256",
                        "select": {}
                    },
                    "_fun": {
                        "label": "_fun",
                        "type": "uint256",
                        "select": {}
                    },
                    "_resSize": {
                        "label": "_resSize",
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
            "getWaitKeys": {
                "label": "查询待批准keys",
                "inputs": {},
                "outputs": {
                    "A": {
                        "label": "逻辑升级Key",
                        "type": "address",
                        "select": {}
                    },
                    "AC": {
                        "label": "逻辑升级批准Key",
                        "type": "address",
                        "select": {}
                    },
                    "T": {
                        "label": "重置Key",
                        "type": "address",
                        "select": {}
                    },
                    "TC": {
                        "label": "重置批准Key",
                        "type": "address",
                        "select": {}
                    }
                },
                "constant": true,
                "type": "function",
                "showLevel": 2
            },
            "get": {
                "label": "查询函数",
                "inputs": {
                    "_fun": {
                        "label": "_fun",
                        "type": "uint256",
                        "select": {}
                    }
                },
                "outputs": {
                    "_address": {
                        "label": "_address",
                        "type": "uint256",
                        "select": {}
                    },
                    "_returnSize": {
                        "label": "_returnSize",
                        "type": "uint256",
                        "select": {}
                    }
                },
                "constant": true,
                "type": "function",
                "showLevel": 0
            },
            "requestConfirm": {
                "label": "请求批准",
                "inputs": {
                    "_type": {
                        "label": "类型 0:key 1:fun",
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
            "confirm": {
                "label": "批准",
                "inputs": {
                    "_type": {
                        "label": "类型 0:key 1:fun",
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
            "getWait": {
                "label": "查询待批准的逻辑",
                "inputs": {
                    "_fun": {
                        "label": "_fun",
                        "type": "uint256",
                        "select": {}
                    }
                },
                "outputs": {
                    "_address": {
                        "label": "地址",
                        "type": "uint256",
                        "select": {}
                    },
                    "_returnSize": {
                        "label": "返回数",
                        "type": "uint256",
                        "select": {}
                    }
                },
                "constant": true,
                "type": "function",
                "showLevel": 0
            }
        }
    },
    "ParkingLock": {
        "label": "停车权",
        "address": "",
        "events": {
            "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "from",
                        "type": "address",
                        "lable": "from"
                    },
                    {
                        "indexed": false,
                        "name": "to",
                        "type": "address",
                        "lable": "to"
                    },
                    {
                        "indexed": false,
                        "name": "value",
                        "type": "uint256",
                        "lable": "value"
                    }
                ],
                "name": "Transfer",
                "type": "event",
                "label": "Transfer"
            },
            "0x66250d040e91ea84dcc0a1c4235c8304c660fa0aed8aa1bdf20c946c59c5e8ff": {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_user",
                        "type": "address",
                        "lable": "_user"
                    },
                    {
                        "indexed": false,
                        "name": "_rentTime",
                        "type": "uint256",
                        "lable": "_rentTime"
                    },
                    {
                        "indexed": false,
                        "name": "_returnTime",
                        "type": "uint256",
                        "lable": "_returnTime"
                    },
                    {
                        "indexed": false,
                        "name": "_isRented",
                        "type": "bool",
                        "lable": "_isRented"
                    }
                ],
                "name": "Rent",
                "type": "event",
                "label": "Rent"
            },
            "0x468ec5066d1b4739c21f88aeade8bcf919780aba332693c4a02d50da9bb2a25c": {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_no",
                        "type": "uint256",
                        "lable": "_no"
                    }
                ],
                "name": "Alert",
                "type": "event",
                "label": "Alert"
            }
        },
        "funs": {
            "issuer": {
                "label": "issuer",
                "inputs": {},
                "outputs": {
                    "": {
                        "label": "",
                        "type": "address",
                        "select": {}
                    }
                },
                "constant": true,
                "type": "function",
                "showLevel": 0
            },
            "user": {
                "label": "user",
                "inputs": {},
                "outputs": {
                    "": {
                        "label": "",
                        "type": "address",
                        "select": {}
                    }
                },
                "constant": true,
                "type": "function",
                "showLevel": 2
            },
            "rent": {
                "label": "rent",
                "inputs": {
                    "_tokenAddress": {
                        "label": "_tokenAddress",
                        "type": "address",
                        "select": {}
                    },
                    "_user": {
                        "label": "_user",
                        "type": "address",
                        "select": {}
                    },
                    "_start": {
                        "label": "_start",
                        "type": "uint256",
                        "select": {}
                    },
                    "_amount": {
                        "label": "_amount",
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
            "balanceOf": {
                "label": "balanceOf",
                "inputs": {
                    "_owner": {
                        "label": "_owner",
                        "type": "address",
                        "select": {}
                    }
                },
                "outputs": {
                    "balance": {
                        "label": "balance",
                        "type": "uint256",
                        "select": {}
                    }
                },
                "constant": true,
                "type": "function",
                "showLevel": 2
            },
            "owner": {
                "label": "owner",
                "inputs": {},
                "outputs": {
                    "": {
                        "label": "",
                        "type": "address",
                        "select": {}
                    }
                },
                "constant": true,
                "type": "function",
                "showLevel": 2
            },
            "check": {
                "label": "check",
                "inputs": {},
                "outputs": {},
                "constant": false,
                "type": "function",
                "showLevel": 2
            },
            "setPrice": {
                "label": "setPrice",
                "inputs": {
                    "_price": {
                        "label": "_price",
                        "type": "uint256",
                        "select": {}
                    }
                },
                "outputs": {},
                "constant": false,
                "type": "function",
                "showLevel": 2
            },
            "returnLock": {
                "label": "returnLock",
                "inputs": {},
                "outputs": {},
                "constant": false,
                "type": "function",
                "showLevel": 2
            },
            "returnTime": {
                "label": "returnTime",
                "inputs": {},
                "outputs": {
                    "": {
                        "label": "",
                        "type": "uint256",
                        "select": {}
                    }
                },
                "constant": true,
                "type": "function",
                "showLevel": 2
            },
            "price": {
                "label": "price",
                "inputs": {},
                "outputs": {
                    "": {
                        "label": "",
                        "type": "uint256",
                        "select": {}
                    }
                },
                "constant": true,
                "type": "function",
                "showLevel": 2
            },
            "isRented": {
                "label": "isRented",
                "inputs": {},
                "outputs": {
                    "": {
                        "label": "",
                        "type": "bool",
                        "select": {}
                    }
                },
                "constant": true,
                "type": "function",
                "showLevel": 2
            },
            "transfer": {
                "label": "transfer",
                "inputs": {
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
            "summary": {
                "label": "summary",
                "inputs": {},
                "outputs": {
                    "_id": {
                        "label": "_id",
                        "type": "uint256",
                        "select": {}
                    },
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
                    "_description": {
                        "label": "_description",
                        "type": "string",
                        "select": {}
                    },
                    "_registerTime": {
                        "label": "_registerTime",
                        "type": "uint256",
                        "select": {}
                    },
                    "_closingTime": {
                        "label": "_closingTime",
                        "type": "uint256",
                        "select": {}
                    },
                    "_coreContract": {
                        "label": "_coreContract",
                        "type": "address",
                        "select": {}
                    },
                    "_hash": {
                        "label": "_hash",
                        "type": "uint256",
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
                "showLevel": 2
            },
            "rentTime": {
                "label": "rentTime",
                "inputs": {},
                "outputs": {
                    "": {
                        "label": "",
                        "type": "uint256",
                        "select": {}
                    }
                },
                "constant": true,
                "type": "function",
                "showLevel": 2
            },
            "parkSummary": {
                "label": "parkSummary",
                "inputs": {},
                "outputs": {
                    "_price": {
                        "label": "_price",
                        "type": "uint256",
                        "select": {}
                    },
                    "_isRented": {
                        "label": "_isRented",
                        "type": "bool",
                        "select": {}
                    },
                    "_owner": {
                        "label": "_owner",
                        "type": "address",
                        "select": {}
                    },
                    "_user": {
                        "label": "_user",
                        "type": "address",
                        "select": {}
                    }
                },
                "constant": true,
                "type": "function",
                "showLevel": 2
            }
        }
    },
    "Test": {
        "label": "Test",
        "address": "",
        "events": {
            "0xdf7a95aebff315db1b7716215d602ab537373cdb769232aae6055c06e798425b": {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "x",
                        "type": "uint256",
                        "lable": "x"
                    }
                ],
                "name": "Set",
                "type": "event",
                "label": "Set"
            }
        },
        "funs": {
            "test": {
                "label": "test",
                "inputs": {
                    "_x": {
                        "label": "_x",
                        "type": "uint256",
                        "select": {}
                    }
                },
                "outputs": {},
                "constant": false,
                "type": "function",
                "showLevel": 0
            },
            "set": {
                "label": "set",
                "inputs": {
                    "_x": {
                        "label": "_x",
                        "type": "uint256",
                        "select": {}
                    }
                },
                "outputs": {},
                "constant": false,
                "type": "function",
                "showLevel": 0
            },
            "get": {
                "label": "get",
                "inputs": {},
                "outputs": {
                    "": {
                        "label": "",
                        "type": "uint256",
                        "select": {}
                    }
                },
                "constant": false,
                "type": "function",
                "showLevel": 0
            }
        }
    },
    "Token": {
        "label": "资产合约",
        "address": "",
        "events": {
            "0x149fce93b932e682403cc96bec03e279d541180833f679b91e445acb94279ba2": {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_issuer",
                        "type": "address",
                        "lable": "_issuer"
                    },
                    {
                        "indexed": false,
                        "name": "_symbol",
                        "type": "bytes32",
                        "lable": "_symbol"
                    },
                    {
                        "indexed": false,
                        "name": "_id",
                        "type": "uint256",
                        "lable": "_id"
                    },
                    {
                        "indexed": false,
                        "name": "_maxSupply",
                        "type": "uint256",
                        "lable": "_maxSupply"
                    },
                    {
                        "indexed": false,
                        "name": "_precision",
                        "type": "uint256",
                        "lable": "_precision"
                    },
                    {
                        "indexed": false,
                        "name": "_currentSupply",
                        "type": "uint256",
                        "lable": "_currentSupply"
                    },
                    {
                        "indexed": false,
                        "name": "_closingTime",
                        "type": "uint256",
                        "lable": "_closingTime"
                    },
                    {
                        "indexed": false,
                        "name": "_description",
                        "type": "string",
                        "lable": "_description"
                    },
                    {
                        "indexed": false,
                        "name": "_hash",
                        "type": "uint256",
                        "lable": "_hash"
                    },
                    {
                        "indexed": false,
                        "name": "_coreContract",
                        "type": "address",
                        "lable": "_coreContract"
                    }
                ],
                "name": "TokenCreate",
                "type": "event",
                "label": ""
            },
            "0xe8d65283ce7aee10608c3cc5a792b8c6d12d6a384324815c848ba173314f0eba": {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_id",
                        "type": "uint256",
                        "lable": "_id"
                    },
                    {
                        "indexed": false,
                        "name": "_from",
                        "type": "address",
                        "lable": "_from"
                    },
                    {
                        "indexed": false,
                        "name": "_to",
                        "type": "address",
                        "lable": "_to"
                    },
                    {
                        "indexed": false,
                        "name": "_amount",
                        "type": "uint256",
                        "lable": "_amount"
                    }
                ],
                "name": "ForceTransfer",
                "type": "event",
                "label": ""
            },
            "0xafce7628c7fdce8d63a6cb5444725ac1423d157e31893de784bdbd111ac9435a": {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_issuer",
                        "type": "address",
                        "lable": "_issuer"
                    },
                    {
                        "indexed": false,
                        "name": "_id",
                        "type": "uint256",
                        "lable": "_id"
                    },
                    {
                        "indexed": false,
                        "name": "_amounts",
                        "type": "uint256",
                        "lable": "_amounts"
                    }
                ],
                "name": "IssueMore",
                "type": "event",
                "label": ""
            },
            "0x16b35c733876ade87e5062332519f2666918ff4b5a284a7f4625c231cda6ff28": {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_issuer",
                        "type": "address",
                        "lable": "_issuer"
                    },
                    {
                        "indexed": false,
                        "name": "_id",
                        "type": "uint256",
                        "lable": "_id"
                    },
                    {
                        "indexed": false,
                        "name": "_amounts",
                        "type": "uint256",
                        "lable": "_amounts"
                    }
                ],
                "name": "Destroy",
                "type": "event",
                "label": ""
            },
            "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "from",
                        "type": "address",
                        "lable": "from"
                    },
                    {
                        "indexed": false,
                        "name": "to",
                        "type": "address",
                        "lable": "to"
                    },
                    {
                        "indexed": false,
                        "name": "value",
                        "type": "uint256",
                        "lable": "value"
                    }
                ],
                "name": "Transfer",
                "type": "event",
                "label": ""
            },
            "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925": {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "owner",
                        "type": "address",
                        "lable": "owner"
                    },
                    {
                        "indexed": false,
                        "name": "spender",
                        "type": "address",
                        "lable": "spender"
                    },
                    {
                        "indexed": false,
                        "name": "value",
                        "type": "uint256",
                        "lable": "value"
                    }
                ],
                "name": "Approval",
                "type": "event",
                "label": ""
            },
            "0xb1e01ba6fb808bfa2dbb48923c5594fbab3dddabdef1bd70e5c3ac580cf8ae0e": {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_res",
                        "type": "uint256[]",
                        "lable": "_res"
                    }
                ],
                "name": "Init",
                "type": "event",
                "label": ""
            },
            "0x3ac9b587e27a1067ec6749df4d47ffae1b4f0a16cc1f7084f75958f8decf59d0": {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_old",
                        "type": "uint256",
                        "lable": "_old"
                    },
                    {
                        "indexed": false,
                        "name": "_new",
                        "type": "uint256",
                        "lable": "_new"
                    }
                ],
                "name": "ResetCore",
                "type": "event",
                "label": ""
            },
            "0xaf9e16246f41f72d8678fe46c8dca4ee61a7ec2c1aaa66099e13f2ec95c65a22": {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_old",
                        "type": "uint256",
                        "lable": "_old"
                    },
                    {
                        "indexed": false,
                        "name": "_new",
                        "type": "uint256",
                        "lable": "_new"
                    }
                ],
                "name": "ResetOwner",
                "type": "event",
                "label": ""
            },
            "0x468ec5066d1b4739c21f88aeade8bcf919780aba332693c4a02d50da9bb2a25c": {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_no",
                        "type": "uint256",
                        "lable": "_no"
                    }
                ],
                "name": "Alert",
                "type": "event",
                "label": ""
            }
        },
        "funs": {
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
            "changeLogicProxy": {
                "label": "changeLogicProxy",
                "inputs": {
                    "_newAddress": {
                        "label": "_newAddress",
                        "type": "uint256",
                        "select": {}
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
            "transferOrigin": {
                "label": "transferOrigin",
                "inputs": {
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
            }
        }
    },
    "TokenManager": {
        "label": "资产管理合约",
        "address": "",
        "events": {
            "0x21ff001241a191befcf24d8099f96a6d4363809c1e76951486f68163fecdf473": {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_token",
                        "type": "address",
                        "lable": "_token"
                    }
                ],
                "name": "CreateTokenData",
                "type": "event",
                "label": ""
            },
            "0xf514230c7d36cf36036dadb7ca53541d8d0dd60001bb1a5bad36fca18b5488fe": {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_issuer",
                        "type": "address",
                        "lable": "_issuer"
                    },
                    {
                        "indexed": false,
                        "name": "_symbol",
                        "type": "bytes32",
                        "lable": "_symbol"
                    },
                    {
                        "indexed": false,
                        "name": "_id",
                        "type": "uint256",
                        "lable": "_id"
                    },
                    {
                        "indexed": false,
                        "name": "_maxSupply",
                        "type": "uint256",
                        "lable": "_maxSupply"
                    },
                    {
                        "indexed": false,
                        "name": "_precision",
                        "type": "uint256",
                        "lable": "_precision"
                    },
                    {
                        "indexed": false,
                        "name": "_currentSupply",
                        "type": "uint256",
                        "lable": "_currentSupply"
                    },
                    {
                        "indexed": false,
                        "name": "_closingTime",
                        "type": "uint256",
                        "lable": "_closingTime"
                    },
                    {
                        "indexed": false,
                        "name": "_description",
                        "type": "string",
                        "lable": "_description"
                    },
                    {
                        "indexed": false,
                        "name": "_hash",
                        "type": "uint256",
                        "lable": "_hash"
                    }
                ],
                "name": "CreateToken",
                "type": "event",
                "label": ""
            },
            "0x51d18786e9cb144f87d46e7b796309ea84c7c687d91e09c97f051eacf59bc528": {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_Token",
                        "type": "address",
                        "lable": "_Token"
                    },
                    {
                        "indexed": false,
                        "name": "_account",
                        "type": "address",
                        "lable": "_account"
                    }
                ],
                "name": "Freeze",
                "type": "event",
                "label": ""
            },
            "0x4f3ab9ff0cc4f039268532098e01239544b0420171876e36889d01c62c784c79": {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_Token",
                        "type": "address",
                        "lable": "_Token"
                    },
                    {
                        "indexed": false,
                        "name": "_account",
                        "type": "address",
                        "lable": "_account"
                    }
                ],
                "name": "Unfreeze",
                "type": "event",
                "label": ""
            },
            "0x365f7b5efa16563feeb2644fe56f482ae46159056ada889a3a55f70a5a339b65": {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_token",
                        "type": "address",
                        "lable": "_token"
                    },
                    {
                        "indexed": false,
                        "name": "_from",
                        "type": "address",
                        "lable": "_from"
                    },
                    {
                        "indexed": false,
                        "name": "_to",
                        "type": "address",
                        "lable": "_to"
                    },
                    {
                        "indexed": false,
                        "name": "_value",
                        "type": "uint256",
                        "lable": "_value"
                    }
                ],
                "name": "ForceTransfer",
                "type": "event",
                "label": ""
            },
            "0xddd97b77ae4e9d3a639003e34204e767d2421086d68c203411d8f7fe26dc2f5b": {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_no",
                        "type": "uint256",
                        "lable": "_no"
                    }
                ],
                "name": "ConfirmOperation",
                "type": "event",
                "label": ""
            },
            "0x230a38fb21a3287e57c3ebd56f136d3ad90c112593989004d4c1c05676c19def": {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_no",
                        "type": "uint256",
                        "lable": "_no"
                    }
                ],
                "name": "Reject",
                "type": "event",
                "label": ""
            },
            "0x35fd0d161073a41e57ca9615d97a0295550a837764449839309d59bc2195141d": {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_no",
                        "type": "uint256",
                        "lable": "_no"
                    },
                    {
                        "indexed": false,
                        "name": "_value",
                        "type": "uint256",
                        "lable": "_value"
                    }
                ],
                "name": "SetOption",
                "type": "event",
                "label": ""
            },
            "0x029c68b8827890cdeb3a3e183173c1b8127a6b905bd9df3f2206cf46af173a61": {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_no",
                        "type": "uint256",
                        "lable": "_no"
                    },
                    {
                        "indexed": false,
                        "name": "_sig",
                        "type": "uint256",
                        "lable": "_sig"
                    }
                ],
                "name": "SetFun",
                "type": "event",
                "label": ""
            },
            "0xfe95e527167a46386505b92a877ce5cb14eb349b2cbad907963e360f218628c9": {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_no",
                        "type": "uint256",
                        "lable": "_no"
                    },
                    {
                        "indexed": false,
                        "name": "_keyAddress",
                        "type": "address",
                        "lable": "_keyAddress"
                    },
                    {
                        "indexed": false,
                        "name": "_role",
                        "type": "uint256",
                        "lable": "_role"
                    }
                ],
                "name": "ResetKey",
                "type": "event",
                "label": ""
            },
            "0xb076d823efc927de7501ab45d276be1d60b2a18e7ecbba35939ffbf1487cd081": {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_no",
                        "type": "uint256",
                        "lable": "_no"
                    },
                    {
                        "indexed": false,
                        "name": "_keyAddress",
                        "type": "address",
                        "lable": "_keyAddress"
                    },
                    {
                        "indexed": false,
                        "name": "_role",
                        "type": "uint256",
                        "lable": "_role"
                    }
                ],
                "name": "ResetKeyC",
                "type": "event",
                "label": ""
            },
            "0xc2d0e37ff8c13b77446d3da778c4c2cff3d6a2e008fe2328d68a3f745d20a3e4": {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_no",
                        "type": "uint256",
                        "lable": "_no"
                    },
                    {
                        "indexed": false,
                        "name": "_keyAddress",
                        "type": "address",
                        "lable": "_keyAddress"
                    },
                    {
                        "indexed": false,
                        "name": "_role",
                        "type": "uint256",
                        "lable": "_role"
                    }
                ],
                "name": "ResetKeyReject",
                "type": "event",
                "label": ""
            },
            "0xb1e01ba6fb808bfa2dbb48923c5594fbab3dddabdef1bd70e5c3ac580cf8ae0e": {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_res",
                        "type": "uint256[]",
                        "lable": "_res"
                    }
                ],
                "name": "Init",
                "type": "event",
                "label": ""
            },
            "0x3ac9b587e27a1067ec6749df4d47ffae1b4f0a16cc1f7084f75958f8decf59d0": {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_old",
                        "type": "uint256",
                        "lable": "_old"
                    },
                    {
                        "indexed": false,
                        "name": "_new",
                        "type": "uint256",
                        "lable": "_new"
                    }
                ],
                "name": "ResetCore",
                "type": "event",
                "label": ""
            },
            "0xaf9e16246f41f72d8678fe46c8dca4ee61a7ec2c1aaa66099e13f2ec95c65a22": {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_old",
                        "type": "uint256",
                        "lable": "_old"
                    },
                    {
                        "indexed": false,
                        "name": "_new",
                        "type": "uint256",
                        "lable": "_new"
                    }
                ],
                "name": "ResetOwner",
                "type": "event",
                "label": ""
            },
            "0x468ec5066d1b4739c21f88aeade8bcf919780aba332693c4a02d50da9bb2a25c": {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_no",
                        "type": "uint256",
                        "lable": "_no"
                    }
                ],
                "name": "Alert",
                "type": "event",
                "label": ""
            }
        },
        "funs": {
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
                "showLevel": 2
            },
            "getKeys": {
                "label": "getKeys",
                "inputs": {},
                "outputs": {
                    "_keys": {
                        "label": "_keys",
                        "type": "address[]",
                        "select": {
                            "0": "重置所有keys",
                            "1": "重置所有keys批准",
                            "2": "设置子管理合约key",
                            "3": "设置子管理合约key批准",
                            "4": "设置合约参数",
                            "5": "设置合约参数批准",
                            "6": "冻结账户",
                            "7": "冻结账户批准",
                            "8": "解冻账户",
                            "9": "解冻账户批准",
                            "10": "资产转移",
                            "11": "资产转移批准"
                        }
                    }
                },
                "constant": true,
                "type": "function",
                "showLevel": 2
            },
            "registerToken": {
                "label": "registerToken",
                "inputs": {
                    "_symbol": {
                        "label": "_symbol",
                        "type": "bytes32",
                        "select": {}
                    },
                    "_logicProxyAddress": {
                        "label": "_logicProxyAddress",
                        "type": "address",
                        "select": {}
                    }
                },
                "outputs": {
                    "_success": {
                        "label": "_success",
                        "type": "bool",
                        "select": {}
                    }
                },
                "constant": false,
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
                "showLevel": 0
            },
            "changeLogicProxy": {
                "label": "changeLogicProxy",
                "inputs": {
                    "_newAddress": {
                        "label": "_newAddress",
                        "type": "uint256",
                        "select": {}
                    }
                },
                "outputs": {},
                "constant": false,
                "type": "function",
                "showLevel": 0
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
                "showLevel": 2
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
                "label": "批准",
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
                "showLevel": 2
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
            }
        }
    },
    "TxManager": {
        "label": "交易管理合约",
        "address": "",
        "events": {
            "0xfe95e527167a46386505b92a877ce5cb14eb349b2cbad907963e360f218628c9": {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_no",
                        "type": "uint256",
                        "lable": "_no"
                    },
                    {
                        "indexed": false,
                        "name": "_keyAddress",
                        "type": "address",
                        "lable": "_keyAddress"
                    },
                    {
                        "indexed": false,
                        "name": "_role",
                        "type": "uint256",
                        "lable": "_role"
                    }
                ],
                "name": "ResetKey",
                "type": "event",
                "label": ""
            },
            "0xb076d823efc927de7501ab45d276be1d60b2a18e7ecbba35939ffbf1487cd081": {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_no",
                        "type": "uint256",
                        "lable": "_no"
                    },
                    {
                        "indexed": false,
                        "name": "_keyAddress",
                        "type": "address",
                        "lable": "_keyAddress"
                    },
                    {
                        "indexed": false,
                        "name": "_role",
                        "type": "uint256",
                        "lable": "_role"
                    }
                ],
                "name": "ResetKeyC",
                "type": "event",
                "label": ""
            },
            "0xc2d0e37ff8c13b77446d3da778c4c2cff3d6a2e008fe2328d68a3f745d20a3e4": {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_no",
                        "type": "uint256",
                        "lable": "_no"
                    },
                    {
                        "indexed": false,
                        "name": "_keyAddress",
                        "type": "address",
                        "lable": "_keyAddress"
                    },
                    {
                        "indexed": false,
                        "name": "_role",
                        "type": "uint256",
                        "lable": "_role"
                    }
                ],
                "name": "ResetKeyReject",
                "type": "event",
                "label": ""
            },
            "0xb1e01ba6fb808bfa2dbb48923c5594fbab3dddabdef1bd70e5c3ac580cf8ae0e": {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_res",
                        "type": "uint256[]",
                        "lable": "_res"
                    }
                ],
                "name": "Init",
                "type": "event",
                "label": ""
            },
            "0x3ac9b587e27a1067ec6749df4d47ffae1b4f0a16cc1f7084f75958f8decf59d0": {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_old",
                        "type": "uint256",
                        "lable": "_old"
                    },
                    {
                        "indexed": false,
                        "name": "_new",
                        "type": "uint256",
                        "lable": "_new"
                    }
                ],
                "name": "ResetCore",
                "type": "event",
                "label": ""
            },
            "0xaf9e16246f41f72d8678fe46c8dca4ee61a7ec2c1aaa66099e13f2ec95c65a22": {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_old",
                        "type": "uint256",
                        "lable": "_old"
                    },
                    {
                        "indexed": false,
                        "name": "_new",
                        "type": "uint256",
                        "lable": "_new"
                    }
                ],
                "name": "ResetOwner",
                "type": "event",
                "label": ""
            },
            "0x468ec5066d1b4739c21f88aeade8bcf919780aba332693c4a02d50da9bb2a25c": {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_no",
                        "type": "uint256",
                        "lable": "_no"
                    }
                ],
                "name": "Alert",
                "type": "event",
                "label": ""
            }
        },
        "funs": {
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
                    }
                },
                "outputs": {},
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
            "getKeys": {
                "label": "查询Key",
                "inputs": {},
                "outputs": {
                    "_keys": {
                        "label": "Keys",
                        "type": "address[]",
                        "select": {
                            "0": "核心合约地址",
                            "1": "重置参数Key",
                            "2": "重置参数Key批准",
                            "3": "拥有者"
                        }
                    }
                },
                "constant": true,
                "type": "function",
                "showLevel": 2
            },
            "changeLogicProxy": {
                "label": "changeLogicProxy",
                "inputs": {
                    "_newAddress": {
                        "label": "_newAddress",
                        "type": "uint256",
                        "select": {}
                    }
                },
                "outputs": {},
                "constant": false,
                "type": "function",
                "showLevel": 0
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
                    }
                },
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
            }
        }
    },
    "Xindi": {
        "label": "Xindi",
        "address": "",
        "events": {
            "0x53f4b433c0b3e915babe23e2fa3c44ba256504a0db9bb4994e96ad28a0608117": {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_account",
                        "type": "address",
                        "lable": "_account"
                    },
                    {
                        "indexed": false,
                        "name": "_Threshold",
                        "type": "uint256",
                        "lable": "_Threshold"
                    },
                    {
                        "indexed": false,
                        "name": "_owners",
                        "type": "address[]",
                        "lable": "_owners"
                    },
                    {
                        "indexed": false,
                        "name": "_weight",
                        "type": "uint256[]",
                        "lable": "_weight"
                    }
                ],
                "name": "ResetAccountOwner",
                "type": "event",
                "label": ""
            },
            "0x7df933ee8e3ea4af7740ee95f6b9b20ea765884b76410cf620f063bda24497d9": {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_account",
                        "type": "address",
                        "lable": "_account"
                    },
                    {
                        "indexed": false,
                        "name": "level",
                        "type": "uint256",
                        "lable": "level"
                    }
                ],
                "name": "SetIdLevel",
                "type": "event",
                "label": ""
            },
            "0x9e54089bcb2730f28b5feee7c91bcaa7b07a83d52801b695a025ffe424438dc2": {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_account",
                        "type": "address",
                        "lable": "_account"
                    },
                    {
                        "indexed": false,
                        "name": "_CA",
                        "type": "address",
                        "lable": "_CA"
                    }
                ],
                "name": "SetCA",
                "type": "event",
                "label": ""
            },
            "0x2846657884f8ca62dc7d0f51a59627e506890d5a59ee1b35b515435da34b1295": {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_account",
                        "type": "address",
                        "lable": "_account"
                    }
                ],
                "name": "RevokeCA",
                "type": "event",
                "label": ""
            },
            "0xaf85b60d26151edd11443b704d424da6c43d0468f2235ebae3d1904dbc323049": {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_account",
                        "type": "address",
                        "lable": "_account"
                    }
                ],
                "name": "Freeze",
                "type": "event",
                "label": ""
            },
            "0xca5069937e68fd197927055037f59d7c90bf75ac104e6e375539ef480c3ad6ee": {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_account",
                        "type": "address",
                        "lable": "_account"
                    }
                ],
                "name": "Unfreeze",
                "type": "event",
                "label": ""
            },
            "0xddd97b77ae4e9d3a639003e34204e767d2421086d68c203411d8f7fe26dc2f5b": {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_no",
                        "type": "uint256",
                        "lable": "_no"
                    }
                ],
                "name": "ConfirmOperation",
                "type": "event",
                "label": ""
            },
            "0x230a38fb21a3287e57c3ebd56f136d3ad90c112593989004d4c1c05676c19def": {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_no",
                        "type": "uint256",
                        "lable": "_no"
                    }
                ],
                "name": "Reject",
                "type": "event",
                "label": ""
            },
            "0x35fd0d161073a41e57ca9615d97a0295550a837764449839309d59bc2195141d": {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_no",
                        "type": "uint256",
                        "lable": "_no"
                    },
                    {
                        "indexed": false,
                        "name": "_value",
                        "type": "uint256",
                        "lable": "_value"
                    }
                ],
                "name": "SetOption",
                "type": "event",
                "label": ""
            },
            "0x029c68b8827890cdeb3a3e183173c1b8127a6b905bd9df3f2206cf46af173a61": {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_no",
                        "type": "uint256",
                        "lable": "_no"
                    },
                    {
                        "indexed": false,
                        "name": "_sig",
                        "type": "uint256",
                        "lable": "_sig"
                    }
                ],
                "name": "SetFun",
                "type": "event",
                "label": ""
            },
            "0xfe95e527167a46386505b92a877ce5cb14eb349b2cbad907963e360f218628c9": {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_no",
                        "type": "uint256",
                        "lable": "_no"
                    },
                    {
                        "indexed": false,
                        "name": "_keyAddress",
                        "type": "address",
                        "lable": "_keyAddress"
                    },
                    {
                        "indexed": false,
                        "name": "_role",
                        "type": "uint256",
                        "lable": "_role"
                    }
                ],
                "name": "ResetKey",
                "type": "event",
                "label": ""
            },
            "0xb076d823efc927de7501ab45d276be1d60b2a18e7ecbba35939ffbf1487cd081": {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_no",
                        "type": "uint256",
                        "lable": "_no"
                    },
                    {
                        "indexed": false,
                        "name": "_keyAddress",
                        "type": "address",
                        "lable": "_keyAddress"
                    },
                    {
                        "indexed": false,
                        "name": "_role",
                        "type": "uint256",
                        "lable": "_role"
                    }
                ],
                "name": "ResetKeyC",
                "type": "event",
                "label": ""
            },
            "0xc2d0e37ff8c13b77446d3da778c4c2cff3d6a2e008fe2328d68a3f745d20a3e4": {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_no",
                        "type": "uint256",
                        "lable": "_no"
                    },
                    {
                        "indexed": false,
                        "name": "_keyAddress",
                        "type": "address",
                        "lable": "_keyAddress"
                    },
                    {
                        "indexed": false,
                        "name": "_role",
                        "type": "uint256",
                        "lable": "_role"
                    }
                ],
                "name": "ResetKeyReject",
                "type": "event",
                "label": ""
            },
            "0xb1e01ba6fb808bfa2dbb48923c5594fbab3dddabdef1bd70e5c3ac580cf8ae0e": {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_res",
                        "type": "uint256[]",
                        "lable": "_res"
                    }
                ],
                "name": "Init",
                "type": "event",
                "label": ""
            },
            "0x3ac9b587e27a1067ec6749df4d47ffae1b4f0a16cc1f7084f75958f8decf59d0": {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_old",
                        "type": "uint256",
                        "lable": "_old"
                    },
                    {
                        "indexed": false,
                        "name": "_new",
                        "type": "uint256",
                        "lable": "_new"
                    }
                ],
                "name": "ResetCore",
                "type": "event",
                "label": ""
            },
            "0xaf9e16246f41f72d8678fe46c8dca4ee61a7ec2c1aaa66099e13f2ec95c65a22": {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_old",
                        "type": "uint256",
                        "lable": "_old"
                    },
                    {
                        "indexed": false,
                        "name": "_new",
                        "type": "uint256",
                        "lable": "_new"
                    }
                ],
                "name": "ResetOwner",
                "type": "event",
                "label": ""
            },
            "0x468ec5066d1b4739c21f88aeade8bcf919780aba332693c4a02d50da9bb2a25c": {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_no",
                        "type": "uint256",
                        "lable": "_no"
                    }
                ],
                "name": "Alert",
                "type": "event",
                "label": ""
            }
        },
        "funs": {
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
                "label": "重置账户私钥",
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
                        "select": {
                            "0": "等待批准",
                            "1": "已经批准",
                            "2": "已经拒绝"
                        }
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
            "changeLogicProxy": {
                "label": "changeLogicProxy",
                "inputs": {
                    "_newAddress": {
                        "label": "_newAddress",
                        "type": "uint256",
                        "select": {}
                    }
                },
                "outputs": {},
                "constant": false,
                "type": "function",
                "showLevel": 0
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
            }
        }
    }
}
module.exports=abis1;