import React from "react";
import { NavLink } from "react-router-dom";

import "./NavBar.css";

function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink to="/" className="NavBar-title">
        Dogs & Colors
      </NavLink>
      <ul>
        <li>
          <NavLink to="/dogs">Dogs</NavLink>
        </li>
        <li>
          <NavLink to="/colors">Colors</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
