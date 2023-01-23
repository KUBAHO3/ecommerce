import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
export const AllProductsApi = createApi({
    reducerPath: "AllProductsApi",
    baseQuery: fetchBaseQuery({baseUrl:'https://jsonplaceholder.typicode.com'}),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => "posts",
        }),
    }),
});
export const { useGetAllProductsQuery } = AllProductsApi;