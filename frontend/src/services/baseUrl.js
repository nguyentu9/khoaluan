const baseUrl = "http://localhost:3001/api";
const baseQuery = {
    baseUrl,
    prepareHeaders(headers) {
        headers.set("Content-Type", "application/json");
        return headers;
    },
    credentials: "include",
};

export { baseQuery, baseUrl };
