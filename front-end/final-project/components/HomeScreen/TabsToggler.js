import React, { Component } from 'react';
import {
  Container,
  Header,
  Tab,
  Tabs,
  Text,
  Icon,
  TabHeading
} from 'native-base';
import List from './List';
import Map from './Map';
<<<<<<< HEAD
import apiKey from '../../constants/keys.js';
=======

>>>>>>> 33a1b93377089f752f5ac0565a10f0c8221fff6e
export default class TabsToggler extends Component {
  state = {
    display: 'list',
    isLoading: 'true',
    currentCity: 'MANCHESTER',
    err: '',
    locations: [],
    userCoords: { latitude: 0, longitude: 0 }
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        return Promise.all([
          position,
          fetch(
<<<<<<< HEAD
            `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${position.coords.latitude},${position.coords.longitude}&radius=1500&key=${apiKey}`
=======
            `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${position.coords.latitude},${position.coords.longitude}&radius=1500&key=AIzaSyA66ygyGknz1ItPWNHy0S61QSaDeVmfFfM`
>>>>>>> 33a1b93377089f752f5ac0565a10f0c8221fff6e
          )
        ])
          .then(([position, response]) =>
            Promise.all([position, response.json()])
          )
          .then(([position, { results }]) =>
            this.setState({
              isLoading: false,
              locations: results,
              currentCity: results[0].name,
              userCoords: position.coords
            })
          )
          .catch(console.log);
      },
      err => console.log(err)
    );
  }
  render() {
    const { locations } = this.state;
    const { navigation } = this.props;
    return (
      <Container>
        {this.state.isLoading ? (
          <Text>Loading...</Text>
        ) : (
          <>
            <Header hasTabs>
              <Text style={{ color: 'white', alignItems: 'center' }}>
                Welcome to {this.state.currentCity} !!!
              </Text>
              <Icon name='heart' style={{ color: 'red' }} />
            </Header>
            <Tabs>
              <Tab heading='List'>
                <List locations={locations} navigation={navigation} />
              </Tab>
              <Tab
                heading={
                  <TabHeading>
                    <Icon name='map' />
                    <Text>Map</Text>
                  </TabHeading>
                }
              >
                <Map userCoords={this.state.userCoords} locations={locations} />
              </Tab>
            </Tabs>
          </>
        )}
      </Container>
    );
  }
}
