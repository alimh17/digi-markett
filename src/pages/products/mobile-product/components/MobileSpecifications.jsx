import React from "react";

const MobileSpecifications = ({ item }) => {
  return (
    <div>
      <h3 className="m-3 text-xl">مشخصات</h3>
      <ul>
        <li className="m-3 ">
          <span className="text-gray-400 bg-orange-300">ابعاد :</span>
          <span className="border-b"> {item.Specifications.Dimensions}</span>
        </li>
        <li className="m-3 ">
          <span className="text-gray-400 ">وزن :</span>
          <span className="border-b">{item.Specifications.Whigth}</span>
        </li>
        <li className="m-3 ">
          <span className="text-gray-400 ">توضیحات سیم کارت: </span>
          <span className="border-b"> {item.Specifications.Simcart}</span>
        </li>
        <li className="m-3 border-b">
          <span className="text-gray-400 ">ساختار بدنه :</span>
          <span className="border-b">{item.Specifications.Body}</span>
        </li>
        <li className="m-3 ">
          <span className="text-gray-400 ">ویژگی های خاص :</span>
          <ul className="flex flex-col items-center">
            {item.Specifications.SpecialFeatures.map((item, index) => (
              <li key={index} className="w-52 my-2">
                {item}
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default MobileSpecifications;
