import { configureStore } from "@reduxjs/toolkit";
import userSigninReducer from "./userSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userApi } from "../services/user";

const reducer = {
    [userApi.reducerPath]: userApi.reducer,
    userSignin: userSigninReducer,
};
export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userApi.middleware),
    devTools: process.env.NODE_ENV !== "production",
});

setupListeners(store.dispatch);
