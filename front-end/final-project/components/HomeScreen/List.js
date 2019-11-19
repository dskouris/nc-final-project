import React, { Component } from 'react';
import { Image, Text, ScrollView, View, Dimensions } from 'react-native';

import InfoCard from './InfoCard';

export default class List extends Component {
  render() {
    const { locations, navigation, userCoords } = this.props;
    return (
      <ScrollView>
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
      </ScrollView>
    );
  }
}

// const { height, width } = Dimensions.get("window");

{
  /* <View style={{ flex: 1, paddingTop: 20 }}> */
}
{
  /* <Text
            style={{ fontSize: 24, fontWeight: "700", paddingHorizontal: 20 }}
          >
            The most popular places
          </Text>
          <View style={{ height: 130, marginTop: 20 }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <ListPopular location={locations[0]} />
              <ListPopular location={locations[1]} />
            </ScrollView>
          </View> */
}
{
  /* <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
    <Text style={{ fontSize: 24, fontWeight: "700", paddingHorizontal: 20 }}>
      List of places
    </Text>
    <Text style={{ fontWeight: "100", marginTop: 10 }}>
      See interesting places in the city
    </Text>
    <ScrollView>
      {locations.map(location => {
        return (
          <InfoCard
            navigation={navigation}
            location={location}
            key={location.id}
          />
        );
      })} */
}
{
  /* <Image
                source={cooking}
                style={{
                  flex: 1,
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: "#dddddd"
                }}
              /> */
}
{
  /* </ScrollView>
  </View>
</View>; */
}
