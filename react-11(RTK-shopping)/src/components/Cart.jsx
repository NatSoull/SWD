/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import {MdKeyboardArrowDown , MdKeyboardArrowUp} from "react-icons/md"
import { useDispatch, useSelector } from "react-redux";
import { addItemQuantity, removeFromCart, subtractItemQuantity } from "../feature/services/cartSlice";

const Cart = (props) => {
  const { image, title, price, description , quantity } = props;

  const dispatch = useDispatch()

  const oneItemPrice = price * quantity

  return (
    <div className=" flex justify-between align-middle items-center w-[70%] mx-auto mt-20">
      <div className=" flex align-middle items-center gap-10">
        <img className=" object-contain h-[250px] w-[150px]" src={image} alt="" />
        <div>
          <h1 className=" text-2xl">{title}</h1>
          <p className=" text-lg mb-5">${oneItemPrice}</p>
          <p onClick={() => dispatch(removeFromCart(props))} className=" cursor-pointer select-none text-red-600">remove</p>
        </div>
      </div>
      <div className=" text-center">
        <p onClick={() => dispatch(addItemQuantity(props))} className=" cursor-pointer select-none text-xl"><MdKeyboardArrowUp/></p>
        <p className=" select-none">{quantity}</p>
        <p onClick={() => quantity > 1 && dispatch(subtractItemQuantity(props))} className=" cursor-pointer select-none text-xl"><MdKeyboardArrowDown/></p>
      </div>
    </div>
  );
};

export default Cart;
