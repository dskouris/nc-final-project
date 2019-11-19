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
import wandr from './images/wandr.png';

export default class InfoScreen extends Component {
  state = {
    isLoading: true,
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

  componentDidMount() {
    const location = this.props.navigation.getParam('location', {});
    return Promise.all([
      location,
      fetch(
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=300&maxheight=300&photoreference=${location.photos[0].photo_reference}&key=${apiKey}`
      )
    ]).then(([location, img]) => {
      location.img = img.url;
      this.setState({ location, isLoading: false });
    });
  }

  addToAgenda = date => {
    const location = this.state;
    uid = firebaseSDK.uid;
    const agendaPoint = {
      id: location.id,
      date,
      chatKey: `${location.id}${date}`,
      name: location.name
    };
    api.updateAgenda(uid, agendaPoint).then(updatedUser => {
      this.setState(currentState => {
        return { isGoing: !currentState.isGoing };
      });
      alert(`added to agenda for:${date}`);
    });
  };

  removeFromAgenda = () => {
    this.setState(currentState => {
      return { isGoing: !currentState.isGoing };
    });
    // filerring the location place from agenda
    alert('removed from agenda');
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
          <Button
            iconLeft
            light
            onPress={() =>
              navigation.navigate(navigation.getParam('back', 'Home'))
            }
          >
            <Icon name="arrow-back" />
            <Left>
              <Text>Back</Text>
            </Left>
          </Button>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Thumbnail source={wandr} />
                <Body>
                  <Text style={{ fontSize: 24, fontWeight: '700' }}>
                    {location.name}
                  </Text>
                  <Text note> {location.distanceFromUser}km from you</Text>
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
                  <Icon active name="people" />
                  <Text> {usersGoing.length} Going</Text>
                </Button>
              </Left>
              <Body>
                <Button
                  transparent
                  onPress={() => navigation.navigate('Chats')}
                >
                  <Icon active name="chatbubbles" />
                  <Text>Go to chat</Text>
                </Button>
              </Body>
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
