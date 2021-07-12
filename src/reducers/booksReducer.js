import {
  GET_BOOKS,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_FAIL,
  SEARCH_BOOKS,
} from '../config/types';
import {searchBook} from '../config/utils';

const initialState = {
  all: [],
  filtered: [],
  isFiltered: false,
  isLoading: false,
  error: null,
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return {...state, all: [], isLoading: true};
    case GET_BOOKS_SUCCESS:
      return {...state, all: action.payload.books, isLoading: false};
    case GET_BOOKS_FAIL:
      return {
        ...state,
        all: [],
        isLoading: false,
        error: action.payload.error,
      };
    case SEARCH_BOOKS:
      if (action.payload.q !== null) {
        const filtered = searchBook(action.payload.q, state.all);
        return {...state, filtered, isFiltered: true};
      }

      return {...state, filtered: [], isFiltered: false};
    default:
      return state;
  }
};

export default booksReducer;
