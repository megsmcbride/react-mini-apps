import "./App.css";
import "./style/Counter.css"
import "./style/Calculator.css"

import { Routes, Route, NavLink } from "react-router-dom";
import Calculator from "./components/Calculator";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <h1>Welcome</h1>
      <div className="nav-bar">

      <NavLink to="/calculator">
        <button className="nav-button">Calculator</button>
      </NavLink>
      <NavLink  to="/">
        <button className="nav-button">Counter</button>
      </NavLink>
      </div>

      <Routes>
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/" element={<Counter />} />
      </Routes>
    </div>
  );
}

export default App;
