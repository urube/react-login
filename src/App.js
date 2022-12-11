import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Login } from './component/loginform';
import { Register } from './component/registerform';

function App() {
  const [currentForm, setCurrentForm] = useState('login')

  const toggleForm = (formName) => { //set current form to name that has been given
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      { // Ternary statment to check if current form is login or not
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default App;
