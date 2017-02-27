import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, hashHistory } from 'react-router';
import Web3 from 'web3';

import Outputs from "./components/Outputs";

var abls=require("./../config/abls")

var  abis=require("./../config/abis")
var  address=require("./../../test/address.js")

var  Tx = require('ethereumjs-tx');
var  ethUtil = require('ethereumjs-util');
var  ethlightjs         = require('eth-lightwallet');

var  accountsKey=require("./../accountsKeys")
var  ethUtil = require('ethereumjs-util');

var  SolidityEvent = require("web3/lib/web3/event.js");

var  BigNumber=require("BigNumber")
const history = {};

require("./../css/app.css");

class SimpleCreateKey extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            privateKey:this.newKeys()
        }
    }

    newKeys(){
        var d=new Date();
        var rand=Math.round(d.getTime())
        var privateKey=ethUtil.sha3(rand,null)
        return privateKey
        this.setState({
            privateKey:privateKey
        })
    }
    onNewKeys(){
        this.setState({
            privateKey:this.newKeys()
        })
    }
    getMousePos(event) {

        var e = event || window.event;
        return {'x':e.screenX,'y':screenY}

    }

    render() {

        let privateKey=this.state.privateKey
        return(<div>
            <div>
                <input type="button" value="新建私钥不保存不安全仅测试用" onClick={this.onNewKeys.bind(this)} />
            </div>
            <div>
                <span>私钥: </span><span>{"0x"+privateKey.toString('hex')}</span>
            </div>
            <div>
                <span>地址: </span><span>{"0x"+ethUtil.privateToAddress(privateKey).toString('hex')}</span>
            </div>
        </div>)

    }
}

class Events extends React.Component {

    constructor(props) {
        super(props);
        //logs
        //eventsAbls
        //contract
        // address
    }

    render() {

        console.log("contract name in events : "+this.props.contract)
        let logs = this.props.logs;
        let self=this
        let eventsOut
        let label
        let eventsAbls=this.props.eventsAbls
        let eventsAbl = eventsAbls[this.props.contract]
        let contractKeys=Object.keys(eventsAbls)
        let r=logs.map(function (log) {
            let logsAbl = eventsAbl[log.topics[0]]
            if(logsAbl==undefined)
                for(let i=0;i<contractKeys.length;i++){
                    let otherAbl=eventsAbls[contractKeys[i]]
                    if(otherAbl[log.topics[0]]!=undefined) {
                        logsAbl = eventsAbl[log.topics[0]]
                        break
                    }
                }
            label=log["label"]
            if(logsAbl!=undefined ){
                let decoder = new SolidityEvent(null, logsAbl, self.props.address);
                eventsOut=JSON.stringify(decoder.decode(log),null,2);
                console.log("eventsOut",eventsOut)
                return (<div>
                    <div>
                        <span>{label}</span>
                    </div>
                    <div>
                       <textarea
                           rows={eventsOut.length/100+1} cols="100"
                           value={eventsOut}
                       />
                    </div>
                </div>);
            }

        })
        return (<div>
            {r}
        </div>)

    }
}
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
                <FunInput id={key} label={inputs[key].label} />
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
            fun:Object.keys(this.props.abl.funs)[0],
            //types:ethlightjs.txutils._getTypesFromAbi(this.props.abi, Object.keys(this.props.abl.funs)[0]),
            privateKey:"",
            signAddress:"",
            contractAddress:this.props.address,
            args:{},
            sign:"",
            txHash:"",
            receipt:"",
            result:"",
            init:this.props.init,
            dataHash:"",
            temp:"剪贴框",
            eventsAbls:this.geteventsAbls()
            //this.props.address
        };

    }

    cancelType(no,type,e){
        if (e.target.value==type) {
            let newArgs = this.state.args
            newArgs[no] =""
            this.setState({args: newArgs});
        }

    }

    geteventsAbls(){
        let eventsAbls={}
        let t_abls=abls
        for(let i=0;i<Object.keys(t_abls).length;i++){
            let k=Object.keys(t_abls)[i]
            eventsAbls[k]=t_abls[k]["events"]
        }
        return eventsAbls
    }
    onInputChange(no,e){
        let newArgs=this.state.args
        newArgs[no]= e.target.value.replace(/" "/g, "")
        this.setState({
            args:newArgs,
            sign:"",
            result:"",
            txHash:"",
            receipt:""
        });
    }

    clearSign(){
        this.setState({
            sign:"",
            result:"",
            txHash:"",
            receipt:""
        });
    }
    onFunChange(e) {

        this.setState({
            fun:e.target.value,
            result:"",
            sign:""
            //types:ethlightjs.txutils._getTypesFromAbi(this.props.abi, Object.keys(this.props.abl.funs)[0])
        })
        this.clearSign()
        //console.log("this.state.fun:",e.target.value,this.state.fun)
    }
    init(){
        this.setState({
            result:"",
            sign:""
        })
        this.state.init=false

    }
    onPrivateKeyChange(e) {

        this.setState({privateKey:e.target.value})
        this.clearSign()

    }
    onAddressChange(e) {

        this.setState({contractAddress:e.target.value})
        this.clearSign()

    }
    tempChange(e){
        this.setState({temp:e.target.value})
    }
    onSignAddressChange(e){

        let signAddress=e.target.value
        this.setState({signAddress:signAddress})
        let keys=Object.keys(accountsKey)
        for(let i=0;i<keys.length;i++)
            if(accountsKey[keys[i]]["address"]==signAddress)
            {
                this.setState({privateKey:accountsKey[keys[i]]["privateKey"]})
                break;

            }
        this.clearSign()
    }
    onSelectPrivateKey(e) {

        this.setState({
            privateKey:e.target.value,
            address:"0x"+ethUtil.privateToAddress(e.target.value).toString('hex')
        })
        this.clearSign()
    }
    onSubmitConfirmTx(e){

        let web3=this.props.web3
        let abi=abis["TxManager"]
        let privateKey= new Buffer(this.state.privateKey.substring(2), 'hex');
        let fun="pass"
        let args=[this.state.contractAddress,this.state.datahash,""]
        let chainIdStr="id"+this.props.chainId
        let to=address[chainIdStr]["TxManager"+"Data"]
        let value=0
        let gas=5000000

        let self=this
        this.broadCast(web3,this.raw(web3,abi,privateKey,fun,args,to,value,gas,0,null).serializedTx,function(err,hash){
            if (!err) {
                console.log(hash); // "0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385"
                self.setState({
                    txHash:hash
                })
            }
            setTimeout(function(){
                let receipt=web3.eth.getTransactionReceipt(hash)
                console.log(receipt)
                self.setState({
                    receipt:receipt
                })
            }, 3000)
        })

    }
    componentWillUpdate(nextProps, nextState) {
        console.log(nextProps.address,this.props.address);
        if(nextProps.address!=this.props.address)
            this.setState({contractAddress:nextProps.address})

        if(nextState.fun!=this.state.fun){
            this.initType(nextState)
        }
        if(this.state.init)
            this.init()

    }

    initType(nextState){
        let abl=this.props.abl;
        let funs=abl.funs
        //console.log(fun)
        let keys=Object.keys(funs);
        let fun=nextState.fun==""?funs[keys[0]]:funs[nextState.fun]
        let inputs=fun.inputs
        let inputKeys=Object.keys(inputs)
        let args={}
        for(let i=0;i<inputKeys.length;i++)
        {
            args[i]=inputs[inputKeys[i]].type
        }
        this.setState({args:args})
    }
    shouldComponentUpdate(newProps, newState) {
        if(this.state==newState)
            return false
        return true;
    }
    componentWillReceiveProps(){
        this.setState({fun:""})
    }

    componentDidMount() {
        this.initType(this.state)
    }
    onSubmit(sumbitType){

        let abi=this.props.abi
        let web3=this.props.web3
        let priKey=new Buffer(this.state.privateKey.substring(2),'hex')
        let fun=this.state.fun
        let to=this.state.contractAddress
        let value=0
        let gas=3000000
        let nonce =0
        let args=[]

        let self=this
        let keys=Object.keys(self.state.args)
        if(this.props.abl.label=="Xindi"&& this.state.fun=="resetAccountOwner"){
            args.push(this.state.args[keys[0]])
            args.push(this.state.args[keys[1]])
            args.push([this.state.args[keys[2]]])
            args.push([this.state.args[keys[3]]])
        }
        else
            for(let i=0;i<keys.length;i++)
                args.push(this.state.args[keys[i]])

        this.setState({
            txHash:"",
            receipt:""
        })
        console.log("args:",args)

        if(sumbitType==0)
            this.call(web3,abi,to,fun,args)

        if(sumbitType==1){

            let res=this.raw(web3,abi,priKey,fun,args,to,value,gas,nonce,null)

            this.setState({
                sign:res.serializedTx,
                dataHash:ethUtil.sha3(res.data,null).toString('hex')
            })

        }
        if(sumbitType==2) {
            this.broadCast(web3,this.state.sign,function(err,hash){
                if (!err) {
                    console.log(hash); // "0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385"
                    self.setState({
                        txHash:hash
                    })
                }
                setTimeout(function(){

                    let receipt=web3.eth.getTransactionReceipt(hash)
                    console.log(receipt)
                    self.setState({
                        receipt:receipt
                    })
                }, 5000)
            })
        }
    }

    dataFromAbis(abi,fun,args){
        let types = ethlightjs.txutils._getTypesFromAbi(abi, fun);
        return ethlightjs.txutils._encodeFunctionTxData(fun, types,args);
    }
    call(web3,abi,to,fun,args){

        let data='0x'+this.dataFromAbis(abi, fun, args)
        let obj={
            "to":to,
            "data":data
        }
        let res=web3.eth.call(obj)
        this.setState({result:res})
        console.log("result:",res)

    }
    raw(web3,abi,privateKey,fun,args,to,value,gas,nonce,raw){

        let serializedTx;
        let data
        if(raw==null) {
            data = abi ? '0x' + this.dataFromAbis(abi, fun, args) : '0x0'
            //let gas="4000000"
            let int_nonce
            if (nonce == 0)
                var int_nonce = web3.eth.getTransactionCount(ethUtil.privateToAddress(privateKey).toString('hex'));
            else
                int_nonce = nonce;
            let _nonce = "0x" + (int_nonce).toString(16);
            let gasprice = "0x" + web3.eth.gasPrice.toString(16);
            let gasLimit = "0x" + parseInt(gas, 10).toString(16)
            let _value  //new BigNumber(web3.toWei(value, 'ether'));

            let rawTx = {
                nonce: _nonce,
                gasPrice: gasprice,
                gasLimit: gasLimit,
                to: to,
                value: '0x0',// + _value.toString(16),
                data: data
            }
            console.log(rawTx);
            let tx = new Tx(rawTx);
            tx.sign(privateKey);
            serializedTx= tx.serialize().toString('hex');
        }
        else
            serializedTx=raw;

        return {"serializedTx":serializedTx,"data":data}
    }

    broadCast(web3,serializedTx,callback){
        web3.eth.sendRawTransaction(serializedTx, function(err, hash) {
            callback(err, hash)

        });
    }

    getType(json,key){

        let res
        res=Object.keys(json).map(function(k){
            return json[k][key]
        })
        return res
    }
    render() {

        console.log("contract name in contract : "+this.props.name)
        //let contract=this.props.contract
        let abl=this.props.abl;
        let funs=abl.funs

        //console.log(fun)
        let keys=Object.keys(funs);
        let fun=this.state.fun==""?funs[keys[0]]:funs[this.state.fun]
        let inputs=fun.inputs
        let outputs=fun.outputs
        let outputTypes= this.getType(outputs,"type")
        console.log("ouput types:",outputTypes)
        let raw_funs=[]
        let r_txHash=this.state.txHash!=""?<div>
            <label className="label"> 交易哈希</label>
            <input type="text" className="input" value={this.state.txHash} />
        </div>:""

        let r_inputs=[];
        let inputKeys=Object.keys(inputs)
        //let self=this
        for(let i=0;i<inputKeys.length;i++)
        {
            let key=inputKeys[i]
            let type=inputs[key]["type"]
            let value
            if(this.state.args[i]!=undefined)
                value=this.state.args[i]

            r_inputs.push
            (<div >
                <div>
                    <label className="label"> {inputs[key]["label"]}</label>
                </div>
                <div>
                    <input type="text" id={i} className="input " value={value} onChange={this.onInputChange.bind(this,i)} onClick={this.cancelType.bind(this,i,type)}/>
                </div>

            </div>)
            
        }

        keys.forEach(function(key){
            if(parseInt(funs[key]["showLevel"],10)>0)
                raw_funs.push(<option value={key} >{funs[key].label}</option>)
        })
        //onChange={this.onchange.bind(this)}
        let r_funs=
            <select onChange={this.onFunChange.bind(this)}>
                {raw_funs}
            </select>

        let raw_keyOption=Object.keys(accountsKey).map(function(k){

            return <option value={accountsKey[k].privateKey} >{k}</option>
        })
        let privateKey=fun.constant?"" :<div>
            <label className="h2">选择私钥</label>
            <select onChange={this.onSelectPrivateKey.bind(this)}>
                {raw_keyOption}
            </select>
            <div>
                <input
                    type="text"
                    className="input"
                    value={this.state.privateKey}
                    onChange={this.onPrivateKeyChange.bind(this)}
                />
            </div>
            <div>
                <label className="h2">地址:</label>

            </div>
            <div>
                <input
                    type="text"
                    className="input"
                    value={this.state.signAddress?this.state.signAddress:""}
                    onChange={this.onSignAddressChange.bind(this)}
                />
            </div>
        </div>
        
        let r_result
        if(this.state.result!=""&&this.props.abl["funs"][this.state.fun]!=undefined)
            r_result=this.state.result==""?"":<Outputs ablOutputs={this.props.abl["funs"][this.state.fun].outputs} types={outputTypes} bytes={this.state.result} />

        let sign=this.state.sign
        let r_sign=sign!=""?
            <textarea
                rows={sign.length/100} cols="100"
                value={sign}
            />:""


        let sumbitType;
        let sumbitTypeLabel;
        if(fun.constant)
        {
            sumbitType=0;
            sumbitTypeLabel="查询"

        }
        else {
            if(sign==0){
                sumbitType=1;
                sumbitTypeLabel="签名"
            }
            else {
                sumbitType=2;
                sumbitTypeLabel="广播"
            }
        }
        let r_dataHash=sumbitType==2?<div>
            <div>
                <label className="h2">数据HASH:</label>
            </div>
            <div>
                <input type="text" className="input" value={this.state.dataHash} />
            </div>
            <input
                type="submit"
                className="button"
                onClick={this.onSubmitConfirmTx.bind(this)}
                value="发送给Tx管理合约"
            />
        </div>:""
        //logs
        //eventsAbl
        // address
        let receipt=this.state.receipt
        let r_receipt=receipt?
            <div>
                <Events logs= {receipt.logs} eventsAbls={this.state.eventsAbls} contract={this.props.name} address={receipt.contractAddress} />
            </div>:
            ""
        return (
            <div>
                <div>
                    <label className="h2">合约地址:</label>
                    <input type="text" className="input" value={this.state.contractAddress} onChange={this.onAddressChange.bind(this)}/>
                </div>
                <div>
                    <label className="h2">功能:</label>{r_funs}
                </div>
                <div>
                    <label className="label">{fun.label}</label>
                </div>
                <div>
                    {r_inputs}
                </div>
                {privateKey}
                {r_sign}
                {r_txHash}
                {r_result}

                {r_receipt}
                <div>
                    <input
                        type="submit"
                        className="button"
                        onClick={this.onSubmit.bind(this,sumbitType)}
                        value={sumbitTypeLabel}
                    />
                </div>
                <div>
                    <textarea
                        rows="5" cols="100"
                        value={this.state.temp}
                        onChange={this.tempChange.bind(this)}
                    />
                </div>
                <SimpleCreateKey/>
            </div>

        )
    }
}

class App extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            chainType:"public",
            contract:"",
            //rpc:"http://139.196.234.239:8545",
            //rpc:"http://127.0.0.1:8545",
            //rpc:"http://139.196.145.105:8545",
            rpc:"http://120.92.138.162:8545", //test rpc
            //rpc:"http://139.196.144.187:8545",
            //chainId:318 // temp public chain ID
            chainId:314 //test evn
        };
    }

    onContractChange(e){
        this.setState({contract:e.target.value})
    }

    onRpcChange(e){
        this.setState({rpc:e.target.value})
    }

    onChianIdChange(e){
        this.setState({chainId:e.target.value})
    }
    onChianTypeChange(e){

        let chainType
        if(this.state.chainType=="test") {
            console.log("test")
            chainType="public"
            this.setState({
                rpc:"http://139.196.145.105:8545",
                chainId:318
            })
        }
        if(this.state.chainType=="public") {
                console.log("public")
                chainType = "test"
                this.setState({
                    rpc: "http://120.92.138.162:8545", //test rpc
                    chainId: 314 //test evn
                })
        }

        this.setState(
            {chainType : chainType}
        )

    }
    getRpcStr(rpc){
        let start=rpc.indexOf("//")
        return "rpc"+rpc.substring(start+2,rpc.indexOf(":",start)).replace(/[\","."]/g, "")
    }

    getChainIdStr(){

        return "id"+this.state.chainId
    }

    render() {

        let web3 = new Web3(new Web3.providers.HttpProvider(this.state.rpc))

        let keys=Object.keys(abls);

        console.log(keys)
        //console.log(keys[0])
        let raw_contracts=[]

        let contractName=this.state.contract==""?keys[0]:this.state.contract

        let contract=abls[contractName]

        console.log("contractName in app: "+contractName)
        let contractAddress="0x1"
        if(address[this.getChainIdStr()]!=undefined)
            if(address[this.getChainIdStr()][contractName+"Data"]!=undefined)
                contractAddress=address[this.getChainIdStr()][contractName+"Data"]

        console.log(contractAddress)

        let abi=abis[contractName]

        keys.forEach(function(key){
            //console.log(fun.name)
                raw_contracts.push(<option value={key} >{abls[key].label}</option>)
        })
        let r_contracts=
            <select onChange={this.onContractChange.bind(this)}>
                {raw_contracts}
            </select>
        let chainType=this.state.chainType=="test"?"正式链":"测试链"
        return (
            <div>
                <div>
                    <label className="h2">RPC:</label> <input type="text" width="600px" className="inputLen" value={this.state.rpc} onChange={this.onRpcChange.bind(this)}/>
                    <label className="h2">链ID:</label> <input type="text" width="200px" className="inputLen"  value={this.state.chainId} onChange={this.onChianIdChange.bind(this)}/>
                    <input type="submit" width="200px"   value={chainType} onClick={this.onChianTypeChange.bind(this)}/>
                </div>
                <div>
                    <label className="h2">合约:</label>
                    {r_contracts}
                </div>
                <div>
                    <Contract abl={contract} web3={web3} address={contractAddress} abi={abi} chainId={this.state.chainId} name={contractName}/>
                </div>
            </div>
        );
    }
}

let routes = (
    <Route path="/" component={App}/>
);

ReactDOM.render(<Router  history={hashHistory} routes={routes}/>, document.getElementById("content"))