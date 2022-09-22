import React from "react";
import { Link, useParams } from "react-router-dom";

import { ColorProps } from "./types";

function Color({ colors }: ColorProps) {
  const { name } = useParams();
  const color = colors.filter((c) => c.name === name)[0];
  console.log(color);
  const divColor = { backgroundColor: color.code };
  return (
    <div className="Color" style={divColor}>
      This color is called {color.name}.
    </div>
  );
}

export default Color;
