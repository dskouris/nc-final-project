import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Tab,
  Tabs,
  Body,
  Text,
  Icon,
  TabHeading
} from "native-base";
import List2 from "./List2";
import MapPage from "./MapPage";

export default class Test2 extends Component {
  state = {
    display: "list",
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
    return (
      <Container>
        <Header hasTabs>
          <Text style={{ color: "white" }}>Welcome to MANCHESTER !!! </Text>
          <Icon name="heart" style={{ color: "red" }} />
        </Header>
        <Tabs>
          <Tab heading="List2">
            <List2 />
          </Tab>
          <Tab
            heading={
              <TabHeading>
                <Icon name="map" />
                <Text>Map</Text>
              </TabHeading>
            }
          >
            <MapPage />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
