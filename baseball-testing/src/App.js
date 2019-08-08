import React, { useState } from "react";

import "./App.css";
import Dashboard from "./components/Dashboard.js";
import Display from "./components/Display.js";

function App() {
  let [balls, setBalls] = useState(0);
  let [strikes, setStrikes] = useState(0);

  function addBalls() {
    if (balls === 3) {
      setBalls(-1);
    }
    setBalls(balls => balls + 1);
  }

  function addStrikes() {
    if (strikes === 2) {
      setStrikes(-1);
    }
    setStrikes(strikes => strikes + 1);
  }

  function setToZero() {
    setBalls(0);
    setStrikes(0);
  }

  return (
    <div className="App">
      <Display balls={balls} strikes={strikes} />
      <Dashboard
        setToZero={setToZero}
        addBalls={addBalls}
        addStrikes={addStrikes}
      />
    </div>
  );
}

export default App;
