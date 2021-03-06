Funs=require("./test/funs.js")
Address=require("./address.js")

module.exports ={
    register:function(contract,proxy,keyT){

        var address=Address.get()

        var logicAddress=address[contract+"Logic"]
        var proxyAddress=address[contract+"Proxy"]

        console.log(logicAddress,proxyAddress)
        var funs=Funs[contract]
        var keys=Object.keys(funs)
        var instance=proxy.at(proxyAddress)

        console.log(proxyAddress)

        /*instance.getKeys().then(function(res){
            console.log(res.toString(16))
        })*/

        keys.forEach(function(k){
            var fun=funs[k]
            console.log("wait keys:")
            return instance.getWait.call(fun.sig).then(function(res) {
                console.log("0x"+res[0].toString(16),res[1].toString(10)/32,fun.name)
                //console.log(parseInt(res[1],16),fun.resSize)
                if(("0x"+res[0].toString(16))!=logicAddress||parseInt(res[1],10)!=fun.resSize) {
                    return instance.setfun(logicAddress, fun.sig, fun.resSize, {from: keyT,gas:300000}).then(function (tx) {
                        console.log(web3.eth.getTransactionReceipt(tx));
                        console.log(tx);
                    })
                }
            })
        })
    },

    confirm:function(contract,proxy,keyT,keyTC){

        var address=Address.get()

        var logicAddress=address[contract+"Logic"]
        var proxyAddress=address[contract+"Proxy"]

        var funs=Funs[contract]
        var keys=Object.keys(funs)
        var instance=proxy.at(proxyAddress)
        return instance.requestConfirm(0,{from:keyT}).then(function(tx){
            instance.confirm(0,{from:keyT}).then(function(tx){
                console.log(tx);
            })
        })

    },
    get:function(contract,proxy){

        var address=Address.get()

        var logicAddress=address[contract+"Logic"]
        var proxyAddress=address[contract+"Proxy"]

        var funs=Funs[contract]
        var keys=Object.keys(funs)

        console.log("proxy address :",proxyAddress)
        keys.forEach(function(k){
            var fun=funs[k]
            //console.log(fun.name)
            var instance=proxy.at(proxyAddress)
            return instance.get.call(fun.sig).then(function(res){
                console.log(fun.sig.toString(16),"0x"+res[0].toString(16),res[1].toString(10)/32,fun.name)

            });
        })
    }
}
