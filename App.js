import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import RestaurantsScreen from './src/features/restaurants/restaurants.screen';
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";



const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default App;