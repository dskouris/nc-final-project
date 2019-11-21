import React from "react";
import { ScrollView } from "react-native";

import HistoryCard from "./HistoryCard";

export default function History(props) {
  return (
    <ScrollView>
      {props.history.map(place => {
        return (
          <HistoryCard
            place={place}
            key={place.id}
            navigation={props.navigation}
          />
        );
      })}
    </ScrollView>
  );
}
