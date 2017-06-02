var Contract=require("../../contract.js")

var privateKey=new Buffer("a2a61f667873ff4567a72bb6f3b7c712c280e202befa205dd606209d24c545f3",'hex');

var contract=new Contract("ParkingCreator","ParkingCreatorLogic",5000)
contract.deploy(privateKey).then(function(instance,err){
    instance.save()
})