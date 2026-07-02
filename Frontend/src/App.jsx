import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./Pages/Dashboard";
import Journey from "./Pages/Journey";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/journey" element={<Journey />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
