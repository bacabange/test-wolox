import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import AppContainer from '../components/Layout/AppContainer';
import BookList from '../components/BookList';
import {fetchBooks} from '../actions/booksAction';
import withSpinner from '../components/HOC/withSpinner';
const BookListWithSpinner = withSpinner(BookList);

const HomeScreen = ({
  onGetBooks,
  books,
  isLoading,
  isFiltered,
  filtered,
  navigation,
}) => {
  useEffect(() => {
    onGetBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goToDetail = item => {
    navigation.navigate('BookDetail', {item});
  };

  return (
    <AppContainer>
      <BookListWithSpinner
        data={[...(isFiltered ? filtered : books)]}
        isLoading={isLoading}
        onPressItem={goToDetail}
      />
    </AppContainer>
  );
};

const mapStateToProps = state => {
  return {
    books: state.books.all,
    isLoading: state.books.isLoading,
    isFiltered: state.books.isFiltered,
    filtered: state.books.filtered,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetBooks: () => {
      dispatch(fetchBooks());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const styles = StyleSheet.create({});
