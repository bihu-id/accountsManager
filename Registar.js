Funs=require("./test/funs.js")
Address=require("./address.js")

module.exports ={
    register:function(contract,proxy,keyT){

        var address=Address.get()

        var logicAddress=address[contract+"Logic"]
        var proxyAddress=address[contract+"Proxy"]

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
                if(("0x"+res[0].toString(16))!=logicAddress) {
                    return instance.setfun(logicAddress, fun.sig, fun.resSize, {from: keyT}).then(function (tx) {
                        console.log(web3.eth.getTransactionReceipt(tx));
                    })
                }
            })
        })
    },

    comfirm:function(contract,proxy,keyT,keyTC){

        var address=Address.get()

        var logicAddress=address[contract+"Logic"]
        var proxyAddress=address[contract+"Proxy"]

        var funs=Funs[contract]
        var keys=Object.keys(funs)
        var instance=proxy.at(proxyAddress)
        return instance.requestComfirm(0,{from:keyT}).then(function(tx){
            instance.comfirm(0,{from:keyT}).then(function(tx){
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
                console.log("0x"+res[0].toString(16),res[1].toString(10)/32,fun.name)

            });
        })
    }
}
