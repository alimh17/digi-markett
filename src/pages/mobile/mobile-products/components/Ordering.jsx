import React from "react";
import { BiSort } from "react-icons/bi";
import { mobile } from "../../../../data/mobile";
import { replaceNumberToPersian } from "../../../../utils/replacePrice";

const Ordering = () => {
  return (
    <div className="hidden md:flex justify-between absolute w-2/3 items-center h-20">
      <span className="text-gray-400 mx-3 flex ">
        <span className="flex items-center text-lg font-bold text-black">
          <BiSort className="mx-2" />
          <p className="hidden lg:flex">مرتب سازی :</p>
          <p className="flex lg:hidden">پر بازدید ترین</p>
        </span>
        <ul className="hidden lg:flex">
          <li className="mx-3 p-2 active:text-rose-600 cursor-pointer text-sm ">
            پرفروش ترین
          </li>
          <li className="mx-3 p-2 active:text-rose-600 cursor-pointer text-sm ">
            پربازدید ترین
          </li>
          <li className="mx-3 p-2 active:text-rose-600 cursor-pointer text-sm ">
            جدید ترین
          </li>
          <li className="mx-3 p-2 active:text-rose-600 cursor-pointer text-sm ">
            ارزان ترین
          </li>
          <li className="mx-3 p-2 active:text-rose-600 cursor-pointer text-sm ">
            گران ترین
          </li>
        </ul>
      </span>
      <span className="flex items-center mx-3 text-gray-400">
        {replaceNumberToPersian(mobile.length)} <p className="mx-2 ">کالا</p>
      </span>
    </div>
  );
};

export default Ordering;
