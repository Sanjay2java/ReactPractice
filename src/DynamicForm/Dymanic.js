import React, { useState } from "react";

const Dymanic = () => {
  const [det, setDetails] = useState({
    name: "Sanjay",
    age: 23,
    phone: 8940296781,
    married: false,
    gender: "male",
    country: "India",
    bio: "write about Urself......",
  });
  function handleClick(e) {
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setDetails({ ...det, [name]: value });
  }
  return (
    <div>
      <h1>Dynamic form</h1>
      <table border={2}>
        <tr>
          <td>Name :</td>
          <td>{det.name}</td>
        </tr>
        <tr>
          <td>Age :</td>
          <td>{det.age}</td>
        </tr>
        <tr>
          <td>Phone :</td>
          <td>{det.phone}</td>
        </tr>
        <tr>
          <td>married :</td>
          <td>{det.married ? "Married " : "UnMarried"}</td>
        </tr>
        <tr>
          <td>Gender :</td>
          <td>{det.gender}</td>
        </tr>
        <tr>
          <td>Country :</td>
          <td>{det.country}</td>
        </tr>
        <tr>
          <td>Details :</td>
          <td>{det.bio}</td>
        </tr>
      </table>
      <br />
      <div>
        <form>
          <div>
            <input
              value={det.name}
              type="text"
              name="name"
              placeholder="name"
              onChange={handleClick}
            />
          </div>
          <div>
            <input
              value={det.age}
              type="text"
              name="age"
              placeholder="age"
              onChange={handleClick}
            />
          </div>
          <div>
            <input
              value={det.phone}
              type="number"
              name="phone"
              placeholder="phone"
              onChange={handleClick}
            />
          </div>
          <div>
            <input
              value={det.married}
              type="checkbox"
              onChange={handleClick}
              name="married"
              checked={det.married}
            />{" "}
            married
          </div>
          <div>
            <label>
              <input
                type="radio"
                onChange={handleClick}
                value="male"
                name="gender"
                id="male"
                checked={det.gender == "male"}
              />{" "}
              male
              <input
                type="radio"
                onChange={handleClick}
                value="female"
                name="gender"
                id="female"
                checked={det.gender == "female"}
              />{" "}
              female
            </label>
            <div>
              <select name="country" value={det.country} onChange={handleClick}>
                <option value="india">India</option>
                <option value="Usa">Usa</option>
                <option value="Africa">Africa</option>
                <option value="Russia">Russia</option>
                <option value="France">France</option>
                <option value="Pakisthan">Pakisthan</option>
              </select>
            </div>
            <br />

            <div>
              <textarea
                onChange={handleClick}
                name="bio"
                placeholder="Write about something"
                cols={20}
                rows={5}
                id="bio"
                value={det.bio}
              ></textarea>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Dymanic;
