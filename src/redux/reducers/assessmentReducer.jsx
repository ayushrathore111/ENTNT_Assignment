const initialState = {};

const assessmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ASSESSMENT':
      return { ...state, [action.payload.jobId]: action.payload.questions };
    case 'EDIT_ASSESSMENT':
      return { ...state, [action.payload.jobId]: action.payload.questions };
    default:
      return state;
  }
};

export default assessmentReducer;
