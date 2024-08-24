import React, { useState } from "react";
import CustomerShow from "./CustomerShow";
const CustomerAdd = () => {
  const [input, setInput] = useState("");
  const [customers, setCustomers] = useState([]);
  function addCustomer() {
    if (input) {
      setCustomers((previousState) => [...previousState, input]);
      setInput("");
      //console.log(customers);
    }
  }
  return (
    <div>
      <h3>Add New Customer</h3>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        placeholder="Enter a name"
      />
      <button onClick={addCustomer}>Add</button>
      <CustomerShow customers={customers} />
    </div>
  );
};

export default CustomerAdd;
