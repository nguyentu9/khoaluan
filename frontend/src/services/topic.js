import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./baseUrl";

export const topicApi = createApi({
    reducerPath: "topicApi",
    baseQuery: fetchBaseQuery(baseQuery),
    tagTypes: ["topicapi"],
    endpoints: (builder) => ({
        getMyTopics: builder.query({
            query: () => `/topics/me`,
        }),
        registerTopic: builder.mutation({
            query: (topic) => ({
                url: `/topics`,
                method: "POST",
                body: topic,
            }),
        }),
    }),
});

export const { useGetMyTopicsQuery, useRegisterTopicMutation } = topicApi;
