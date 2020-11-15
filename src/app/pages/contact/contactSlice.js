import { createSlice } from "@reduxjs/toolkit";
import Prefill from "app/prefill";

export const contactSlice = createSlice({
  name: "contact",
  initialState: Prefill("contact") || {
    businessName: "",
    contactName: "",
    email: "",
    website: "",
    logo: "",
    headerBackground: "light",
  },
  reducers: {
    setContact: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setContact } = contactSlice.actions;

export default contactSlice.reducer;
