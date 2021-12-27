import React from "react";
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import HomePage from "./components/HomePage";
import DashBoard from "./components/DashBoard";
import Earnings from "./components/Earnings";
import Sets from "./components/Sets";
import Necklace from "./components/Necklace";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/add" element={<Add />} />
        <Route path="/earnings" element={<Earnings />} />
        <Route path="/sets" element={<Sets />} />
        <Route path="/necklace" element={<Necklace />} />
      </Routes>
    </div>
  );
};

export default App;
