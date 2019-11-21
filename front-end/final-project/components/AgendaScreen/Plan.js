import React from "react";
import { ScrollView, Text } from "react-native";
import AgendaCard2 from "./AgendaCard2";

export default function Plan(props) {
  return (
    <ScrollView>
      {props.user.Agenda.going.map(location => {
        return (
          <AgendaCard2
            key={location.id}
            location={location}
            navigation={props.navigation}
          />
        );
      })}
    </ScrollView>
  );
}
