import React, { Component } from "react";
import { Card, CardItem, Left, Thumbnail, Right } from "native-base";
import { Text, View, ScrollView } from "react-native";
import { Button } from "react-native-elements";

const InfoCard = ({ location, navigation }) => {
  return (
    <View>
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={require("../images/robot-dev.png")} />
            <View>
              <Text>INFO CARD CARALHO</Text>
              {/* <Text>{location.name}</Text>
              <Text>{location.pplGoing} people is going</Text> */}
            </View>
          </Left>

          <Button
            title="Click to see more info"
            onPress={() =>
              navigation.navigate("Info", { back: "Home", location })
            }
          />
        </CardItem>
      </Card>
    </View>
  );
};
export default InfoCard;
