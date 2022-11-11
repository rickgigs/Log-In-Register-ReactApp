import React, { useState} from 'react';

import reactLogo from './assets/react.svg'
import './App.css'
import {Login} from "./Login";
import {Register} from "./Register";

function App() {

  const [count, setCount] = useState(0)
  const [currentForm, setCurrentForm] = useState ('Login');
  const toggleForm = (formName) => {
    setCurrentForm (formName);
  }

  return (
    <div className="App">
     {
      currentForm === "Login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
     }
    </div>
  )
}

export default App
