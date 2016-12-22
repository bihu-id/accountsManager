import React from "react";
require("./../../css/app.css");

class Output extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            label:this.props.label,
            value:this.props.value,
            type:this.props.type
        };
    }
    setw(str, len){
        var oldLen=str.length
        if(str.length<len){
            for(var i=0;i<(len-oldLen);i++){
                str+=" ";
            }
        }
        return str
    }
    render() {
        var label=(this.state.label+":"
        
        return (
            <div >
                <div>
                    <label className="label"> {label}</label>
                </div>
                <div>
                    <input type="text" id={this.props.id} className="input " value={this.state.value} onChange={this.onInputChange.bind(this)}/>
                </div>

            </div>
        )
    }

}

class Outputs extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            value:""
        };
    }
    onInputChange(e,){
        this.setState({value: e.target.value});
    }
    render() {
        var label=this.props.label

        return (
            <div >
                <div>
                    <label className="label"> {label}</label>
                </div>
                <div>
                    <input type="text" id={this.props.id} className="input " value={this.state.value} onChange={this.onInputChange.bind(this)}/>
                </div>

            </div>
        )
    }

}

export default Outputs