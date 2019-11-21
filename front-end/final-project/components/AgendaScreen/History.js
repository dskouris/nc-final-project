import React from "react";
import { ScrollView, ImageBackground, StyleSheet } from "react-native";

import HistoryCard from "./HistoryCard";

export default function History(props) {
  return (
    <ImageBackground
      style={styles.container}
      source={require("../images/landmarks.png")}
    >
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
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
    // justifyContent: 'center'
  }
});
