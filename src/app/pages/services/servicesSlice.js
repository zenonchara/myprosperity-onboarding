import { createSlice } from "@reduxjs/toolkit";
import Prefill from "app/prefill";

export const servicesSlice = createSlice({
  name: "services",
  initialState: Prefill("services") || {},
  reducers: {
    setServices: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setServices } = servicesSlice.actions;

export default servicesSlice.reducer;
