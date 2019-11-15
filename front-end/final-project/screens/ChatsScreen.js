import React, {Component} from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';


import { GiftedChat } from 'react-native-gifted-chat';
import firebaseSDK from '../components/firebaseSDK'



 class ChatsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: (navigation.state.params || {}).name || 'Chat!'

  })


  state = {
    messages: [],
  }

  get user() {
    return {
       name: 'Jack sparrow',


      //  this.props.navigation.state.params.name,
      // email: this.props.navigation.state.params.email,
      // avatar: this.props.navigation.state.params.avatar,
      // id: firebaseSDK.uid,
      
      _id: "SNDUZkuWdobqhtZCxcjNPcX5b3l2"
      // firebaseSDK.uid
    };
  }


  componentDidMount() {
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
     
        <GiftedChat
        messages={this.state.messages}
        onSend={firebaseSDK.send}
        user={this.user}
      />
      
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  }
});

ChatsScreen.navigationOptions = {
  title: 'Chats'
};
export default ChatsScreen