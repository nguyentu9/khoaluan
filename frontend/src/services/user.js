import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "http://localhost:3001/api";

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
        accountRegister: builder.query({
            query: (user) => ({
                url: `register`,
                method: POST,
                body: user,
            }),
        }),
    }),
});

export const { useAccountRegisterQuery } = userApi;
