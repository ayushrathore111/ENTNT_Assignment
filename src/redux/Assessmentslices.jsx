import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const assessmentSlice = createSlice({
  name: 'assessments',
  initialState,
  reducers: {
    addAssessment: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addAssessment } = assessmentSlice.actions;

export default assessmentSlice.reducer;
