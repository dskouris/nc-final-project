import React, { Component } from "react";

import TabsToggler from "../components/HomeScreen/TabsToggler";

export default class HomeScreen extends Component {
  state = {
    userLoggedIn: ""
  };

  render() {
    return <TabsToggler navigation={this.props.navigation} />;
  }
}

HomeScreen.navigationOptions = {
  title: "Welcome to WANDR",
  headerStyle: { backgroundColor: "#DE4C5D" },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold"
  }
};
