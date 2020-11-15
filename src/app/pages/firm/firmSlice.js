import { createSlice } from "@reduxjs/toolkit";
import Prefill from "app/prefill";

export const firmSlice = createSlice({
  name: "firm",
  initialState: Prefill("firm") || {
    clientCount: 0,
    staffCount: 0,
    firmType: "financialService",
    avgClientWorth: 10000000,
    totalRevenue: 0
  },
  reducers: {
    setFirm: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setFirm } = firmSlice.actions;

export default firmSlice.reducer;
