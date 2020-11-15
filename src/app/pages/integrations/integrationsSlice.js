import { createSlice } from "@reduxjs/toolkit";
import Prefill from "app/prefill";

export const integrationsSlice = createSlice({
  name: "integrations",
  initialState: Prefill("integrations") || {},
  reducers: {
    setIntegrations: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setIntegrations } = integrationsSlice.actions;

export default integrationsSlice.reducer;
