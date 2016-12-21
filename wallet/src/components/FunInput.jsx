import React from "react";
require("./../../css/app.css");

class FunInput extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            value:"",
            state:this.props.label
        };
    }
    onInputChange(e){
        this.setState({value: e.target.value});
    }
    render() {
        var label=this.state.label

        return (
            <div >
                <div>
                    <label className="label"> {label}</label>
                </div>
                <div>
                    <input type="text" className="input " value={this.state.value} onChange={this.onInputChange.bind(this)}/>
                </div>

            </div>
        )
    }

}

export default FunInput