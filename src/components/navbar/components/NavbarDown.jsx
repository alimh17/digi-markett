import React from "react";
import { FaHotjar, FaInfo, FaSearch } from "react-icons/fa";

const NavbarDown = () => {
  return (
    <>
      <ul className="w-full flex justify-around items-center my-3 md:hidden">
        <li className="flex">
          <div className="flex md:flex items-center">
            <FaSearch className="relative right-10 text-lg text-gray-400" />
            <input
              className="mx-3 w-full rounded-md bg-gray-200 border-0 outline-0 py-2 px-10"
              placeholder="جستجو"
            />
          </div>
        </li>
        <li className="list-none  md:w-1/3 md:flex justify-end mx-5">
          <FaInfo className="text-xl cursor-pointer text-gray-400" />
        </li>
      </ul>
      <ul className="hidden md:flex w-full my-5 px-5 ">
        <div className="flex w-2/3">
          <li className="mx-1 lg:mx-3 py-3 text-lg cursor-pointer hover:border-b-red-400 hover:border-b-2 transition-all duratin rounded-sm text-gray-400 px-3">
            موبایل
          </li>
          <li className="mx-1 lg:mx-3 py-3 text-lg cursor-pointer hover:border-b-red-400 hover:border-b-2 transition-all duration-75 rounded-sm text-gray-400 px-3">
            لپ تاپ
          </li>
          <li className="mx-1 lg:mx-3 py-3 text-lg cursor-pointer hover:border-b-red-400 hover:border-b-2 transition-all duration-75 rounded-sm text-gray-400 px-3">
            تبلت
          </li>
          <li className="mx-1 lg:mx-3 py-3 text-lg cursor-pointer hover:border-b-red-400 hover:border-b-2 transition-all duration-75 rounded-sm text-gray-400 px-3">
            کنسول بازی
          </li>
          <li className="mx-1 lg:mx-3 py-3 text-lg cursor-pointer hover:border-b-red-400 hover:border-b-2 transition-all duration-75 rounded-sm text-gray-400 px-3">
            مودم
          </li>
          <li className="mx-1 lg:mx-3 py-3 text-lg cursor-pointer hover:border-b-red-400 hover:border-b-2 transition-all duration-75 rounded-sm text-gray-400 px-3">
            ساعت هوشمند
          </li>
          <li className="mx-1 lg:mx-3 py-3 text-lg cursor-pointer hover:border-b-red-400 hover:border-b-2 transition-all duration-75 rounded-sm text-gray-400">
            لوازم جانبی
          </li>
        </div>
        <div className="w-1/3 flex justify-end items-center text-gray-400 ">
          <ul className="mx-5 flex">
            <li className="flex hover:border-b-red-400 transition-all duration-75 rounded-sm hover:border-b-2 cursor-pointer">
              <FaHotjar className="text-red-500 mx-3 " />
              پر فروش ترین ها
            </li>
          </ul>
        </div>
      </ul>
    </>
  );
};

export default NavbarDown;
