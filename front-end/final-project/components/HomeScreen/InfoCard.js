import React, { Component } from "react";
import { Card, CardItem, Left, Thumbnail, Right, Icon } from "native-base";
import { Text, View, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";

const InfoCard = ({ location, navigation, userCoords }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Info", {
            back: "Home",
            location
          })
        }
      >
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={require("../images/robot-dev.png")} />
              <View>
                <Text>{location.name}</Text>
                <Text>0 going</Text>
                <Text>{location.distanceFromUser}km away</Text>
              </View>
            </Left>

            <Ionicons
              name="ios-arrow-forward"
              size={24}
              color="#DE4C5D"
            ></Ionicons>
          </CardItem>
        </Card>
      </TouchableOpacity>
    </View>
  );
};
export default InfoCard;
