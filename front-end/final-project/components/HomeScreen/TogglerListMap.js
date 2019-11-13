import React, { Component } from "react";
import { Container, Header, Content, Tab, Tabs } from "native-base";
import List from "./List";
import Map from "./Map";
import { Text } from "react-native";
import InfoCard from "./InfoCard";

export default class TogglerListMap extends Component {
  render() {
    return (
      <Container>
        {/* <Header hasTabs /> */}
        <Tabs>
          <Tab heading="List">
            <InfoCard />
          </Tab>
          <Tab heading="Map">
            <Map />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
