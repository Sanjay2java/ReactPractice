import React from "react";
import Child from "./Child";
const ParentComponent = (props) => {
  return (
    <div>
      <h1>
        Hi {props.name} my age{props.age} and my num {props.telephone}
      </h1>
      <Child message="Welcome to my page" />
    </div>
  );
};

export default ParentComponent;
