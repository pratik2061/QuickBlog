import { configureStore } from "@reduxjs/toolkit";
import blogReducer from '../slice/blogSlice'


  const store = configureStore({
  reducer : blogReducer,
})

export default store;