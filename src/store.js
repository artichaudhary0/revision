import { configureStore } from "@reduxjs/toolkit";
// import postReducer from "./slice";
import postReducer from "./SliceFetchPost";

export const store = configureStore({
  reducer: {
    posts: postReducer,
  },
});
