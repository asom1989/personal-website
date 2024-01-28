import { createSlice } from "@reduxjs/toolkit";

// Initialt tillstånd för din Redux-reducer
const initialState = {
  mode: JSON.parse(localStorage.getItem("darkMode")) || "dark",
};
// Skapa ett Slice med namnet "darkMode"
export const darkModeSlice = createSlice({
  name: "darkMode",
  initialState, // Ange det initiala tillståndet
  reducers: {
    // En reducer för att växla mellan mörkt och ljust läge
    toggleDarkMode: (state) => {
      // Invertera aktuellt läge
      state.mode = state.mode === "dark" ? "light" : "dark";
      // Spara det nya läget i localStorage för att behålla det mellan sidan laddningar
      localStorage.setItem("darkMode", JSON.stringify(state.mode));
    },
  },
});
// Exportera actions skapade av createSlice för att användas i andra delar av koden
export const { toggleDarkMode } = darkModeSlice.actions;
// Exportera reducer-funktionen för att användas i Redux store
export default darkModeSlice.reducer;
