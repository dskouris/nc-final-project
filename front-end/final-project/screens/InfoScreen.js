import React, { Component } from 'react';
import { View, StyleSheet, Text, Button, Image } from 'react-native';

import UpdateAgenda from '../components/InfoScreen/UpdateAgenda';

export default class InfoScreen extends Component {
  state = {
    location: {},
    isGoing: false,
    usersGoing: [
      { name: 'Tom', uuid: 'jjfdjfd294ikvnknv' },
      { name: 'Dimitris', uuid: 'jjfdjfdff294ikvnknv' },
      { name: 'Poulina', uuid: 'jjfdjf55554i390' },
      { name: 'Sara', uuid: 'j55djfd294i390' },
      { name: 'Krishan', uuid: 'jj66jfd294i390' }
    ],
    userLocation: { lat: 53.4852373, long: -2.2465376 }
  };

  addToAgenda = date => {
    this.setState(currentState => {
      return { isGoing: !currentState.isGoing };
    });
    alert(`added to agenda for:${date}`);
  };

  removeFromAgenda = () => {
    this.setState(currentState => {
      return { isGoing: !currentState.isGoing };
    });
    // filerring the location place from agenda
    alert('removed from agenda');
  };

  render() {
    const { isGoing, usersGoing } = this.state;
    const { navigation } = this.props;
    const location = navigation.getParam('location', {});
    return (
      <View style={styles.container}>
        <Button
          title='go back'
          onPress={() =>
            navigation.navigate(navigation.getParam('back', 'Home'))
          }
        />
        <View>
          <Text>{location.name}</Text>
          <Image
            source={{ uri: location.img }}
            style={{ width: '80%', height: 200 }}
          />
          <Text>{usersGoing.length} Going</Text>
          <Text>{isGoing ? 'You Are Going' : 'You Are Not Going'}</Text>
        </View>

        <View>
          <Text>{location.type}</Text>
          <Text>{location.address}</Text>
          <Text>One km from Location</Text>
        </View>
        <View>
          <UpdateAgenda
            isGoing={this.state.isGoing}
            addToAgenda={this.addToAgenda}
            removeFromAgenda={this.removeFromAgenda}
          />
        </View>

        <View>
          <Button
            title='Location Chat'
            onPress={() => navigation.navigate('Chats')}
          />
        </View>
      </View>
    );
  }
}

InfoScreen.navigationOptions = {
  title: 'Info'
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  }
});
