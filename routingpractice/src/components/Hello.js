import React from 'react';

const style = {
    textAlign: 'center'
}

const Hello = props => {
    return (
        <h1 style={style}>The word is: {props.word}</h1>
    )
}
export default Hello;