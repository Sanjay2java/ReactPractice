import React, { useState } from "react";
import style from "./style.css";
function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });

  function updateFullName(event) {
    const newValue = event.target.value;
    const inputValue = event.target.name;

    setFullName((prevValue) => {
      if (inputValue === "fName") {
        return {
          fName: newValue,
          lName: prevValue.lName,
        };
      } else if (inputValue === "lName") {
        return {
          fName: prevValue.fName,
          lName: newValue,
        };
      }
    });
  }
  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          onChange={updateFullName}
          placeholder="First Name"
        />
        <input name="lName" onChange={updateFullName} placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
