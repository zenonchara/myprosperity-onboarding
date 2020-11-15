import { createSlice } from "@reduxjs/toolkit";
import Prefill from "app/prefill";

export const appSlice = createSlice({
  name: "app",
  initialState: Prefill("app") || {
    debug: false,
  },
  reducers: {
    toggleDebug: (state) => {
      state.debug = !state.debug;
      return state;
    },
  },
});

export const { toggleDebug } = appSlice.actions;

export default appSlice.reducer;
