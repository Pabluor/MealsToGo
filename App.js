import React, { useState } from 'react';
import { StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import RestaurantsScreen from './src/features/restaurants/restaurants.screen';

const App = () => {
  return (
    <SafeAreaView style={styles.appContainer}>
      <RestaurantsScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default App;