
import React ,{ useState } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Textforms from './components/Textforms';
import Alert from './components/Alert';




function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type : type
    })
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("dark mode is enabled")

    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode is enabled")
    }
  }
  return (
    <>
    
    <Navbar title = "textutils" mode = {mode} toggleMode={toggleMode}/>
    <Alert alert = {alert}/>
    <div className="container">
      
          <Textforms heading ="enter the text"/>
         
    
    
    </div>
   
    </>
  );
}

export default App;
