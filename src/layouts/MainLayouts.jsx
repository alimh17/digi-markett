import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import CartButton from "../pages/products/mobile-product/components/CartButton";
import { useLocation } from "react-router-dom";

const MainLayouts = (props) => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div>
      <Navbar />
      {props.children}
      <Footer />
      {pathname !== "/mobile" && pathname !== "/" ? <CartButton /> : null}
    </div>
  );
};

export default MainLayouts;
