const weeksReducer = (state=[], action) => {
  switch (action.type) {
    case 'ADD_WEEK':
      return state
    case 'ADD_LESSONS':
      return state
    case 'LOAD_LESSONS':
      return action.payload;
    default:
      return state;
  }
};

export default weeksReducer;
