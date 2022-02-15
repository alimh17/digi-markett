import React from "react";
import { replacePrice } from "../../../../utils/replacePrice";

const CartButton = () => {
  const product = JSON.parse(localStorage.getItem("product"));
  const { price } = product;

  return (
    <div className="md:hidden fixed bg-white flex justify-between items-center bottom-0  w-full z-10 border-t-2 ">
      <button className="bg-rose-600 rounded-md p-3  my-2 text-white">
        افزودن به سبد خرید
      </button>
      <h3 className="mx-2 my-2 ">{replacePrice(price)} تومان</h3>
    </div>
  );
};

export default CartButton;
