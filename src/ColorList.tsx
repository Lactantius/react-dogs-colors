import React from "react";
import { Link } from "react-router-dom";

import "./ColorList.css";

import { ColorProps } from "./types";

function ColorList({ colors }: ColorProps): JSX.Element {
  return (
    <div className="ColorList">
      <h2>All Colors</h2>
      <ul>
        {colors.map((color) => (
          <li key={color.code}>
            <Link to={color.name}>{color.name.toUpperCase()}</Link>
          </li>
        ))}
      </ul>
      <Link to="/colors/new">Add a new color</Link>
    </div>
  );
}

export default ColorList;
