import React from 'react';
import {StyleSheet, View, SafeAreaView, ImageBackground} from 'react-native';
import image from '../../assets/images/bc_inicio.png';

const AuthContainer = ({children}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.imageBackground}>
        <SafeAreaView style={styles.safeArea}>{children}</SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default AuthContainer;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  safeArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
