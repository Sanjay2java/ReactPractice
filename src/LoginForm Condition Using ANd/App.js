import React from "react";
import style from "./style.css";
import Login from "./Login";

var login = true;

function App() {
  return (
    <div className="container">
      <Login isRegister={login} />
    </div>
  );
}
export default App;
