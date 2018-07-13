var Contract=require("../../contract.js")

var privateKey=new Buffer("4f3edf983ac636a65a842ce7c78d9aa706d3b113bce9c46f30d7d21715b23b1d",'hex');

var LogicProxy=new Contract("LogicProxy","XindiProxy", 20000)
LogicProxy.deploy(privateKey).then(function(LogicProxy,err){
    LogicProxy.save()
    var XindiData=new Contract("Data","XindiData", 20000)
    XindiData.deploy(privateKey,[LogicProxy.address]).then(function(XindiData,err){
        XindiData.save()
        var Logic=new Contract("Xindi","XindiLogic",20000)
        Logic.deploy(privateKey).then(function(Logic,err){
            Logic.save()

        })
    })
})
