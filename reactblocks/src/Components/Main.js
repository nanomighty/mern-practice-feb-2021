import React, { Component } from 'react';

const mainStyles = {
    display: "inline-block",
    verticalAlign: "top",
    background: "#e06666",
    width: "730px",
    margin: "20px 0px 0px 15px",
    padding: "10px",
    border: "1px solid black",
}

class Main extends Component {
    constructor(props){
        super(props);
    }


    render(){
        return(
            <div style = { mainStyles }>
                { this.props.children }
            </div>
        )
    }
}
export default Main;