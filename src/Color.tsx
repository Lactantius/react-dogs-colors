import React from "react";
import { Link, useParams, Navigate } from "react-router-dom";

import { ColorProps } from "./types";

function Color({ colors }: ColorProps) {
  const { name } = useParams();
  const color = colors.filter((c) => c.name === name)[0];

  if (!color) return <Navigate to="/colors" />;

  const divColor = { backgroundColor: color.code };
  return (
    <div className="Color" style={divColor}>
      Here is some {color.name} for you.
      <Link to="/colors">All Colors</Link>
      <Link to="/colors/new">Add a new color</Link>
    </div>
  );
}

export default Color;
