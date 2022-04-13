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
    <div className={`md:mt-32 flex flex-col w-full`}>
      <div className="w-full px-10 text-xl">
        <h3 className=" my-4">دیجی مارکت / موبایل</h3>
      </div>
      <div className="w-full flex">
        <MobileContext.Provider
          value={{ grouping, setGrouping: handleGroupin }}
        >
          <MobileSidebar />
          <MobileProducts />
          <MobileOrdering />
        </MobileContext.Provider>
      </div>
    </div>
  );
};

export default Mobile;
