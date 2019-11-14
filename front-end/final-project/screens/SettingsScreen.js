import React, { Component } from "react";
import { Text, View } from "react-native";
import { ListItem } from "react-native-elements";
import ProfilePicture from "../components/SettingsScreen/ProfilePicture";

export default class SettingsScreen extends Component {
  state = {
    userProfile: {
      uri:
        "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
      firstName: "Billy",
      surname: "Crystal",
      email: "b.crystal@mail",
      username: "billy321"
    }
  };
  render() {
    const { uri, firstName, surname, username, email } = this.state.userProfile;
    return (
      <View>
        <ListItem
          leftAvatar={{ source: { uri } }}
          title="Profile details"
          bottomDivider
        />
        <ListItem
          rightIcon={{ name: "create" }}
          title={firstName}
          bottomDivider
        />

        <ListItem
          rightIcon={{ name: "create" }}
          title={surname}
          bottomDivider
          onPress={() => {
            console.log("I've been pressed! create");
          }}
        />
        <ListItem
          rightIcon={{ name: "create" }}
          title={username}
          bottomDivider
        />
        <ListItem
          rightIcon={{ name: "lock" }}
          title={email}
          onPress={() => {
            console.log("You can't change me!!!");
          }}
          bottomDivider
        />

        <ProfilePicture profilePicture={uri} />
      </View>
    );
  }
}

SettingsScreen.navigationOptions = {
  title: "Settings"
};
