import React from "react";
import Banner from "./components/banner/Banner";
import Offers from "./components/offers/Offers";

const Home = () => {
  return (
    <div className="mt-32">
      <Banner />
      <Offers />
    </div>
  );
};

export default Home;
