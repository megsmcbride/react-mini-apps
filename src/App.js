import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Calculator from "./components/Calculator";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <h1>Welcome</h1>
      <NavLink to="/calculator">
        <span>Calculator</span>
      </NavLink>
      <NavLink to="/">
        <span>Counter</span>
      </NavLink>

      <Routes>
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/" element={<Counter />} />
      </Routes>
    </div>
  );
}

export default App;
