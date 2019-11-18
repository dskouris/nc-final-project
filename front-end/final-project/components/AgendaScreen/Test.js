import React, { Component } from "react";
import { Image, Text, ScrollView, View, Dimensions } from "react-native";
import cooking from "../images/cooking.jpeg";
import Carousel from "./Carousel";

const { height, width } = Dimensions.get("window");

export default class Test extends Component {
  render() {
    // const { isGoing, usersGoing, location, isLoading } = this.state;
    // const { navigation } = this.props;

    return (
      <ScrollView scrollEventThrottle={16}>
        <View style={{ flex: 1, paddingTop: 20 }}>
          <Text
            style={{ fontSize: 24, fontWeight: "700", paddingHorizontal: 20 }}
          >
            The most popular places
          </Text>
          <View style={{ height: 130, marginTop: 20 }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <Carousel />
              <Carousel />
              <Carousel />
              <Carousel />
            </ScrollView>
          </View>
          <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
            <Text
              style={{ fontSize: 24, fontWeight: "700", paddingHorizontal: 20 }}
            >
              List of places
            </Text>
            <Text style={{ fontWeight: "100", marginTop: 10 }}>
              {" "}
              See interesting places in the city{" "}
            </Text>
            <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
              <Image
                source={cooking}
                style={{
                  flex: 1,
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: "#dddddd"
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
