
import './App.css';
import {useState} from "react";

function App() {

  let [count, setCount]= useState(0);

  function increaseHandler()
  {
    setCount(count+1);
  }

  function decreaseHandler()
  {
    setCount(count-1);
  }

  function resetHandler()
  {
    setCount(0);
  }

  return (
    <div className="App">

      <h1>Counter App</h1>
      
      
<div className="box">
      <button  className="btn" onClick={decreaseHandler}>-</button>

         <div className="show">{count}</div>

      <button className="btn" onClick={increaseHandler}>+</button>
      </div>

      <div><button className='btn2' onClick={resetHandler}>Reset</button></div>
      
    </div>
  );
}

export default App;
