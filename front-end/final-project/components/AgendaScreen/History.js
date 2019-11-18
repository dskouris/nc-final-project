import React from "react";
import { ScrollView, Text } from "react-native";

export default function History(props) {
  return (
    <ScrollView>
      {props.history.map(place => {
        return <Text>{place.name}</Text>;
      })}
    </ScrollView>
  );
}
