import { createSlice } from "@reduxjs/toolkit";

export const userSigninSlice = createSlice({
    name: "userSignin",
    initialState: {
        userInfo: {},
    },
    reducers: {
        updateInfo: (state, action) => {
            state.userInfo = action.payload;
        },
    },
});
export const { updateInfo, register } = userSigninSlice.actions;
export default userSigninSlice.reducer;
