import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    courseId:[],
};

export const courseInfoSlice = createSlice({
    initialState,
    name: 'courseInfo',
    reducers: {
        ADD :(state , action) => {
            state.courseId = action.payload;
        }
    }
})

export const {ADD} = courseInfoSlice.actions;
export default courseInfoSlice.reducer;