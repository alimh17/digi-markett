import React from "react";
import Banner from "./components/banner/Banner";
import BestSellingProduct from "./components/best-selling-product/BestSellingProduct";
import Brands from "./components/brands/Brands";
import DigiMag from "./components/digimag/DigiMag";
import Offers from "./components/offers/Offers";
import Promotion from "./components/promotion/Promotion";

const Home = () => {
  return (
    <div className="md:mt-32 mt-3">
      <Banner />
      <Offers />
      <Promotion />
      <BestSellingProduct />
      <Brands />
      <DigiMag />
    </div>
  );
};

export default Home;
