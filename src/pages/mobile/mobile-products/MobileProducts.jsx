import React from "react";
import { BiStar } from "react-icons/bi";
import { Link } from "react-router-dom";

import { mobile } from "../../../data/mobile";
import {
  replaceNumberToPersian,
  replacePrice,
} from "../../../utils/replacePrice";

const MobileProducts = () => {
  return (
    <section className="w-full md:w-2/3">
      <div className="flex md:hidden w-full py-3 border-b justify-between">
        <span className="text-gray-400 mx-3">همه کالاها</span>
        <span className="flex items-center mx-3 text-gray-400">
          {replaceNumberToPersian(mobile.length)} <p className="mx-2 ">کالا</p>
        </span>
      </div>
      {mobile.map((item, index) => (
        <Link to={`${item.id}`} key={item.id}>
          <article className="flex border-b p-3">
            <div className="flex flex-col justify-center items-center  w-1/3 mx-3 ">
              <img alt="" src={item.url} style={{ height: "10rem" }} />
              <div className="flex">
                {item.color.map((c, i) => (
                  <div key={i}>
                    <span
                      className={`rounded-full bg-${c}-500  w-3 h-3`}
                    ></span>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-2/3 mx-3 flex flex-col justify-start items-center">
              <p className="p-3 lg:text-xl ">{item.title}</p>
              <div className="w-full text-left p-3 flex items-center justify-between">
                <p className="text-gray-400">موجود در انبار</p>
                <span className="flex items-center">
                  {item.rate}
                  <BiStar className="mx-2 text-yellow-500" />
                </span>
              </div>
              <span className="w-full text-left p-3 ">
                {replacePrice(item.price)} تومان
              </span>
            </div>
          </article>
        </Link>
      ))}
    </section>
  );
};

export default MobileProducts;
