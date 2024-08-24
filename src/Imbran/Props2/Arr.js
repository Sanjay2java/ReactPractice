import React from "react";

const Arr = ({ Students }) => {
  return (
    <div>
      <h1>Array Component</h1>
      <table border={3}>
        <thead>
          <tr>
            <th>S No</th>
            <th>Student Name</th>
            <th>Class</th>
          </tr>
        </thead>
        <tbody>
          {Students.map((student) => {
            return (
              <tr>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.class}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Arr;
