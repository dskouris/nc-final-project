import { View, Image, Text } from "react-native";
import React, { Component } from "react";
import footieImg from "../images/football.jpeg";

export default class Carousel extends Component {
  render() {
    return (
      <View
        style={{
          height: 130,
          width: 130,
          marginLeft: 20,
          borderWidth: 0.5,
          borderColor: "#dddddd"
        }}
      >
        <View style={{ flex: 2 }}>
          <Image source={footieImg} style={{ flex: 1, resizeMode: "cover" }} />
        </View>
        <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
          <Text>Home</Text>
        </View>
      </View>
    );
  }
}
