import React from "react";
import { mobileBrnads } from "../../../data/mobileBrnads";

import Brand from "./components/brands/Brand";
import Color from "./components/Color";
import Network from "./components/Network";
import Price from "./components/Price";
import Ram from "./components/Ram";
import Simcard from "./components/Simcard";
import Type from "./components/Type";

const MobileSidebar = () => {
  return (
    <div className="hidden md:flex md:w-1/3 h-auto overflow-y-auto md:sticky top-36">
      <div className="border-2 rounded-xl w-full mx-4 ">
        <h2 className="text-4xl p-4 text h-36 flex items-center">فیلترها</h2>
        <Brand />
        <Color />
        <Price />
        <Type />
        <Network />
        <Simcard />
        <Ram />
      </div>
    </div>
  );
};

export default MobileSidebar;
