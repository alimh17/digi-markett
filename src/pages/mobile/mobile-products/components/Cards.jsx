import React from "react";
import { BiStar } from "react-icons/bi";
import { replacePrice } from "../../../../utils/replacePrice";
import AvalibleColor from "./AvalibleColor";

const Cards = ({ item }) => {
  return (
    <article
      style={{ height: "29rem" }}
      className="hidden md:flex md:flex-col md:items-center md:border md:justify-center border-b p-3 article min-h-96"
    >
      <AvalibleColor item={item} />
      <div className="flex  justify-center items-center w-full mx-3 ">
        <img
          alt=""
          src={item.url}
          style={{ height: "10rem", backgroundSize: "cover" }}
        />
      </div>
      <div className="w-2/3 mx-3 flex flex-col justify-start items-center md:w-full">
        <p className="p-3 w-full text-sm h-24 md:text-lg">{item.title}</p>
        <div className="w-full text-left p-3 flex items-center justify-between">
          <p className="text-gray-400 md:text-xl">موجود در انبار</p>
          <span className="flex items-center md:text-2xl">
            {item.rate}
            <BiStar className="mx-2 text-yellow-500" />
          </span>
        </div>
        <div className="w-full text-left p-3 py-3  md:text-xl">
          {replacePrice(item.price)} <span className="mx-2">تومان</span>
        </div>
      </div>
    </article>
  );
};

export default Cards;
