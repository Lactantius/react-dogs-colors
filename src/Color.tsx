import React from "react";
import { Link, useParams, Navigate } from "react-router-dom";

import "./Color.css";

import { ColorProps } from "./types";

function Color({ colors }: ColorProps) {
  const { name } = useParams();
  const color = colors.filter((c) => c.name === name)[0];

  if (!color) return <Navigate to="/colors" />;

  const selectedColor = { backgroundColor: color.code };
  return (
    <div className="Color">
      <h2 style={{ color: color.code }}>{color.name.toUpperCase()}</h2>
      <div style={selectedColor}>Here is some {color.name} for you.</div>
      <Link to="/colors">All Colors</Link>
      <Link to="/colors/new">Add a new color</Link>
    </div>
  );
}

export default Color;
