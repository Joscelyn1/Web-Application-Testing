import React, { useState, useEffect } from "react";

import "./App.css";
import Dashboard from "./components/Dashboard.js";
import Display from "./components/Display.js";

function App() {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);

  function addBalls() {
    setBalls(balls => balls + 1);
  }

  function addStrikes() {
    setStrikes(strikes => strikes + 1);
  }

  return (
    <div className="App">
      <Display
        balls={balls}
        strikes={strikes}
        addBalls={addBalls}
        addStrikes={addStrikes}
      />
      <Dashboard
        balls={balls}
        strikes={strikes}
        addBalls={addBalls}
        addStrikes={addStrikes}
      />
    </div>
  );
}

export default App;
