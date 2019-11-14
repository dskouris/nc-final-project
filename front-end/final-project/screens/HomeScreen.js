import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
// import { Button } from "react-native-elements";
// import Header from "../components/HomeScreen/Header";
// import {
//   Card,
//   CardItem,
//   Icon,
//   Title,
//   Left,
//   Thumbnail,
//   Subtitle,
//   Right
// } from "native-base";
// import InfoCard from "../components/HomeScreen/InfoCard";
// import MapPage from "../components/HomeScreen/MapPage";
import Test2 from "../components/HomeScreen/Test2";

export default class HomeScreen extends Component {
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
      // <View>
      <Test2 />

      /* <Card style={{ alignItems: "center" }}>
      //     <CardItem header>
      //       <Icon name="map" style={{ color: "green" }} />
      //       <Text>Welcome to Manchester!!! UHUUUUUUUU </Text>
      //       <Icon name="heart" style={{ color: "red" }} />
      //     </CardItem>
      //   </Card>
      //   <MapPage /> */
      /* <ScrollView>
      //     {this.state.locations.map(location => {
      //       return (
      //         <InfoCard
      //           navigation={this.props.navigation}
      //           location={location}
      //           key={location.id}
      //         />
      //       );
      //     })}
      //   </ScrollView> */
      // </View>
    );
  }
}

HomeScreen.navigationOptions = {
  title: "Home"
};
