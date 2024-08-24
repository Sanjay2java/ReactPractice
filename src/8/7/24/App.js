import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [details, setDetails] = useState({
    name: "sanjay",
    age: 22,
    role: "developer",
  });
  function nameChange() {
    setDetails((prev) => {
      return { ...prev, name: "Raguraam" };
    });
  }
  function handleCount() {
    for (let i = 0; i < 5; i++) {
      return setCount((prevState) => prevState + 1);
    }
  }
  return (
    <div>
      <h1>Hi App</h1>
      <h1>count is : {count}</h1>
      <button onClick={handleCount}>increase</button>
      <h1>Myname is {details.name}</h1>
      <h1>My age is {details.age}</h1>
      <h1>My ROLE is {details.role}</h1>
      <button onClick={nameChange}>Change</button>
    </div>
  );
};

export default App;
