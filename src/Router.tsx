import React from "react";
import { Routes, Route } from "react-router-dom";

import { AllProps } from "./types";

import Dog from "./Dog";
import DogList from "./DogList";
import ColorNew from "./ColorNew";
import Color from "./Color";
import ColorList from "./ColorList";

function Router({ dogs, colors, addColor }: AllProps) {
  return (
    <Routes>
      <Route path="dogs/:name" element={<Dog dogs={dogs} />} />
      <Route path="dogs" element={<DogList dogs={dogs} />} />
      <Route
        path="colors/new"
        element={<ColorNew colors={colors} add={addColor as Function} />}
      />
      <Route path="colors/:name" element={<Color colors={colors} />} />
      <Route path="colors" element={<ColorList colors={colors} />} />
    </Routes>
  );
}

export default Router;
