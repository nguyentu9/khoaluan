const baseUrl = "/api";
const baseQuery = {
    baseUrl,
    prepareHeaders(headers) {
        headers.set("Content-Type", "application/json");
        return headers;
    },
    credentials: "include",
};

export { baseQuery, baseUrl };
