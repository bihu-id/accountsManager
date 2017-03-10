var abis=require("./test/abis.js")
var getRpcStr=require("./getRpcServe.js")
var transaction=require("./wallet/utils/transation.js")
var codes=require("./test/byteCodes.js")
var Web3=require("./getWeb3Instance.js")
var Promise = require('bluebird')

contract=function(name,addressKey,delay,createGas,callGas){
    this.name=name
    this.abi=abis[name]
    this.address=getRpcStr.get()[addressKey]
    this.addressKey=addressKey
    this.delay=delay||5000
    this.createGas=createGas||3000000
    this.callGas=callGas||3000000
    if(delay!=undefined)
        this.delay=delay
    this.addFunctions()
}
contract.prototype.deploy=function(issuer,args,gas){

    var privateKey=issuer
    var data="0x"+codes[this.name]

    var encodeConstructorParams = function (abi, params) {
        return abi.filter(function (json) {
                return json.type === 'constructor' && json.inputs.length === params.length;
            }).map(function (json) {
                return json.inputs.map(function (input) {
                    return input.type;
                });
            }).map(function (types) {
                return coder.encodeParams(types, params);
            })[0] || '';
    };

    if (args!=undefined)
        data+=encodeConstructorParams(abi,args)
    var self=this
    gas=gas||self.callGas
    return new Promise(function(accept, reject) {
        transaction.createContract(web3,data,issuer,gas,function(err,hash){
            console.log(err)
            if (err)
                reject(err);

            setTimeout(function(){
                var receipt=web3.eth.getTransactionReceipt(hash)
                var rpcAddress=getRpcStr.get()
                var address=receipt.contractAddress
                rpcAddress[self.addressKey]='"'+address+'"';
                getRpcStr.save(rpcAddress,function(err){
                    if(err)
                        throw err
                    else
                    {
                        this.address=address
                        accept(address)
                    }
                })
            },self.delay)
        })
    });
};

contract.prototype.at=function(address){
    this.address=address
}

contract.prototype.addFunctions=function(){

    var self=this
    var add=function(funName,fun){
        Object.defineProperty(self, funName, {
            value: fun,
            configurable: false,
            writable: false,
            enumerable: true
        });
    }

    this.abi.forEach(function(fun){
        if(fun.type!="function"||fun.type!="constructor"){

            var funInstance=function(args,privateKey,gas){
                gas=gas||self.callGas
                if (privateKey!=undefined) {
                    return new Promise(function (accept, reject) {
                        transaction.transaction(web3, self.abi, self.address, fun.name, args, privateKey, self.callGas, function (err, hash) {
                            console.log(err)
                            if (err)
                                reject(err);

                            setTimeout(function () {
                                var receipt = web3.eth.getTransactionReceipt(hash)
                                accept(receipt)
                            }, self.delay)
                        })
                    });
                }
                else {
                    return new Promise(function (accept, reject) {
                        var res=transaction.call(web3,self.abi, self.address, fun.name, args)
                        console.log(res)
                        accept(res)

                    });
                }
            };

            add(fun.name,funInstance)
        }
    })
}
module.exports = contract