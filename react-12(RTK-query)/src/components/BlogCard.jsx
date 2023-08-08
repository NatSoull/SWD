/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { useDeleteBlogMutation } from "../feature/services/BlogApi";

const BlogCard = ({ blog }) => {
  const [deleteBlog] = useDeleteBlogMutation()
  return (
    <div>
      <div className=" flex flex-col w-72 justify-between border shadow h-[300px]">
        <img className=" w-[100%] h-[60%] object-cover" src={blog?.image} alt="" />
        <div className="flex flex-col p-4">
          <h1>{blog?.title}</h1>
          <p>{blog?.description}</p>
          <div className=" flex gap-3">
            <Link to={`/detail/${blog?.id}`}>
              <button className=" bg-gray-900 text-white px-5 py-1">
                Detail
              </button>
            </Link>
            <button onClick={() => deleteBlog(blog?.id)} className=" bg-red-600 text-white px-5 py-1">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
