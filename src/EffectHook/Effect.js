import React, { useEffect, useState } from "react";

const Effect = () => {
  const [count, setCount] = useState(0);
  // useEffect(callback fn , dependency)
  useEffect(() => {
    console.log("useEffect Working");
  }, []);
  console.log("component Working");

  return (
    <div>
      <h1>useEffect</h1>
      <h2>{count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click
      </button>
    </div>
  );
};

export default Effect;
