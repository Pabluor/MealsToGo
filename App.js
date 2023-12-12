import React from 'react';
import { StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screen';
import { SafeArea } from './src/components/utility/safe-area.component';
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import { restaurantsRequest } from './src/services/restaurants/restaurants.service';

restaurantsRequest()

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName='Restaurants'
            screenOptions={{
              tabBarActiveTintColor: theme.colors.brand.primary
            }}
          >
            <Tab.Screen
              name="Restaurants"
              component={RestaurantsScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="restaurant" size={size} color={color} />
                )
              }}
            />
            <Tab.Screen
              name="Map"
              component={SafeArea}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="map" size={size} color={color} />
                )
              }}
            />
            <Tab.Screen
              name="Settings"
              component={SafeArea}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="settings" size={size} color={color} />
                )
              }}
            />
          </Tab.Navigator>
          <StatusBar style="auto" />
        </NavigationContainer>
      </ThemeProvider>
    </>
  );
};

export default App;