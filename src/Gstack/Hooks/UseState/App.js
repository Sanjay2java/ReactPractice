// import { Button } from "bootstrap";
import React from "react";
import WordsChange from "./WordsChange";
// import Counter from "./Counter";
function App() {
  // const [car, setCar] = useState({
  //   brand: "Ferrari",
  //   color: "yellow",
  //   year: "2023",
  // });
  // function changeColor() {
  //   setCar((prev) => {
  //     return {
  //       ...prev,
  //       color: "Magenta",
  //     };
  //   });
  // }

  // const [count, setCount] = useState(0);
  return (
    <div>
      <WordsChange />

      {/* <h1>Welcome to Hooks</h1> */}
      {/* <h1>My Car model is {car.brand}</h1>
      <h2>
        It is a {car.color} rome from {car.year}
      </h2>
      <button onClick={changeColor}>Change</button> */}
      {/* <Counter></Counter> */}
      {/* <h1>Count : {count}</h1>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
          setCount((prev) => prev + 1);
        }}
      >
        Increase count
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease Count
      </button> */}
    </div>
  );
}

export default App;
