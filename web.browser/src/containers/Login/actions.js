import { URL } from '../../constants';

export const login = () => ({
  type: 'LOGIN'
});

export const attemptLogin = (email, password) => dispatch => {
  fetch(`${URL}/auth/login`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({
      login: {
        email,
        password
      }
    })
  })
    .then(res => res.json())
    .then(json => {
      console.log(json);
      if (json.userid) {
        dispatch(login());
      }
    });;
};
