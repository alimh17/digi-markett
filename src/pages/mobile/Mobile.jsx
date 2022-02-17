import React, { useState } from "react";
import { MobileContext } from "./context/moibleContext";
import MobileOrdering from "./mobile-products/components/mobile-ordering/MobileOrdering";
import MobileProducts from "./mobile-products/MobileProducts";
import MobileSidebar from "./mobile-sidebar/MobileSidebar";

const Mobile = () => {
  const [grouping, setGrouping] = useState("پر بازدیدترین");

  const handleGroupin = (value) => {
    setGrouping(value);
  };

  return (
    <div className={`md:mt-32 flex`}>
      <MobileContext.Provider value={{ grouping, setGrouping: handleGroupin }}>
        <MobileSidebar />
        <MobileProducts />
        <MobileOrdering />
      </MobileContext.Provider>
    </div>
  );
};

export default Mobile;
