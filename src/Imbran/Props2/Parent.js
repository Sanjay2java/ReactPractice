import React from "react";
import Child from "./Child";
import Child2 from "./Child2";
import Arr from "./Arr";
const Parent = () => {
  let myName = "Sanjay";
  let person = {
    name: "sanjay",
    age: 20,
    work: "Developer",
  };
  const Studentslists = [
    { id: 1, name: "imbran", class: "react" },
    { id: 2, name: "Sanjay", class: "react" },
    { id: 3, name: "kevin", class: "react" },
    { id: 4, name: "david", class: "react" },
  ];
  return (
    <div>
      <h1>Parent Components Holds data</h1>
      <Child name={myName}></Child>
      <Child2 Person={person}></Child2>
      <Arr Students={Studentslists}></Arr>
    </div>
  );
};

export default Parent;
