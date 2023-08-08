/* eslint-disable no-unused-vars */
import Cookies from "js-cookie";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSingleContactQuery } from "../redux/api/contactApi";

const ContactInfo = () => {
  const token = JSON.parse(Cookies.get(`token`));
  const { id } = useParams();

  const { data } = useSingleContactQuery({ token, id });
  console.log(data);

  return (
    <div className=" flex justify-center items-center h-screen">
      <div className=" flex flex-col gap-2 border p-7 shadow">
        <img src={data?.contact?.photo === null ? "https://img.freepik.com/free-icon/user_318-159711.jpg" : data?.contact?.photo} alt="" />
        <h1>{data?.contact?.name}</h1>
        <h1>{data?.contact?.email}</h1>
        <h1>{data?.contact?.phone}</h1>
        <h1>{data?.contact?.address}</h1>
        <Link to={`/`} className=" py-1 px-5 bg-green-700 text-white rounded text-center">
        <button>Back</button>
        </Link>
      </div>
    </div>
  );
};

export default ContactInfo;
