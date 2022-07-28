import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Test } from "./containers";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/test" element={<Test />} />
    </Routes>
  );
};

export default App;
