var Contract=require("../../contract.js")

var privateKey=new Buffer("f7273ebf3112476ceec2e24b784974348dc487db900d14cd1704c5148d3db104",'hex');

var contract=new Contract ("Xindi","XindiLogic",10000)
contract.confirmUpdate(privateKey)
