import React from "react";

const Child2 = ({ Person }) => {
  const { name, age, work } = Person;
  return (
    <div>
      <h1>Child2 Component</h1>
      <li>{name}</li>
      <li>{age}</li>
      <li>{work}</li>
    </div>
  );
};

export default Child2;
