/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEditBlogMutation, useGetSingleBlogsQuery } from "../feature/services/BlogApi";

const Edit = () => {
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageAddress, setImageAddress] = useState("");

  const {data : blog} = useGetSingleBlogsQuery(id)

  useEffect(() => {
    setTitle(blog?.title)
    setDescription(blog?.description)
    setImageAddress(blog?.image)
  } , [blog])

    const [editBlog] = useEditBlogMutation()

    const nav  = useNavigate()

    const editBlogHandler = (e) => {
        e.preventDefault()
        const newEditBlog = {id , title , description , image : imageAddress}
        editBlog(newEditBlog)
        nav(`/`)
    }

  return (
    <div>
      <div className=" flex justify-center align-middle items-center h-screen">
        <form
          onSubmit={editBlogHandler}
          className=" flex flex-col gap-10 p-10 w-[25%] border shadow rounded-xl"
        >
          <h1 className=" text-2xl font-semibold text-gray-800 text-center">
            Edit Blog
          </h1>
          <input
            defaultValue={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="outline-none border-b border-b-gray-800"
            placeholder="Title..."
          />
          <input
            defaultValue={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            className="outline-none border-b border-b-gray-800"
            placeholder="Description..."
          />
          <input
            defaultValue={imageAddress}
            onChange={(e) => setImageAddress(e.target.value)}
            type="text"
            className="outline-none border-b border-b-gray-800"
            placeholder="Image address..."
          />
          <button className=" bg-purple-800 text-white py-1" type="submit">
            Done
          </button>
            <Link to={"/"} className="flex flex-col">
            <button>Back</button>
            </Link>
        </form>
      </div>
    </div>
  );
};

export default Edit;
