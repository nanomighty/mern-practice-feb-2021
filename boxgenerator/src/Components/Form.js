import React, {useState} from 'react'

const Form = ({setBox, box}) => {
    const [color, setColor] = useState("");

    const onChange = (e) => {
        (e) => setColor(e.target.value);
    }

    const handleAdd = () => {
        setBox({
            ...box,
            colors: [...box.colors , color] 
        });
        setColor("");
    };
    
    return (
        <div class="input-group mb-3">
            <input 
                onChange = {onChange}
                type="text"
                class="form-control"
                name="color"
                value={color}
            />
            <div class="input-group-append">
                <button onClick={handleAdd} class="btn btn-primary">
                    Add
                </button>
            </div>
        </div>
    );
};
export default Form;
