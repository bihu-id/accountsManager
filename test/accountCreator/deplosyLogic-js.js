var Contract=require("../../contract.js")

var privateKey=new Buffer("f7273ebf3112476ceec2e24b784974348dc487db900d14cd1704c5148d3db104",'hex');

var LogicProxy=new Contract("LogicProxy","AccountCreatorProxy", 20000)
LogicProxy.deploy(privateKey).then(function(LogicProxy,err){
    LogicProxy.save()
    var DataContract=new Contract("Data","AccountCreatorData", 20000)
    DataContract.deploy(privateKey,[LogicProxy.address]).then(function(DataContract,err){
        DataContract.save()
        var Logic=new Contract("AccountCreator","AccountCreatorLogic",20000)
        Logic.deploy(privateKey).then(function(Logic,err){
            Logic.save()

        })
    })
})
