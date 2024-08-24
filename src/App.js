import React from "react";
import "./App.css";
import CustomerAdd from "./Redux/CustomerAdd";
const App = () => {
  return (
    <div className="app">
      <h1>Redux React Customer</h1>
      <CustomerAdd />
    </div>
  );
};

export default App;
