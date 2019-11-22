import React, { Component } from "react";
import { Image, Text, ScrollView, View, Dimensions } from "react-native";

import InfoCard from "./InfoCard";
import { Content } from "native-base";

export default class List extends Component {
  render() {
    const { locations, navigation, userCoords } = this.props;
    return (
      <ScrollView>
<<<<<<< HEAD
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
=======
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
>>>>>>> 0959840394aee4fe73cc72451503b76f72f8998e
        </Content>
      </ScrollView>
    );
  }
}
