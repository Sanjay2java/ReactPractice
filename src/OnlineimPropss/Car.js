import React from "react";

const Car = ({ myCar }) => {
  // destructure pani vanganum
  const { Sno, Brand, Model } = myCar;
  return (
    <div>
      <h1>Car Component</h1>
      <li>My cars Sno is - {Sno}</li>
      <li>My cars Brand is - {Brand}</li>
      <li>My cars Model is - {Model}</li>
    </div>
  );
};

export default Car;
