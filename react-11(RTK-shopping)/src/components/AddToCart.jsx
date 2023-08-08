/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";
import Cart from "./Cart";
import { Link } from "react-router-dom";

const AddToCart = () => {
  const { cartItems, totalAmount } = useSelector((state) => state.cart);

  if (cartItems.length === 0) {
    return (
      <div className=" h-screen flex flex-col justify-center  items-center">
        <h1 className=" text-2xl tracking-wider">Your Cart is Empty</h1>
        <Link to={"/"}>
          <button className=" bg-purple-500 text-white py-2 px-6 rounded-2xl text-lg font-medium tracking-wider">
            Go to Home Page
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div>
        {cartItems.map((item) => (
          <Cart key={item.id} {...item} />
        ))}
      </div>
      <hr className="w-[70%] mx-auto my-10" />
      <div className=" flex justify-between align-middle items-center w-[80%] mx-auto py-10">
        <h1>Total</h1>
        <h1>${totalAmount.toFixed(2)}</h1>
      </div>
    </div>
  );
};

export default AddToCart;
