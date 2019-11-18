import { View, Image, Text } from "react-native";
import React, { Component } from "react";
import footieImg from "../images/football.jpeg";

export default class ListPopular extends Component {
  render() {
    return (
      <View
        style={{
          height: 130,
          width: 175,
          marginLeft: 20,
          borderWidth: 0.5,
          borderColor: "#dddddd"
        }}
      >
        <View style={{ flex: 2 }}>
          <Image source={footieImg} style={{ flex: 2, resizeMode: "cover" }} />
        </View>
        <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
          <Text>{this.props.location.name}</Text>
        </View>
      </View>
    );
  }
}
