import React from "react";

import Bike from "./Bike";
import Car from "./Car";
import Truck from "./Truck";
const App = () => {
  let BikeCompany = "BMW";
  const myCar = { Sno: 1, Brand: "Audi", Model: "v3" };
  const TruckList = [
    { Sno: 1, Brand: "Audi", Model: "v3" },
    { Sno: 2, Brand: "Polo", Model: "v3" },
    { Sno: 3, Brand: "Swift", Model: "v3" },
    { Sno: 3, Brand: "Benz", Model: "v3" },
    { Sno: 4, Brand: "Ferrari", Model: "v3" },
  ];
  return (
    <div>
      <h1>App Component</h1>
      <Bike bike={BikeCompany} />
      <hr></hr>
      <Car myCar={myCar} />
      <Truck TruckList={TruckList} />
    </div>
  );
};

export default App;
