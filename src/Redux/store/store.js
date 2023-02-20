import { configureStore } from "@reduxjs/toolkit";
import courseInfoSlice from "../slices/courseInfoSlice";

export default configureStore({
  reducer:{
    courseInfo : courseInfoSlice,
  }
})