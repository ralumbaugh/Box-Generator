import React, { useState } from 'react';
import './ColorDisplay.css';



const ColorDisplay = props =>{
    const{color, setColor} = props;

    return(
        <div className="color-box">
            {
            color.map((color, i) => <div key={i} style={{backgroundColor:color[0], width: color[1], height: color[1]}}></div>)
            }
        </div>
    )
}

export default ColorDisplay;