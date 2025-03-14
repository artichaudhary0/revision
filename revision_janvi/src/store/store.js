import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../slice/postsSlice";

const store = configureStore({
  reducer: {
    posts: postReducer,
  },
});

export default store;
