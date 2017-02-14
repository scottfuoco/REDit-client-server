export const logout = () => ({
  type: 'LOGOUT'
});

export const attemptLogout = () => dispatch => {
  fetch(`${URL}/auth/logout`)
    .then(res => res.json())
    .then(json => {
      dispatch(logout());
    });
};
