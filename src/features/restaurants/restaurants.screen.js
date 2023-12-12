import { View, Text, SafeAreaView, StyleSheet, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { Searchbar } from 'react-native-paper';
import RestaurantInfo from '../components/restaurant-info.component';
import styled from "styled-components/native";


const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar
          placeholder='Search'
          onChangeText={setSearchQuery}
          value={searchQuery}
          elevation={2}
        />
      </SearchContainer>

      <RestaurantListContainer>
        <RestaurantInfo />
      </RestaurantListContainer>
    </SafeArea>
  )
}

export default RestaurantsScreen