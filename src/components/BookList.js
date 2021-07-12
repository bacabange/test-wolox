import React from 'react';
import {StyleSheet, Text, FlatList} from 'react-native';
import PropTypes from 'prop-types';
import BookItem from './BookItem';

const BookList = ({data, onPressItem}) => {
  return (
    <>
      {data.length > 0 ? (
        <FlatList
          data={data}
          renderItem={({item}) => {
            return <BookItem book={item} onPress={onPressItem} />;
          }}
          keyExtractor={item => item.id}
        />
      ) : (
        <Text>No se encontraron libros</Text>
      )}
    </>
  );
};

BookList.propTypes = {
  data: PropTypes.array,
  isLoading: PropTypes.bool,
  onPressItem: PropTypes.func,
};

BookList.defaultProps = {
  data: [],
  onPressItem: () => {},
};

export default BookList;

const styles = StyleSheet.create({});
