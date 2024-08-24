import React from "react";

const Bike = (props) => {
  return (
    <div>
      <h1>Bike Component</h1>
      <h2>MyBike Brand is {props.bike}</h2>
    </div>
  );
};

export default Bike;
