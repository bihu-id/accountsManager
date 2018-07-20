var Contract=require("../../contract.js")

var privateKey=new Buffer("f7273ebf3112476ceec2e24b784974348dc487db900d14cd1704c5148d3db104",'hex');

var Xindi=new Contract ("Xindi","XindiData",10000)// arg0: contract name to get abi and function , arg1: to get contract address
console.log(Xindi.address)

Xindi.init([], privateKey,2000000);