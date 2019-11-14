import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

class Map extends Component {
  state = { isLoading: true, latitude: "", longitude: "" };
  render() {
    return this.state.isLoading ? (
      <Text>Loading...</Text>
    ) : (
      <View style={this.styles.container}>
        <MapView
          style={this.styles.map}
          provider={PROVIDER_GOOGLE}
          showsUserLocation
          initialRegion={{
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        />
      </View>
    );
  }
  styles = StyleSheet.create({
    container: {
      position: "absolute",
      top: 100,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: "flex-end",
      alignItems: "center"
    },
    map: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      height: 400,
      width: "100%"
    }
  });
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position =>
        this.setState({
          isLoading: false,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }),
      err => console.log(err)
    );
  }
}
export default Map;
