import React, { useState } from "react";

const Counter = () => {
  const [name, setName] = useState("SANJAY");
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Counter Component</h1>
      <h2>My name is{name} </h2>
      <button
        onClick={() => {
          setName("THE REAL HERO");
        }}
      >
        change Name
      </button>
      <h2>Count value is : {count}</h2>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increase +
      </button>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Decrease-
      </button>
    </div>
  );
};

export default Counter;
