var Contract=require("../../contract.js")

var privateKey=new Buffer("4f3edf983ac636a65a842ce7c78d9aa706d3b113bce9c46f30d7d21715b23b1d",'hex');

var Xindi=new Contract ("Xindi","XindiData",10000)// arg0: contract name to get abi and function , arg1: to get contract address
console.log(Xindi.address)

Xindi.init([], privateKey,2000000);