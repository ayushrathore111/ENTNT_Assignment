import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const jobSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    addJob: (state, action) => {
      state.push(action.payload);
    },
    deleteJob: (state, action) => {
      return state.filter((job) => job.id !== action.payload);
    },
  },
});

export const { addJob, deleteJob } = jobSlice.actions;

export default jobSlice.reducer;
