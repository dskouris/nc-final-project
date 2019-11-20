import React, { Component } from 'react';
import { Card, CardItem, Left, Thumbnail, Right, Icon } from 'native-base';
import { Text, View, TouchableOpacity } from 'react-native';
import apiKey from '../../constants/keys';
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
        )
      ]).then(([location, img]) => {
        location.img = img.url;
        this.setState({ location });
      });
    } else {
      location.img = 'IMG-NOTFOUND-HERE';
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
            <CardItem>
              <Left>
                <Thumbnail source={{ uri: location.img }} />
                <View>
                  <Text>{location.name}</Text>
                  <Text>0 going</Text>
                  <Text>{location.distanceFromUser}km away</Text>
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
