import React from "react";
import MobileProducts from "./mobile-products/MobileProducts";
import MobileSidebar from "./mobile-sidebar/MobileSidebar";

const Mobile = () => {
  return (
    <div className="md:mt-32 flex">
      <MobileSidebar />
      <MobileProducts />
    </div>
  );
};

export default Mobile;
