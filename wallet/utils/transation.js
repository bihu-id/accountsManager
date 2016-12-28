var Tx = require('ethereumjs-tx');
var ethUtil = require('ethereumjs-util');
var ethlightjs         = require('eth-lightwallet');

var accountsKey=require("./../accountsKeys")
var ethUtil = require('ethereumjs-util');

var BigNumber=require("BigNumber")
module.exports = {

    transactionRaw:function(web3,contract,fun,args,key,gas){

        var abi=contract.abi
        var to=contract.address
        var value=0
        var nonce=0
        var data=null
        var privateKey;
        if(key.length==42)
            privateKey=this.getPrivateKey(key,accountsKey)
        else
            privateKey=key
        console.log("sign use private key: %s",privateKey)
        return this.raw(web3, abi, Buffer(privateKey.substring(2),'hex'), fun, args, to, value, gas, nonce, data)

    },

    create:function(web3,contract,fun,args,priKey,gas,callback){

        /*var abi=contract.abi
        var to=contract.address
        var value=0
        var nonce=0
        var data=null
        var res =this.raw(web3, abi, priKey, fun, args, to, value, gas, nonce, data)
        this.broadCast(web3 ,res.serializedTx,callback)*/

    },

    raw :function (web3, abi, privateKey, fun, args, to, value, gas, nonce, data){

        var serializedTx;

        //console.log(abi,fun,args)
        if(data==null)
            data = abi ? '0x' + this.dataFromAbis(abi, fun, args) : '0x0'
        //var gas="4000000"
        console.log(data)
        var int_nonce
        if (nonce == 0)
            var int_nonce = web3.eth.getTransactionCount(ethUtil.privateToAddress(privateKey).toString('hex'));
        else
            int_nonce = nonce;
        var _nonce = "0x" + (int_nonce).toString(16);
        var gasprice = "0x" + web3.eth.gasPrice.toString(16);
        var gasLimit = "0x" + parseInt(gas, 10).toString(16)
        var _value  //new BigNumber(web3.toWei(value, 'ether'));

        console.log("start rawTx")
        var rawTx = {
            nonce: _nonce,
            gasPrice: gasprice,
            gasLimit: gasLimit,
            to: to,
            value: '0x0',// + _value.toString(16),
            data: data
        }
        //console.log(rawTx);
        var tx = new Tx(rawTx);
        //console.log(privateKey)
        tx.sign(privateKey);
        serializedTx = tx.serialize().toString('hex');

        //console.log("serializedTx:",serializedTx)
        //console.log(data)
        return {"serializedTx": serializedTx, "data": data}
    },

    broadCast:function (web3, serializedTx, callback) {
        web3.eth.sendRawTransaction(serializedTx, function (err, hash) {
            callback(err, hash)

        })
    },
    getPrivateKey:function(address,accountsKey){

        var keys=Object.keys(accountsKey)
        for(var i=0;i<keys.length;i++)
            if(accountsKey[keys[i]]["address"]==address)
            {
                return accountsKey[keys[i]]["privateKey"]

            }

    },
    sha3:function(data){
        return ethUtil.sha3(data,null).toString('hex')
    },
    dataFromAbis:function (abi,fun,args){
        var types = ethlightjs.txutils._getTypesFromAbi(abi, fun);
        return ethlightjs.txutils._encodeFunctionTxData(fun, types,args);
    }
    
}