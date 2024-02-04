import React, { useState } from "react";
import style from "./style.css";

function DataTable() {
  const [data, setData] = useState([]);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [area, setArea] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [error, setError] = useState("");

  const validateInputs = () => {
    if (!id.trim() || !name.trim() || !area.trim()) {
      setError("All fields are required");
      return false;
    }
    setError("");
    return true;
  };

  const handleAdd = () => {
    if (validateInputs()) {
      setData([...data, { id, name, area }]);
      setId("");
      setName("");
      setArea("");
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    const { id, name, area } = data[index];
    setId(id);
    setName(name);
    setArea(area);
  };

  const handleUpdate = () => {
    if (validateInputs()) {
      const updatedData = [...data];
      updatedData[editIndex] = { id, name, area };
      setData(updatedData);
      setEditIndex(null);
      setId("");
      setName("");
      setArea("");
    }
  };

  const handleDelete = (index) => {
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
  };

  return (
    <div>
      {error && <div className="error">{error}</div>}{" "}
      {/* Use CSS class for error styling */}
      <input
        type="text"
        placeholder="ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Area"
        value={area}
        onChange={(e) => setArea(e.target.value)}
      />
      {editIndex !== null ? (
        <button className="update-btn" onClick={handleUpdate}>
          Update
        </button>
      ) : (
        <button className="add-btn" onClick={handleAdd}>
          Add
        </button>
      )}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Area</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.area}</td>
              <td>
                <button className="edit-btn" onClick={() => handleEdit(index)}>
                  Edit
                </button>{" "}
                {/* Use CSS class for button styling */}
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>{" "}
                {/* Use CSS class for button styling */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
