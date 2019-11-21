import React, { Component } from "react";
import { ScrollView, StyleSheet, Text, ImageBackground } from "react-native";
import { ExpoLinksView } from "@expo/samples";

import { GiftedChat } from "react-native-gifted-chat";
import firebaseSDK from "../components/firebaseSDK";

class ChatsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: (navigation.state.params || {}).name || "Chat!"
  });

  state = {
    messages: []
  };

  get user() {
    return {
      name: this.props.navigation.state.params.name,
      email: this.props.navigation.state.params.email,
      avatar: this.props.navigation.state.params.avatar,
      id: firebaseSDK.uid,
      _id: firebaseSDK.uid
    };
  }

  componentDidMount() {
    firebaseSDK.addChatkey(this.props.navigation.state.params.chatKey);
    firebaseSDK.on(message =>
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, message)
      }))
    );
  }

  componentWillUnmount() {
    firebaseSDK.off();
  }

  render() {
    return (
      <ImageBackground
        style={styles.container}
        source={require("../components/images/landmarks.png")}
      >
        <GiftedChat
          messages={this.state.messages}
          onSend={firebaseSDK.send}
          user={this.user}
        />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#fff"
  }
});

ChatsScreen.navigationOptions = {
  title: `Chat room`,
  headerStyle: { backgroundColor: "#DE4C5D" },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold"
  }
};
export default ChatsScreen;
