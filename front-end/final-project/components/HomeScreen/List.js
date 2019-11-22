import React, { Component } from 'react';
import { Image, Text, ScrollView, View, Dimensions } from 'react-native';

import InfoCard from './InfoCard';
import { Content } from 'native-base';

export default class List extends Component {
  render() {
    const { locations, navigation, userCoords } = this.props;
    return (
      <ScrollView>
        <Content padder>
          {locations.map(location => {
            return (
              <InfoCard
                navigation={navigation}
                location={location}
                userCoords={userCoords}
                key={location.id}
              />
            );
          })}
        </Content>
      </ScrollView>
    );
  }
}
