import React, { useState } from "react";

function App() {
  const [id, setId] = useState("");
  const [data, setData] = useState([]);

  function handleAdd() {
    if (id.trim()) {
      setData([...data, id]);
      // setId("");
    }
  }
  return (
    <div>
      <input
        type="text"
        placeholder="id"
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <table>
        <thead>
          <tr>
            <th>Id</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
