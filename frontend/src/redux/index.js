import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSigninReducer from "./userSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userApi } from "../services/user";
import { jobTitleApi } from "../services/jobTitle";
import { majorApi } from "../services/major";
import { topicApi } from "../services/topic";
import { degreeApi } from "../services/degree";
const reducer = combineReducers({
    [userApi.reducerPath]: userApi.reducer,
    [jobTitleApi.reducerPath]: jobTitleApi.reducer,
    [majorApi.reducerPath]: majorApi.reducer,
    [degreeApi.reducerPath]: degreeApi.reducer,
    [topicApi.reducerPath]: topicApi.reducer,
    userSignin: userSigninReducer,
});
export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            userApi.middleware,
            majorApi.middleware,
            degreeApi.middleware,
            jobTitleApi.middleware,
        ]),
    devTools: process.env.NODE_ENV !== "production",
});

setupListeners(store.dispatch);
