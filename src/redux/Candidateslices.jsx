import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const candidateSlice = createSlice({
  name: 'candidates',
  initialState,
  reducers: {
    addCandidate: (state, action) => {
      state.push(action.payload);
    },
    updateCandidateStatus: (state, action) => {
      const { id, status } = action.payload;
      const candidate = state.find((candidate) => candidate.id === id);
      if (candidate) {
        candidate.status = status;
      }
    },
  },
});

export const { addCandidate, updateCandidateStatus } = candidateSlice.actions;

export default candidateSlice.reducer;
