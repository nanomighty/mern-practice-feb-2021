import React from 'react';




const Hellobluered = props => {
    
    const {color, bgColor} = props;

    const style = {
        textAlign: 'center',
        margin: '10px 0px',
        padding: '5px 0px',
        color: color,
        backgroundColor: bgColor
    }

    return (
        <h1 style={style}> The word is: {props.word}</h1>
    )
}
export default Hellobluered;