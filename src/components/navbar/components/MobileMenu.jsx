import React from "react";
import { FaTimes } from "react-icons/fa";

import "./navbar.css";

const MobileMenu = ({ show, hidden }) => {
  return (
    <div className={`${show ? "show" : "hiden"}`}>
      <ul>
        <div className="w-full h-20 flex justify-center items-center">
          <h1 className="brand text-red-500 text-2xl">Digi Market</h1>
        </div>
        <li className="w-full text-2xl px-5 my-5 text-gray-400">موبایل</li>
        <li className="w-full text-2xl px-5 my-5 text-gray-400">لپ تاپ</li>
        <li className="w-full text-2xl px-5 my-5 text-gray-400">تبلت</li>
        <li className="w-full text-2xl px-5 my-5 text-gray-400">کنسول بازی</li>
        <li className="w-full text-2xl px-5 my-5 text-gray-400">مودم</li>
        <li className="w-full text-2xl px-5 my-5 text-gray-400">ساعت هوشمند</li>
        <li className="w-full text-2xl px-5 my-5 text-gray-400">لوازم جانبی</li>
      </ul>
      <FaTimes
        className="absolute m-5 top-0 left-0 text-xl text-red-500"
        onClick={() => hidden(false)}
      />
    </div>
  );
};

export default MobileMenu;
