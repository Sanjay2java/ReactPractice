import React from "react";
import Input from "./Input";

const Login = (props) => {
  return (
    <form className="form">
      <Input type="text" placeholder="username" />
      <Input type="password" placeholder="password" />
      {props.isRegister === false && (
        <Input type="password" placeholder="confirm-password" />
      )}

      <button type="submit">{props.isRegister ? "login" : "register"}</button>
    </form>
  );
};

export default Login;
