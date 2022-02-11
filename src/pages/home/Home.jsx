import React from "react";
import Banner from "./components/banner/Banner";
import BestSellingProduct from "./components/best-selling-product/BestSellingProduct";
import Brands from "./components/brands/Brands";
import Offers from "./components/offers/Offers";
import Promotion from "./components/promotion/Promotion";

const Home = () => {
  return (
    <div className="mt-32">
      <Banner />
      <Offers />
      <Promotion />
      <BestSellingProduct />
      <Brands />
    </div>
  );
};

export default Home;
