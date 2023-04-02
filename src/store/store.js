import { configureStore } from "@reduxjs/toolkit";
import darkModeSlice from "./slice/darkModeSlice";
import navbarHidden from "./slice/navbarHidden";
import videoSlice from "./slice/videoSlice";

export const store = configureStore({
  reducer: {
    darkMode: darkModeSlice,
    navbarHidden: navbarHidden,
    videoSection: videoSlice,
  },
});
