import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import apiKey from '../constants/keys';
import UpdateAgenda from '../components/InfoScreen/UpdateAgenda';
import * as api from '../components/api';
import firebaseSDK from '../components/firebaseSDK';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Button,
  Icon,
  Left,
  Body,
  Right
} from 'native-base';
import Loading from '../components/HomeScreen/Loading';
import { Ionicons } from '@expo/vector-icons';
import wandr from './images/wandr.png';

export default class InfoScreen extends Component {
  state = {
    isLoading: true,
    location: {},
    isGoing: false,
    usersGoing: [],
    userLocation: { lat: 0, long: 0 }
  };

  componentDidMount() {
    const location = this.props.navigation.getParam('location', {});
    return Promise.all([
      location,
      fetch(
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=300&maxheight=300&photoreference=${location.photos[0].photo_reference}&key=${apiKey}`
      )
    ]).then(([location, img]) => {
      location.img = img.url;
      this.setState({
        location,
        isLoading: false,
        isGoing: this.props.navigation.getParam('isGoing', false)
      });
    });
  }

  addToAgenda = date => {
    const { location } = this.state;
    const uid = firebaseSDK.uid;
    const agendaPoint = {
      id: location.id,
      date,
      chatKey: `${location.id}${date}`,
      name: location.name,
      location
    };
    return api
      .updateAgenda(uid, agendaPoint)
      .then(updatedUser => {
        this.setState(currentState => {
          return { isGoing: !currentState.isGoing };
        });
        alert(
          `added to agenda for:${date}. \nYou can now see this in your chats`
        );
      })
      .catch(console.log);
  };

  removeFromAgenda = () => {
    // Having issues with delete method, will fix and implement this.

    const { location } = this.state;
    const uid = firebaseSDK.uid;
    const locationIDObj = { id: location.id };

    return api
      .updateAgenda(uid, locationIDObj)
      .then(data => {
        this.setState(currentState => {
          return { isGoing: !currentState.isGoing };
        });
        alert('removed from agenda');
      })
      .catch(console.log);
  };

  render() {
    const { isGoing, usersGoing, location, isLoading } = this.state;
    const { navigation } = this.props;

    return isLoading ? (
      <Loading />
    ) : (
      <Container>
        {/* <Header /> */}
        <Content>
          <View style={styles.titleBar}>
            <Ionicons
              onPress={() =>
                navigation.navigate(navigation.getParam('back', 'Home'))
              }
              name='ios-arrow-back'
              size={24}
              color='#DE4C5D'
            ></Ionicons>
            <Ionicons
              name='ios-home'
              size={24}
              color='#DE4C5D'
              onPress={() =>
                navigation.navigate(navigation.getParam('back', 'Home'))
              }
            ></Ionicons>
          </View>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Thumbnail source={wandr} />
                <Body>
                  <Text style={{ fontSize: 24, fontWeight: '700' }}>
                    {location.name}
                  </Text>
                  <Text note> 0.8km from you</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image
                  source={{ uri: location.img }}
                  style={{ height: 200, width: 300, flex: 1 }}
                />
                <Text>
                  Cathedral, formally the Cathedral and Collegiate Church of St
                  Mary, St Denys and St George, in Manchester, England, is the
                  mother church of the Anglican Diocese of Manchester, seat of
                  the Bishop of Manchester and the city's parish church. It is
                  on Victoria Street in Manchester city centre.
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name='people' />
                  <Text> {usersGoing.length} Going</Text>
                </Button>
              </Left>
              <Right>
                <Text>{isGoing ? 'You Are Going' : 'You Are Not Going'}</Text>
              </Right>
            </CardItem>
          </Card>
          <View>
            <UpdateAgenda
              isGoing={this.state.isGoing}
              addToAgenda={this.addToAgenda}
              removeFromAgenda={this.removeFromAgenda}
            />
          </View>
        </Content>
      </Container>
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
  },
  titleBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginHorizontal: 15
  }
});

{
  /* <View style={styles.container}>
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
      style={{ width: '80%', height: 300 }}
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
</View> */
}
