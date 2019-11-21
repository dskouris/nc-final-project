import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Container, Content, Card, CardItem, Button, Right } from "native-base";
import { Ionicons } from "@expo/vector-icons";

const AgendaCard = ({ location, navigation }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Info", {
            back: "Agenda",
            location: location.location,
            isGoing: true
          })
        }
      >
        <Card>
          <CardItem
            style={{ backgroundColor: "#ffe4c4", paddingHorizontal: 10 }}
          >
            <View>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                {location.name}
              </Text>
              <Text>Going there on: {location.date}</Text>
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
};

export default AgendaCard;
