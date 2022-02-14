import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayouts from "./layouts/MainLayouts.jsx";

import Home from "./pages/home/Home.jsx";
import MobileProduct from "./pages/products/mobile-product/MobileProduct";
import Mobile from "./pages/mobile/Mobile.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <MainLayouts>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route index element={<Home />}></Route>
          <Route path="/mobile" element={<Mobile />}></Route>
          <Route path="/mobile/:id" element={<MobileProduct />}></Route>
        </Routes>
      </MainLayouts>
    </BrowserRouter>
  );
};

export default App;
