import { configureStore } from "@reduxjs/toolkit";
import { ClockReducer } from "./Clock/ClockSlice";

const store = configureStore({
  reducer: {
    clock: ClockReducer,
  },
});

export default store;