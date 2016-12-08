var getRpcStr=require("./getRpcServe.js")

module.exports ={

    deployData:function(contract,proxy,data){

        var y='"';
        console.log(y)
        var rpcAddress=getRpcStr.get()

        var proxyAddress=contract+"Proxy";
        var dataAddress=contract+"Data";

        proxy.new().then(function(instance){
            console.log('deploy %s:%s',proxyAddress,instance.address)
            rpcAddress[proxyAddress]='"'+instance.address+'"';
            return data.new(instance.address).then(function(instance){
                console.log('deploy %s:%s',dataAddress,instance.address)
                rpcAddress[dataAddress]='"'+instance.address+'"';
                getRpcStr.save(rpcAddress)
            });
        });
    },
    deploy:function(contract,logic){
        var rpcAddress=getRpcStr.get()
        var logicAddress=contract+"Logic";
        logic.new().then(function(instance){
            console.log('deploy %s:%s',logicAddress,instance.address)
            rpcAddress[logicAddress]='"'+instance.address+'"';
            getRpcStr.save(rpcAddress)
        });
    }

}