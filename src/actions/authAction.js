import {LOGIN, LOGIN_SUCCESS, LOGIN_FAIL} from '../config/types';

export const login = () => ({
  type: LOGIN,
  payload: {user: null},
});

export const loginSucess = user => ({
  type: LOGIN_SUCCESS,
  payload: {user},
});

export const loginFail = error => ({
  type: LOGIN_FAIL,
  payload: {error},
});

export const signIn = ({name, email, lastName, age}) => {
  return async dispatch => {
    dispatch(login());

    try {
      const response = await fetch('http://localhost:3000/sign_in', {
        method: 'POST',
        body: JSON.stringify({
          name,
          email,
          lastName,
          age,
        }),
      });

      dispatch(loginSucess({name, email, lastName, age}));
    } catch (error) {
      dispatch(loginFail(error));
    }
  };
};
