var Contract=require("../../contract.js")

var privateKey=new Buffer("7326418279111ef3276318ee6dd12cd25a4b343bfab466eacc2def2197e24ade",'hex');

var proxy=new Contract("LogicProxy","ParkingCreatorProxy",5000)

proxy.deploy(privateKey).then(function(instance,err){
    instance.save()
    console.log(instance.address)
    var data=new Contract("Data","ParkingCreatorData",5000);
    data.deploy(privateKey,[instance.address]).then(function(instance,err){
        instance.save()
    })
})