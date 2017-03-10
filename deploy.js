var getRpcStr=require("./getRpcServe.js")

module.exports ={

    deployData:function(contract,proxy,data,privateKey){

        var rpcAddress=getRpcStr.get()

        var proxyAddress=contract+"Proxy";
        var dataAddress=contract+"Data";
        if(privateKey==undefined){
            proxy.new().then(function(instance){
                console.log('deploy %s:%s',proxyAddress,instance.address)
                rpcAddress[proxyAddress]='"'+instance.address+'"';
                return data.new(instance.address).then(function(instance){
                    console.log('deploy %s:%s',dataAddress,instance.address)
                    rpcAddress[dataAddress]='"'+instance.address+'"';
                    getRpcStr.save(rpcAddress)
                });
            });
        }
        else 
        {
            
        }
    },

    deploy:function(contract,proxy,logic){
        var rpcAddress=getRpcStr.get()
        var logicAddress=contract+"Logic";
        var proxyAddress=contract+"Proxy";

        logic.new().then(function(instance){

            rpcAddress[logicAddress]='"'+instance.address+'"';
            console.log('deploy %s:%s',logicAddress,instance.address)
            if(proxy!=null)
                proxy.new().then(function(instance){
                    console.log('deploy %s:%s',proxyAddress,instance.address)
                    rpcAddress[proxyAddress]='"'+instance.address+'"';
                    getRpcStr.save(rpcAddress)
                })
            else
                getRpcStr.save(rpcAddress)
        });
    },
    deployProxy:function(contract,proxy){
        var rpcAddress=getRpcStr.get()

        var proxyAddress=contract+"Proxy";

        logicProxy=proxy.new().then(function(instance){
            rpcAddress[proxyAddress]='"'+instance.address+'"';
            getRpcStr.save(rpcAddress)
        })

    },
    
    deployDataWS:function(contract,proxy,data,callback){

        var rpcAddress={}

        var proxyAddress=contract+"Proxy";
        var dataAddress=contract+"Data";

        proxy.new().then(function(instance){
            console.log('deploy %s:%s',proxyAddress,instance.address)
            rpcAddress[proxyAddress]='"'+instance.address+'"';
            return data.new(instance.address).then(function(instance){
                console.log('deploy %s:%s',dataAddress,instance.address)
                rpcAddress[dataAddress]='"'+instance.address+'"';
                callback(rpcAddress)
            });
        });
    },

    deployWS:function(contract,proxy,logic,callback){
        var rpcAddress={}
        var logicAddress=contract+"Logic";
        var proxyAddress=contract+"Proxy";

        logic.new().then(function(instance){

            rpcAddress[logicAddress]='"'+instance.address+'"';
            console.log('deploy %s:%s',logicAddress,instance.address)
            if(proxy!=null)
                proxy.new().then(function(instance){
                    console.log('deploy %s:%s',proxyAddress,instance.address)
                    rpcAddress[proxyAddress]='"'+instance.address+'"';
                    callback(rpcAddress)
                })
            else
                callback(rpcAddress)
        });
    },
}