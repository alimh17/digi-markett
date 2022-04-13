import React, { createRef, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { mobilesSortByBrands } from "../../../../../../actions/mobilesActions";

import { mobileBrnads } from "../../../../../../data/mobileBrnads";
import { brandConvertToPersian } from "../../../../../../utils/brnadConverToPersian";

const AllBrands = ({ show, selectedBrand, setSelectedBrand }) => {
  const brandRef = useRef([]);
  const dispatch = useDispatch();


  brandRef.current = mobileBrnads.map(
    (_, i) => brandRef.current[i] ?? createRef()
  );


  const handleCheckbox = (e, item) => {
    const copySelectedBrand = [...selectedBrand];
    copySelectedBrand.push(item.name);
    setSelectedBrand(copySelectedBrand);

    if (selectedBrand && selectedBrand.includes(item.name)) {
      const filter = copySelectedBrand.filter((f) => f !== item.name);
      setSelectedBrand(filter);
    }

    if (brandRef) {
      brandRef.current.map((el, i) => {
        if (el.current.classList.contains(item.name)) {
          el.current.checked
            ? (el.current.checked = false)
            : (el.current.checked = true);
        }
      });
    }
  };

  return (
    <>
      <div className={`w-full ${!show && "hidden"}`}>
        {mobileBrnads.map((item, index) => (
          <div
            key={index}
            className="flex justify-between border-b cursor-pointer"
            onClick={(e) => handleCheckbox(e, item)}
          >
            <span className=" p-3 flex items-center">
              <input
                type="checkbox"
                className={`w-5 h-5 rounded-lg  ${item.name}`}
                ref={brandRef.current[index]}
                onClick={(e) =>
                  e.target.checked
                    ? (e.target.checked = false)
                    : (e.target.checked = true)
                }
              />
              <h2 className="mx-3">{item.name}</h2>
            </span>
            <h2 className="text-gray-400 p-3">
              {brandConvertToPersian(item.name)}
            </h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllBrands;
