import { createSlice } from "@reduxjs/toolkit";

const name = "listSlice";

const initialState = {
  darkMode: false,
  modal: false,
  project: false
};

const reducers = {
  openDarkMode: (state) => {
    state.darkMode = true;
  },
  closeDarkMode: (state) => {
    state.darkMode = false;
  },

};

export const listSlice = createSlice({
  name,
  initialState,
  reducers,
});

// Action creators are generated for each case reducer function
export const { openDarkMode, closeDarkMode, openModal, closeModal, openProject, closeProject } = listSlice.actions;

export default listSlice.reducer;
