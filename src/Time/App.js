import React, { useState } from "react";

function App() {
  setInterval(gt, 1000);
  const date = new Date();
  var yr = date.toLocaleTimeString();
  var [time, setTime] = useState(yr);
  function gt() {
    const date = new Date();
    const yr = date.toLocaleTimeString();
    setTime(yr);
  }
  return (
    <div>
      <h1>{time}</h1>
      <button onClick={gt}>Get time</button>
    </div>
  );
}
export default App;
