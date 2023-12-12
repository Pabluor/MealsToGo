import { View, StyleSheet } from 'react-native'
import React from 'react'
import { Avatar, IconButton, Card, Text } from 'react-native-paper';
import RestaurantRating from './restaurant-rating.component';
import styled from 'styled-components/native'
import { SvgXml } from 'react-native-svg';
import open from '../../assets/open';


const RestaurantCard = styled(Card)`
  padding: ${(props) => props.theme.space[2]};
  border-radius: ${(props) => props.theme.space[1]};
`
const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[1]};
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin-bottom: ${(props) => props.theme.space[3]};
`;

const Title = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
  margin-bottom:  ${(props) => props.theme.space[2]}
`;

const Address = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.caption};
  margin-top:  ${(props) => props.theme.space[2]}
`;

const RatingOpenedContainer = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`

const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = 'Nouveau component',
    icon,
    photos = ['https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'],
    address = '100 some random street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily
  } = restaurant

  return (
    <RestaurantCard >
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Card.Content>
        <Title >{name}</Title>
        <RatingOpenedContainer>
          <RestaurantRating rating={rating} />
          {isOpenNow && <SvgXml width="24" height="24" xml={open} />}
        </RatingOpenedContainer>
        <Address>{address}</Address>
      </Card.Content>
    </RestaurantCard>
  )
}

export default RestaurantInfo