import { createSlice } from "@reduxjs/toolkit";
import Prefill from "app/prefill";

export const plansSlice = createSlice({
  name: "plans",
  initialState: Prefill("plans") || {
    selectedPlan: "basic",
  },
  reducers: {
    setPlans: (state, action) => {
      state = {
        selectedPlan: action.payload.selectedPlan,
      };
      return state;
    },
  },
});

export const { setPlans } = plansSlice.actions;

export default plansSlice.reducer;
