import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, hashHistory } from 'react-router';
import Web3 from 'web3';

import FunInput from "./components/FunInput.jsx";

var abls=require("./../config/abls")

var abis=require("./../config/abis")
var address=require("./../../test/address.js")

const history = {};

require("./../css/app.css");

class Function extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {

        let inputs=this.props.inputs;
        let r_inputs=[];
        let keys=Object.keys(inputs)
        keys.forEach(function(key){
            r_inputs.push(
                <FunInput label={inputs[key].label} />
            )
        })
        return (
            <div>
                {r_inputs}
            </div>
        )
    }
}

class Contract extends React.Component{



    constructor(props) {
        super(props);
        //console.log(this.props.address)

        this.state = {
            fun:"",
            privateKey:"",
            contractAddress:this.props.address,
            txHash:"",
            Receipt:""
            //this.props.address
        };

    }

    onFunChange(e) {

        this.setState({fun:e.target.value})
        console.log("this.state.fun:",e.target.value,this.state.fun)
    }
    onPrivateKeyChange(e) {

        this.setState({privateKey:e.target.value})

    }
    onAddressChange(e) {

        this.setState({contractAddress:e.target.value})

    }
    componentWillUpdate(nextProps, nextState) {
        console.log(nextProps.address,this.props.address);
        if(nextProps.address!=this.props.address)
            this.setState({contractAddress:nextProps.address})

    }
    shouldComponentUpdate(newProps, newState) {
        if(this.state==newState)
            return false
        return true;
    }
    componentWillReceiveProps(){
        this.setState({fun:""})
    }
    onSubmit(){
        var abi=this.props.abi
        var web3=this.props.web3
        var priKey=this.state.privateKey
        var fun=this.state.fun
        var to=this.state.contractAddress
        var value=0
        var gas=5000000
        var nonce =0
        this.setState({
            txHash:"",
            receipt:""
        })
        this.raw(web3,abi,priKey,fun,to,value,gas,nonce,null)
    }

    raw(web3,abi,privateKey,fun,args,to,value,gas,nonce,raw){
        function abis(abi,fun,args){
            var types = ethlightjs.txutils._getTypesFromAbi(abi, fun);
            return ethlightjs.txutils._encodeFunctionTxData(fun, types,args);
        }
        var serializedTx;
        if(raw==null) {
            var data = abi ? '0x' + abis(abi, fun, args) : '0x0'
            //var gas="4000000"
            var int_nonce
            if (nonce == 0)
                var int_nonce = web3.eth.getTransactionCount(ethUtil.privateToAddress(privateKey).toString('hex'));
            else
                int_nonce = nonce;
            var _nonce = "0x" + (int_nonce).toString(16);
            var gasprice = "0x" + web3.eth.gasPrice.toString(16);
            var gasLimit = "0x" + parseInt(gas, 10).toString(16)
            var _value = new BigNumber(web3.toWei(value, 'ether'));

            var rawTx = {
                nonce: _nonce,
                gasPrice: gasprice,
                gasLimit: gasLimit,
                to: to,
                value: '0x' + _value.toString(16),
                data: data
            }
            console.log(rawTx);
            var tx = new Tx(rawTx);
            tx.sign(privateKey);
            serializedTx= tx.serialize().toString('hex');
        }
        else
            serializedTx=raw;

        web3.eth.sendRawTransaction(serializedTx, function(err, hash) {
            //console.log(err)
            if (!err) {
                console.log(hash); // "0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385"
                this.setState({
                    txHash:hash
                })
            }
            setTimeout(function(){
                this.setState({
                    receipt:web3.eth.getTransactionReceipt(hash)
                })
            }, 5000)
        });
    }
    render() {

        //console.log(this.props.web3)
        //let contract=this.props.contract
        let abl=this.props.abl;
        let funs=abl.fun
        //console.log(fun)
        let keys=Object.keys(funs);
        let fun=this.state.fun==""?funs[keys[0]]:funs[this.state.fun]
        let inputs=fun.inputs
        let raw_funs=[]
        let r_txHash=this.state.txHash!=""?<div>
            <label className="label"> 交易哈希</label>
            <input type="text" className="text" value={this.state.txHash} />
        </div>:""

        keys.forEach(function(key){
            if(parseInt(funs[key]["showLevel"],10)>0)
                raw_funs.push(<option value={key} >{funs[key].label}</option>)
        })
        //onChange={this.onchange.bind(this)}
        let r_funs=
            <select onChange={this.onFunChange.bind(this)}>
                {raw_funs}
            </select>

        let privateKey=fun.constant?"" :<div>
            <div>
                <label className="h2">签名私钥</label>
            </div>
            <div>
                <input
                    type="text"
                    className="input"
                    onClick={this.onPrivateKeyChange.bind(this)}
                />
            </div>
        </div>
        return (
            <div>
                <div>
                    <label className="h2">合约地址:</label>
                    <input type="text" className="input " value={this.state.contractAddress} onChange={this.onAddressChange.bind(this)}/>
                </div>
                <div>
                    <label className="h2">功能:</label>{r_funs}
                </div>
                <div>
                    <label className="label">{fun.label}</label>
                </div>
                <div>
                    <Function inputs={inputs}/>
                </div>
                {privateKey}
                {r_txHash}
                <div>
                    <input
                        type="submit"
                        className="button"
                        onClick={this.onSubmit.bind(this)}
                        value="确定"
                    />
                </div>
            </div>

        )
    }
}

class App extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            contract:"",
            rpc:"http://127.0.0.1:8545"
        };
    }

    onContractChange(e){
        this.setState({contract:e.target.value})
    }

    onRpcChange(e){
        this.setState({rpc:e.target.value})
    }

    getRpcStr(rpc){
        let start=rpc.indexOf("//")
        return "rpc"+rpc.substring(start+2,rpc.indexOf(":",start)).replace(/[\","."]/g, "")
    }
    render() {

        var web3 = new Web3(new Web3.providers.HttpProvider(this.state.rpc))

        let keys=Object.keys(abls);

        console.log(keys)
        //console.log(keys[0])
        var raw_contracts=[]

        var contractName=this.state.contract==""?keys[0]:this.state.contract

        var contract=abls[contractName]

        console.log(contractName+"Data")
        var contractAddress="0x1"
        if(address[this.getRpcStr(this.state.rpc)][contractName+"Data"]!=undefined)
            contractAddress=address[this.getRpcStr(this.state.rpc)][contractName+"Data"]

        console.log(contractAddress)

        var abi=abis[contractName]

        keys.forEach(function(key){
            //console.log(fun.name)
                raw_contracts.push(<option value={key} >{abls[key].label}</option>)
        })
        let r_contracts=
            <select onChange={this.onContractChange.bind(this)}>
                {raw_contracts}
            </select>
        return (
            <div>
                <div>
                    <label className="h2">RPC:</label> <input type="text" className="input " value={this.state.rpc} onChange={this.onRpcChange.bind(this)}/>
                </div>
                <div>
                    <label className="h2">合约:</label>
                    {r_contracts}
                </div>
                <div>
                    <Contract abl={contract} web3={web3} address={contractAddress} abi={abi}/>
                </div>
            </div>
        );
    }
}

let routes = (
    <Route path="/" component={App}/>
);

ReactDOM.render(<Router  history={hashHistory} routes={routes}/>, document.getElementById("content"))