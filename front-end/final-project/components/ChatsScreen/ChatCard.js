import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Container, Content, Card, CardItem, Button, Right } from "native-base";
import { Ionicons } from "@expo/vector-icons";

export default function ChatCard(props) {
  return (
    <View
      style={{
        justifyContent: "flex-start",
        marginHorizontal: 10,
        marginTop: 10
      }}
    >
      <TouchableOpacity onPress={() => props.enterChat(props.chatroom.chatKey)}>
        <Card style={{ backgroundColor: "#dbdbdb", paddingHorizontal: 5 }}>
          <CardItem bordered>
            <View>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                {props.chatroom.name}
              </Text>
              <Text> Date: {props.chatroom.date}</Text>
            </View>
            <Right>
              <Ionicons
                name="ios-arrow-forward"
                size={24}
                color="#DE4C5D"
              ></Ionicons>
            </Right>
          </CardItem>
        </Card>
      </TouchableOpacity>
    </View>
  );
}
