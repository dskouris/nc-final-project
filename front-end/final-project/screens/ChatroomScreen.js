import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ImageBackground
} from "react-native";
import firebaseSDK from "../components/firebaseSDK";
import * as api from "../components/api";
import ChatCard from "../components/ChatsScreen/ChatCard";

export default class Chatrooms extends React.Component {
  state = {
    user: {},
    chatrooms: []
  };

  enterChat = chatKey => {
    this.props.navigation.navigate("Chats", {
      chatKey,
      name: this.state.user.Profile.firstname,
      email: this.state.user.email,
      avatar: this.state.user.Profile.img
    });
  };

  render() {
    return (
      <ImageBackground
        style={styles.container}
        source={require("../components/images/landmarks.png")}
      >
        <View>
          {this.state.chatrooms.map(chatroom => {
            return (
              <ChatCard
                chatroom={chatroom}
                key={chatroom.chatKey}
                enterChat={this.enterChat}
              />
              // <Button
              //   title={`${chatroom.name} - ${chatroom.date}`}
              //   key={chatroom.chatKey}
              //   onPress={() => this.enterChat(chatroom.chatKey)}
              // />
            );
          })}
        </View>
      </ImageBackground>
    );
  }

  componentDidMount() {
    id = firebaseSDK.uid;
    api.getUserData(id).then(user => {
      this.setState({ user, chatrooms: user.Agenda.going });
    });
    // this.setState({
    //   chatrooms: this.props.navigation.state.params.user.agenda.going
    // });
  }
}

Chatrooms.navigationOptions = {
  title: "Chats",
  headerStyle: { backgroundColor: "#DE4C5D" },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold"
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
    // justifyContent: 'center'
  }
});
