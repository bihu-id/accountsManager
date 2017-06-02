var Contract=require("../../contract.js")

var privateKey=new Buffer("7326418279111ef3276318ee6dd12cd25a4b343bfab466eacc2def2197e24ade",'hex');

var contract=new Contract ("Parking","ParkingLogic",6000)
contract.confirmUpdate(privateKey)
