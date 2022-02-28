import React from "react";

const MobileSpecifications = ({ item }) => {
  return (
    <div>
      <h2 className="m-5 text-2xl pt-5 border-b border-b-rose-600 inline ">
        مشخصات
      </h2>
      <div className="grid grid-rows-1 grid-cols-2 md:grid-cols-3 ">
        <h3 className="m-3 text-xl md:w-1/4 hidden md:flex">مشخصات</h3>
        <ul className=" md:w-1/4 w-full ">
          <li className="m-3 flex ">
            <span className="text-gray-400 ">ابعاد :</span>
          </li>
          <li className="m-3 flex ">
            <span className="text-gray-400 ">وزن :</span>
          </li>
          <li className="m-3 ">
            <span className="text-gray-400 w-full ">توضیحات سیم کارت: </span>
          </li>
          <li className="m-3 flex  my-5 h-52 md:h-48">
            <span className="text-gray-400 ">ساختار بدنه :</span>
          </li>
          <li className="m-3 flex  my-10">
            <span className="text-gray-400 ">ویژگی های خاص :</span>
          </li>
        </ul>
        <ul className="md:w-2/4  w-full">
          <li className="border-b  flex m-3 ">
            <span className="w/2-3 text-start">
              {" "}
              {item.Specifications.Dimensions}
            </span>
          </li>
          <li className="border-b  flex m-3 ">
            <span className="w-2/3 text-start">
              {item.Specifications.Whigth}
            </span>
          </li>
          <li className="border-b  flex m-3 ">
            <span className="w-2/3 text-start">
              {" "}
              {item.Specifications.Simcart}
            </span>
          </li>
          <li className="border-b  flex m-3   ">
            <span className=" text-start ">{item.Specifications.Body}</span>
          </li>
          <li className="border-b  flex m-3 ">
            <ul className="flex flex-col items-start ">
              {item.Specifications.SpecialFeatures.map((item, index) => (
                <li key={index} className="my-2">
                  {item}
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileSpecifications;
