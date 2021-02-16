import React, { Component } from 'react';

const headerStyles = {
    background: "#6aa84f",
    height: "100px",
    border: "1px solid black"
}


class Header extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div style = { headerStyles }>
            </div>
        )
    }
}
export default Header;