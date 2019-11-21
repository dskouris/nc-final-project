import React from "react";
import { ScrollView, Text, ImageBackground, StyleSheet } from "react-native";
import AgendaCard from "./AgendaCard";

export default function Plan(props) {
  return (
    <ImageBackground
      style={styles.container}
      source={require("../images/landmarks.png")}
    >
      <ScrollView>
        {props.user.Agenda.going.map(location => {
          return (
            <AgendaCard
              key={location.id}
              location={location}
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
