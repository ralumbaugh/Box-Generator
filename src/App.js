import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ColorInput from './components/ColorInput'
import ColorDisplay from './components/ColorDisplay'

function App() {
  // const [totalcolors, setTotalcolors] = useState([]);
  const [totalcolors, setTotalcolors] = useState([[]]);
  

  return (
    <div className="App">
      {/* <ColorInput onNewColor={ newColorTime } colors={totalcolors} setColor={setTotalcolors}/> */}
      <ColorInput color={totalcolors} setColor={setTotalcolors}/>
      <ColorDisplay color={totalcolors} setColor={setTotalcolors}/>
    </div>
  );
}

export default App;
