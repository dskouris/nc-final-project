import React, { Component } from "react";
import {
  Container,
  Header,
  Tab,
  Tabs,
  Text,
  Icon,
  TabHeading
} from "native-base";
import List from "./List";
import Map from "./Map";

export default class TabsToggler extends Component {
  state = {
    display: "list",
    isLoading: "true",
    currentCity: "MANCHESTER",
    err: "",
    locations: [
      {
        id: 1,
        name: "Museum of Robots",
        img: "../images/robot-dev.png",
        pplGoing: 8
      },
      {
        id: 2,
        name: "WALL-E Statue",
        img: "../images/robot-prod.png",
        pplGoing: 13
      },
      {
        id: 3,
        name: "Star wars Exhibition",
        img: "../images/robot-prod.png",
        pplGoing: 6
      },
      {
        id: 4,
        name: "Samsung Galaxy",
        img: "../images/robot-prod.png",
        pplGoing: 11
      },
      {
        id: 5,
        name: "Museum of Robots",
        img: "../images/robot-dev.png",
        pplGoing: 8
      },
      {
        id: 6,
        name: "WALL-E Statue",
        img: "../images/robot-prod.png",
        pplGoing: 13
      },
      {
        id: 7,
        name: "Star wars Exhibition",
        img: "../images/robot-prod.png",
        pplGoing: 6
      },
      {
        id: 8,
        name: "Samsung Galaxy",
        img: "../images/robot-prod.png",
        pplGoing: 11
      }
    ]
  };
  render() {
    const { locations, isLoading } = this.state;
    const { navigation } = this.props;
    return (
      <Container>
        <Header hasTabs>
          <Text style={{ color: "white", alignItems: "center" }}>
            Welcome to {this.state.currentCity} !!!
          </Text>
          <Icon name="heart" style={{ color: "red" }} />
        </Header>
        <Tabs>
          <Tab heading="List">
            <List
              locations={locations}
              isLoading={isLoading}
              navigation={navigation}
            />
          </Tab>
          <Tab
            heading={
              <TabHeading>
                <Icon name="map" />
                <Text>Map</Text>
              </TabHeading>
            }
          >
            <Map />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
