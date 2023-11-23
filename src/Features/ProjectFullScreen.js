import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = null;
export const projectFullScreenSlice = createSlice({
    name: 'projectFullScreen',
    initialState: { value: initialStateValue },
    reducers: {
        openFullScreen: (state, action) => {
            state.value = action.payload;
        },
        closeFullScreen: (state) => {
            state.value = initialStateValue;
        },
    },
});

export const { openFullScreen, closeFullScreen } = projectFullScreenSlice.actions;
export default projectFullScreenSlice.reducer;
