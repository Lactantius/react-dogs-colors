import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

import { ColorData, AllProps } from "./types";

import Router from "./Router";

function App({ dogs, colors }: AllProps) {
  const [colorList, setColorList] = useState(colors);
  const addColor = (color: ColorData) =>
    setColorList((list) => [color, ...list]);

  return (
    <BrowserRouter>
      <Router dogs={dogs} colors={colorList} addColor={addColor} />
    </BrowserRouter>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: "whiskey.jpg",
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!",
      ],
    },
    {
      name: "Duke",
      age: 3,
      src: "duke.jpg",
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs.",
      ],
    },
    {
      name: "Perry",
      age: 4,
      src: "perry.jpg",
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain.",
      ],
    },
    {
      name: "Tubby",
      age: 4,
      src: "tubby.jpg",
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore.",
      ],
    },
  ],
  colors: [
    {
      name: "red",
      code: "#ff0000",
    },
    {
      name: "green",
      code: "#00ff00",
    },
    {
      name: "blue",
      code: "#0000ff",
    },
  ],
};

export default App;
