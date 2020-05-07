import React, { useState } from 'react';

const ColorInput = props =>{
    const {color, setColor} = props;
    const [newColor, setNewColor] = useState("");
    const [newColorHeight, setNewColorHeight] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        let newColorSet = [...color, [newColor,newColorHeight+'px']]
        setColor(newColorSet);
        setNewColor("");
        setNewColorHeight("");
    };

    return (
        <form onSubmit = {handleSubmit}>
            <label>Color:</label>
            <input type="text" value={newColor} onChange={(e) => setNewColor(e.target.value)}></input>
            <label>Dimensions:</label>
            <input type="text" value={newColorHeight} onChange={(e) => setNewColorHeight(e.target.value)}></input>
            <button>Add</button>
        </form>
    )
}

export default ColorInput;