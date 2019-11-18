import React, { Component } from "react";
import { Text, View } from "react-native";
import { ListItem } from "react-native-elements";
import ProfilePicture from "../components/SettingsScreen/ProfilePicture";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";

export default class SettingsScreen extends Component {
  state = {
    uuid: "",
    firstName: "Billy",
    surname: "Crystal",
    email: "b.crystal@mail",
    username: "billy321",
    uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"
  };
  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    console.log(result, "results from settings screen 28");

    if (!result.cancelled) {
      this.setState({ uri: result.uri });
    }
  };
  componentDidMount() {
    this.getPermissionAsync();
    console.log("mounted");
  }

  //FOR IOS ONLY
  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };
  render() {
    const { uri, firstName, surname, username, email } = this.state;
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
            alert("I've been pressed!");
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
            alert("You can't change me!!!");
          }}
          bottomDivider
        />

        <ProfilePicture profilePicture={uri} pickImage={this.pickImage} />
      </View>
    );
  }
}

SettingsScreen.navigationOptions = {
  title: "Settings"
};
