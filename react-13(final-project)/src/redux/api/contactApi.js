import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({
    baseUrl: " https://contact-app.mmsdev.site/api/v1",
  }),
  tagTypes: ["contact"],
  endpoints: (builder) => ({
    getContact: builder.query({
      query: (token) => ({
        url: `/contact`,
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags: [`contact`],
    }),
    createContact: builder.mutation({
      query: ({ token, newContact }) => ({
        url: `/contact`,
        method: `POST`,
        body: newContact,
        headers: { authorization: `Bearer ${token}` },
      }),
      invalidatesTags: [`contact`],
    }),
    singleContact: builder.query({
      query: ({ token, id }) => ({
        url: `/contact/${id}`,
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags: [`contact`],
    }),
    deleteContact: builder.mutation({
      query: ({ token , id}) => ({
        url: `/contact/${id}`,
        method: `DELETE`,
        headers: { authorization: `Bearer ${token}` }
      }),
      invalidatesTags: [`contact`]
    })
  }),
});

export const {
  useGetContactQuery,
  useCreateContactMutation,
  useSingleContactQuery,
  useDeleteContactMutation
} = contactApi;
