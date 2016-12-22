import React from "react";

require("./../../css/app.css");
var coder = require('web3/lib/solidity/coder');

class Output extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            //abl:this.props.abl,
            //label:this.props.label,
            //value:this.props.value,

        };
    }
    setw(str, len) {
        var res=str
        var oldLen = str.length
        if (res.length < len) {
            for (var i = 0; i < (len - oldLen); i++) {
                res += " ";
            }
        }
        return res
    }
    render() {

        var {label,abl,value}=this.props

        label=label+":"
        console.log("output \n ","label:",label,"abl:",abl,"value:",value)

        var r_output
        if(value instanceof Array){
            var res="";
            var haveSelect=(abl["select"]!=undefined)

            var maxLabelLen=0;
            for(var i=0;i<value.length;i++) {
                var noStr = i.toString()
                if (haveSelect){
                    noStr =abl["select"][i]
                    //if(maxLabelLen<noStr.length)
                     //   maxLabelLen=noStr.length

                }
                res = res + noStr + ": " + value[i].toString()+"\n"
            }
            r_output=
                <textarea
                    rows={value.length} cols="100"
                    value={res}
                />

        }
        else if(abl["select"]!=undefined )
                if(Object.keys(abl["select"]).length!=0){
                    r_output= <span>{abl["select"][value.toString()]}</span>
        }
        else
            r_output=<span>{value.toString()}</span>


        return (
            <div >
                <div>
                    <label className="label"> {label}</label>
                    {r_output}
                </div>

            </div>)
    }

}

class Outputs extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            //outputs:this.props.ablOutputs,
            //bytes:this.props.bytes
        };
    }

    render() {

        var {types,bytes}=this.props
        bytes = bytes.length >= 2 ? bytes.slice(2) : bytes;
        var results=coder.decodeParams(types,bytes)
        var outputsAbl=this.props.ablOutputs
        var r_output=[]
        var keys=Object.keys(outputsAbl)
        for(var i=0;i<results.length;i++){
            r_output.push(<Output abl={outputsAbl[keys[i]]} label={outputsAbl[keys[i]].label}  value={results[i]} />)
        }
        console.log("outputs \n ","types:",types,"results:",results)
        return (
            <div >
                <div>
                    <label className="label"> 结果:</label>
                </div>
                <div>
                    {r_output}
                </div>

            </div>
        )
    }

}

export default Outputs