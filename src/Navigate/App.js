import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const App = () => {
  const [name, SetName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function handleSubmit() {
    alert("component going to change");
    navigate("/Homes");
  }
  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={handleSubmit}>
        <label>Enter your name :</label>
        <input
          type="text"
          placeholder="enter name"
          value={name}
          onChange={(e) => {
            SetName(e.target.value);
          }}
        />
        <br />
        <label>Enter Your password:</label>
        <input
          type="password"
          placeholder="enter a password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={handleSubmit}>Sign in</button>
      </form>
    </div>
  );
};

export default App;
