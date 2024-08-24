import React, { useRef } from "react";

const App = () => {
  const inp = useRef("");
  const pass = useRef("");

  const chg = () => {
    if (inp.current.value === "") {
      window.alert("enter name");
    } else if (pass.current.value === "" || pass.current.value === null) {
      window.alert("enter Pass");
    } else {
      window.alert("Success");
    }
  };

  return (
    <div>
      <h1>Login page</h1>
      <label>Enter a name:</label>
      <input ref={inp} placeholder="name" />
      <br />
      <br />
      <label>Enter a password:</label>
      <input ref={pass} placeholder="password" />
      <button onClick={chg}>Click</button>
    </div>
  );
};

export default App;
