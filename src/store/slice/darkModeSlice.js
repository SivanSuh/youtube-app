import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};
export const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    changeDarkMode: (state) => {
      state.value = !state.value;
    },
  },
});
export const { changeDarkMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;
