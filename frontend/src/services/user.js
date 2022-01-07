import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import baseUrl from "./baseUrl";

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders(headers) {
            headers.set("Content-Type", "application/json");
            return headers;
        },
    }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: ({ email, password }) => ({
                url: "/login",
                method: "POST",
                body: { email, password },
            }),
        }),
        accountRegister: builder.mutation({
            query: (user) => ({
                url: `/register`,
                method: "POST",
                body: user,
            }),
        }),
    }),
});

export const { useLoginMutation, useAccountRegisterMutation } = userApi;
