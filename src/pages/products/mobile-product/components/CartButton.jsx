import { times } from "lodash";
import React from "react";
import { BiTrash } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  addProductToCartAction,
  removeProductFromCartAction,
} from "../../../../actions/cartActions";
import { cartReducer } from "../../../../reducers/cart";
import { replacePrice } from "../../../../utils/replacePrice";

const CartButton = ({ item }) => {
  const product = JSON.parse(localStorage.getItem("product"));
  const { price, id } = product;
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  return (
    <div className="md:hidden fixed bg-white flex justify-between items-center bottom-0  w-full z-10 border-t-2 ">
      {cart.length === 0 && (
        <button
          onClick={(e) => {
            dispatch(addProductToCartAction(item));
          }}
          className="bg-rose-600 rounded-md p-3  my-2 text-white"
        >
          افزودن به سبد خرید
        </button>
      )}
      {cart &&
        cart.map((el) => (
          <div key={el.id} className="w-1/2">
            {el.id !== id ? (
              <button
                onClick={(e) => {
                  dispatch(addProductToCartAction(item));
                }}
                className="bg-rose-600 rounded-md p-3  my-2 text-white"
              >
                افزودن به سبد خرید
              </button>
            ) : (
              <ul className="flex  justify-around items-center py-3 border my-2 rounded-md">
                <li className="text-rose-500">+</li>
                <li className="flex flex-col justify-center items-center">
                  حداکثر
                  <span>1</span>
                </li>
                <li>
                  <BiTrash
                    className="text-red-600 text-xl"
                    onClick={() => dispatch(removeProductFromCartAction(el))}
                  />
                </li>
              </ul>
            )}
          </div>
        ))}

      <h3 className="mx-2 my-2 ">{replacePrice(price)} تومان</h3>
    </div>
  );
};

export default CartButton;
