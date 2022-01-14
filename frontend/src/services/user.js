import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./baseUrl";

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery(baseQuery),
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
        checkInfoSteps: builder.mutation({
            query: ({ step, data }) => ({
                url: `/auth/step/${step}`,
                method: "POST",
                body: { data },
            }),
        }),
        getMyProfile: builder.query({
            query: () => `/users/me/profile`,
        }),

        getUsersWithParam: builder.mutation({
            query: ({ param, searchData }) => ({
                url: `/users/members?${param}=${searchData}`,
                method: "GET",
            }),
        }),
    }),
});

export const {
    useLoginMutation,
    useAccountRegisterMutation,
    useLogoutMutation,
    useGetMyProfileQuery,
    useCheckInfoStepsMutation,
    useGetUsersWithParamMutation,
} = userApi;
