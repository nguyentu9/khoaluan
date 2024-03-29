import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./baseUrl";

export const jobTitleApi = createApi({
    reducerPath: "jobTilteApi",
    baseQuery: fetchBaseQuery(baseQuery),
    endpoints: (builder) => ({
        getJobTitles: builder.query({
            query: () => `/jobtitles`,
        }),
    }),
});

export const { useGetJobTitlesQuery } = jobTitleApi;
