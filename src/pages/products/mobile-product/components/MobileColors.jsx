import React from "react";

const MobileColors = ({ colors, click }) => {
  return (
    <div className="flex border-b md:border-none py-3">
      {colors &&
        colors.map((c, index) => (
          <div key={index} className="flex text-gray-400">
            <span
              style={{ backgroundColor: c }}
              className={`mx-3 w-4 h-4 rounded-lg flex justify-center items-center p-3 border-2 cursor-pointer hover:border-sky-500`}
              onClick={(e) => click(e)}
            ></span>
          </div>
        ))}
    </div>
  );
};

export default MobileColors;
