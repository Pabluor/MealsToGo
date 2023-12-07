import { View, StyleSheet } from 'react-native'
import React from 'react'
import { Avatar, IconButton, Card, Text } from 'react-native-paper';
import { spacing } from '../../utils/sizes';
import RestaurantRating from './restaurant-rating.component';

spacing

const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = 'Some Restaurant',
    icon,
    photos = ['https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'],
    address = '100 some random street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily
  } = restaurant

  return (
    <Card style={styles.restaurantCard}>
      <Card.Cover style={styles.restaurantPhoto} source={{ uri: photos[0] }} />
      <Card.Content style={styles.restaurantInfo}>
        <Text style={styles.restaurantName} variant="titleMedium">{name}</Text>
        <RestaurantRating rating={rating} />
        <Text variant="bodyMedium">{address}</Text>
      </Card.Content>
    </Card>
  )
}

const styles = StyleSheet.create({
  restaurantCard: {
    padding: spacing.md,
    borderRadius: 4,
  },
  restaurantPhoto: {
    borderRadius: 4,
    height: 180,
    resizeMode: 'stretch'
  },
  restaurantInfo: {
    padding: 0,
    marginHorizontal: -8
  },
  restaurantName: {
    marginTop: spacing.md,
    marginBottom: spacing.sm
  },
})

export default RestaurantInfo