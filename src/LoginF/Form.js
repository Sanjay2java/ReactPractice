import React, { useEffect, useState } from "react";
import Validation from "./Validation";

const Form = () => {
  const [values, setValues] = useState({
    name: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  function handleSubmit(e) {
    e.preventDefault();
    Validation(values);

    setErrors(Validation(values));
  }
  useEffect(() => {
    if (
      Object.keys(errors).length === 0 &&
      values.name !== "" &&
      values.password !== ""
    )
      alert("Form Submitted");
  }, [setValues]);
  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <h1>Login Form Validation</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Enter a Name : </label>
          <input
            type="text"
            name="name"
            value={values.name}
            placeholder="Enter a name"
            onChange={handleChange}
          />
          {
            <p style={{ color: "red", fontFamily: "sans-serif" }}>
              {errors.name}
            </p>
          }
        </div>

        <div>
          <label>Enter a Password : </label>
          <input
            type="password"
            name="password"
            value={values.password}
            placeholder="Enter a password"
            onChange={handleChange}
          />
          {
            <p style={{ color: "red", fontFamily: "sans-serif" }}>
              {errors.password}
            </p>
          }
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;
