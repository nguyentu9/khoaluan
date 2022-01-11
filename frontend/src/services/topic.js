import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./baseUrl";

export const topicApi = createApi({
    reducerPath: "topicApi",
    baseQuery: fetchBaseQuery(baseQuery),
    endpoints: (builder) => ({
        getMyTopics: builder.query({
            query: () => `/topics`,
        }),
    }),
});

export const {} = topicApi;
