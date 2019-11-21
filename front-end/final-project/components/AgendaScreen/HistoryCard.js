import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Card, CardItem, Button, Right } from "native-base";
import { Ionicons } from "@expo/vector-icons";

export default function HistoryCard(props) {
  return (
    <View style={{
      justifyContent: "flex-start",
      marginHorizontal: 10,
      marginTop: 10
    }}> 
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Info", {
            back: "Agenda",
            location: location.location,
            isGoing: true
          })
        }
      >
        <Card style={{ backgroundColor: "#dbdbdb", paddingHorizontal: 5 }}>
          <CardItem
            style={{ backgroundColor: "#fafad2", paddingHorizontal: 10 }}
          >
            <View>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                {props.place.name}
              </Text>
              <Text note>Have been there on: {props.place.date}</Text>
            </View>
            <Right>
              <Ionicons
                name="ios-arrow-forward"
                size={20}
                color="#DE4C5D"
              ></Ionicons>
            </Right>
          </CardItem>
        </Card>
      </TouchableOpacity>
    </View>
  );
}
