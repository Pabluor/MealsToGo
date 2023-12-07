import { View, StyleSheet } from 'react-native'
import React from 'react'
import { IconButton } from 'react-native-paper';

import { spacing } from '../../utils/sizes';


const RestaurantRating = ({ rating }) => {
  return (
    <View style={styles.ratingWrapper}>
      {[...Array(rating)].map((e, i) =>
        <IconButton
          key={i}
          size={spacing.lg}
          style={styles.star}
          icon='star'
          iconColor='goldenrod'
        />)}
    </View>
  )
}

const styles = StyleSheet.create({
  ratingWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: spacing.sm
  },
  star: {
    padding: 0,
    margin: -8,
  }
})

export default RestaurantRating