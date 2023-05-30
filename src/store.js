import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "../src/redux/counterSlice.js";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});

