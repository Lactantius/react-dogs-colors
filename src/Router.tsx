import React from "react";
import { Routes, Route } from "react-router-dom";

import { DogData, DogProps } from "./types";

import Dog from "./Dog";
import DogList from "./DogList";
import Color from "./Color";
import ColorList from "./ColorList";

function Router({ dogs }: DogProps) {
  return (
    <Routes>
      <Route path="dogs/:name" element={<Dog dogs={dogs} />} />
      <Route path="dogs" element={<DogList dogs={dogs} />} />
      <Route path="colors/:color" element={<Color />} />
      <Route path="colors" element={<ColorList />} />
    </Routes>
  );
}

export default Router;
