import React, { Component } from 'react';

const navigationStyles = {
    background: "#6fa8dc",
    width: "200px",
    height: "325px",
    display: "inline-block",
    border: "1px solid black",
    marginTop: "20px"
}

class Navigation extends Component {
    render(){
        return(
            <div style={ navigationStyles }>
            </div>
        )
    }
}
export default Navigation;