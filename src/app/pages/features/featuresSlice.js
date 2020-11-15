import { createSlice } from "@reduxjs/toolkit";
import Prefill from "app/prefill";

export const featuresSlice = createSlice({
  name: "features",
  initialState: Prefill("features") || {
    revenue: "medium",
    brand: "medium",
    efficiency: "medium",
    engagement: "medium",
  },
  reducers: {
    setFeatures: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setFeatures } = featuresSlice.actions;

export default featuresSlice.reducer;
