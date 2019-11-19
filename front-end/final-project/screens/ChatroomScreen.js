import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import firebaseSDK from '../components/firebaseSDK';
import * as api from '../components/api';

export default class Chatrooms extends React.Component {
  state = {
    user: {},
    chatrooms: []
  };

  enterChat = chatKey => {
    this.props.navigation.navigate('Chats', {
      chatKey,
      name: this.state.user.Profile.firstname,
      email: this.state.user.email,
      avatar: this.state.user.Profile.img
    });
  };

  render() {
    return (
      <View>
        {this.state.chatrooms.map(chatroom => {
          return (
            <Button
              title={`${chatroom.name} - ${chatroom.date}`}
              key={chatroom.chatKey}
              onPress={() => this.enterChat(chatroom.chatKey)}
            />
          );
        })}
      </View>
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
