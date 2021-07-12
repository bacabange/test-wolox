import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import Button from '../components/Form/Button';
import AppContainer from '../components/Layout/AppContainer';
import {colors} from '../config/constants';
import {connect} from 'react-redux';
import BookItem from '../components/BookItem';

const BookDetailScreen = ({route, navigation, books}) => {
  const {item} = route.params;
  const [relatedBooks, setRelatedBooks] = useState([]);

  useEffect(() => {
    const rBooks = books
      .filter(book => book.genre === item.genre)
      .filter(book => book.id !== item.id);
    setRelatedBooks(rBooks);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item]);

  const goToDetail = item => {
    navigation.navigate('BookDetail', {item});
  };

  return (
    <AppContainer>
      <ScrollView style={styles.container}>
        <View style={styles.cardContainer}>
          <View style={styles.bookInfo}>
            <Image
              source={
                item.image_url
                  ? {uri: item.image_url}
                  : require('../assets/images/books/img_book_placeholder.png')
              }
              style={styles.image}
            />

            <View style={styles.bookText}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.availability}>Available</Text>
              <Text style={styles.textMuted}>{item.author}</Text>
              <Text style={styles.textMuted}>{item.year}</Text>
              <Text style={styles.textMuted}>{item.genre}</Text>
            </View>
          </View>

          <View style={styles.bookActions}>
            <Button
              type="secondary"
              onPress={() => {}}
              text="ADD TO WISHLIST"
              containerStyle={{marginBottom: 8}}
            />
            <Button onPress={() => {}} text="RENT" />
          </View>
        </View>

        {relatedBooks.length > 0 && (
          <>
            <Text style={styles.headSection}>Related Books</Text>
            <ScrollView horizontal style={styles.relatedBooksContainer}>
              {relatedBooks.map(book => {
                return (
                  <BookItem
                    book={book}
                    key={book.id}
                    style={{marginRight: 8}}
                    onPress={goToDetail}
                  />
                );
              })}
            </ScrollView>
          </>
        )}

        {item.comments && (
          <>
            <Text style={styles.headSection}>Comments</Text>
            <View style={styles.cardContainer}>
              {item.comments.map(comment => {
                return (
                  <View style={styles.commentContainer} key={comment.id}>
                    <Image
                      style={styles.commentImage}
                      source={require('../assets/images/img_user1.png')}
                    />

                    <View style={styles.commentInfo}>
                      <Text style={styles.commentName}>{comment.name}</Text>
                      <Text style={styles.comment}>{comment.comment}</Text>
                    </View>
                  </View>
                );
              })}
            </View>
          </>
        )}
      </ScrollView>
    </AppContainer>
  );
};

const mapStateToProps = state => {
  return {
    books: state.books.all,
  };
};

export default connect(mapStateToProps)(BookDetailScreen);

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 8,
    flexDirection: 'column',
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
  bookInfo: {
    flexDirection: 'row',
    marginBottom: 32,
  },
  bookText: {
    marginLeft: 16,
  },
  image: {
    width: 80,
    height: 120,
  },
  title: {
    fontFamily: 'Lato-Bold',
    fontSize: 22,
    marginBottom: 4,
  },
  availability: {
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    color: colors.lime,
  },
  textMuted: {
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    color: colors.gray,
    textTransform: 'capitalize',
  },
  relatedBooksContainer: {
    flexDirection: 'row',
  },
  headSection: {
    fontSize: 18,
    color: colors.gray,
    marginVertical: 8,
  },
  commentContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  commentInfo: {
    marginLeft: 8,
    flexDirection: 'column',
    flex: 1,
  },
  commentName: {
    fontFamily: 'Lato-Bold',
    fontSize: 16,
  },
  comment: {
    color: colors.gray,
    flexShrink: 1,
  },
});
