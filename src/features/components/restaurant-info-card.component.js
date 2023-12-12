// import { StyleSheet } from 'react-native'
// import React from 'react'
// import { Card, Text } from 'react-native-paper';
// import RestaurantRating from './restaurant-rating.component';
// import styled from 'styled-components/native'
// import { SvgXml } from 'react-native-svg';
// import open from '../../assets/open';

// const Title = styled.Text`
//   font-size: ${(props) => props.theme.sizes[1]};
//   margin-bottom: ${(props) => props.theme.space[2]};
// `

// const RestaurantCard = styled(Card)`
//   padding: ${(props) => props.theme.space[2]};
//   border-radius: ${(props) => props.theme.space[1]};
// `

// const CardCover = styled(Card.Cover)`
// borderRadius: ${(props) => props.theme.space[1]};
// height: 180px;
// resizeMode: stretch;
// `

// const RestaurantInfoCard = ({ restaurant = {} }) => {
//   const {
//     name = 'Louis XIV',
//     icon,
//     photos = ['https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'],
//     address = '100 some random street',
//     isOpenNow = true,
//     rating = 2,
//     isClosedTemporarily
//   } = restaurant

//   return (
//     <RestaurantCard >
//       <SvgXml width="100" height="100" xml={open} />
//       <Card.Cover source={{ uri: photos[0] }} />
//       <Card.Content >
//         <Title style={{ marginTop: 8 }} variant="titleMedium">{name}</Title>
//         <View>
//           <RestaurantRating rating={rating} />
//         </View>
//         <Text variant="bodyMedium">{address}</Text>
//       </Card.Content>
//     </RestaurantCard>
//   )
// }

// export default RestaurantInfoCard