import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  total: 36000,
};
const clockSlice = createSlice({
  name: "clock", // this name using in action type
  initialState, //this is initial state
  reducers: {
    changeHour: (state, action) => {
      if (action.payload > 0 && state.total + action.payload * 60 * 60 > 36000) {
        state.total = 36000;
      } else if (action.payload < 0 && state.total + action.payload * 60 * 60 < 0) {
        if (state.total <= 0) {
          state.total = 0;
        }
      } else {
        state.total = state.total + action.payload * 60 * 60;
      }
    },
    changeMinute: (state, action) => {
      if (action.payload > 0 && state.total + action.payload * 60 > 36000) {
        state.total = 36000;
      } else if (action.payload < 0 && state.total + action.payload * 60 < 0) {
        if (state.total <= 0) {
          state.total = 0;
        }
      } else {
        state.total = state.total + action.payload * 60;
      }
    },
    changeSecond: (state, action) => {
      if (action.payload > 0 && state.total + action.payload > 36000) {
        state.total = 36000;
      } else if (action.payload < 0 && state.total + action.payload < 0) {
        if (state.total <= 0) {
          state.total = 0;
        }
      } else {
        state.total = state.total + action.payload;
      }
    },
    downCount: function (state, action) {
      const { value, timer } = action.payload;
      if (state.total - value < 0) {
        state.total = 0;
        clearInterval(timer);
      } else {
        state.total -= value;
        // bi dakika
      }
    },
  },
});

export const ClockReducer = clockSlice.reducer;
export const { changeHour, changeMinute, changeSecond, downCount } = clockSlice.actions;
