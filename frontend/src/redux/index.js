import { configureStore } from "@reduxjs/toolkit";
import userSigninReducer from "./userSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userApi } from "../services/user";
export const store = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer,
        userSignin: userSigninReducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userApi.middleware),
});

setupListeners(store.dispatch);
