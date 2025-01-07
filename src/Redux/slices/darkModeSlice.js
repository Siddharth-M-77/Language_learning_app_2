import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  enabled: true,
};

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
        
      state.enabled = !state.enabled;
    },
  },
});
export const { toggleDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
