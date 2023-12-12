import { View, StyleSheet } from 'react-native'
import React from 'react'

import { SvgXml } from 'react-native-svg';
import star from '../../assets/star';


const RestaurantRating = ({ rating }) => {
  return (
    <View style={styles.ratingWrapper}>
      {[...Array(rating)].map((e, i) =>
        <SvgXml key={i} width="24" height="24" xml={star} />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  ratingWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  star: {
    padding: 0,
    margin: -8,
  }
})

export default RestaurantRating