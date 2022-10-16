import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios';

function App() {
  const [ counter, setCounter ] = useState(0)
  const [ randomUserData, setRandomUserData ] = useState()


  useEffect(() => {
    axios.get(`https://randomuser.me/api`)
    .then((res) => {
      setRandomUserData(JSON.stringify(res.data))
  
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])


  return (
    <div className="main">
      <h1>Counter</h1>
      <h3> {counter} </h3>
      <div className='buttons'>

      <button className="button-decrease" onClick={() => setCounter(counter - 1)}>-</button>
      <button className='button-increase' onClick={() => setCounter(counter + 1)}>+</button>
      </div>

      {randomUserData}
      

    </div>
  );
}

export default App;
