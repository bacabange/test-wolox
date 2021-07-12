import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Pressable,
} from 'react-native';
import {connect} from 'react-redux';
import _ from 'lodash';
import {colors} from '../../config/constants';
import image from '../../assets/images/bc_nav_bar.png';
import TextInput from '../Form/TextInput';
import {searchBooks} from '../../actions/booksAction';

const Header = ({scene, navigation, onSearchBooks, ...props}) => {
  const [openSearch, setOpenSearch] = useState(false);
  const [searchText, setSearchText] = useState(null);

  useEffect(() => {
    _.debounce(() => onSearchBooks(searchText), 500)();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  const toggleSearchInput = async () => {
    await setOpenSearch(!openSearch);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.header}>
          {navigation.canGoBack() ? (
            <Pressable onPress={() => navigation.goBack()}>
              <Image source={require('../../assets/images/ic_back.png')} />
            </Pressable>
          ) : (
            <Image
              source={require('../../assets/images/ic_notifications.png')}
            />
          )}

          {openSearch ? (
            <View style={styles.searchContainer}>
              <TextInput
                placeholder="SEARCH"
                value={searchText}
                onChangeText={setSearchText}
              />
            </View>
          ) : (
            <Text style={styles.screenName}>{scene.route.name}</Text>
          )}
          <Pressable onPress={toggleSearchInput}>
            <Image source={require('../../assets/images/ic_search.png')} />
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchBooks: q => {
      dispatch(searchBooks(q));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

const styles = StyleSheet.create({
  container: {
    height: 120,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 8,
  },
  screenName: {
    fontFamily: 'Lato-Bold',
    color: colors.white,
    fontSize: 18,
  },
  searchContainer: {width: 300},
});
