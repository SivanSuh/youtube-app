import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: true,
};

export const navbarHidden = createSlice({
  name: "navbar-hidden",
  initialState,
  reducers: {
    changeNavbarHidden: (state) => {
      state.value = !state.value;
    },
  },
});

export const { changeNavbarHidden } = navbarHidden.actions;
export default navbarHidden.reducer;
