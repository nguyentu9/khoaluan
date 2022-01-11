import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./baseUrl";

export const majorApi = createApi({
    reducerPath: "majorApi",
    baseQuery: fetchBaseQuery(baseQuery),
    tagTypes: ["majorapi"],
    endpoints: (builder) => ({
        getMajors: builder.query({
            query: () => `/majors`,
        }),
        getMajorByID: builder.query({
            query: (id) => `/majors/${id}`,
        }),
    }),
});

export const { useGetMajorsQuery, useGetMajorByIDQuery } = majorApi;
