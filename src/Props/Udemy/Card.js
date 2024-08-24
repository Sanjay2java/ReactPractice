import React from "react";

const Card = (props) => {
  return (
    <div>
      <h1>name : {props.name}</h1>
      <h2>age : {props.age}</h2>
      <h3>mob : {props.mobile}</h3>
      <br></br>
    </div>
  );
};

export default Card;
