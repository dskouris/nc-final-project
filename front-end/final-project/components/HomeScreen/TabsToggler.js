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
import Loading from './Loading';
import Map from './Map';
import apiKey from '../../constants/keys.js';
export default class TabsToggler extends Component {
  state = {
    display: 'list',
    isLoading: 'true',
    currentCity: '',
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
            `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${position.coords.latitude},${position.coords.longitude}&type=tourist_attraction&radius=1500&key=${apiKey}`
          )
        ])
          .then(([position, response]) =>
            Promise.all([position, response.json()])
          )
          .then(([position, { results }]) =>
            this.setState({
              isLoading: false,
              locations: results,
              currentCity: results[0].vicinity,
              userCoords: position.coords
            })
          )
          .catch(console.log);
      },
      err => console.log(err)
    );
  }
  render() {
    const { locations, currentCity, isLoading, userCoords } = this.state;
    const { navigation } = this.props;
    return (
      <Container>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Header hasTabs>
              <Text style={{ color: 'white', alignItems: 'center' }}>
                Welcome to {currentCity} !!!
              </Text>
            </Header>
            <Tabs>
              <Tab heading='List'>
                <List
                  locations={locations}
                  navigation={navigation}
                  userCoords={userCoords}
                />
              </Tab>
              <Tab
                heading={
                  <TabHeading>
                    <Icon name='map' />
                    <Text>Map</Text>
                  </TabHeading>
                }
              >
                <Map
                  userCoords={userCoords}
                  locations={locations}
                  navigation={navigation}
                />
              </Tab>
            </Tabs>
          </>
        )}
      </Container>
    );
  }
}
