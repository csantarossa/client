import React from "react";
import Navbar from "../components/Navbar";
import Calculator from "../components/Calculator";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScreentimeCalc from "../components/ScreentimeCalc";

const Worthit = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-top items-center">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="worthit" element={<Calculator />} />
          <Route path="screentime" element={<ScreentimeCalc />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Worthit;
