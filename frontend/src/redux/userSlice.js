import { createSlice } from "@reduxjs/toolkit";

export const userSigninSlice = createSlice({
    name: "userSignin",
    initialState: {
        activePage: { page1: false, page2: false, page3: false, page4: false },
        userInfo: {},
    },
    reducers: {
        updateInfo: (state, action) => {},
        register: (state, action) => {},
    },
});

export const { updateInfo, register } = userSigninSlice.actions;
export default userSigninSlice.reducer;
