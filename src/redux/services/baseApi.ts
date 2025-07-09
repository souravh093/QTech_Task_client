import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://qtech-server.vercel.app/api/v1" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `/products`,
    }),
    getProductById: builder.query({
      query: (id: string | undefined) => `/products/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useLazyGetProductByIdQuery } = baseApi;
