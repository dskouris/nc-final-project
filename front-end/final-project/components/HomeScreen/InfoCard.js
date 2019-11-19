import React, { Component } from "react";
import { Card, CardItem, Left, Thumbnail, Right, Icon } from "native-base";
import { Text, View, ScrollView } from "react-native";
import { Button } from "react-native-elements";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

const InfoCard = ({ location, navigation, userCoords }) => {
  return (
    <View>
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
            onPress={() =>
              navigation.navigate("Info", {
                back: "Home",
                location
              })
            }
            name="ios-arrow-forward"
            size={24}
            color="#DE4C5D"
          ></Ionicons>
          {/* <Button
            title="See more info"
            onPress={() =>
              navigation.navigate("Info", {
                back: "Home",
                location
              })
            }
          /> */}
        </CardItem>
      </Card>
    </View>
  );
};
export default InfoCard;
