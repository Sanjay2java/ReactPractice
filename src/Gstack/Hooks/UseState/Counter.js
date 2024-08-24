import React, { useState } from "react";

function Counter() {
  //   let name = "sanjay";
  const [name, setName] = useState(["sanjay"]);
  const [count, setCount] = useState(10);
  return (
    <>
      <h2>Counter Component</h2>
      <h2>
        My name is<h1>{name}</h1>
      </h2>
      <button
        onClick={() => {
          setName("Naveen");
        }}
      >
        Change name
      </button>

      <h2>Count value is {count}</h2>
      <button
        onClick={() => {
          setCount(count + 10);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount(count - 10);
        }}
      >
        Decrement
      </button>
    </>
  );
}
export default Counter;
