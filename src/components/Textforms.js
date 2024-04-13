import React, { useState } from 'react';

export default function Textforms(props) {
  const handleupclick = () => {
    console.log("uppercase was click" + text);
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleLoclick = () => {
    console.log("uppercase was click" + text);
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleclClearick = () => {
    console.log("uppercase was click" + text);
    let newText = " ";
    setText(newText);
  }
  

  const handleOnChange = (event) => { 
    console.log("textarea value changed");
    setText(event.target.value); 
  }

  


  const [text, setText] = useState(" ");
  
  return (
    <>
    <div className="container" style={{Color : props.mode === 'dark' ? 'white' : 'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} id="myBox" onChange={handleOnChange} style={{backgroundColor : props.mode === 'blue' ? 'grey' : 'white'}}  rows="8"></textarea>
        <button className='btn btn-primary my-4' onClick={handleupclick}>Convert to Uppercase</button>
        
        <button className='btn btn-primary me-2 ' onClick={handleLoclick}>Convert to Uppercase</button>
        <button className='btn btn-primary me-2 ' onClick={handleclClearick}>Clear</button>

        
      </div>
    </div>
    <div className='container my-2'>
        <h1>your text summmary</h1>
        <p>{text.split(" ").length} words and {text.length} character</p>
    </div>
    </>
  );
}
