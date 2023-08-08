import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: " https://contact-app.mmsdev.site/api/v1",
  }),
  tagTypes: ["auth"],
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (user) => ({
        url: `/register`,
        method: `POST`,
        body: user,
      }),
      invalidatesTags: [`auth`],
    }),
    login: builder.mutation({
      query: (data) => ({
        url: `/login`,
        method: `POST`,
        body: data,
      }),
      invalidatesTags: [`auth`],
    }),
    logout: builder.mutation({
      query: (token) => ({
        url: `/user-logout`,
        method: "POST",
        headers: {authorization: `Bearer ${token}`},
      }),
      invalidatesTags: [`auth`],
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation , useLogoutMutation } = authApi;
