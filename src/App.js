import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Result, Test, Test2 } from "./containers";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/test" element={<Test />} />
      <Route exact path="/test2" element={<Test2 />} />
      <Route exact path="/result" element={<Result />} />
    </Routes>
  );
};

export default App;
