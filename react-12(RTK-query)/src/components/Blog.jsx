/* eslint-disable no-unused-vars */
import React from "react";
import { useGetBlogsQuery } from "../feature/services/BlogApi";
import BlogCard from "./BlogCard";
import { Link } from "react-router-dom";

const Blog = () => {
  const { data: blogs } = useGetBlogsQuery();
  console.log(blogs);

  return (
    <>
      <Link to={"/create"}>
        <div className="flex justify-center mt-5">
          <button className="px-5 py-1 bg-slate-700 text-white">Create</button>
        </div>
      </Link>
      <div className=" flex flex-wrap gap-10 justify-center my-20 ">
        {blogs?.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </>
  );
};

export default Blog;
