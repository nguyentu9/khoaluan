import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./baseUrl";

export const degreeApi = createApi({
    reducerPath: "degreeApi",
    baseQuery: fetchBaseQuery(baseQuery),
    tagTypes: ["degreeApi"],
    endpoints: (builder) => ({
        getDegrees: builder.query({
            query: () => `/degrees`,
        }),
        getDegreeByID: builder.query({
            query: (id) => `/degrees/${id}`,
        }),
    }),
});

export const { useGetDegreesQuery, useGetDegreeByIDQuery } = degreeApi;
