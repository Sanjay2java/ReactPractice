import React, { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []);
  return (
    <div>
      <h1>Welcome to Use Effect</h1>
      <h2>
        to perform side effects in your functional Component , such as fetching
        data,subscribing to external events or manually changing the dom
      </h2>
      <h2>Your Count is render {count} times...</h2>
    </div>
  );
};

export default App;
