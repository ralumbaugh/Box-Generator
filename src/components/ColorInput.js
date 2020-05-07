import React, { useState } from 'react';

const ColorInput = props =>{
    const {color, setColor} = props;
    const [newColor, setNewColor] = useState("");
    const [newColorHeight, setNewColorHeight] = useState("");
    const [colorError, setColorError] = useState("");
    const [numberError, setNumberError] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(colorError == "" && numberError == ""){
            let newColorSet = [...color, [newColor,newColorHeight+'px']]
            setColor(newColorSet);
            setNewColor("");
            setNewColorHeight("");
        }
    };

    const handleColor = (e) =>{
        setNewColor(e.target.value);
        let style = new Option().style;
        style.color = e.target.value;
        if(style.color == ""){
            setColorError("Please select a valid color");
        }
        else{
            console.log(style.color)
            setColorError("");
        }
        console.log(colorError);
    }

    const handleNumber = (e) =>{
        setNewColorHeight(e.target.value);
        if(e.target.value <= 0 || e.target.value>1500){
            setNumberError("Please input a number between 1 and 1500")
        }
        else if(isNaN(e.target.value)){
            setNumberError("Please input a number")
        }
        else{
            setNumberError("")
        }
    }

    return (
        <form onSubmit = {handleSubmit}>
            <div>
            <label>Color:</label>
            {/* <input type="text" value={newColor} onChange={(e) => setNewColor(e.target.value)}></input> */}
            <input type="text" value={newColor} onChange={handleColor}></input>
            <label>Dimensions:</label>
            {/* <input type="text" value={newColorHeight} onChange={(e) => setNewColorHeight(e.target.value)}></input> */}
            <input type="text" value={newColorHeight} onChange={handleNumber}></input>
            <button>Add</button>
            </div>
                {
                    colorError != "" ?
                    <p style={{color:'red'}}>{colorError}</p>:
                    ''
                }
                {
                    numberError != "" ?
                    <p style={{color:'red'}}>{numberError}</p>:
                    ''
                }
        </form>
    )
}

export default ColorInput;