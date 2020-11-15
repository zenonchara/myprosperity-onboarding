import { createSlice } from "@reduxjs/toolkit";
import Prefill from "app/prefill";

export const prioritiesSlice = createSlice({
  name: "priorities",
  initialState: Prefill("priorities") || {
    revenue: "medium",
    brand: "medium",
    efficiency: "medium",
    engagement: "medium",
  },
  reducers: {
    setPriorities: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setPriorities } = prioritiesSlice.actions;

export default prioritiesSlice.reducer;
