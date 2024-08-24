import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  function handleClick() {}
  return (
    <div>
      <h1>Form handling</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <input
            type="text"
            placeholder="Enter a name"
            onChange={(e) => e.target.value}
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="Enter a password"
            onChange={(e) => e.target.value}
          />
        </div>

        <div>
          <input onClick={handleClick} type="submit" value="Login" />
        </div>
      </form>
    </div>
  );
};

export default Form;
