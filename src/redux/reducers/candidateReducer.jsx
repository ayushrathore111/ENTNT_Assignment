const initialState = [];

const candidateReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CANDIDATE':
      return [...state, action.payload];
    case 'UPDATE_CANDIDATE_STATUS':
      return state.map(candidate => 
        candidate.id === action.payload.id ? { ...candidate, status: action.payload.status } : candidate
      );
    default:
      return state;
  }
};

export default candidateReducer;
