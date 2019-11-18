import React from "react";
import { ScrollView, StyleSheet, Text, Button, View } from "react-native";
import { Container, Header, Tab, Tabs, Icon, TabHeading } from "native-base";
import AgendaCard from "../components/AgendaScreen/AgendaCard";
import PlanHistoryToggler from "../components/AgendaScreen/PlanHistoryToggler";

class AgendaScreen extends React.Component {
  // make check is going from agenda to see see info
  render() {
    return (
      <PlanHistoryToggler navigation={this.props.navigation} />
      // <View style={styles.container}>
      //   {this.state.going.map(location => {
      //     return (
      //       <AgendaCard
      //         navigation={this.props.navigation}
      //         location={location}
      //         key={location.id}
      //       />
      //     );
      //   })}
      // </View>
    );
  }
}

AgendaScreen.navigationOptions = {
  title: "Agenda"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});

export default AgendaScreen;
