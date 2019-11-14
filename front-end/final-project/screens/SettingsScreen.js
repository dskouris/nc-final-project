import React, { Component } from "react";
import { Text } from "react-native";
import { Input, Avatar } from "react-native-elements";
import ProfilePicture from "../components/SettingsScreen/ProfilePicture";

export default class SettingsScreen extends Component {
  state = {
    profilePicture: ""
  };
  render() {
    return (
      <>
        <Text>Settings</Text>
        <Input label="Username:" />
        <Input label="First Name:" />
        <Input label="Surname:" />
        {/* <Avatar rounded/> */}
        <ProfilePicture />
      </>
    );
  }
}

SettingsScreen.navigationOptions = {
  title: "Settings"
};
