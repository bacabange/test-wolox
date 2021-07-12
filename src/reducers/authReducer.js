import {LOGIN, LOGIN_SUCCESS, LOGIN_FAIL} from '../config/types';

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {...state, user: null, isLoading: true};
    case LOGIN_SUCCESS:
      return {...state, user: action.payload.user, isLoading: false};
    case LOGIN_FAIL:
      return {
        ...state,
        user: null,
        isLoading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default authReducer;
