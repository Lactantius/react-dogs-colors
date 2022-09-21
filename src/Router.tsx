import React from "react";
import { Routes, Route } from "react-router-dom";

import Dog from "./Dog";
import Color from "./Color";

function Router() {
  return (
    <Routes>
      <Route path="dogs/:name" element={<Dog />} />
      <Route path="dogs" />
      <Route path="colors/:color" element={<Color />} />
      <Route path="colors" />
    </Routes>
  );
}

export default Router;
