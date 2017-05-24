var Contract=require("../../contract.js")

var privateKey=new Buffer("a2a61f667873ff4567a72bb6f3b7c712c280e202befa205dd606209d24c545f3",'hex');

var contract=new Contract("Erc20Token","Erc20Token",4000)
contract.deploy(privateKey,[100000000,100000000]).then(function(instance,err){
    instance.save()
})