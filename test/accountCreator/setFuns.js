// registar=require("./../../registar")
//
// contract('registar fun of accountManager', function(accounts) {
//
//     it("registar fun of accountManager", function () {
//
//         return registar.register("AccountCreator",LogicProxy,accounts[0])
//     })
//
// })



var Contract=require("../../contract.js")

var privateKey=new Buffer("f7273ebf3112476ceec2e24b784974348dc487db900d14cd1704c5148d3db104",'hex');

var contract=new Contract ("AccountCreator","AccountCreatorLogic",10000)
contract.updateLogic(privateKey)
