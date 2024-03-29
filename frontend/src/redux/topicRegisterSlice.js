import { createSlice } from "@reduxjs/toolkit";

export const topicRegisterSlice = createSlice({
    name: "topicRegister",
    initialState: {
        members: [],
        usersSelected: [],
        instructor: {},
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
            const newMembers = state.members.filter(
                ({ id }) => id !== action.payload.id
            );
            state.members = newMembers;
        },
        clearInfo: (state, action) => {
            state.name = "";
            state.duration = 0;
            state.totalExpense = 0;
            state.majorID = "";
            state.keyword = "";
            state.members = [];
        },
        addMembers: (state, action) => {
            state.usersSelected = action.payload;
        },
        addInstructor: (state, action) => {
            state.instructor = action.payload;
        },
    },
});

export const { updateInfo, clearInfo, addMembers, removeMember } =
    topicRegisterSlice.actions;
export default topicRegisterSlice.reducer;
