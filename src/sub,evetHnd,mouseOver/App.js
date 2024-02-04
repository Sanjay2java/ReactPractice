import React, { useState } from "react";
import style from "./style.css";

function App() {
  const [name, setName] = useState("");
  const [headingTxt, setHeading] = useState("");
  function ip(event) {
    setName(event.target.value);
  }
  function handleClick(event) {
    setHeading(name);
    event.preventDefault();
  }
  return (
    <div className="container">
      <h1>Hello {headingTxt}</h1>
      <form onClick={handleClick}>
        <input onChange={ip} type="text" placeholder="What is your name ?" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
