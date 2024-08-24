import React from "react";

const Child = (props) => {
  return (
    <div>
      <h2>Child Component</h2>
      <h2>My name is {props.name}</h2>
    </div>
  );
};

export default Child;
