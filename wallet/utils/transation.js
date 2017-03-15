var Tx = require('ethereumjs-tx');
var ethUtil = require('ethereumjs-util');
var ethlightjs         = require('eth-lightwallet');

var accountsKey=require("./../accountsKeys")
var ethUtil = require('ethereumjs-util');

var BigNumber=require("BigNumber.js")

var coder = require('web3/lib/solidity/coder');

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

module.exports = {

    transactionRaw:function(web3,abi,to,fun,args,key,gas,nonce,_value){

        var abi=abi
        var value=0;
        if(_value!=undefined)
            value=_value
        var data=null
        var privateKey;

        //console.log("sign use private key: %s",privateKey)
        return this.raw(web3, abi, key, fun, args, to, value, gas, nonce, data)

    },
    transaction:function(web3,abi,to,fun,args,key,gas,callback,value,nonce){

        var res=this.transactionRaw(web3,abi,to,fun,args,key,gas,value,nonce)
        this.broadCast(web3,res.serializedTx,callback)

    },
    accountCall:function(web3,abiAccount,abi,to,fun,argsAccount,args,key,gas,callback,value,nonce){
        var dataAccount='0x' + this.dataFromAbis(abiAccount, "approvalCall", argsAccount)
        var data= dataAccount+this.dataFromAbis(abi, fun, args)

        var res=this.raw(web3, abiAccount, key, fun, args, to, value, gas, nonce, data)
        this.broadCast(web3,res.serializedTx,callback)

    },
    createContract:function(web3,code,priKey,gas,callback){
        
        var res=this.raw(web3,null,priKey,null,null,"0x0",0,3000000,null,code)
        this.broadCast(web3,res.serializedTx,callback)

    },

    createContractWithArgs:function(web3,code,abi,args,priKey,gas,callback){
        var paraData=encodeConstructorParams(abi,args);
        var data=code+paraData;
        this.createContract(web3,data,priKey,gas,callback);
    },
    raw :function (web3, abi, privateKey, fun, args, to, value, gas, int_nonce, data){

        var a=ethUtil.privateToAddress(privateKey).toString('hex')
        var balance=parseInt(web3.fromWei(web3.eth.getBalance(a),'ether').toString(),10);
        //console.log(balance )
        if(balance<1){
            console.log(a,balance,minBalance)
            throw("balance<1")
        }

        var serializedTx;

        //console.log(abi,fun,args)
        if(data==null)
            data = abi ? '0x' + this.dataFromAbis(abi, fun, args) : '0x0'
        //var gas="4000000"
        //console.log(data)

        int_nonce = int_nonce||web3.eth.getTransactionCount(ethUtil.privateToAddress(privateKey).toString('hex'));

        var _nonce = "0x" + (int_nonce).toString(16);
        var gasprice = "0x" + web3.eth.gasPrice.toString(16);
        var gasLimit = "0x" + parseInt(gas, 10).toString(16)
        var _value =new BigNumber(web3.toWei(value, 'ether'));

        //console.log("start rawTx")
        var rawTx = {
            nonce: _nonce,
            gasPrice: gasprice,
            gasLimit: gasLimit,
            to: to,
            value: "0x"+ _value.toString(16),
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
    },

    call:function(web3,abi,to,fun,args){

        var data='0x'+this.dataFromAbis(abi, fun, args)
        var obj={
            "to":to,
            "data":data
        }
        var bytes=web3.eth.call(obj)

        var types=this.getOutputTypes(abi,fun)
        bytes = bytes.length >= 2 ? bytes.slice(2) : bytes;

        //console.log(types,bytes)
        return coder.decodeParams(types,bytes)

    },

    getInputTypes:function(abi,fun){

        var inputs=getFun(abi,fun).inputs

        var res=inputs.map(function(i){
            return i.type
        })
        return res

    },

    getOutputTypes:function(abi,fun){

        var outputs=this.getFun(abi,fun).outputs

        //console.log(outputs)
        var res =outputs.map(function(i){
            return i.type
        })
        return res

    },

    getFun:function(abi,fun){
        for(var i=0;i<abi.length;i++)
            if(abi[i].name==fun)
                return abi[i]
    }

}