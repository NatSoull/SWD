/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetSingleBlogsQuery } from "../feature/services/BlogApi";

const Detail = () => {
  const { id } = useParams();
  const { data: blog } = useGetSingleBlogsQuery(id);
  console.log(blog);

  return (
    <div className=" flex justify-center mt-20">
      <div className=" flex flex-col w-72 justify-between border shadow">
        <img className=" w-[100%] object-contain" src={blog?.image} alt="" />
        <div className="flex flex-col p-4">
          <h1>{blog?.title}</h1>
          <p>{blog?.description}</p>
          <div className=" flex gap-3">
            <Link to={`/`}>
              <button className=" bg-gray-900 text-white px-5 py-1">
                Back
              </button>
            </Link>
            <Link to={`/edit/${id}`}>
              <button className=" bg-purple-800 text-white px-5 py-1">Edit</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
