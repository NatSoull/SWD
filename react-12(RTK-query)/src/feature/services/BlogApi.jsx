/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  tagTypes: ["blogApi"],
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => "/blog",
      providesTags: ["blogApi"],
    }),
    getSingleBlogs: builder.query({
      query: (id) => `/blog/${id}`,
      providesTags: ["blogApi"]
    }),
    getCreateBlog: builder.mutation({
      query: (blog) => ({
        url: "/blog",
        method: "POST",
        body: blog
      }),
      invalidatesTags:["blogApi"]
    }),
    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `/blog/${id}`,
        method: "DELETE",
        
      }),
      invalidatesTags:["blogApi"]
    }),
    editBlog: builder.mutation({
      query: (newData) => ({
        url: `/blog/${newData.id}`,
        method: `PATCH`,
        body: newData
      }),
      invalidatesTags: [`blogApi`]
    })
  }),
});

export const {useGetBlogsQuery , useGetSingleBlogsQuery , useGetCreateBlogMutation , useDeleteBlogMutation , useEditBlogMutation} = blogApi

