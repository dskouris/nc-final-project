import React, { Component } from "react";
import {
  Container,
  Header,
  Tab,
  Tabs,
  Text,
  Icon,
  TabHeading,
  Thumbnail,
  Image
} from "native-base";
import List from "./List";
import Loading from "./Loading";
import Map from "./Map";
import apiKey from "../../constants/keys.js";
import * as utils from "../../utils/utils";

export default class TabsToggler extends Component {
  state = {
    display: "list",
    isLoading: "true",
    currentCity: "",
    err: "",
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
          .then(([position, { results }]) => {
            results.forEach(result => {
              result.distanceFromUser = utils.calculateDistance(
                position.coords.latitude,
                position.coords.longitude,
                result.geometry.location.lat,
                result.geometry.location.lng
              );
            });
            this.setState({
              isLoading: false,
              locations: results,
              currentCity: results[0].vicinity,
              userCoords: position.coords
            });
          })
          .catch(console.log);
      },
      err => console.log(err)
    );
  }
  render() {
    const {
      locations,
      currentCity,
      isLoading,
      userCoords,
      distanceFromLocation
    } = this.state;
    const { navigation } = this.props;
    return (
      <Container>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {/* <Header hasTabs style={{ backgroundColor: "#DE4C5D" }}> <Text style={{
                  color: "white", fontSize: 18, fontWeight: "400",paddingHorizontal: 20, alignItems: "center"}} >  Welcome to {currentCity} !!!
              </Text> </Header> */}

            <Tabs >
              <Tab
                heading={
                  <TabHeading
                    style={{ backgroundColor: "#ffffff" }}
    
                  >
                    <Text style={{ color: "#DE4C5D" }}>List</Text>
                  </TabHeading>
                }
              >
                <List
                  locations={locations}
                  navigation={navigation}
                  userCoords={userCoords}
                />
              </Tab>
              <Tab
                heading={
                  <TabHeading
                    style={{ backgroundColor: "#ffffff" }}
                   
                  >
                    <Icon name="map" style={{ color: "#DE4C5D" }} />
                    <Text style={{ color: "#DE4C5D" }}>Map</Text>
                  </TabHeading>
                }
              >
                <Map
                  userCoords={userCoords}
                  locations={locations}
                  navigation={navigation}
                  distanceFromLocation={distanceFromLocation}
                />
              </Tab>
            </Tabs>
          </>
        )}
      </Container>
    );
  }
}
