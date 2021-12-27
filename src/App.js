import React from "react";
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import HomePage from "./components/HomePage";
import DashBoard from "./components/DashBoard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/add" element={<Add />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
