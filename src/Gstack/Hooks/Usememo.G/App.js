import React, { useMemo, useState } from "react";

const App = () => {
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);

  function cubeNum(num) {
    console.log("calculation done!");
    return Math.pow(num, 3);
  }
  const result = useMemo(() => cubeNum(number), [number]);
  return (
    <div>
      <h1>UseMemo returns a memoized value </h1>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      ></input>
      <h1>your cube value is : {result}</h1>
      <button
        onClick={() => {
          setCounter((counter) => counter + 1);
        }}
      >
        Counter++
      </button>
      <h2>your counter value is : {counter}</h2>
    </div>
  );
};

export default App;
