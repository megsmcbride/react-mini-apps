import './App.css';
import { useState } from 'react'

function App() {
  const [ counter, setCounter ] = useState(0)



  return (
    <div className="main">
      <h1>Counter</h1>
      <h3> {counter} </h3>
      <div className='buttons'>

      <button className="button-decrease" onClick={() => setCounter(counter - 1)}>-</button>
      <button className='button-increase' onClick={() => setCounter(counter + 1)}>+</button>
      </div>
      

    </div>
  );
}

export default App;
