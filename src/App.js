import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import './style.css';



function App() {

  const [weight, setWeight] = useState(30);
  const [height, setHeight] = useState(120);
  const [ans, setAns] = useState(21);

  function displayWeight(e) {
    setWeight(e.target.value);
  }

  function displayHeight(e) {
    setHeight(e.target.value);
  }

  function calculation(e) {
    // setWeight(e.target.value);
    // setHeight(e.target.value);
    var h = (height * height) / 10000;
    var b = weight / h;
    setAns(b);
  }

  function fun1(e) {
    displayWeight(e);
    calculation(e);
  }

  function fun2(e) {
    displayHeight(e);
    calculation(e);
  }

  return (
    <div className='App'>
      <div className='container'>
        <div className='header'>
          <h2>BMI CALCULATOR</h2>
        </div>
        <div className='info'>
          <label>Weight : {weight}Kg</label><br />
          <input type='range' min='30' max='200' onInput={fun1}></input><br />
          <label>Height : {height}cm</label><br />
          <input type='range' min='120' max='300' onInput={fun2}></input><br />
          <label>Your BMI is : {ans}</label>
        </div>
      </div>
    </div>
  );
}

export default App;
