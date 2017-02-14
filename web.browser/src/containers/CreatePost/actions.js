export const logout = () => ({
  type: 'LOGOUT'
});

export const attemptCreatePost = () => dispatch => {
  fetch(`${URL}/auth/logout`)
    .then(res => res.json())
    .then(json => {
      dispatch(logout());
    });
};
