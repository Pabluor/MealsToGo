import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Searchbar } from 'react-native-paper';
import RestaurantInfo from '../components/restaurant-info.component';

const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <Searchbar
          placeholder='Search'
          onChangeText={setSearchQuery}
          value={searchQuery}
          elevation={2}
        />
      </View>

      <View style={styles.list}>
        <RestaurantInfo />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  search: {
    backgroundColor: 'thistle',
    justifyContent: 'center',
    padding: 16,
    borderBottomWidth: 4,
    borderBottomColor: 'gray',
  },
  list: {
    flex: 1,
    backgroundColor: 'teal',
    paddingTop: 12,
    padding: 16,
  },
});


export default RestaurantsScreen