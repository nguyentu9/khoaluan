import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./baseUrl";

export const facDeptApi = createApi({
    reducerPath: "facDeptApi",
    baseQuery: fetchBaseQuery(baseQuery),
    tagTypes: ["facdeptapi"],
    endpoints: (builder) => ({
        getFacdepts: builder.query({
            query: () => `/facdepts`,
        }),
        getFaculties: builder.query({
            query: () => `/facdepts?type=faculty`,
        }),
        getDepartment: builder.query({
            query: () => `/facdepts?type=department`,
        }),
        getFacdeptByID: builder.query({
            query: (id) => `/facdepts/${id}`,
        }),
    }),
});

export const {
    useGetFacdeptByIDQuery,
    useGetFacdeptsQuery,
    useGetFacultiesQuery,
    useGetDepartmentQuery,
} = facDeptApi;
