import React from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';

const AppContainer = ({children}) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>{children}</SafeAreaView>
    </View>
  );
};

export default AppContainer;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  safeArea: {
    flex: 1,
  },
});
