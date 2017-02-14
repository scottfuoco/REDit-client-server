const loginReducer = (state = false, action) => {
  switch (action.type) {
    case 'LOGIN':
      return true;
    case 'LOGOUT':
      console.log('hi');
      return false;
    default:
      return state;
  }
};

export default loginReducer;
