import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import InfoCard from './InfoCard';

export default class List extends Component {
  render() {
    const { locations, navigation } = this.props;
    return (
      <ScrollView>
        {locations.map(location => {
          return (
            <InfoCard
              navigation={navigation}
              location={location}
              key={location.id}
            />
          );
        })}
      </ScrollView>
    );
  }
}
