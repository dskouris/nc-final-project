import React, { Component } from "react";
import {
  Card,
  CardItem,
  Left,
  Thumbnail,
  Right,
  Icon,
  Title,
  Subtitle
} from "native-base";
import { Text, View, TouchableOpacity } from "react-native";
import apiKey from "../../constants/keys";
import { Ionicons } from "@expo/vector-icons";

class InfoCard extends Component {
  state = { location: {} };
  componentDidMount() {
    let { location } = this.props;
    if (location.photos) {
      return Promise.all([
        location,
        fetch(
          `https://maps.googleapis.com/maps/api/place/photo?maxwidth=150&maxheight=150&photoreference=${location.photos[0].photo_reference}&key=${apiKey}`
        )
      ]).then(([location, img]) => {
        location.img = img.url;
        this.setState({ location });
      });
    } else {
      location.img = false;
      this.setState({ location });
    }
  }
  render() {
    const { navigation } = this.props;
    const { location } = this.state;
    return (
      <View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Info", {
              back: "Home",
              location
            })
          }
        >
          <Card style={{ borderRadius: 5, marginHorizontal: 5 }}>
            <CardItem style={{ backgroundColor: "#ffebcd" }}>
              <Left>
                <Thumbnail
                  source={
                    location.img
                      ? { uri: location.img }
                      : require("../images/robot-dev.png")
                  }
                  style={{
                    width: 80,
                    height: 70,
                    borderRadius: 5,
                    marginRight: 10
                  }}
                />
                <View style={{ alignItems: "flex-start", top: -10 }}>
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                    {location.name}
                  </Text>
                  <Text>0 going</Text>
                  <Text>{location.distanceFromUser}km away</Text>
                </View>
              </Left>

              <Ionicons
                name="ios-arrow-forward"
                size={24}
                color="#DE4C5D"
              ></Ionicons>
            </CardItem>
          </Card>
        </TouchableOpacity>
      </View>
    );
  }
}
export default InfoCard;
