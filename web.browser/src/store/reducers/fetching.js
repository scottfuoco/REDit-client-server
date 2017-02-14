const postFilterReducer = (state = false, action) => {
  switch (action.type) {
    case 'FETCHING_RESOURCE':
      return true;
    case 'DONE_FETCHING':
      return false;
    default:
      return state;
  }
};

export default postFilterReducer;
