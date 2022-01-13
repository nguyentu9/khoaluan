import { createSlice } from "@reduxjs/toolkit";
export const userSignupSlice = createSlice({
    name: "userSignup",
    initialState: {},
    reducers: {
        updateInfoRegister: (state, action) => {
            Object.assign(state, action.payload);
        },
    },
});

export const { updateInfoRegister } = userSignupSlice.actions;
export default userSignupSlice.reducer;
