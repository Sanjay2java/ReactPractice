import React from "react";
import { Link, Outlet } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <h1>My Details</h1>
      <li>
        <Link to="mycontact">MyContact</Link>
      </li>
      <li>
        <Link to="hrcontact">HrContact</Link>
      </li>
      <Outlet />
    </div>
  );
};

export default Contact;
