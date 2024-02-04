import React, { useState } from "react";

const Todolist = (props) => {
  function handleClick() {}
  return (
    <div onClick={handleClick}>
      <li>{props.text}</li>
    </div>
  );
};

export default Todolist;
