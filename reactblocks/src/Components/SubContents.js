import React, {Component} from 'react';

const subStyles = {
    background: "#ffd966",
    width: "221px",
    height: "250px",
    display: "inline-block",
    margin: "10px",
    border: "1px solid black"
}

class Subcontent extends Component {
    render(){
        return(
            <div style = { subStyles }>
            </div>
        )
    }
}
export default Subcontent;