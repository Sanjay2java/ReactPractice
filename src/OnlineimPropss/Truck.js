import React from "react";

const Truck = ({ TruckList }) => {
  return (
    <div>
      <h1>Truck Component</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>S no</th>
            <th>Brand</th>
            <th>Model</th>
          </tr>
        </thead>
        <tbody>
          {TruckList.map((data) => {
            return (
              <tr>
                <td>{data.Sno}</td>
                <td>{data.Brand}</td>
                <td>{data.Model}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Truck;
