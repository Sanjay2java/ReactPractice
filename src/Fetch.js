import React, { useEffect, useState } from "react";

function Fetch() {
  const [data, setData] = useState([]);
  const [userName, setUserName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [website, setWebsite] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((err) => console.log(err));
  }, []);

  function addNewData() {
    // const uname = userName.trim()
    if (userName && phoneNo && website) {
      fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
          name: userName,
          phone: phoneNo,
          website: website,
        }),
      })
        .then((response) => response.json())
        .then((finalResult) => setData([...data, finalResult]));
    }
  }
  return (
    <div>
      <h1>Fetch Api Data</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>User ID</th>
            <th>User Name</th>
            <th>User Phone</th>
            <th>User Website</th>
            <th>Edit User</th>
          </tr>
        </thead>
        <tbody>
          {data.map((res) => {
            return (
              <tr>
                <td>{res.id}</td>
                <td>{res.name}</td>
                <td>{res.phone}</td>
                <td>{res.website}</td>
                <td>
                  <button>Update</button>
                  <button>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div>
        <label>User Name : </label>
        <input
          type="text"
          placeholder="Enter Your Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />{" "}
        <br />
        <label>Phone No</label>
        <input
          type="phone"
          placeholder="Enter Your Phone Number"
          value={phoneNo}
          onChange={(e) => setPhoneNo(e.target.value)}
        />{" "}
        <br />
        <label>Website</label>
        <input
          type="text"
          placeholder="Enter Your Website Name"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />{" "}
        <br />
        <button onClick={addNewData}> Add New Data </button>
      </div>
    </div>
  );
}

export default Fetch;
