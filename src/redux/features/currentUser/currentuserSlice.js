import { createSlice } from "@reduxjs/toolkit";

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState: {
    currentUser: null,
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    getCurrentUser: (state) => {
      return state.currentUser;
    },
  },
});

export const { setCurrentUser, getCurrentUser } = currentUserSlice.actions;

export default currentUserSlice.reducer;
