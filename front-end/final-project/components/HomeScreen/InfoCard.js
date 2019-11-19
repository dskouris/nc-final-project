import React, { Component } from 'react';
import { Card, CardItem, Left, Thumbnail, Right } from 'native-base';
import { Text, View, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import * as utils from '../../utils/utils';

const InfoCard = ({ location, navigation, userCoords }) => {
  let distanceFromLocation = utils.calculateDistance(
    userCoords.latitude,
    userCoords.longitude,
    location.geometry.location.lat,
    location.geometry.location.lng
  );
  return (
    <View>
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={require('../images/robot-dev.png')} />
            <View>
              <Text>{location.name}</Text>
              <Text>0 going</Text>
              <Text>{distanceFromLocation}km away</Text>
            </View>
          </Left>

          <Button
            title='See more info'
            onPress={() =>
              navigation.navigate('Info', {
                back: 'Home',
                location,
                distanceFromLocation
              })
            }
          />
        </CardItem>
      </Card>
    </View>
  );
};
export default InfoCard;
