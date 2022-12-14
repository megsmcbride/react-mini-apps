import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Counter() {
  const [counter, setCounter] = useState(0);
  const [randomUserData, setRandomUserData] = useState();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    axios
      .get(`https://randomuser.me/api`)
      .then((res) => {
        setRandomUserData(res.data.results);
        setUserName(
          res.data.results[0].name.first + " " + res.data.results[0].name.last
        );
        console.log("----", res.data.results[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="main">
      <h1>Counter</h1>
      <h3> {counter} </h3>
      <div className="buttons">
        <button
          className="button-decrease"
          onClick={() => setCounter(counter - 1)}
        >
          -
        </button>
        <button
          className="button-increase"
          onClick={() => setCounter(counter + 1)}
        >
          +
        </button>
      </div>
      {userName}
    </div>
  );
}

export default Counter;
