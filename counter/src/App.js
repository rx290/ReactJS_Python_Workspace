import React, { useState } from 'react';
import './App.css';

function App() {
  // Getter ,setter
  const [counter,setCounter] = useState(0);
  return (
    <div className='App'>
      {/* Defining a call back function to call getter and setters */}
      <button onClick={()=> {setCounter((prevCounter)=>prevCounter-1)}} >-</button>
      <h1>{counter}</h1>
      <button onClick={()=> {setCounter((prevCounter)=>prevCounter+1)}} >+</button>
    </div>
  );
}

export default App;
