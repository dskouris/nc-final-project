import React, { Component } from "react";
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image
} from "react-native";
import { Header, ListItem, Button } from "react-native-elements";
import ProfilePicture from "../components/SettingsScreen/ProfilePicture";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";

import { MaterialIcons, Ionicons } from "@expo/vector-icons";

export default class SettingsScreen extends Component {
  state = {
<<<<<<< HEAD
    uri: "",
=======
    uuid: "",
>>>>>>> 72e3ab3cd17b0f8b0590bfea18161abcd4e3a12a
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

  handleChange = () => {
    // console.log("handle change");
    this.pickImage();
  };
  render() {
    const { uri, firstName, surname, username, email } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.titleBar}>
            <Ionicons
              name="ios-arrow-back"
              size={24}
              color="#DE4C5D"
            ></Ionicons>
            <Ionicons name="ios-home" size={24} color="#DE4C5D"></Ionicons>
          </View>

          <View style={{ alignSelf: "center" }}>
            <View style={styles.profileImage}>
              {/* here is placement for actual image */}

              <Image
                source={{
                  uri:
                    "https://avidcareerist.com/wp-content/uploads/2017/06/Photographer.png"
                }} //https://i.pravatar.cc/300 avatar generator
                style={styles.image}
              />
            </View>
            <View style={styles.update}>
              <Ionicons
                name="ios-create"
                size={35}
                color="white"
                style={{ marginTop: 1, marginLeft: 2 }}
                onPress={() => {
                  this.handleChange();
                }}
              />
            </View>
          </View>

          <View style={styles.text}>
            <Text
              style={{ fontWeight: "200", fontSize: 30 }}
              value="username"
              onPress={() => {
                alert("Change username!");
              }}
            >
              {username}
            </Text>
            <Text
              style={{ fontWeight: "600", fontSize: 20 }}
              onPress={() => {
                alert("Change firstName surname!");
              }}
              value="firstName"
            >
              {firstName} {surname}
            </Text>
            <Text
              style={{ fontWeight: "100", fontSize: 15, padding: 15 }}
              value="email"
            >
              {email}
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>

      // <View>
      //   <ListItem
      //     leftAvatar={{ source: { uri } }}
      //     title="Profile details"
      //     bottomDivider
      //   />
      //   <ListItem
      //     rightIcon={{ name: "create" }}
      //     title={firstName}
      //     bottomDivider
      //   />

      //   <ListItem
      //     rightIcon={{ name: "create" }}
      //     title={surname}
      //     bottomDivider
      //     onPress={() => {
      //       alert("I've been pressed!");
      //     }}
      //   />
      //   <ListItem
      //     rightIcon={{ name: "create" }}
      //     title={username}
      //     bottomDivider
      //   />
      //   <ListItem
      //     rightIcon={{ name: "lock" }}
      //     title={email}
      //     onPress={() => {
      //       alert("You can't change me!!!");
      //     }}
      //     bottomDivider
      //   />

      //   <ProfilePicture profilePicture={uri} pickImage={this.pickImage} />
      // </View>
    );
  }
}

SettingsScreen.navigationOptions = {
  title: "Settings"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginHorizontal: 15
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden"
  },
  update: {
    backgroundColor: "#DE4C5D",
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 50,
    height: 50,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 30,
    padding: 15
  }
});
