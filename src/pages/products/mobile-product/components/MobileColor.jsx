import React from "react";
import { replaceNumberToPersian } from "../../../../utils/replacePrice";

const MobileColor = ({ item , color}) => {

  return (
    <div className="flex justify-between m-3">
      <span className="text-xl">رنگ : {color} </span>
      <span className="mx-3 text-gray-400">
        <span className="mx-2 ">
          {replaceNumberToPersian(item.color.length)}
        </span>
        رنگ
      </span>
    </div>
  );
};

export default MobileColor;
