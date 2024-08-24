import React, { useState } from "react";

const WordsChange = () => {
  const [tense, setTense] = useState("was");
  const [action, setAction] = useState("buy");
  const [whatBuy, setwhatBuy] = useState("bike");
  console.log("Component renderd");
  return (
    <div>
      <h1>
        I {tense} {action} a {whatBuy}
      </h1>
      <button
        onClick={() => {
          setTense(" Will");
          setAction("Buy");
          setwhatBuy("Car");
        }}
      >
        inFuture
      </button>
    </div>
  );
};

export default WordsChange;
