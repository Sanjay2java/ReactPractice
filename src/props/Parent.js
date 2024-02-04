import React from "react";
import Child from "./Child";
const Parent = () => {
  const message = "hello from asus";
  return (
    <div>
      <Child what={message} />
    </div>
  );
};

export default Parent;
