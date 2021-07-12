import React from 'react';
import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import {colors} from '../config/constants';
import PropTypes from 'prop-types';

const BookItem = ({book, onPress, style, ...props}) => {
  return (
    <Pressable style={[styles.container, style]} onPress={() => onPress(book)}>
      <Image
        source={
          book.image_url
            ? {uri: book.image_url}
            : require('../assets/images/books/img_book_placeholder.png')
        }
        style={styles.image}
      />
      <View style={styles.info}>
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.author}>{book.author}</Text>
      </View>
    </Pressable>
  );
};

BookItem.propTypes = {
  book: PropTypes.object.isRequired,
  onPress: PropTypes.func,
};

BookItem.defaultProps = {
  onPress: () => {},
};

export default BookItem;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    flexDirection: 'row',
    paddingVertical: 16,
    paddingHorizontal: 22,
    backgroundColor: colors.white,
    marginBottom: 16,
    shadowColor: colors.dark,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.22,
    elevation: 3,
  },
  image: {
    width: 40,
    height: 60,
  },
  info: {
    marginLeft: 8,
  },
  title: {
    fontFamily: 'Lato-Bold',
    fontSize: 18,
  },
  author: {
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    color: colors.gray,
  },
});
