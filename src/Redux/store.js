import { configureStore } from "@reduxjs/toolkit";
import vocabularyReducer from "../Redux/slices/vocabularySlice";
import darkModeReducer from "../Redux/slices/darkModeSlice";
const store = configureStore({
  reducer: {
    vocabulary: vocabularyReducer,
    darkMode: darkModeReducer,
  },
});
export default store;
