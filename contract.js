var abis=require("./test/abis.js")
var getRpcStr=require("./getRpcServe.js")
var transaction=require("./anduiWallet/utils/transation.js")
var codes=require("./test/byteCodes.js")
var Web3=require("./getWeb3Instance.js")
var coder = require('web3/lib/solidity/coder');
var ethUtil = require('ethereumjs-util');

var Promise = require('bluebird')
var Sleep=require("./anduiWallet/utils/sleep.js")
var rpcAddress=getRpcStr.get()

var abls=require("./anduiWallet/config/abls")
var funs=require("./test/funs.js")

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
        data+=encodeConstructorParams(this.abi,args)
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
                        self.address=address
                        accept(self)
                    }
                })
            },self.delay)
        })
    });
};

contract.prototype.at=function(addressKey){
    addressKey=addressKey||this.addressKey
    this.address=rpcAddress[addressKey]
}
contract.prototype.setAddress=function(address){

    this.address=address
}

contract.getAddress=function(addressKey){
    //console.log(rpcAddress[addressKey])
    return rpcAddress[addressKey]
}
contract.prototype.addAccountCall=function(accountAddress,funName){
    this.accountAbi=abis["Account"]
    this.acccountAddress=accountAddress
    var self=this
    var funInstance=function(args,privateKey,gas,nonce,notWaitReceipt){
        gas=gas||self.callGas

        console.log(notWaitReceipt)
        return new Promise(function (accept, reject) {
            console.log("tx to :",self.acccountAddress)

            transaction.accountCall(web3,self.accountAbi,self.abi,self.acccountAddress,funName,[self.address],args,privateKey,gas,function (err, hash) {
                console.log(err)
                if (err)
                    reject(err);
                if(notWaitReceipt) {
                    accept(true)
                }
                else{
                    setTimeout(function () {
                        var receipt = web3.eth.getTransactionReceipt(hash)

                        accept(receipt)
                    }, self.delay)
                }

            },0,nonce)
        })
    }
    this.addFunction("call_"+funName,funInstance)
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
        if(fun.type=="function"){

            var funInstance=function(args,privateKey,gas,nonce,notWaitReceipt){
                gas=gas||self.callGas
                if (privateKey!=undefined) {
                    return new Promise(function (accept, reject) {
                        console.log("tx to :",self.address)
                        transaction.transaction(web3, self.abi, self.address, fun.name, args, privateKey, gas, function (err, hash) {
                            console.log(err)
                            if (err)
                                reject(err);
                            if(notWaitReceipt) {
                                accept(true)
                            }
                            else{
                                setTimeout(function () {
                                    var receipt = web3.eth.getTransactionReceipt(hash)
                                    console.log(hash)
                                    accept(receipt)
                                }, self.delay)
                            }
                        },0,nonce)
                    });
                }
                else {
                    return new Promise(function (accept, reject) {
                        var res=transaction.call(web3,self.abi, self.address, fun.name, args)
                        //console.log(res)
                        accept(res)

                    });
                }
            };

            add(fun.name,funInstance)
        }
    })
}
contract.prototype.save=function(addressKey){
    var rpcAddress=getRpcStr.get()
    addressKey=addressKey||this.addressKey
    rpcAddress[addressKey]='"'+this.address+'"';
    var self=this
    getRpcStr.save(rpcAddress,function(err){
        if (err) throw err;
        console.log("save %s : %s",addressKey,self.address); //文件被保存
    })

}

contract.prototype.updateLogic=function(privateKey){

    this.at()
    var fun=funs[this.name]
    var addresses=getRpcStr.get()
    var to=addresses[this.name+"Proxy"]
    var keys=Object.keys(fun)
    var logicAddress=this.address
    var abi=abis["LogicProxy"]
    var sleep=new Sleep(1)
    var nonce=web3.eth.getTransactionCount(ethUtil.privateToAddress(privateKey).toString('hex'));
    var i=0
    keys.forEach(function(k){
        var f=fun[k]

            var res=transaction.call(web3, abi, to, "getWait", [f.sig]);
            var addressToStr=function(res){
                var str=res.toString(16)
                //console.log(res,str)
                return '0x'+Array(40-str.length).join(0)+str
            }
            //console.log(res[0])
            var currentLogic=addressToStr(res[0])
            var currentSize=parseInt(res[1].toString(),10)
            console.log(currentLogic,currentSize,f.sig.toString(16),f.name)
            if(currentLogic!=logicAddress||currentSize!=f.resSize) {
                console.log("set :",logicAddress,f.resSize,f.sig.toString(16),f.name,"with nonde :",nonce+i)
                transaction.transaction(web3, abi, to, "setfun", [logicAddress, f.sig, f.resSize], privateKey, 220000, function (err, hash) {
                    if (err)
                        console.log(err)

                    setTimeout(function () {
                        var receipt = web3.eth.getTransactionReceipt(hash)
                        console.log(receipt)

                    }, 10000)
                },0,nonce+i)
                i++
            }
        

    })
    sleep.go(function() {
        keys.forEach(function (k) {
            var f = fun[k]
            var res = transaction.call(web3, abi, to, "getWait", [f.sig])
            console.log(res[0].toString(16),res[1].toString(),f.sig.toString(16),f.name)
        })
    },20000)
}

contract.prototype.confirmUpdate=function(privateKey){
    var fun=funs[this.name]
    var addresses=getRpcStr.get()
    var to=addresses[this.name+"Proxy"]
    var keys=Object.keys(fun)
    var abi=abis["LogicProxy"]
    var sleep=new Sleep(1)
    sleep.go(function(){
        transaction.transaction(web3,abi,to,"requestConfirm",[0],privateKey,300000,function(err,hash){
            console.log(err)
            if (!err)
                console.log(hash); // "0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385"

            setTimeout(function(){
                var receipt=web3.eth.getTransactionReceipt(hash)
                console.log(receipt)

            },10000)
        })
    },10)

    sleep.go(function(){
        transaction.transaction(web3,abi,to,"confirm",[0],privateKey,300000,function(err,hash){
            console.log(err)
            if (!err)
                console.log(hash); // "0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385"

            setTimeout(function(){
                var receipt=web3.eth.getTransactionReceipt(hash)
                console.log(receipt)

            },10000)
        })
    },10000)


    sleep.go(function() {
        keys.forEach(function (k) {
            var f = fun[k]
            var res = transaction.call(web3, abi, to, "get", [f.sig])
            console.log(res[0].toString(16),res[1].toString(),f.sig.toString(16),f.name)
        })
    },20000)
}

contract.prototype.getLogic=function() {
    var fun = funs[this.name]
    var addresses = getRpcStr.get()
    var to = addresses[this.name + "Proxy"]
    var keys = Object.keys(fun)
    var abi = abis["LogicProxy"]
    keys.forEach(function (k) {
        var f = fun[k]
        var res = transaction.call(web3, abi, to, "get", [f.sig])
        console.log(res[0].toString(16), res[1].toString(), f.sig.toString(16), f.name)
    })
}
contract.prototype.addFunction=function(funName,fun){
    Object.defineProperty(this, funName, {
        value: fun,
        configurable: false,
        writable: false,
        enumerable: true
    });
}
module.exports = contract