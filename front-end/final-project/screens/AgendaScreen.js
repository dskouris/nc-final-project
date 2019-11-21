import React from "react";
import { StyleSheet, Text, Button, View } from "react-native";
import PlanHistoryToggler from "../components/AgendaScreen/PlanHistoryToggler";
import * as api from "../components/api";
import firebaseSDK from "../components/firebaseSDK";
import Loading from "../components/HomeScreen/Loading";
class AgendaScreen extends React.Component {
  state = {
    isLoading: true,
    user: {}
  };

  componentDidMount() {
    const uuid = firebaseSDK.uid;
    api
      .getUserData(uuid)
      .then(user => this.setState({ user, isLoading: false }));
  }
  // make check is going from agenda to see see info
  render() {
    return this.state.isLoading ? (
      <Loading />
    ) : (
      <PlanHistoryToggler
        navigation={this.props.navigation}
        user={this.state.user}
      />
    );
  }
}

AgendaScreen.navigationOptions = {
  title: "Wandr",
  headerStyle: { backgroundColor: "#DE4C5D" },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold"
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});

export default AgendaScreen;
