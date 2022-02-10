import React from "react";
import { BiCart } from "react-icons/bi";
import { FaBars, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./navbar.css";

const NavbarUp = ({ show }) => {
  return (
    <ul className="flex w-full content-between">
      <li className="list-none flex w-full md:w-2/3 justify-between items-center md:justify-start">
        <FaBars className="md:hidden mx-3 text-lg" onClick={() => show(true)} />
        <h3 className="mx-5 text-2xl text-red-400 font-extrabold cursor-pointer brand">
          <Link to="/">Digi Market</Link>
        </h3>
        <div className="w-1/2 hidden md:flex items-center">
          <FaSearch className="relative right-10 text-lg text-gray-400" />
          <input
            className="mx-3 w-full rounded-md bg-gray-200 border-0 outline-0 py-2 px-10"
            placeholder="جستجو"
          />
        </div>
        <BiCart className="text-2xl cursor-pointer text-gray-400 md:hidden mx-3" />
      </li>
      <li className="list-none hidden md:w-1/3 md:flex justify-end mx-5">
        <BiCart className="text-2xl cursor-pointer text-gray-400" />
      </li>
    </ul>
  );
};

export default NavbarUp;
