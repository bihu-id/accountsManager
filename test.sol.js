var out=
{
  contracts: {
    test: {
      assembly: {
        .code: [
          {
            begin: 0,
            end: 156,
            name: PUSH,
            value: 60
          },
          {
            begin: 0,
            end: 156,
            name: PUSH,
            value: 40
          },
          {
            begin: 0,
            end: 156,
            name: MSTORE
          },
          {
            begin: 0,
            end: 156,
            name: CALLVALUE
          },
          {
            begin: 0,
            end: 156,
            name: PUSH [ErrorTag]
          },
          {
            begin: 0,
            end: 156,
            name: JUMPI
          },
          {
            begin: 0,
            end: 156,
            name: tag,
            value: 1
          },
          {
            begin: 0,
            end: 156,
            name: JUMPDEST
          },
          {
            begin: 0,
            end: 156,
            name: PUSH #[$],
            value: 0000000000000000000000000000000000000000000000000000000000000000
          },
          {
            begin: 0,
            end: 156,
            name: DUP1
          },
          {
            begin: 0,
            end: 156,
            name: PUSH [$],
            value: 0000000000000000000000000000000000000000000000000000000000000000
          },
          {
            begin: 0,
            end: 156,
            name: PUSH,
            value: 0
          },
          {
            begin: 0,
            end: 156,
            name: CODECOPY
          },
          {
            begin: 0,
            end: 156,
            name: PUSH,
            value: 0
          },
          {
            begin: 0,
            end: 156,
            name: RETURN
          }
        ],
        .data: {
          0: {
            .code: [
              {
                begin: 0,
                end: 156,
                name: PUSH,
                value: 60
              },
              {
                begin: 0,
                end: 156,
                name: PUSH,
                value: 40
              },
              {
                begin: 0,
                end: 156,
                name: MSTORE
              },
              {
                begin: -1,
                end: -1,
                name: PUSH,
                value: E0
              },
              {
                begin: -1,
                end: -1,
                name: PUSH,
                value: 2
              },
              {
                begin: -1,
                end: -1,
                name: EXP
              },
              {
                begin: 0,
                end: 156,
                name: PUSH,
                value: 0
              },
              {
                begin: 0,
                end: 156,
                name: CALLDATALOAD
              },
              {
                begin: 0,
                end: 156,
                name: DIV
              },
              {
                begin: 0,
                end: 156,
                name: PUSH,
                value: 60FE47B1
              },
              {
                begin: 0,
                end: 156,
                name: DUP2
              },
              {
                begin: 0,
                end: 156,
                name: EQ
              },
              {
                begin: 0,
                end: 156,
                name: PUSH [tag],
                value: 2
              },
              {
                begin: 0,
                end: 156,
                name: JUMPI
              },
              {
                begin: 0,
                end: 156,
                name: DUP1
              },
              {
                begin: 0,
                end: 156,
                name: PUSH,
                value: 6D4CE63C
              },
              {
                begin: 0,
                end: 156,
                name: EQ
              },
              {
                begin: 0,
                end: 156,
                name: PUSH [tag],
                value: 3
              },
              {
                begin: 0,
                end: 156,
                name: JUMPI
              },
              {
                begin: 0,
                end: 156,
                name: tag,
                value: 1
              },
              {
                begin: 0,
                end: 156,
                name: JUMPDEST
              },
              {
                begin: 0,
                end: 156,
                name: PUSH [ErrorTag]
              },
              {
                begin: 0,
                end: 156,
                name: JUMP
              },
              {
                begin: 110,
                end: 154,
                name: tag,
                value: 2
              },
              {
                begin: 110,
                end: 154,
                name: JUMPDEST
              },
              {
                begin: 110,
                end: 154,
                name: CALLVALUE
              },
              {
                begin: 110,
                end: 154,
                name: PUSH [ErrorTag]
              },
              {
                begin: 110,
                end: 154,
                name: JUMPI
              },
              {
                begin: 110,
                end: 154,
                name: PUSH [tag],
                value: 4
              },
              {
                begin: 110,
                end: 154,
                name: PUSH,
                value: 4
              },
              {
                begin: 110,
                end: 154,
                name: CALLDATALOAD
              },
              {
                begin: 110,
                end: 154,
                name: PUSH [tag],
                value: 5
              },
              {
                begin: 110,
                end: 154,
                name: JUMP
              },
              {
                begin: 110,
                end: 154,
                name: tag,
                value: 4
              },
              {
                begin: 110,
                end: 154,
                name: JUMPDEST
              },
              {
                begin: 110,
                end: 154,
                name: STOP
              },
              {
                begin: 66,
                end: 105,
                name: tag,
                value: 3
              },
              {
                begin: 66,
                end: 105,
                name: JUMPDEST
              },
              {
                begin: 66,
                end: 105,
                name: CALLVALUE
              },
              {
                begin: 66,
                end: 105,
                name: PUSH [ErrorTag]
              },
              {
                begin: 66,
                end: 105,
                name: JUMPI
              },
              {
                begin: 66,
                end: 105,
                name: PUSH [tag],
                value: 6
              },
              {
                begin: 66,
                end: 105,
                name: PUSH [tag],
                value: 7
              },
              {
                begin: 66,
                end: 105,
                name: JUMP
              },
              {
                begin: 66,
                end: 105,
                name: tag,
                value: 6
              },
              {
                begin: 66,
                end: 105,
                name: JUMPDEST
              },
              {
                begin: 66,
                end: 105,
                name: PUSH,
                value: 40
              },
              {
                begin: 66,
                end: 105,
                name: DUP1
              },
              {
                begin: 66,
                end: 105,
                name: MLOAD
              },
              {
                begin: 66,
                end: 105,
                name: SWAP2
              },
              {
                begin: 66,
                end: 105,
                name: DUP3
              },
              {
                begin: 66,
                end: 105,
                name: MSTORE
              },
              {
                begin: 66,
                end: 105,
                name: MLOAD
              },
              {
                begin: 66,
                end: 105,
                name: SWAP1
              },
              {
                begin: 66,
                end: 105,
                name: DUP2
              },
              {
                begin: 66,
                end: 105,
                name: SWAP1
              },
              {
                begin: 66,
                end: 105,
                name: SUB
              },
              {
                begin: 66,
                end: 105,
                name: PUSH,
                value: 20
              },
              {
                begin: 66,
                end: 105,
                name: ADD
              },
              {
                begin: 66,
                end: 105,
                name: SWAP1
              },
              {
                begin: 66,
                end: 105,
                name: RETURN
              },
              {
                begin: 110,
                end: 154,
                name: tag,
                value: 5
              },
              {
                begin: 110,
                end: 154,
                name: JUMPDEST
              },
              {
                begin: 145,
                end: 146,
                name: PUSH,
                value: 0
              },
              {
                begin: 145,
                end: 146,
                name: SLOAD
              },
              {
                begin: 141,
                end: 147,
                name: PUSH,
                value: 40
              },
              {
                begin: 141,
                end: 147,
                name: DUP1
              },
              {
                begin: 141,
                end: 147,
                name: MLOAD
              },
              {
                begin: 141,
                end: 147,
                name: SWAP2
              },
              {
                begin: 141,
                end: 147,
                name: DUP3
              },
              {
                begin: 141,
                end: 147,
                name: MSTORE
              },
              {
                begin: 141,
                end: 147,
                name: MLOAD
              },
              {
                begin: 141,
                end: 147,
                name: PUSH,
                value: DF7A95AEBFF315DB1B7716215D602AB537373CDB769232AAE6055C06E798425B
              },
              {
                begin: 141,
                end: 147,
                name: SWAP2
              },
              {
                begin: 141,
                end: 147,
                name: DUP2
              },
              {
                begin: 141,
                end: 147,
                name: SWAP1
              },
              {
                begin: 141,
                end: 147,
                name: SUB
              },
              {
                begin: 141,
                end: 147,
                name: PUSH,
                value: 20
              },
              {
                begin: 141,
                end: 147,
                name: ADD
              },
              {
                begin: 141,
                end: 147,
                name: SWAP1
              },
              {
                begin: 141,
                end: 147,
                name: LOG1
              },
              {
                begin: 110,
                end: 154,
                name: tag,
                value: 8
              },
              {
                begin: 110,
                end: 154,
                name: JUMPDEST
              },
              {
                begin: 110,
                end: 154,
                name: POP
              },
              {
                begin: 110,
                end: 154,
                name: JUMP,
                value: [out]
              },
              {
                begin: 66,
                end: 105,
                name: tag,
                value: 7
              },
              {
                begin: 66,
                end: 105,
                name: JUMPDEST
              },
              {
                begin: 88,
                end: 92,
                name: PUSH,
                value: 0
              },
              {
                begin: 102,
                end: 103,
                name: SLOAD
              },
              {
                begin: 66,
                end: 105,
                name: tag,
                value: 9
              },
              {
                begin: 66,
                end: 105,
                name: JUMPDEST
              },
              {
                begin: 66,
                end: 105,
                name: SWAP1
              },
              {
                begin: 66,
                end: 105,
                name: JUMP,
                value: [out]
              }
            ]
          }
        }
      },
      bytecode: 606060405234610000575b6091806100176000396000f3606060405260e060020a600035046360fe47b1811460265780636d4ce63c146035575b6000565b3460005760336004356051565b005b34600057603f608a565b60408051918252519081900360200190f35b60005460408051918252517fdf7a95aebff315db1b7716215d602ab537373cdb769232aae6055c06e798425b9181900360200190a15b50565b6000545b9056,
      functionHashes: {
        get(): 6d4ce63c,
        set(uint256): 60fe47b1
      },
      gasEstimates: {
        creation: [
          73,
          29000
        ],
        external: {
          get(): 241,
          set(uint256): 1233
        },
        internal: {}
      },
      interface: [{\constant\:false,\inputs\:[{\name\:\_x\,\type\:\uint256\}],\name\:\set\,\outputs\:[],\payable\:false,\type\:\function\},{\constant\:false,\inputs\:[],\name\:\get\,\outputs\:[{\name\:\\,\type\:\uint256\}],\payable\:false,\type\:\function\},{\anonymous\:false,\inputs\:[{\indexed\:false,\name\:\x\,\type\:\uint256\}],\name\:\Set\,\type\:\event\}],
      opcodes: PUSH1 0x60 PUSH1 0x40 MSTORE CALLVALUE PUSH2 0x0 JUMPI JUMPDEST PUSH1 0x91 DUP1 PUSH2 0x17 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN PUSH1 0x60 PUSH1 0x40 MSTORE PUSH1 0xE0 PUSH1 0x2 EXP PUSH1 0x0 CALLDATALOAD DIV PUSH4 0x60FE47B1 DUP2 EQ PUSH1 0x26 JUMPI DUP1 PUSH4 0x6D4CE63C EQ PUSH1 0x35 JUMPI JUMPDEST PUSH1 0x0 JUMP JUMPDEST CALLVALUE PUSH1 0x0 JUMPI PUSH1 0x33 PUSH1 0x4 CALLDATALOAD PUSH1 0x51 JUMP JUMPDEST STOP JUMPDEST CALLVALUE PUSH1 0x0 JUMPI PUSH1 0x3F PUSH1 0x8A JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD SWAP2 DUP3 MSTORE MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x20 ADD SWAP1 RETURN JUMPDEST PUSH1 0x0 SLOAD PUSH1 0x40 DUP1 MLOAD SWAP2 DUP3 MSTORE MLOAD PUSH32 0xDF7A95AEBFF315DB1B7716215D602AB537373CDB769232AAE6055C06E798425B SWAP2 DUP2 SWAP1 SUB PUSH1 0x20 ADD SWAP1 LOG1 JUMPDEST POP JUMP JUMPDEST PUSH1 0x0 SLOAD JUMPDEST SWAP1 JUMP ,
      runtimeBytecode: 606060405260e060020a600035046360fe47b1811460265780636d4ce63c146035575b6000565b3460005760336004356051565b005b34600057603f608a565b60408051918252519081900360200190f35b60005460408051918252517fdf7a95aebff315db1b7716215d602ab537373cdb769232aae6055c06e798425b9181900360200190a15b50565b6000545b9056,
      srcmap: 0:156:0:-;;;;;;;;;;;;;,
      srcmapRuntime: 0:156:0:-;;;-1:-1:-1;;;0:156:0;;;;;;;;;;;;;;;;110:44;;;;;;;;;;;66:39;;;;;;;;;;;;;;;;;;;;;;;110:44;145:1;;141:6;;;;;;;;;;;;;;;;110:44;;:::o;66:39::-;88:4;102:1;66:39;;:::o
    }
  },
  errors: [
    test.sol:1:1: Warning: Source file does not specify required compiler version!Consider adding \pragma solidity ^0.4.6\ncontract test{\n^\nSpanning multiple lines.\n
  ],
  formal: {
    errors: [
      test.sol:4:5: Error: Events not supported.\n    event Set(uint x);\n    ^----------------^\n,
      test.sol:5:27: Error: Unnamed return variables not yet supported.\n    function get()returns(uint ){return x;}\n                          ^--^\n,
      test.sol:7:9: Error: Only internal function calls supported.\n        Set(x);\n        ^----^\n,
      test.sol:7:9: Error: Not supported.\n        Set(x);\n        ^-^\n
    ]
  },
  sourceList: [
    test.sol
  ],
  sources: {
    test.sol: {
      AST: {
        children: [
          {
            attributes: {
              fullyImplemented: true,
              isLibrary: false,
              linearizedBaseContracts: [
                5607424
              ],
              name: test
            },
            children: [
              {
                attributes: {
                  name: x,
                  type: uint256
                },
                children: [
                  {
                    attributes: {
                      name: uint
                    },
                    id: 5601428,
                    name: ElementaryTypeName,
                    src: 19:4:0
                  }
                ],
                id: 5605220,
                name: VariableDeclaration,
                src: 19:6:0
              },
              {
                attributes: {
                  name: y,
                  type: uint256
                },
                children: [
                  {
                    attributes: {
                      name: uint
                    },
                    id: 5605300,
                    name: ElementaryTypeName,
                    src: 31:4:0
                  }
                ],
                id: 5605356,
                name: VariableDeclaration,
                src: 31:6:0
              },
              {
                attributes: {
                  name: Set
                },
                children: [
                  {
                    children: [
                      {
                        attributes: {
                          name: x,
                          type: uint256
                        },
                        children: [
                          {
                            attributes: {
                              name: uint
                            },
                            id: 5605492,
                            name: ElementaryTypeName,
                            src: 53:4:0
                          }
                        ],
                        id: 5605580,
                        name: VariableDeclaration,
                        src: 53:6:0
                      }
                    ],
                    id: 5605660,
                    name: ParameterList,
                    src: 52:8:0
                  }
                ],
                id: 5605732,
                name: EventDefinition,
                src: 43:18:0
              },
              {
                attributes: {
                  constant: false,
                  name: get,
                  payable: false,
                  public: true
                },
                children: [
                  {
                    children: [],
                    id: 5605900,
                    name: ParameterList,
                    src: 78:2:0
                  },
                  {
                    children: [
                      {
                        attributes: {
                          name: ,
                          type: uint256
                        },
                        children: [
                          {
                            attributes: {
                              name: uint
                            },
                            id: 5605956,
                            name: ElementaryTypeName,
                            src: 88:4:0
                          }
                        ],
                        id: 5606044,
                        name: VariableDeclaration,
                        src: 88:4:0
                      }
                    ],
                    id: 5606124,
                    name: ParameterList,
                    src: 87:7:0
                  },
                  {
                    children: [
                      {
                        children: [
                          {
                            attributes: {
                              type: uint256,
                              value: x
                            },
                            id: 5606212,
                            name: Identifier,
                            src: 102:1:0
                          }
                        ],
                        id: 5606260,
                        name: Return,
                        src: 95:8:0
                      }
                    ],
                    id: 5606316,
                    name: Block,
                    src: 94:11:0
                  }
                ],
                id: 5606396,
                name: FunctionDefinition,
                src: 66:39:0
              },
              {
                attributes: {
                  constant: false,
                  name: set,
                  payable: false,
                  public: true
                },
                children: [
                  {
                    children: [
                      {
                        attributes: {
                          name: _x,
                          type: uint256
                        },
                        children: [
                          {
                            attributes: {
                              name: uint
                            },
                            id: 5606548,
                            name: ElementaryTypeName,
                            src: 123:4:0
                          }
                        ],
                        id: 5606636,
                        name: VariableDeclaration,
                        src: 123:7:0
                      }
                    ],
                    id: 5606716,
                    name: ParameterList,
                    src: 122:9:0
                  },
                  {
                    children: [],
                    id: 5606788,
                    name: ParameterList,
                    src: 131:0:0
                  },
                  {
                    children: [
                      {
                        children: [
                          {
                            attributes: {
                              type: tuple(),
                              type_conversion: false
                            },
                            children: [
                              {
                                attributes: {
                                  type: function (uint256) constant,
                                  value: Set
                                },
                                id: 5606876,
                                name: Identifier,
                                src: 141:3:0
                              },
                              {
                                attributes: {
                                  type: uint256,
                                  value: x
                                },
                                id: 5606956,
                                name: Identifier,
                                src: 145:1:0
                              }
                            ],
                            id: 5607004,
                            name: FunctionCall,
                            src: 141:6:0
                          }
                        ],
                        id: 5607092,
                        name: ExpressionStatement,
                        src: 141:6:0
                      }
                    ],
                    id: 5607148,
                    name: Block,
                    src: 131:23:0
                  }
                ],
                id: 5607228,
                name: FunctionDefinition,
                src: 110:44:0
              }
            ],
            id: 5607424,
            name: ContractDefinition,
            src: 0:156:0
          }
        ],
        name: SourceUnit
      }
    }
  }
}