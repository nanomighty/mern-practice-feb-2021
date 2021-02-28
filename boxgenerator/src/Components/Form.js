import React, {useState} from 'react'

const Form = (props) => {
    const [color, setColor] = useState("");
    const [box, setBox] = useState({
        colors: [],
    })

    const handleAdd = (e) => {
        e.preventDefault();
        setBox({
            ...box,
            colors: [...box.colors , color] 
        });
        setColor("");
    }
    
    return (
        <div>
            <label htmlFor="clr">Color</label>
            <input type="text" name="clr" id="clr" value = { color } onChange = { 
                (e) => setColor(e.target.value)}>
                </input>
            <button onClick={ handleAdd }>Add</button>
            <div>
                {
                    box.colors.map((color) => {
                    return <div className='generatedBox' style={{ backgroundColor: color}}> </div>
                    })
                }
            </div>
        </div>


    );
};
export default Form;
