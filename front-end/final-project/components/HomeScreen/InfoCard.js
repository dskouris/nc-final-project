import React, { Component } from 'react';
import { Card, CardItem, Left, Thumbnail, Right } from 'native-base';
import { Text, View, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';

const InfoCard = ({ location, navigation, userCoords }) => {
  return (
    <View>
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={require('../images/robot-dev.png')} />
            <View>
              <Text>{location.name}</Text>
              <Text>0 going</Text>
              <Text>{location.distanceFromUser}km away</Text>
            </View>
          </Left>

          <Button
            title='See more info'
            onPress={() =>
              navigation.navigate('Info', {
                back: 'Home',
                location
              })
            }
          />
        </CardItem>
      </Card>
    </View>
  );
};
export default InfoCard;
