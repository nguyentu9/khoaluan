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
        credentials: "include",
    }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: ({ email, password }) => ({
                url: "/auth/login",
                method: "POST",
                body: { email, password },
            }),
        }),
        accountRegister: builder.mutation({
            query: (user) => ({
                url: `/auth/register`,
                method: "POST",
                body: user,
            }),
        }),
        logout: builder.mutation({
            query: (userID) => ({
                url: `/auth/logout`,
                method: "POST",
                body: { userID },
            }),
        }),
    }),
});

export const {
    useLoginMutation,
    useAccountRegisterMutation,
    useLogoutMutation,
} = userApi;
