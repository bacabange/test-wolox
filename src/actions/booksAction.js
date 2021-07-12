import {
  GET_BOOKS,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_FAIL,
  SEARCH_BOOKS,
} from '../config/types';

export const getBooks = () => ({
  type: GET_BOOKS,
  payload: {books: []},
});

export const getBooksSucess = books => ({
  type: GET_BOOKS_SUCCESS,
  payload: {books},
});

export const getBooksFail = error => ({
  type: GET_BOOKS_FAIL,
  payload: {error},
});

export const fetchBooks = () => {
  return async dispatch => {
    dispatch(getBooks());

    try {
      const response = await fetch('http://localhost:3000/books');
      const books = await response.json();

      dispatch(getBooksSucess(books));
    } catch (error) {
      dispatch(getBooksFail(error));
    }
  };
};

export const searchBooks = q => ({
  type: SEARCH_BOOKS,
  payload: {q},
});
