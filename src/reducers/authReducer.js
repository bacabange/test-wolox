import {LOGIN} from '../config/types';

const initialState = {
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return state;

    default:
      return state;
  }
};

export default authReducer;
