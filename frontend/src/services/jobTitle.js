import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import baseUrl from "./baseUrl";

export const jobTitleApi = createApi({
    reducerPath: "jobTilteApi",
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders(headers) {
            headers.set("Content-Type", "application/json");
            return headers;
        },
    }),
    keepUnusedDataFor: 30,
    tagTypes: ["JobTitle"],
    endpoints: (builder) => ({
        getJobTitle: builder.query({
            query: () => `/jobtitle`,
            transformResponse: (res) => res.data,
            providesTags: ["JobTitle"],
        }),
    }),
});

export const { useGetJobTitleQuery } = jobTitleApi;
