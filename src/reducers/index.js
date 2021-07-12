import {combineReducers} from 'redux';

import auth from './authReducer';
import books from './booksReducer';

const reducers = combineReducers({
  auth,
  books,
});

export default reducers;
