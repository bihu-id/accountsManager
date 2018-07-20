var Contract=require("../../contract.js")

var privateKey=new Buffer("f7273ebf3112476ceec2e24b784974348dc487db900d14cd1704c5148d3db104",'hex');

var LogicProxy=new Contract("LogicProxy","TxManagerProxy", 20000)
LogicProxy.deploy(privateKey).then(function(LogicProxy,err){
    LogicProxy.save()
    var XindiData=new Contract("Data","TxManagerData", 20000)
    XindiData.deploy(privateKey,[LogicProxy.address]).then(function(XindiData,err){
        XindiData.save()
        var Logic=new Contract("TxManager","TxManagerLogic",20000)
        Logic.deploy(privateKey).then(function(Logic,err){
            Logic.save()

        })
    })
})
