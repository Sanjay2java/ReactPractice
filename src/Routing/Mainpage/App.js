import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import { Link, Route, Routes } from "react-router-dom";
import HrContact from "../Subpages/HrContact";
import MyContact from "../Subpages/MyContact";
const App = () => {
  return (
    <div>
      <h1>Hi App</h1>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact> </Contact>}>
          <Route path="hrcontact" element={<HrContact />} />
          <Route path="mycontact" element={<MyContact />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
