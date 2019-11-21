import React, { Component } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import apiKey from "../constants/keys";
import UpdateAgenda from "../components/InfoScreen/UpdateAgenda";
import * as api from "../components/api";
import firebaseSDK from "../components/firebaseSDK";
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
  Right,
  Title
} from "native-base";
import Loading from "../components/HomeScreen/Loading";
import { Ionicons } from "@expo/vector-icons";
import wandr from "./images/wandr.png";

export default class InfoScreen extends Component {
  state = {
    isLoading: true,
    location: {},
    isGoing: false,
    usersGoing: [],
    userLocation: { lat: 0, long: 0 }
  };

  componentDidMount() {
    const location = this.props.navigation.getParam("location", {});
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
        isGoing: this.props.navigation.getParam("isGoing", false)
      });
    });
  }

  addToAgenda = date => {
    const { location } = this.state;
    const { navigation } = this.props;
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
        alert(`Added to agenda`);
        navigation.navigate("Agenda");
      })
      .catch(console.log);
  };

  removeFromAgenda = () => {
    const { location } = this.state;
    const uid = firebaseSDK.uid;
    const locationIDObj = { id: location.id };
    return api
      .updateAgenda(uid, locationIDObj)
      .then(data => {
        this.setState(currentState => {
          return { isGoing: !currentState.isGoing };
        });
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
        <Header style={{ backgroundColor: "#DE4C5D" }}>
          <Left>
            <Button transparent>
              <Ionicons
                onPress={() =>
                  navigation.navigate(navigation.getParam("back", "Home"))
                }
                name="ios-arrow-back"
                size={24}
                color="#fff"
              ></Ionicons>
            </Button>
          </Left>
          <Body>
            <Title style={{color: "#fff"}}> {location.name} </Title>
          </Body>

          <Right>
            <Button>
              <Ionicons
                name="ios-home"
                size={24}
                color="#fff"
                onPress={() =>
                  navigation.navigate(navigation.getParam("back", "Home"))
                }
              ></Ionicons>
            </Button>
          </Right>
        </Header>

        <Content style={{marginTop: 10}}>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                {/* <Thumbnail source={wandr} style={{ resizeMode: "contain" }} /> */}
                <Body>
                  <Text style={{ fontSize: 18, fontWeight: "500" }}> 
                 
                    {location.name}
                  </Text>
                  <Text note>{location.distanceFromUser}km from you</Text>
                  <Text note>{isGoing ? "You Are Going" : "You Are Not Going"}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image
                  source={{ uri: location.img }}
                  style={{  flex: 1, height: 300, width: 380, justifyContent: "center"}}
                />
                <Text style={{paddingVertical: 10, fontWeight: "300" }}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lobortis nulla vel posuere fermentum. Ut id lectus ante. Nullam dignissim tellus nec tempus gravida. Nullam nec turpis eget nisi rhoncus molestie quis vel libero. Sed in tellus ligula. Vestibulum pulvinar lectus libero, vel vulputate neque sollicitudin vitae. Ut cursus orci cursus commodo lacinia. Integer consectetur aliquet risus at pretium. Integer sollicitudin efficitur finibus. Sed blandit ex id nisl malesuada viverra. Sed at dapibus nisl. </Text>
              </Body>
            </CardItem>
            <CardItem >
              <Left>
                <Button transparent>
                  <Icon active name="people" />
                  <Text>{usersGoing.length} Going</Text>
               
                </Button>
              </Left>
              <Right>
              <Text>Users rating: {location.rating}</Text>
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
  title: "Wandr",
  headerStyle: { backgroundColor: "#DE4C5D" },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold"
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  },
 
});


