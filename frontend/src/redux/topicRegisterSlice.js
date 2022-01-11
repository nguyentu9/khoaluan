import { createSlice } from "@reduxjs/toolkit";

export const topicRegisterSlice = createSlice({
    name: "topicRegister",
    initialState: {
        name: "",
        duration: 0,
        totalExpense: 0,
        majorID: "",
        keyword: "",
        members: [],
    },
    reducers: {
        updateInfo: (state, action) => {
            const { name, duration, totalExpense, majorID, members } = action;
            state.name = name;
            state.duration = duration;
            state.totalExpense = totalExpense;
            state.majorID = majorID;
            state.members = members;
        },
        updateField: (state, action) => {
            const { field, value } = action;
            state[field] = value;
        },
        removeMember: (state, action) => {
            state.members.splice(action, 1);
        },
        clearInfo: (state, action) => {
            state.name = "";
            state.duration = 0;
            state.totalExpense = 0;
            state.majorID = "";
            state.keyword = "";
            state.members = [];
        },
    },
});

export const { updateInfo, clearInfo } = topicRegisterSlice.actions;
export default topicRegisterSlice.reducer;
