import * as React from "react";
import { Button, Image, View, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import { Input, Avatar } from "react-native-elements";

export default class ProfilePicture extends React.Component {
  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    console.log(result, "results from Image adder 19");

    if (!result.cancelled) {
      this.setState({ profilePicture: result.uri });
    }
  };
  render() {
    let { profilePicture } = this.props;

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
              ? "Change a profile picture"
              : "1Pick a profile picture"
          }
          onPress={this.pickImage}
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
}
