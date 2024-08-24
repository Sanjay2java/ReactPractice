import React, { useState } from "react";
import Validationn from "./Validationn";

const FormPct = () => {
  const [data, setData] = useState({
    name: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  function handleSubmit(e) {
    e.preventDefault();
    Validationn(data);
    setErrors(Validationn(data));
  }
  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  return (
    <div>
      <h1>Form Valid</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            value={data.name}
            onChange={handleChange}
            placeholder="enter name"
          />
          {
            <p style={{ color: "red", fontFamily: "sans-serif" }}>
              {errors.name}
            </p>
          }
          <input
            onChange={handleChange}
            value={data.password}
            placeholder="enter password"
          />
          {
            <p style={{ color: "red", fontFamily: "sans-serif" }}>
              {errors.password}
            </p>
          }
          <div>
            <input type="submit" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormPct;
