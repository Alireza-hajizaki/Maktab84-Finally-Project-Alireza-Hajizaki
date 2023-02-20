import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const courseInfoSlice = createSlice({
    initialState,
    name: 'courseInfo',
    reducers: {
        ADD :(state , action) => {
            state.push(action.payload)
        }
    }
})

export const {Add} = courseInfoSlice.actions;
export default courseInfoSlice.reducer;