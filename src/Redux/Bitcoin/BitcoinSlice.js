import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  total: 36000,
};
const bitcoinSlice = createSlice({
  name: "bitcoin", // this name using in action type
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
  },
});

export const BitcoinReducer = bitcoinSlice.reducer;
export const { changeHour} = bitcoinSlice.actions;
