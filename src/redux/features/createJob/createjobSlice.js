import { createSlice } from "@reduxjs/toolkit";

const createJobSlice = createSlice({
  name: "createJob",
  initialState: {
    jobDescription: null,
    mustHaveQualifications: null,
    preferredQualifications: null,
  },
  reducers: {
    setJobDescription: (state, action) => {
      state.jobDescription = action.payload;
    },
    setMustHaveQualifications: (state, action) => {
      state.mustHaveQualifications = action.payload;
    },
    setPreferredQualifications: (state, action) => {
      state.preferredQualifications = action.payload;
    },
  },
});

export const {
  setJobDescription,
  setMustHaveQualifications,
  setPreferredQualifications,
} = createJobSlice.actions;

export default createJobSlice.reducer;
