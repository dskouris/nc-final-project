import * as React from "react";
import { Button, Image, View, Text} from "react-native";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import { Input, Avatar, Badge } from "react-native-elements";

export default class ProfilePicture extends React.Component {
<<<<<<< HEAD
  // pickImage = async () => {
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1
  //   });

  //   console.log(result, "results from Image adder 19");

  //   if (!result.cancelled) {
  //     this.setState({ profilePicture: result.uri });
  //   }
  // };




  // handleChange = () => {
  //   // console.log("handle change");
  //   this.props.pickImage();
  // };


  
=======
  handleChange = () => {
    this.props.pickImage();
  };
>>>>>>> 72e3ab3cd17b0f8b0590bfea18161abcd4e3a12a
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
<<<<<<< HEAD
              ? "Update a profile picture"
              : "1Pick a profile picture"
=======
              ? "Change your profile picture"
              : "Pick your profile picture"
>>>>>>> 72e3ab3cd17b0f8b0590bfea18161abcd4e3a12a
          }
          onPress={() => {
            this.handleChange();
          }}
        />
        {profilePicture && (

          <Avatar
            size="xlarge"
            rounded
            source={{ uri: profilePicture }}
            // style={{ width: 200, height: 200 }}
            // activeOpacity={0.7}
            containerStyle={{flex: 2, marginLeft: 20, }}

          />

  
        )}
              

  />
      </View>
    );
  }
<<<<<<< HEAD

  // componentDidMount() {
  //   this.getPermissionAsync();
  //   console.log("mounted");
  // }

  //FOR IOS ONLY
//   getPermissionAsync = async () => {
//     if (Constants.platform.ios) {
//       const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
//       if (status !== "granted") {
//         alert("Sorry, we need camera roll permissions to make this work!");
//       }
//     }
//   };
=======
>>>>>>> 72e3ab3cd17b0f8b0590bfea18161abcd4e3a12a
}
