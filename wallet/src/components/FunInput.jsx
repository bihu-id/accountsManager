import React from "react";
require("./../../css/app.css");

class FunInput extends React.Component{

    constructor() {
        super();
        this.state = {
            value:""
        };
    }
    onInputChange(e){
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
                    <input type="text" className="input " value="" onChange={this.onInputChange.bind(this)}/>
                </div>

            </div>
        )
    }

}

export default FunInput