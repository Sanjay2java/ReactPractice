import React from "react";

const CustomerShow = ({ customers }) => {
  return (
    <div>
      <h3>Customer Names</h3>
      <ul style={{ listStyle: "none" }}>
        {customers.map((data) => {
          return <li>{data}</li>;
        })}
      </ul>
    </div>
  );
};

export default CustomerShow;
