import React, { Component } from 'react';
import {
  Card,
  CardItem,
  Left,
  Thumbnail,
  Right,
  Icon,
  Title,
  Subtitle,
  Content,
  Badge
} from 'native-base';
import { Text, View, TouchableOpacity } from 'react-native';
import apiKey from '../../constants/keys';
import * as api from '../api';
import { Ionicons } from '@expo/vector-icons';

class InfoCard extends Component {
  state = { location: {} };
  componentDidMount() {
    let { location } = this.props;
    if (location.photos) {
      return Promise.all([
        location,
        fetch(
          `https://maps.googleapis.com/maps/api/place/photo?maxwidth=150&maxheight=150&photoreference=${location.photos[0].photo_reference}&key=${apiKey}`
        ),
        api.getNumberOfUsersGoing(location.id)
      ]).then(([location, img, usersGoing]) => {
        location.img = img.url;
        location.usersGoing = usersGoing;
        this.setState({ location });
      });
    } else {
      location.img = false;
      this.setState({ location });
    }
  }
  render() {
    const { navigation } = this.props;
    const { location } = this.state;
    return (
      <View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Info', {
              back: 'Home',
              location
            })
          }
        >
          <Card>
            <CardItem bordered>
              <Left>
                <Thumbnail
                  source={
                    location.img
                      ? { uri: location.img }
                      : require('../images/placeholder-img.png')
                  }
                  style={{
                    width: 90,
                    height: 80,
                    borderRadius: 5,
                    marginRight: 10
                  }}
                />
                <View style={{ alignItems: 'flex-start', top: -10, flex: 1 }}>
                  <Text style={{ fontSize: 16, fontWeight: '400' }}>
                    {location.name}
                  </Text>

                  <Text style={{ fontWeight: '200' }}>
                    {' '}
                    {location.usersGoing} going {location.distanceFromUser}km
                    away
                  </Text>
                </View>
              </Left>

              <Ionicons
                name='ios-arrow-forward'
                size={24}
                color='#DE4C5D'
              ></Ionicons>
            </CardItem>
          </Card>
        </TouchableOpacity>
      </View>
    );
  }
}
export default InfoCard;
