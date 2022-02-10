import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayouts from "./layouts/MainLayouts.jsx";

import Home from "./pages/home/Home.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <MainLayouts>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route index element={<Home />}></Route>
        </Routes>
      </MainLayouts>
    </BrowserRouter>
  );
};

export default App;
