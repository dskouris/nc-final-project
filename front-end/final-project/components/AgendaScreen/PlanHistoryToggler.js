import React, { Component } from "react";
import { Container, Tabs, Tab, TabHeading } from "native-base";
import { Text } from "react-native";
import Plan from "./Plan";
import History from "./History";

export default class PlanHistoryToggler extends Component {
  state = {
    going: [],
    history: [
      {
        name: "Champs Elysee",
        date: "21122019",
        id: "545646",
        img:
          "http://3.bp.blogspot.com/--Ed0R-xixsw/T5ISdN55CyI/AAAAAAAAJGw/y0-5tCHYe8A/s320/France_Paris_ChampsElysees2.jpg",
        type: "Landmark",
        address: "Champs-Élysées. Faubourg du Roule., Paris P4 78FF",
        coords: { lat: 48.8683078, long: 2.3000216 }
      },

      {
        name: "Manchester Cathedral",
        id: "545797",
        img:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3-media2.fl.yelpcdn.com%2Fbphoto%2FebnpeaM5JZbySlcxWCi1kQ%2Fo.jpg&f=1",
        type: "Cathedral",
        date: "22122019",
        address: "Victoria Street, Manchester M3 1SX, City Centre",
        coords: { lat: 53.4852373, long: -2.2465376 }
      }
    ],
    display: "plan",
    isLoading: "true",
    err: ""
  };
  render() {
    const { navigation, user } = this.props;
    const { history } = this.state;
    return (
      <Container>
        <Tabs>
          <Tab
            heading={
              <TabHeading style={{ backgroundColor: "#DE4C5D" }}>
                <Text style={{ color: "#ffffff" }}>Plan</Text>
              </TabHeading>
            }
          >
            <Plan navigation={navigation} user={user} />
          </Tab>
          <Tab
            heading={
              <TabHeading style={{ backgroundColor: "#DE4C5D" }}>
                <Text style={{ color: "#ffffff" }}>History</Text>
              </TabHeading>
            }
          >
            <History history={history} navigation={navigation} />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
