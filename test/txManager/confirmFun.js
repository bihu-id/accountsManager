// registar=require("./../../registar")
//
// contract('registar fun of TxManager', function(accounts) {
//
//     it("Confirm registar fun ", function () {
//
//         return registar.confirm("TxManager", LogicProxy, accounts[0],accounts[0])
//     })
//
// })



var Contract=require("../../contract.js")

var privateKey=new Buffer("f7273ebf3112476ceec2e24b784974348dc487db900d14cd1704c5148d3db104",'hex');

var contract=new Contract ("TxManager","TxManagerLogic",10000)
contract.confirmUpdate(privateKey)
