var abis=require("./test/abis.js")
var getRpcStr=require("./getRpcServe.js")
var transaction=require("../../wallet/utils/transation.js")
var codes=require("../byteCodes.js")
var Web3=require("../../getWeb3Instance.js")
var ethUtil = require('ethereumjs-util');
var Promise = require('bluebird')

contract=function(name,addressKey){
    this.name=name
    this.abi=abis[name]
    this.address=getRpcStr.get()[addressKey]
    this.addressKey=addressKey

}
contract.prototype.deploy=function(issuer,args){

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
    return new Promise(function(accept, reject) {
        transaction.createContract(web3,data,issuer,3000000,function(err,hash){
            console.log(err)
            if (err)
                reject(err);

            setTimeout(function(){
                var receipt=web3.eth.getTransactionReceipt(hash)
                var rpcAddress=getRpcStr.get()
                var address=receipt.contractAddress
                rpcAddress[this.addressKey]='"'+address+'"';
                getRpcStr.save(rpcAddress)
                this.address=address
                accept(address)
            },6000)
        })
    });
};

contract.prototype.at=function(address){
    this.address=address
}
