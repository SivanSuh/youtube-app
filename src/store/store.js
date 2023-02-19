import { configureStore } from "@reduxjs/toolkit";
import darkModeSlice from "./slice/darkModeSlice";

export const store = configureStore({
  reducer: {
    darkMode: darkModeSlice,
  },
});
