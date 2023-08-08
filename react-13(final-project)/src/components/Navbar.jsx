/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutMutation } from "../redux/api/authApi";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { removeUser } from "../redux/services/authSlice";

const Navbar = () => {
  // const { token, user } = useSelector((state) => state?.authSlice);

  const user = JSON.parse(Cookies?.get(`user`))
  const token = JSON.parse(Cookies?.get(`token`))
  const dispatch = useDispatch()

  const [logout] = useLogoutMutation();

  const nav = useNavigate()

  const logoutHandler = async () => {
    const {data} = await logout(token);
    console.log(data);
    if(data?.success) {
      dispatch(removeUser())
      nav(`/login`)
    }
  };

  return (
    <div>
      <div className=" flex w-[70%] justify-between items-center p-5 px-7 mx-auto">
        <h1 className=" text-2xl font-semibold text-gray-800">MMS IT</h1>
        <div className="flex gap-5 items-center">
          <div className=" flex flex-col gap-2">
            <p>{user?.name}</p>
            <p>{user?.email}</p>
          </div>
          <button
            onClick={logoutHandler}
            className=" bg-red-600 text-white px-4 py-1"
          >
            Logout
          </button>
        </div>
      </div>
      <hr className="w-[90%] mx-auto" />
    </div>
  );
};

export default Navbar;
