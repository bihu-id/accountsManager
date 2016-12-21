import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, hashHistory } from 'react-router';

import FunInput from "./components/FunInput.jsx";

var abis=require("./../config/abis_")
const history = {};

require("./../css/app.css");

class Function extends React.Component{

    constructor() {
        super();
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

    constructor() {
        super();
        this.state = {
            fun:"",
            privateKey:""
        };
    }

    onFunChange(e) {

        this.setState({fun:e.target.value})
        console.log("this.state.fun:",e.target.value,this.state.fun)
    }
    onPrivateKeyChange(e) {

        this.setState({privateKey:e.target.value})

    }

    componentWillReceiveProps(){
        this.setState({fun:""})
    }
    onSubmit(){

    }

    render() {

        //let contract=this.props.contract
        let abi=this.props.abi;
        let funs=abi.fun
        //console.log(fun)
        let keys=Object.keys(funs);
        let fun=this.state.fun==""?funs[keys[0]]:funs[this.state.fun]
        let inputs=fun.inputs
        let raw_funs=[]
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
                    <label className="h2">功能:</label>{r_funs}
                </div>
                <div>
                    <span className="label">{fun.label}</span>
                </div>
                <div>
                    <Function inputs={inputs}/>
                </div>
                {privateKey}
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

    constructor() {
        super();
        this.state = {
            contract:""
        };
    }

    onContractChange(e){
        this.setState({contract:e.target.value})
    }

    render() {

        let keys=Object.keys(abis);

        console.log(keys)
        //console.log(keys[0])
        var raw_contracts=[]

        var contract=this.state.contract==""?abis[keys[0]]:abis[this.state.contract]
        keys.forEach(function(key){
            //console.log(fun.name)
                raw_contracts.push(<option value={key} >{abis[key].label}</option>)
        })
        let r_contracts=
            <select onChange={this.onContractChange.bind(this)}>
                {raw_contracts}
            </select>
        return (
            <div>
                <div>
                    <label className="h2">合约:</label> {r_contracts}
                </div>
                <div>
                    <Contract abi={contract} />
                </div>
            </div>
        );
    }
}

let routes = (
    <Route path="/" component={App}/>
);

ReactDOM.render(<Router  history={hashHistory} routes={routes}/>, document.getElementById("content"))