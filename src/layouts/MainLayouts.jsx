import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const MainLayouts = (props) => {
  return (
    <div>
      <Navbar />
      {props.childer}
      <Footer />
    </div>
  );
};

export default MainLayouts;
