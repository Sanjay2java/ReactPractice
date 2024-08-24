import React from "react";
import Child from "./Child";
const Parent = () => {
  let MyName = "SANJAY";
  return (
    <div>
      <h1>Parent Component Holds </h1>
      <Child name={MyName}></Child>
    </div>
  );
};

export default Parent;
