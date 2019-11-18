import React from "react";
import { ScrollView, Text } from "react-native";
import AgendaCard from "./AgendaCard";

export default function Plan(props) {
  return (
    <ScrollView>
      {props.going.map(location => {
        return (
          <AgendaCard
            key={location.id}
            location={location}
            navigation={props.navigation}
          />
        );
      })}
    </ScrollView>
  );
}
