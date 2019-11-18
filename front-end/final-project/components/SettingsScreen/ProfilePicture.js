import * as React from "react";
import { Button, Image, View, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import { Input, Avatar } from "react-native-elements";

export default class ProfilePicture extends React.Component {
  handleChange = () => {
    this.props.pickImage();
  };
  render() {
    const { profilePicture } = this.props;

    return (
      <View
      // style={{
      //   flex: 1,
      //   alignItems: "center",
      //   justifyContent: "center"
      // }}
      >
        <Button
          title={
            profilePicture
              ? "Change your profile picture"
              : "Pick your profile picture"
          }
          onPress={() => {
            this.handleChange();
          }}
        />
        {profilePicture && (
          <Image
            source={{ uri: profilePicture }}
            style={{ width: 200, height: 200 }}
          />
        )}
      </View>
    );
  }
}
