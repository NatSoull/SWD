/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useGetCreateBlogMutation } from "../feature/services/BlogApi";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageAddress, setImageAddress] = useState("");

  const [getCreateBlog] = useGetCreateBlogMutation()

  const nav = useNavigate()

  const createBlogHandler = (e) => {
    e.preventDefault()
    const newBlog = {id: `${Date.now()}` , title , description , image : imageAddress}
    getCreateBlog(newBlog)
    nav("/")
  }

  return (
    <div className=" flex justify-center align-middle items-center h-screen">
      <form onSubmit={createBlogHandler} className=" flex flex-col gap-10 p-10 w-[25%] border shadow rounded-xl">
        <h1 className=" text-2xl font-semibold text-gray-800 text-center">Create Blogs</h1>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="outline-none border-b border-b-gray-800"
          placeholder="Title..."
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          className="outline-none border-b border-b-gray-800"
          placeholder="Description..."
        />
        <input
          value={imageAddress}
          onChange={(e) => setImageAddress(e.target.value)}
          type="text"
          className="outline-none border-b border-b-gray-800"
          placeholder="Image address..."
        />
        <button className=" bg-blue-700 text-white py-1" type="submit">Create</button>
      </form>
    </div>
  );
};

export default Create;
