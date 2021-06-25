import {LOGIN} from '../config/types';

export const login = (email, password) => ({
  type: LOGIN,
  payload: {email, password},
});
