import React from "react";
import { Routes, Route } from "react-router-dom";

import Dog from "./Dog";
import DogList from "./DogList";
import Color from "./Color";
import ColorList from "./ColorList";

function Router() {
  return (
    <Routes>
      <Route path="dogs/:name" element={<Dog />} />
      <Route path="dogs" element={<DogList />} />
      <Route path="colors/:color" element={<Color />} />
      <Route path="colors" element={<ColorList />} />
    </Routes>
  );
}

export default Router;
