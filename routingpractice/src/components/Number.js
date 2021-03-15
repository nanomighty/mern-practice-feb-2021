import React from 'react';

const style = {
    textAlign: 'center'
}

const Number = props => {
    return (
        <h1 style={style}>The number is {props.number} </h1>
    )
}
export default Number;