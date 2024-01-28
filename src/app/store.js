import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "../features/darkModeSlice";

// Konfigurera Redux store med combineReducers från Redux Toolkit
export const store = configureStore({
  reducer: {
    // Lägg till reducer för darkMode i Redux store
    darkMode: darkModeReducer,
  },
});
