var Contract=require("../../contract.js")

var privateKey=new Buffer("7326418279111ef3276318ee6dd12cd25a4b343bfab466eacc2def2197e24ade",'hex');

var creator=new Contract("ParkingCreator","ParkingCreatorData",5000)
console.log(Contract.getAddress("TokenManagerData"),Contract.getAddress("ParkingProxy"))
creator.init([],privateKey).then(function(receipt,err){
    console.log(receipt)
//createParking(uint _noInSystem,address _system,string _name,uint _spaceAmount,address _manager ,uint _closingTime,uint _hash,address _logicProxy)returns (bool _success)
    creator.createParking([10,0x100,"gdgc",100,Contract.getAddress("TokenManagerData"),Date.parse(new Date())/1000+3600*365,0x1020,Contract.getAddress("ParkingProxy")],privateKey).then(function(receipt,err) {
        console.log(receipt)
    })
})
