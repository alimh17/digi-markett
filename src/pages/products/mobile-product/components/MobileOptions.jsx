import React from "react";

const MobileOptions = ({ item }) => {
  return (
    <div className="border-b">
      <h3 className="m-3 text-xl">ویژگی ها</h3>
      <ul className="mx-3 options">
        <li>
          <span className="text-gray-400">حافظه داخلی</span> :{" "}
          {item.options.Ram}
        </li>
        <li>
          <span className="text-gray-400">بازه اندازه صفحه نمایش</span> :{" "}
          {item.options.screen}
        </li>
        <li>
          <span className="text-gray-400">شبکه های ارتباطی</span> :{" "}
          {item.options.network}
        </li>
      </ul>
    </div>
  );
};

export default MobileOptions;
