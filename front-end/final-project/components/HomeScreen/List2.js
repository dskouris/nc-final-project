import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { Card, CardItem, Icon, Left, Thumbnail, Right } from "native-base";
// import InfoCard from "../components/HomeScreen/InfoCard";

export default class List2 extends Component {
  render() {
    return (
      <View>
        <Card style={{ alignItems: "center" }}>
          <CardItem header>
            <Icon name="map" style={{ color: "green" }} />
            <Text>Welcome to Manchester!!! UHUUUUUUUU </Text>
            <Icon name="heart" style={{ color: "red" }} />
          </CardItem>
        </Card>
      </View>
    );
  }
}
