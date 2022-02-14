import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useParams } from "react-router-dom";
import { toNumber } from "lodash";
import { AiOutlineSafety } from "react-icons/ai";

import { mobile } from "../../../data/mobile";

import MobileTitle from "./components/MobileTitle";
import MobileColor from "./components/MobileColor";
import MobileColors from "./components/MobileColors";
import MobileOptions from "./components/MobileOptions";
import MobileSpecifications from "./components/MobileSpecifications";

import { colorList, colorObject } from "../../../utils/colorLists";
import { switchColor } from "../../../utils/switchColor";
import { replaceNumberToPersian } from "../../../utils/replacePrice";

import "./mobile-product.css";

const MobileProduct = () => {
  const params = useParams();
  const [product, setProduct] = useState([]);
  const [colors, setColors] = useState();
  const [color, setColor] = useState("مشکی");

  let productColor = [];

  useEffect(() => {
    const newproduct = mobile.filter((p) => p.id === toNumber(params.id));
    setProduct(newproduct);

    newproduct.map((item) => {
      return setColors(item.color);
    });
  }, [params]);

  if (colors) {
    colors.map((c) => {
      const value = Object.entries(colorObject).forEach((key) => {
        if (key[0] === c) {
          const obj = { c: key[1] };
          productColor.push(obj);
          return obj;
        }
      });
      return value;
    });
  }

  const handleColorState = (e) => {
    const selectedColor = colorList.filter(
      (c) => c === e.target.style.backgroundColor
    );

    const value = switchColor(selectedColor[0]);
    setColor(value);
  };

  return (
    <section>
      <div className="md:hidden">
        {product.map((item, index) => (
          <div key={item.id} className="my-3">
            <Splide
              options={{
                perMove: 1,
                perPage: 1,
                autoplay: true,
                direction: "rtl",
                type: "loop",
              }}
            >
              {item.images.map((img, i) => (
                <SplideSlide key={i} className="flex items-center">
                  <img alt="" src={img} data-splide-lazy={img} />
                </SplideSlide>
              ))}
            </Splide>
            <MobileTitle item={item} />
            <MobileColor item={item} color={color} />
            <MobileColors colors={colors} click={handleColorState} />
            <div className="flex items-center h-20 border-b">
              <AiOutlineSafety className="text-2xl mx-3" />
              گارانتی {replaceNumberToPersian(18)} ماهه
            </div>
            <MobileOptions item={item} />
            <MobileSpecifications item={item} />
          </div>
        ))}
      </div>
      <div></div>
    </section>
  );
};

export default MobileProduct;
